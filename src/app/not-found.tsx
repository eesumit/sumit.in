'use client';

import { motion } from 'framer-motion';
import { FaWrench } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]  text-white px-6 py-16 relative overflow-hidden">
      
      {/* Warning Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="text-orange-400 mb-6"
      >
        <FaWrench size={60} />
      </motion.div>

      {/* Main Text */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to the Beta Zone
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        This site is currently in <span className="text-orange-400 font-semibold">Beta</span>. Some features might be a bit wild, unpredictable, or simply not exist yet.
        We’re still shaping the universe.
      </motion.p>

      {/* Beta Tag */}
      <motion.div
        className="mt-8 px-6 py-2 rounded-full border border-orange-400 text-orange-400 text-sm tracking-wider uppercase"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        Beta Version
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-[10%] left-[10%] w-28 h-28 bg-orange-300 opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[15%] right-[15%] w-36 h-36 bg-blue-300 opacity-5 rounded-full blur-2xl animate-ping" />
      <div className="absolute top-[40%] right-[30%] w-24 h-24 bg-white opacity-5 rounded-full blur-3xl animate-bounce" />

    </div>
  );
}
