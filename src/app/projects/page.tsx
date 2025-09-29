import React from "react";

const projects = [
 
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
      "implement shimmer effect."
    ],
    github:"https://github.com/eesumit/Food-ordering-app"
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
    github:"https://eesumit.github.io/sorting-visualiser/"
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
    github:"https://github.com/eesumit/todo-list"
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
              <h3 className="font-semibold text-lg">Challenges</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
                {project.features.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
                <h3>github : <a href={project.github} className="text-blue-400 hover:underline" target="_blank">Link</a></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
