import mongoose from 'mongoose';

const URI = 'mongodb+srv://e_sumit:U8c5fCQGofi4gcwe@cluster0.ktyrkza.mongodb.net/sumit_website_db';

console.log("--- Starting Database Connection Test ---");
console.log("Target URI:", URI.replace(/:([^:@]+)@/, ':****@')); // Hide password in logs

async function testConnection() {
    try {
        console.log("Attempting mongoose.connect()...");
        await mongoose.connect(URI, { serverSelectionTimeoutMS: 5000 });
        console.log("✅ Success! Connected to MongoDB.");
        console.log("State:", mongoose.connection.readyState); // 1 = connected
        console.log("Host:", mongoose.connection.host);
        console.log("Db Name:", mongoose.connection.name);
        await mongoose.disconnect();
        console.log("Disconnected cleanly.");
    } catch (error) {
        console.error("❌ Connection FAILED:");
        console.error(error);
    }
}

testConnection();
