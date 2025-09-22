import React from "react";

const projects = [
  {
    id: 1,
    name: "Sign Language-Converted Into text",
    description:
      "Developed a real-time application that converts sign language gestures into text using computer vision and deep learning for improved accessibility..",
    technologies: "Stack: MERN (Python , Tensorflow ))",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Rayat Kutumb kalyan Yojana",
    description:
      "Built a web-based platform for managing and streamlining applications under the Rayata Kutumb Kalyan Yojana, enabling digital access and efficient record handling.",
    technologies: "Stack: MERN (MongoDB, Express, React, Node.js)",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Intern-Link",
    description:
      "Developed an internship and placement portal (InternLink) with role-based access for students, companies, and admins, enabling efficient applications, postings, and management.",
    technologies: "Stack: MERN (MongoDB, Express, React, Node.js)",
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-900 border-2 border-transparent rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:border-yellow-400"
            >
              <h3 className=" text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-gray-400 italic mb-4">
                {project.technologies}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"
              >
                View on GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
