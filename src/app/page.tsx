'use client'; // Required for Framer Motion in Next.js
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
const skills = [
  { 
    title: 'VCS', 
    description: 'Experienced with version control, branching, pull requests, code reviews, and collaborative workflows. Familiar with resolving merge conflicts and CI/CD basics.' 
  },
  { 
    title: 'ReactJS', 
    description: 'Over 1 year of hands-on experience building interactive UIs and scalable SPAs. Developed several projects, including a Food Ordering App (see Projects). Proficient in hooks, context, component patterns, and performance optimization. Learned from Namaste React by Akshay Saini.' 
  },
  { 
    title: 'JavaScript', 
    description: 'JavaScript OMG! i was most Difficult language for me, because wrong sources i spent 1 year just in knowing that Javascript is the easiest language in the world. I love it. I learned it CodeWithHarry and then Finished Namaste Javascript by Akshay Saini. You can find my PDF notes in the sources section.' 
  },
  { 
    title: 'TypeScript', 
    description: 'Completed a project in Typescript and still learing it.' 
  },
  {
    title:'NextJS',
    description:'I Learned it before college.'
  },
  { 
    title: 'NodeJS', 
    description: 'Before learning backend in Java, I was preparing for full-stack MERN development due to its popularity and influence from my friend circle. I learned Node.js from Code with Harry and various other sites, including Akshay Saini’s Namaste Node.js.' 
  },
  {
    title:'ExpressJS',
    description:'I Learned it before college.'
  },
  {
    title:'CSS',
    description:'Good in css writing, Learned CSS from Shraddha Didi(Apna College)'
  },
  {
    title:'TailwindCSS',
    description:'Learned tailwind for project and then eventually useing it everywhere. i love it.'
  },
  {
    title:'Bootstrap',
    description:'Learned tailwind for project and then eventually useing it everywhere. i love it.'
  },
  {
    title:'HTML',
    description:'I Learned it before college.'
  },
  { 
    title: 'Java', 
    description: 'Started learning Java in my 4th semester after initially working with C++ and i love it. I studied Java from Shradha Didi (Apna College) and tpointtech (formerly javatpoint), which provided beginner-friendly explanations and a great UI. My experience includes building backend systems, working with OOP concepts, exception handling, collections, multithreading, and JDBC. I have also implemented RESTful APIs and have a solid understanding of Java’s ecosystem, including Maven and Spring basics.' 
  },
  { 
    title: 'MongoDB', 
    description: 'Learned MongoDB for completing a college project that must require mongoDB.' 
  },
  { 
    title: 'SQL', 
    description: 'First learned it in college, then learned it from Shradha Didi(Apna College). Proficient in writing complex SQL queries, joins, indexing, normalization, and database design for relational databases like MySQL and PostgreSQL.' 
  },
  { 
    title: 'DSA', 
    description: 'I started learning C language in my college 1st Sem, and after that i started basic DSA like Patterns and basic loops question. Then eventually started contest on codechef and Leetcode. I find leetcode more interesting so i shifted on leetcode and practice dsa queation and till now i have solved 700+ question and counting. With profeciency in Recursion, DP,Trees, BST, Binary Search, Queue, Stack, PriorityQueue, Maps, Sets etc. I love DSA.' 
  },
  {
    title:'C++',
    description:'I Learned it before college.'
  },
  {
    title:'C',
    description:'I Learned it before college.'
  },
];
export default function Me() {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
   

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      className="w-full h-full flex justify-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="mt-24 w-[90%] md:w-[60%]">
        <motion.h1
          className="font-bold text-3xl md:text-4xl mb-4"
          variants={item}
        >
          Hello
        </motion.h1>

        <motion.p
          className="font-bold text-xl md:text-2xl mb-6 text-orange-500"
          variants={item}
        >
          I am Sumit Kumar
        </motion.p>

        <motion.div
          className="text-lg md:text-xl mb-8 leading-relaxed"
          variants={item}
        >
          <p className='mb-4'>
            I have recently completed my Bachelor of Technology (B.Tech.) with a major in <span className="text-orange-500 font-semibold">Computer Science and Engineering</span>.
          </p>
          <p className="mb-4">
            I&#39;m a <span className="text-orange-500 font-semibold">Java Developer</span> with solid skills in <span className="text-orange-500 font-semibold">Backend development</span>, <span className="text-orange-500 font-semibold">Frontend development</span>, <span className="text-orange-500 font-semibold">Full-stack projects</span> and <span className="text-orange-500 font-semibold">Data Structures & Algorithms</span>.
          </p>
          <p className="mb-4">
            I&#39;m passionate about exploring 
            <span className="text-blue-400 font-medium"> human behavior</span>, understanding the beauty of 
            <span className="text-blue-400 font-medium"> physics</span>, diving into 
            <span className="text-blue-400 font-medium"> tech innovations</span>, and asking questions about 
            <span className="text-blue-400 font-medium"> space and time</span>. I also enjoy learning about 
            <span className="text-blue-400 font-medium"> design thinking</span>, reading on 
            <span className="text-blue-400 font-medium"> philosophy</span>, and keeping up with 
            <span className="text-blue-400 font-medium"> future technologies</span>.
          </p>

          <p className="mb-4">
            I enjoy solving problems, building real-world apps, and constantly leveling up as a developer. Currently, I&#39;m focused on becoming job-ready and aiming to make a real impact in the tech world.
          </p>

          
          <p className='mb-4'>
            Apart from this I love <span className="text-orange-500 font-semibold">Modern Physics & Astronomy</span>.
          </p>
        </motion.div>
        <motion.div className="mb-8" variants={item}>
          <a
            href="/sumitr.resume.pdf"
            download
            className="inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition-colors duration-200"
          >
            Download Resume
          </a>
        </motion.div>
        <motion.h1
          className="font-bold text-3xl md:text-4xl mb-4"
          variants={item}
        >
          Skills
        </motion.h1>
         <motion.div className="skills text-lg md:text-xl leading-relaxed grid grid-cols-2 md:grid-cols-4 gap-4" variants={item}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              layout
              className={` cursor-pointer rounded-lg bg-[#3C3C3C] shadow-md ${activeIndex === index ? 'p-1 col-span-2 md:col-span-4' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="text-white cursor-pointer p-3 rounded-md hover:bg-[#242424] text-center bg-[#2e2d2d]">{skill.title}</div>
              {activeIndex === index && (
                <motion.p
                  className="mt-2 text-white px-3 text-center text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div>
         </motion.div>
      </div>
    </motion.div>
  );
}