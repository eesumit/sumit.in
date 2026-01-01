import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

// Correct interface for dynamic params in Next.js 15
interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
    await dbConnect();
    return Post.findOne({ slug }).lean();
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto py-12">
            <Link href="/blog" className="text-gray-500 hover:text-white transition-colors mb-8 inline-block">
                ← Back to all posts
            </Link>

            <article className="glass-panel p-8 md:p-12">
                <header className="mb-8 border-b border-gray-800 pb-8">
                    <h1 className="text-3xl md:text-5xl font-space font-bold mb-4">{post.title}</h1>
                    <div className="flex justify-between items-center text-gray-400 font-mono text-sm max-w-[200px]">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-purple max-w-none">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
