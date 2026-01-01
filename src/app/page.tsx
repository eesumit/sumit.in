'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaLaptopCode, FaJava, FaDownload, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiMysql, SiCplusplus } from 'react-icons/si';

// ... skills array omitted if unchanged, wait I can't look-behind.
// I need safely replace imports line.

const skills = [
  { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
  { icon: SiReact, name: 'React', color: 'text-blue-400' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400' },
  { icon: FaJava, name: 'Java', color: 'text-red-500' },
  { icon: SiMysql, name: 'MySQL', color: 'text-blue-300' },
  { icon: SiCplusplus, name: 'C++', color: 'text-blue-400' },
];

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Developer", "Designer", "Writer", "Thinker", "Software Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] grid lg:grid-cols-2 gap-12 items-center relative pl-4 md:pl-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative"
        >
          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />

          <h2 className="text-xl md:text-2xl font-outfit text-teal-400 mb-4 tracking-wider uppercase font-semibold">Hello World, I&apos;m</h2>
          <h1 className="text-6xl md:text-8xl font-bold font-space text-white mb-6 leading-tight">
            Sumit <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Kumar</span>
          </h1>
          <div className="text-3xl md:text-5xl font-outfit text-gray-300 mb-8 h-[60px] flex items-center">
            I am a&nbsp;
            <motion.span
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-white font-bold bg-white/10 px-4 py-1 rounded-lg backdrop-blur-sm"
            >
              {words[textIndex]}
            </motion.span>
          </div>
          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-purple-500 pl-6">
            Crafting digital experiences that merge <span className="text-purple-400 font-bold">logic</span> with <span className="text-pink-400 font-bold">art</span>.
            Specializing in high-performance web applications and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link href="/projects" className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
              View Work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors hover:border-white/50">
              Contact Me
            </Link>
            <a href="/sumit.resume.pdf" download className="px-8 py-4 border border-teal-500/30 text-teal-400 font-bold rounded-full hover:bg-teal-500/10 transition-colors flex items-center gap-2">
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side Visuals - Live Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full min-h-[500px] flex flex-col items-center justify-center w-full perspective-1000"
        >
          {/* Abstract Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-[100px] -z-10" />

          {/* Floating Cards Container */}
          <div className="relative w-full max-w-[500px] perspective-1000 group">
            {/* LeetCode Stats */}
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="hover:z-20 transform transition-all duration-300 hover:scale-105"
            >Leetcode
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://leetcard.jacoblin.cool/e_sumit?theme=tokyonight&font=Space%20Grotesk&ext=heatmap"
                alt="LeetCode Stats"
                className="w-full drop-shadow-2xl rounded-xl opacity-90 hover:opacity-100"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Infinite Skills Marquee */}
      <section className="py-10 bg-black/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
              <skill.icon className={`text-4xl ${skill.color}`} />
              <span className="text-xl font-space font-bold text-gray-300">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section with 3D Tilt */}
      <section className="grid lg:grid-cols-2 gap-16 px-4 md:px-20 max-w-7xl mx-auto my-20">
        <TiltCard className="glass-panel p-10 flex flex-col justify-center min-h-[300px] border-l-4 border-pink-500">
          <FaCode className="text-6xl text-pink-500 mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
          <h3 className="text-4xl font-space font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Code Poetry</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I don&apos;t just write code; I write logic that lives. From complex data structures to seamless front-end interactions, I enjoy every layer of the stack.
            Every function is a stanza, every module a verse.
          </p>
        </TiltCard>

        <TiltCard className="glass-panel p-10 flex flex-col justify-center min-h-[300px] border-r-4 border-teal-400">
          <FaLaptopCode className="text-6xl text-teal-400 mb-6 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
          <h3 className="text-4xl font-space font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">Physics & Tech</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Bridging the gap between tracking cosmic events and tracking DOM events. My passion for Modern Physics inspires my analytical approach to debugging.
            I see the universe in algorithms.
          </p>
        </TiltCard>
      </section>

      {/* Social Banner */}
      <section className="text-center pb-20">
        <h2 className="text-2xl font-space text-gray-500 mb-8">Ready to Collaborate?</h2>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/eesumit" target="_blank" className="text-4xl hover:text-white text-gray-600 transition-colors"><FaGithub /></a>
          <a href="https://linkedin.com/in/e-sumit" target="_blank" className="text-4xl hover:text-blue-500 text-gray-600 transition-colors"><FaLinkedin /></a>
          <a href="https://x.com/SUMITSINGHALGO" target="_blank" className="text-4xl hover:text-blue-400 text-gray-600 transition-colors"><FaTwitter /></a>
          <a href="https://instagram.com/summiitsingh" target="_blank" className="text-4xl hover:text-pink-500 text-gray-600 transition-colors"><FaInstagram /></a>
        </div>
      </section>
    </div>
  );
}