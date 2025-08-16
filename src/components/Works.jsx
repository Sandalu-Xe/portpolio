import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  points,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px] md:w-[400px] group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="relative"
      >
        {/* Liquid Glass Effect Container */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
          {/* Inner glass reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          {/* Glass shine effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent"></div>
          {/* Moving liquid effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 via-cyan-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative bg-black/30 backdrop-blur-sm p-5 rounded-2xl border border-white/10 overflow-hidden">
          {/* Liquid glass flowing animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {/* Glass surface reflections */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-2 left-2 w-12 h-12 bg-white/10 rounded-full blur-lg opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded-full blur-md opacity-40"></div>
          </div>
          
          <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={`${name} project`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Liquid glass overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[1px] rounded-2xl" />
            
            {/* Glass surface distortion effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>
            </div>
            
            {/* Floating action buttons */}
            <div className="absolute inset-0 flex justify-end items-start m-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-gray-900 to-black backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/10"
              >
                <img
                  src={github}
                  alt="Source Code"
                  className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
                />
              </motion.div>
            </div>

            {/* Project index indicator with glass effect */}
            <div className="absolute top-3 left-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"></div>
                <span className="relative text-white text-xs px-2 py-1 block">
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 relative z-10">
            <motion.h3 
              className="text-white font-bold text-[20px] sm:text-[24px] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>
            
            {/* Enhanced points with better styling */}
            <ul className="mt-4 space-y-3">
              {points.map((point, idx) => (
                <motion.li
                  key={`point-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-secondary text-[14px] leading-relaxed flex items-start gap-3 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Enhanced tags with modern styling */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
                whileHover={{ scale: 1.05 }}
                className={`text-[12px] px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 ${tag.color} bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default`}
              >
                #{tag.name}
              </motion.span>
            ))}
          </div>

          {/* Liquid glass decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 via-purple-500/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 via-cyan-500/10 to-transparent rounded-full blur-lg"></div>
          
          {/* Glass surface highlights */}
          <div className="absolute top-4 right-8 w-2 h-16 bg-gradient-to-b from-white/20 to-transparent blur-sm transform rotate-12 opacity-30"></div>
          <div className="absolute bottom-8 left-6 w-1 h-8 bg-gradient-to-t from-white/15 to-transparent blur-sm transform -rotate-12 opacity-20"></div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} relative`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
            Personal Projects
          </span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6"
        >
          <p className="text-secondary text-[16px] max-w-4xl leading-[32px] relative">
            <span className="font-semibold text-white">Hi, I'm Sandalu Thushan Ekanayaka.</span>
            <br />
            The following projects showcase my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos.
            It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
            I have also developed SwiftUI apps like a weather app.
          </p>
          
          {/* Decorative quote mark */}
          <div className="absolute -left-4 top-0 text-4xl text-purple-500/30 font-serif">"</div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(Works, "project");