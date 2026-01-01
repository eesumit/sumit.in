'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaPlus, FaPen, FaTrash, FaSignOutAlt } from 'react-icons/fa';

interface BlogPost {
    _id: string;
    title: string;
    date: string;
}

export default function Dashboard() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch posts via API (Note: In a real app we might fetch in RSC, but this is dashboard)
        // For simplicity, we can't import getPosts here because it uses fs (server-only).
        // We should create a GET API or just fetch from the public flow if available, 
        // OR just use a server component for the dashboard content.
        // I will convert this Dashboard to a SERVER Component to fetch posts directly, 
        // and use client components for interactivity if needed, or proper data fetching.
        // BUT 'use client' is easier for the Delete interaction.
        // Let's create a GET endpoint in /api/posts for simplicity or just fetch from /api/posts?
        // I'll make the GET endpoint in the previous step's file? No, I overwrote it.
        // I will update /api/posts/route.ts to include GET.
        fetch('/api/posts') // We need to add GET to route.ts
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;

        await fetch(`/api/posts?id=${id}`, { method: 'DELETE' });
        setPosts(posts.filter(p => p._id !== id));
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    return (
        <div className="max-w-5xl mx-auto py-12">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-space font-bold">Admin Dashboard</h1>
                <div className="flex gap-4">
                    <Link href="/admin/write" className="flex items-center gap-2 bg-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                        <FaPlus /> New Post
                    </Link>
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-700 transition-colors">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>

            <div className="glass-panel p-8">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-700 text-gray-400 font-mono text-sm uppercase">
                            <th className="pb-4">Title</th>
                            <th className="pb-4">Date</th>
                            <th className="pb-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post._id} className="border-b border-gray-800 group hover:bg-white/5 transition-colors">
                                <td className="py-4 font-bold text-lg">{post.title}</td>
                                <td className="py-4 text-gray-400 font-mono">{post.date}</td>
                                <td className="py-4 text-right flex justify-end gap-4">
                                    <Link href={`/admin/write?id=${post._id}`} className="text-teal-400 hover:text-teal-300">
                                        <FaPen />
                                    </Link>
                                    <button onClick={() => handleDelete(post._id)} className="text-red-400 hover:text-red-300">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {posts.length === 0 && (
                    <p className="text-center text-gray-500 py-10">No posts found. Write something!</p>
                )}
            </div>
        </div>
    );
}
