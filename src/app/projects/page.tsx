import React from "react";

const projects = [
  {
    title: "Life Chronicles App",
    image: "/Life-Chronicles-app.png",
    about:
      "Life Chronicles — a modern social platform built to connect creators and users through authentic content and clean design. It’s like Instagram, but built from scratch. we can create our personal profile and share images/videos and text messages to all the other users. Cloudinary service is used to store the images/videos. Secure login system using Next-Auth and MongoDB for storing the data. Password reset functionality via mail service. User can update their profile and delete their account. User can follow other users and see their posts. ",
    tech: ["Forntend-[ Next.js, TypeScript, TailwindCSS, Shadcn UI ]","Backend-[ Next.js API Routes using App Router, Node.js, MongoDB Cloud Service ]","Authentication-[ Google Credentials Login/Register, Reset-password-Mail-System ]","Media Handling-[ Cloudinary for Images/Videos ]","Email-System-[ Nodemailer(Gmail SMTP) ]"],
    features: [
      "Secure login system using Next-Auth and MongoDB for storing the data.",
      "Password reset functionality via mail service.",
      "User can update their profile and delete their account.",
      "User can follow other users and see their posts.",
      "User can like and comment on posts.",
      "User can search for other users and posts.",
      "User can see their profile and posts.",
      "User can see their followers and following.",
      "User can switch between light and dark mode or system theme."
    ],
    github:"https://github.com/eesumit/blogging",
    live : "https://blogging-gray-gamma.vercel.app/"
  },
  {
    title: "AI FItness App",
    image: "/fitnessapp.png",
    about:
      "AI Fitness app is a type of strict coach which can generate fitness plan for any type of user with any conditions based on user's preferences. User can generate multiple plans and compare them. It generates user exercise plan and diet plan. for next 7 Days. user can generate HD image for a particular exercise in the plan, for a particular diet picture in the diet plan. User can save the plan in the app itself or can export the plan in pdf format in one click. User can switch between dark and light themes. User can listen the particular diet and exercise plan by generate using AI. ",
    tech: ["Forntend-[ Next.js, TypeScript, TailwindCSS, Shadcn UI ]","Backend-[ Next.js API Routes using App Router, Node.js, MongoDB Cloud Service ]"],
    features: [
      "Multiple user can generate plan and save them. compare them.",
      "No authentication required.",
      "User can get the plan in pdf format.",
      "User can generate any no of plans with their needs.",
      "Can view all the plans at a place.",
      "Can generate exercise image and diet image.",
      "Can regenerate the plan with same user credentials.",
      "User can switch between light and dark mode or system theme."
    ],
    github:"https://github.com/eesumit/AI-Fitness-Coach-App",
    live : "https://ai-fitness-coach-app-zeta.vercel.app/"
  },
  {
    title: "Many to ManyVideo Calling App",
    image: "/videocallingapp.png",
    about:
      "A real-time video calling app with cart management, search functionality, feedback page.",
    tech: ["JavaScript","React","Redux","Tailwind","Node"],
    features: [
      "Managing routes properly",
      "Making Room for different chats",
      "Video calling with live chat",
      "uses public API"
    ],
    github:"https://github.com/eesumit/videocallingapp",
    live:"https://videocallingapp-zeta.vercel.app/"

  },
   {
    title: "Different Sorting Visualiser with custom input.",
    image: "/sorting.png",
    about:
      "Different sorting techniques visualiser in which we can expand array size with  ",
    tech: ['JavaScript','CSS','HTML'],
    features: [
      "Many different tyes of sorting techniques like Merge sort, Quick sort etc.",
      "Array number sync with bar height",
      "Making UI responsive and sleek",
    ],
    github:"https://github.com/eesumit/sorting-visualiser",
    live:"https://eesumit.github.io/sorting-visualiser/"
  },
  {    
    title: "Food Delivery App",
    image: "/zestyhub.png",
    about:
      "A real-time food delivery app with cart management, search functionality, feedback page.",
    tech: ["JavaScript","React","Redux","Tailwind","Node", "Express", "MongoDB"],
    features: [
      "Managing cart state globally",
      "Implement search functionality",
      "tracking offline/online state",
      "uses public API of swiggy app.",
      "implement shimmer effect.",
      "Theme switcher",
    ],
    github:"https://github.com/eesumit/Food-ordering-app",
    live : null
  },
  {
    title: "TODO List",
    image: "/todo.png",
    about:
      "Todo list tracking your task, complete/incomplete.",
    tech: ["JavaScript","CSS","HTML"],
    features: [
      "Local storage used to store the task, means they still there when you close the tab of that browser.",
      "Strikethrough on completed tasks",
      "implement shimmer effect."
    ],
    github:"https://github.com/eesumit/todo-list",
    live:"https://eesumit.github.io/todo-list/"
  },
];

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="w-11/12 md:w-9/12 mt-20 mb-10 space-y-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-lg relative"
          >
            {/* Image */}
            <div className=" overflow-hidden rounded-xl z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute text-white border-2 border-white z-20 top-10 left-10 font-bold text-5xl bg-gray-600 p-2 rounded-full w-12 h-12 flex justify-between items-center">
                {idx+1}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">{project.title}</h2>

            {/* About */}
            <p className="text-gray-300 mt-2">{project.about}</p>

            {/* Tech Stack */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/20 border border-indigo-500 text-indigo-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
                {project.features.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
                <h3>github : <a href={project.github} className="text-blue-400 hover:underline" target="_blank">Link</a></h3>
                {project.live!=null && <h3>Live at : <a href={project.live} className="text-green-400 hover:underline" target="_blank">Link</a></h3>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
