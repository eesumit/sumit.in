import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function GET() {
    await dbConnect();
    try {
        const posts = await Post.find({}).sort({ date: -1 });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function POST(request: Request) {
    await dbConnect();
    try {
        const body = await request.json();
        // Update if ID exists, else create new (MongoDB uses _id, but we passed id in form)
        // Actually, let's look at how the form sends data. 
        // If it's a new post, we create. If it's an update, we might need a PUT or handle it here.
        // For simplicity, if we pass an _id, we update. 

        // Check if we are updating (we might need to change frontend to send _id)
        if (body._id) {
            await Post.findByIdAndUpdate(body._id, body);
        } else {
            // Remove fake ID or empty _id if present so Mongoose generates a new one
            delete body.id;
            delete body._id;
            await Post.create(body);
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: 'Failed to save post' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    await dbConnect();
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            await Post.findByIdAndDelete(id);
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false, message: 'Missing ID' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to delete post' }, { status: 500 });
    }
}
