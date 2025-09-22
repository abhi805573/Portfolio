import React from "react";

const Skills = () => {
  const techStack = [
    "java",
    "OOP's",
    "Advanced Java",
    "Springboot",
    "Hibernate",
    "JDBC",
    "Flutter",
    "Firebase",
    "Javascript",
    "React",
    "Node.js",
    "MOngoDB",
    "Python",
    "Tensorflow",
    "Open CV",
    "HTML",
    "CSS",
    "Tailwind",
    "Git",
    "GIthub",
    "Postmen",
    "DSA",
    "Problem Solving"
    
    
  ];

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <button
              key={i}
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 
                         text-black font-semibold rounded-full shadow-md 
                         transform transition hover:scale-105 hover:shadow-lg"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
