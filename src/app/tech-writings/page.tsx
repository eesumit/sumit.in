'use client';
import Link from 'next/link';

const topics = [
  { name: 'Data Structure and Algorithms', slug: 'dsa' },
  { name: 'Web Development Frontend', slug: 'frontend' },
  { name: 'Web Development Backend', slug: 'backend' },
  { name: 'Deployment', slug: 'deployment' },
  { name: 'Version Control System', slug: 'vcs' },
  { name: 'Object Oriented Programming', slug: 'oop' },
  { name: 'System Design', slug: 'system-design' },
  { name: 'Low Level Design', slug: 'lld' },
  { name: 'High Level Design', slug: 'hld' },
];

export default function Page() {
  return (
    <div className="mt-30 w-full text-lg md:text-xl leading-relaxed grid grid-cols-2 md:grid-cols-3 gap-8 px-30">
      {topics.map((topic, idx) => (
        <Link
          key={idx}
          href={`/tech-writings/${topic.slug}`}
          className="transition-all hover:underline underline-offset-4 hover:text-orange-500"
        >
          {topic.name}
        </Link>
      ))}
    </div>
  );
}
