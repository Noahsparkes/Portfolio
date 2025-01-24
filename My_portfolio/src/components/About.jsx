import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 bg-gray-300 bg-opacity-5 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed dark:text-white">
            I’m at the start of my journey as a software developer, having graduated from CodeSpace. Since then, I’ve been building various projects and expanding my skills through self-guided learning.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed dark:text-white">
            From creating simple web applications to exploring DevOps concepts, I thrive on taking on challenges that encourage critical thinking and help me grow as a developer.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed dark:text-white">
            Outside of coding, you’ll often find me on the golf course 🏌🏾‍♂️, swimming laps in the pool 🏊🏾‍♂️, or lifting weights at the gym 🏋🏾‍♂️, always striving for balance and personal growth.
          </p>
        </div>
        {/* Highlights Section */}
        <div className="flex flex-col items-center space-y-8 md:items-start">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🏌🏾‍♂️</span>
            <p className="text-gray-700 text-lg dark:text-white">Golfing for focus and precision</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🏊🏾‍♂️</span>
            <p className="text-gray-700 text-lg dark:text-white">Swimming to stay active</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🏋🏾‍♂️</span>
            <p className="text-gray-700 text-lg dark:text-white">Weightlifting to build strength</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
