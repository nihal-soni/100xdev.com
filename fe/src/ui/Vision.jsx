// src/components/LampSection.jsx
import React from "react";
// import { motion } from "framer-motion";

export default function LampSection() {
  return (
    <section className="py-30">
   <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0b0f19] text-white overflow-hidden px-4">
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[6px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full shadow-[0_0_40px_10px_rgba(59,130,246,0.6)] z-30" />
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-b from-blue-500/40 to-transparent blur-3xl opacity-70 z-10 rounded-md" />

  <div className="mt-10 text-center z-40">
    <h1 className="text-5xl md:text-6xl font-bold">Our Vision</h1>
    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
    100xdevs is an initiative by Harkirat Singh to personally mentor folks in the field of Programming. We believe that today you are either a 1x engineer or a 100x engineer and nothing in the middleware.
    </p>
    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 flex items-center gap-2 mx-auto">
      View Courses Demo <span className="text-xl">→</span>
    </button>
  </div>
  <div>

  </div>
</div>

    </section>
  );
}
