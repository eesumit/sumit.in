import Link from 'next/link';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export const metadata = {
    title: 'Blog | Sumit Kumar',
    description: 'Thoughts on tech, physics, and life.',
};

// Force dynamic rendering if we want real-time updates without building
export const dynamic = 'force-dynamic';

async function getPosts() {
    await dbConnect();
    // Lean query for performance
    return Post.find({}).sort({ date: -1 }).lean();
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-12 text-center">
                Sumit's <span className="text-purple-500">Blogs</span>
            </h1>

            <div className="grid gap-8">
                {posts.map((post: any) => (
                    <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="group glass-panel p-8 transition-all hover:bg-white/5 hover:border-purple-500/50 block"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h2 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                                {post.title}
                            </h2>
                            <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">
                                {post.date}
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            {post.excerpt}
                        </p>
                        <div className="text-sm text-teal-400 font-medium group-hover:translate-x-2 transition-transform inline-block">
                            Read more →
                        </div>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p className="text-center text-gray-400">No posts yet. Check back soon!</p>
                )}
            </div>
        </div>
    );
}
