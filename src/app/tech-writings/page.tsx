'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
// import { useEffect, useState } from 'react';

interface Topic {
  name: string;
  slug: string;
}

const topics: Topic[] = [
  { name: 'Data Structure & Algorithms', slug: 'dsa' },
  { name: 'Web Development Frontend', slug: 'frontend' },
  { name: 'Web Development Backend', slug: 'backend' },
  { name: 'Deployment', slug: 'deployment' },
  { name: 'Version Control System', slug: 'vcs' },
  { name: 'Object Oriented Programming', slug: 'oop' },
  { name: 'System Design', slug: 'system-design' },
  { name: 'Low Level Design', slug: 'lld' },
  { name: 'High Level Design', slug: 'hld' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function TopicsPage() {
  // const [isMobile setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
    
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <div className="mt-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-2xl md:text-5xl font-bold mb-12 text-center text-orange-500"
        >
          Here are some topics that I studied extensively and wrote about:
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.slug}
              variants={itemVariants}
              whileHover="hover"
              className="flex justify-center"
            >
              <Link
                href={`/tech-writings/${topic.slug}`}
                className={`w-full py-4 rounded-lg shadow-md transition-all 
                  hover:shadow-lg bg-gray-800 dark:bg-gray-800 border border-gray-200 
                  dark:border-gray-700 flex items-center justify-center text-center 
                  hover:text-orange-500 hover:border-orange-400 text-white 
                  dark:text-gray-100`}
              >
                <span className="font-medium text-lg md:text-2xl">
                    {topic.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}