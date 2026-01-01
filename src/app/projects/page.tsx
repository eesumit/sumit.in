'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Life Chronicles App",
    image: "/Life-Chronicles-app.png",
    about:
      "A modern social platform built to connect creators and users through authentic content and clean design. It’s like Instagram, but built from scratch. Includes secure login system using Next-Auth and MongoDB.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "MongoDB", "Cloudinary"],
    features: [
      "Secure login & Password reset",
      "User Profiles & Followers",
      "Like & Comment functionality",
      "Dark/Light Mode"
    ],
    github: "https://github.com/eesumit/blogging",
    live: "https://blogging-gray-gamma.vercel.app/"
  },
  {
    title: "AI Fitness App",
    image: "/fitnessapp.png",
    about:
      "AI Fitness app generates fitness plans (exercise & diet) for any user preference. Includes PDF export and AI-generated imagery.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    features: [
      "AI Generated Plans",
      "PDF Export",
      "Progress Comparison",
      "Diet & Exercise visualization"
    ],
    github: "https://github.com/eesumit/AI-Fitness-Coach-App",
    live: "https://ai-fitness-coach-app-zeta.vercel.app/"
  },
  {
    title: "Video Calling App",
    image: "/videocallingapp.png",
    about: "A real-time video calling app with room management and live chat functionality.",
    tech: ["JavaScript", "React", "Redux", "Tailwind", "Node.js"],
    features: [
      "Room creation",
      "Live Chat",
      "Real-time Video",
      "Efficient Route Management"
    ],
    github: "https://github.com/eesumit/videocallingapp",
    live: "https://videocallingapp-zeta.vercel.app/"
  },
  {
    title: "Sorting Visualiser",
    image: "/sorting.png",
    about: "Interactive visualisation of different sorting algorithms like Merge Sort, Quick Sort, etc.",
    tech: ['JavaScript', 'CSS', 'HTML'],
    features: [
      "Merge, Quick, Bubble Sort etc.",
      "Custom array inputs",
      "Responsive UI"
    ],
    github: "https://github.com/eesumit/sorting-visualiser",
    live: "https://eesumit.github.io/sorting-visualiser/"
  },
  {
    title: "ZestyHub",
    image: "/zestyhub.png",
    about: "Real-time food delivery app with cart management and Swiggy API integration.",
    tech: ["React", "Redux", "Tailwind", "Node.js", "Express", "MongoDB"],
    features: [
      "Global Cart State",
      "Live Search",
      "Shimmer UI Effects",
      "Online/Offline Tracking"
    ],
    github: "https://github.com/eesumit/Food-ordering-app",
    live: null
  },
  {
    title: "TODO List",
    image: "/todo.png",
    about: "Classic Todo list with local storage persistence.",
    tech: ["JavaScript", "CSS", "HTML"],
    features: [
      "Local Storage Persistence",
      "Task Completion Tracking",
      "Minimalist Design"
    ],
    github: "https://github.com/eesumit/todo-list",
    live: "https://eesumit.github.io/todo-list/"
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-space font-bold mb-4">
          Built with <span className="text-purple-500">Purpose</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of applications demonstrating full-stack capabilities, from AI integration to complex algorithms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-panel overflow-hidden flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h2 className="text-2xl font-bold font-space text-white">{project.title}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.about}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-mono bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 text-xs font-mono bg-gray-800 text-gray-400 rounded">+more</span>
                )}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4 pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
