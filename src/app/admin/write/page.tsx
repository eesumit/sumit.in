'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { FaSave, FaArrowLeft, FaEye, FaPen } from 'react-icons/fa';

function Editor() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const editId = searchParams.get('id');

    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        author: 'Sumit Kumar'
    });
    const [isPreview, setIsPreview] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editId) {
            // Fetch post details if editing
            fetch('/api/posts').then(res => res.json()).then(posts => {
                // In real app, fetch one via API
                const post = posts.find((p: any) => p._id === editId);
                if (post) setFormData(post);
            });
        }
    }, [editId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            // Auto-generate slug from title if not manually edited (simple logic)
            slug: name === 'title' && !prev.slug ? value.toLowerCase().replace(/ /g, '-') : prev.slug
        }));
    };

    const handleSave = async () => {
        // Validation
        if (!formData.title || !formData.content) {
            alert("Title and Content are required!");
            return;
        }

        // Auto-generate excerpt if empty
        const finalData = { ...formData };
        if (!finalData.excerpt) {
            finalData.excerpt = finalData.content.substring(0, 150).replace(/[#*`]/g, '') + '...';
        }

        setLoading(true);
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalData)
        });
        setLoading(false);
        if (res.ok) {
            router.push('/admin/dashboard');
        } else {
            const data = await res.json().catch(() => ({}));
            alert(`Failed to save: ${data.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="max-w-5xl mx-auto py-12">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/dashboard" className="text-gray-400 hover:text-white transition-colors">
                        <FaArrowLeft />
                    </Link>
                    <h1 className="text-3xl font-space font-bold">
                        {editId ? 'Edit Post' : 'New Post'}
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsPreview(!isPreview)}
                        className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-700 transition-colors"
                    >
                        {isPreview ? <><FaPen /> Edit</> : <><FaEye /> Preview</>}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex items-center gap-2 bg-teal-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-teal-400 transition-colors disabled:opacity-50"
                    >
                        <FaSave /> {loading ? 'Saving...' : 'Publish'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Editor / Preview Area */}
                <div className="lg:col-span-2 space-y-6">
                    {isPreview ? (
                        <article className="glass-panel p-8 prose prose-invert prose-purple max-w-none min-h-[500px]">
                            <h1>{formData.title}</h1>
                            <ReactMarkdown>{formData.content}</ReactMarkdown>
                        </article>
                    ) : (
                        <div className="glass-panel p-6 flex flex-col h-full min-h-[500px]">
                            <input
                                name="title"
                                placeholder="Post Title..."
                                value={formData.title}
                                onChange={handleChange}
                                className="bg-transparent text-3xl font-bold font-space outline-none placeholder-gray-600 mb-6 w-full"
                            />
                            <textarea
                                name="content"
                                placeholder="Write your story here... (Markdown supported)"
                                value={formData.content}
                                onChange={handleChange}
                                className="flex-grow bg-transparent outline-none resize-none font-mono text-gray-300 leading-relaxed h-[400px]"
                            />
                        </div>
                    )}
                </div>

                {/* Sidebar Settings */}
                <div className="glass-panel p-6 space-y-6 h-fit">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Slug URL</label>
                        <input
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Excerpt</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 outline-none focus:border-purple-500 resize-none"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 outline-none focus:border-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Author</label>
                            <input
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 outline-none focus:border-purple-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WritePage() {
    return (
        <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading editor...</div>}>
            <Editor />
        </Suspense>
    )
}
