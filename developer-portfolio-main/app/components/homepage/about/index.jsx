// @flow strict

import { personalData } from "@/utils/data/personal-data"
import Image from "next/image"

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative max-h-[90vh] overflow-hidden">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">ABOUT ME</span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full">
        <div className="order-2 lg:order-1 max-h-[85vh] pr-2">
          <p className="font-medium mb-4 text-[#16f2b3] text-xl uppercase">Who I am?</p>

          <div className="text-gray-200 text-sm lg:text-base space-y-4">
            <p className="leading-relaxed">
              A highly motivated{" "}
              <span className="text-cyan-400 font-semibold">Computer Science and Engineering graduate </span> from Madan Mohan Malviya University of Technology  with a
              passion for building innovative, real-world solutions. My core strength lies in translating complex
              problems into efficient, scalable software. With a foundation built on solving over{" "}
              <span className="text-amber-400 font-bold">1000+ DSA challenges</span>, I am proficient in{" "}
              <span className="text-emerald-400 font-semibold">C++, Python, and JavaScript</span>, and specialize in
              full-stack development using the <span className="text-pink-400 font-semibold">MERN stack</span> (MongoDB,
              Express.js, React.js, Node.js) alongside{" "}
              <span className="text-blue-400 font-semibold">Tailwind CSS and MySQL</span>.
            </p>

            <div className="space-y-3 mt-6">
              <div className="border-l-4 border-cyan-400 pl-3 py-2 bg-gray-800/30 rounded-r-lg">
                <h3 className="text-cyan-400 font-bold text-base mb-1">Full-Stack Architecture & Development:</h3>
                <p className="text-gray-300 text-sm">
                  Expertise in engineering end-to-end, scalable web applications using the MERN stack, applying strong <span className="text-blue-400 font-semibold">system design principles</span>  to ensure high performance, and maintainability.
                </p>
              </div>

             

              <div className="border-l-4 border-emerald-400 pl-3 py-2 bg-gray-800/30 rounded-r-lg">
                <h3 className="text-emerald-400 font-bold text-base mb-1">  Efficient Code & Logic:</h3>
                <p className="text-gray-300 text-sm">
                 A strong command of Data Structures and Algorithms to solve complex problems and deliver highly optimized, performance-driven code.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start order-1 lg:order-2 lg:sticky lg:top-0">
          <div className="flex-shrink-0">
            <Image
              src={personalData.profile || "/placeholder.svg"}
              width={280}
              height={280}
              alt="Anjali Mishra"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
