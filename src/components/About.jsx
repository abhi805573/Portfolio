import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        {/* Centered Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* About Text */}
          <p className="text-lg mb-8 leading-relaxed">
            I’m a passionate Computer Engineering student skilled in building full-stack and AI-powered applications. I enjoy solving real-world problems through code—whether it’s designing responsive web and mobile interfaces or tackling complex challenges using data structures and algorithms. I work with tools like React, Flutter, Firebase, Python, and ML libraries such as Scikit-learn and OpenCV.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            {[
              { name: "HTML & CSS", width: "w-10/12" },
              { name: "React JS", width: "w-11/12" },
              { name: "Node JS", width: "w-9/12" },
              { name: "Tailwind CSS", width: "w-10/12" },
              { name: "Mysql", width: "w-8/12" },
            ].map((skill, i) => (
              <div className="flex items-center justify-center" key={i}>
                <label className="w-3/12 text-left">{skill.name}</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 flex justify-around text-center">
            {[
              { num: "Fresher", text: "Years Experience" },
              { num: "3+", text: "Projects Completed" },
              { num: "2+", text: "Internships" },
            ].map((stat, i) => (
              <div key={i}>
                <h3
                  className="text-3xl font-extrabold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"
                >
                  {stat.num}
                </h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>

          {/* Resume Button Only */}
          <div className="mt-10 flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 
                text-black font-bold rounded-full shadow-lg hover:scale-105 
                transform transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
