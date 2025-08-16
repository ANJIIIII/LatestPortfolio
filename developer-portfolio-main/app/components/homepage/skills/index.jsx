"use client"

import { skillsData } from "@/utils/data/skills"
import { skillsImage } from "@/utils/skill-image"
import Image from "next/image"
import { useState, useEffect } from "react"

function Skills() {
  const [animationStates, setAnimationStates] = useState({})

  // Initialize movement for each skill
  useEffect(() => {
    const initialStates = {}
    skillsData.forEach((_, index) => {
      initialStates[index] = {
        x: Math.random() * 10 - 5, // Random X offset between -5px and 5px
        y: Math.random() * 10 - 5, // Random Y offset between -5px and 5px
        rotation: Math.random() * 3 - 1.5, // Random rotation between -1.5deg and 1.5deg
        isHovered: false,
        animationDelay: Math.random() * 2,
      }
    })
    setAnimationStates(initialStates)
  }, [])

  // Continuous subtle movement animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStates(prev => {
        const newStates = { ...prev }
        Object.keys(newStates).forEach(key => {
          if (!newStates[key].isHovered) {
            newStates[key] = {
              ...newStates[key],
              x: Math.random() * 10 - 5,
              y: Math.random() * 10 - 5,
              rotation: Math.random() * 3 - 1.5
            }
          }
        })
        return newStates
      })
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleMouseEnter = (index) => {
    setAnimationStates(prev => ({
      ...prev,
      [index]: { ...prev[index], isHovered: true }
    }))
  }

  const handleMouseLeave = (index) => {
    setAnimationStates(prev => ({
      ...prev,
      [index]: { ...prev[index], isHovered: false }
    }))
  }

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Skills</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills grid container */}
      <div className="w-full my-12 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-4 justify-items-center max-w-9xl mx-auto">
          {skillsData.map((skill, index) => {
            const state = animationStates[index] || { 
              x: 0, y: 0, rotation: 0, isHovered: false 
            }
            
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-1000 ease-in-out rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={index}
                style={{
                  transform: state.isHovered 
                    ? 'translate(0px, 0px) rotate(0deg)' 
                    : `translate(${state.x}px, ${state.y}px) rotate(${state.rotation}deg)`,
                  transitionDelay: `${state.animationDelay}s`
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src || "/placeholder.svg"}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills