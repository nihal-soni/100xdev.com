import React from "react";

const courses = [
  { label: "DevOps", link: "/courses/devops", top: "top-[40%]", left: "left-80", color: "bg-blue-500 text-white" },
  { label: "Web2", link: "/courses/web2", top: "top-[60%]", left: "left-90", color: "bg-green-500 text-white" },
  { label: "Web3", link: "/courses/web3", top: "top-[40%]", right: "right-80", color: "bg-purple-500 text-white" },
  { label: "Solana", link: "/courses/solana", top: "top-[55%]", right: "right-90", color: "bg-yellow-400 text-black" },
  
];

const FloatingCourses = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none lg:block hidden">
      {courses.map((course, index) => (
        <a
          key={index}
          href={course.link}
          className={`
            absolute ${course.top} ${course.left || ""} ${course.right || ""}
            px-4 py-1.5 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm
            animate-float ${course.color} pointer-events-auto hover:scale-105 transition-transform
          `}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {course.label}
        </a>
      ))}
    </div>
  );
};

export default FloatingCourses;
