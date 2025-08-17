"use client"

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaGithub, FaPlay, FaRocket, FaEye } from 'react-icons/fa';
import { HiOutlineCode, HiOutlineExternalLink } from 'react-icons/hi';
import { projectsData } from '@/utils/data/projects-data';
import placeholder from '/public/png/placeholder.png';

const ProjectCard = ({ project }) => {
  const { name, description, tools, code, demo, image } = project;

  return (
    <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] via-[#0f0b24] to-[#281e57] border border-[#2a2859] hover:border-violet-400 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/25 h-full flex flex-col'>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse delay-500"></div>
      </div>
      
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[3px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      

      <div className='relative z-10 p-4 xl:p-5 flex flex-col h-full text-center items-center'>
  {/* Project Image */}
  <div className="relative mb-4 overflow-hidden rounded-lg group/image w-full">
    <div className="aspect-[16/9] relative w-full">
      <Image
        src={image ? image?.src : placeholder}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b24]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Hover overlay with icons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
        <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
          <FaEye className="text-white text-sm" />
        </div>
      </div>
    </div>
  </div>

  {/* Rest of your content remains the same */}
  {/* Project Name */}
  <h3 className='text-white font-bold text-lg xl:text-xl mb-3 group-hover:text-violet-300 transition-colors duration-300 min-h-[1.5rem] text-center'>
    {name}
  </h3>

  {/* Project Description */}
  <div className="flex-grow mb-4 text-center">
    <p className='text-gray-300 text-xs xl:text-sm leading-relaxed line-clamp-3 min-h-[3.5rem]'>
      {description}
    </p>
  </div>

  {/* Tools/Tags */}
  <div className='flex flex-wrap gap-1 mb-3 min-h-[1.5rem] justify-center'>
    {tools.slice(0, 3).map((tool, index) => (
      <span
        key={index}
        className='px-2 py-1 text-xs bg-violet-600/20 text-violet-300 rounded-full border border-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400/50 transition-all duration-300 flex items-center justify-center text-center'
      >
        {tool}
      </span>
    ))}
    {tools.length > 3 && (
      <span className='px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full border border-gray-500/30 flex items-center justify-center text-center'>
        +{tools.length - 3}
      </span>
    )}
  </div>

  {/* Action Links */}
  <div className="flex gap-2 mt-auto justify-center">
    <Link
      href={demo}
      target='_blank'
      className="flex items-center hover:scale-105 transition-all duration-300"
    >
      <HiOutlineExternalLink className="text-sm" />
    </Link>
    
    <Link
      href={code}
      target='_blank'
      className="flex items-center  hover:scale-105 transition-all duration-300"
    >
      <FaGithub className="text-sm" />
    </Link>
  </div>
</div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24 border-t border-[#25213b]">
      {/* Background decoration */}
      <div className="w-[120px] h-[120px] bg-violet-100 rounded-full absolute top-6 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-20"></div>
      
      {/* Top gradient line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-4 sm:px-5 text-lg sm:text-xl rounded-md font-semibold">
             PROJECTS
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-8xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="transform transition-all duration-700 hover:-translate-y-3"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center mt-12 lg:mt-16">
        <div className="w-1/2 lg:w-1/3">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-full" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
