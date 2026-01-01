import mongoose from 'mongoose';

interface GlobalMongoose {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: GlobalMongoose | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

// Global cache to prevent multiple connections in dev mode
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached!.conn) {
        console.log("⚡ Using cached MongoDB connection");
        return cached!.conn;
    }

    console.log("🔄 Initiating new MongoDB connection...");
    if (!cached!.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached!.conn = await cached!.promise;
        console.log("MongoDB Connected Successfully to:", MONGODB_URI);
        console.log("📂 ACtive Database Name:", cached!.conn?.connection?.name);
    } catch (e) {
        cached!.promise = null;
        console.error("MongoDB Connection Error:", e);
        throw e;
    }

    return cached!.conn;
}

export default dbConnect;
