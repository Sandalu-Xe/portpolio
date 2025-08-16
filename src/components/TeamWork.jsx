import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, weblink } from "../assets";
import { SectionWrapper } from "../hoc";
import { teamworks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  tags,
  image,
  source_code_link,
  webpage,
  pointss,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full max-w-sm mx-auto group"
      whileHover={{ y: window.innerWidth > 768 ? -10 : -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
          {/* Inner glass reflection */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          {/* Glass shine effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent"></div>
          {/* Moving liquid effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/20 via-green-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative bg-black/30 backdrop-blur-sm p-5 rounded-2xl border border-white/10 overflow-hidden">
          {/* Liquid glass flowing animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
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
            
            {/* Floating action buttons with glass effect */}
            <div className="absolute inset-0 flex justify-end items-start m-3 gap-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="relative group/btn"
              >
                {/* Liquid glass button background */}
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"></div>
                <div className="relative w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all duration-300">
                  <img
                    src={github}
                    alt="Source Code"
                    className="w-1/2 h-1/2 object-contain filter brightness-0 invert group-hover/btn:scale-110 transition-transform duration-200"
                  />
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(webpage, "_blank")}
                className="relative group/btn"
              >
                {/* Liquid glass button background with blue tint */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 shadow-lg"></div>
                <div className="relative w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500/10 transition-all duration-300">
                  <img
                    src={weblink}
                    alt="Live Webpage"
                    className="w-1/2 h-1/2 object-contain filter brightness-0 invert group-hover/btn:scale-110 transition-transform duration-200"
                  />
                </div>
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
              className="text-white font-bold text-[20px] sm:text-[24px] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-green-400 group-hover:to-purple-400 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>
            
            {/* Enhanced points with better styling */}
            <ul className="mt-4 space-y-3">
              {pointss.map((point, idx) => (
                <motion.li
                  key={`project-point-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-secondary text-[14px] leading-relaxed flex items-start gap-3 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Enhanced tags with liquid glass styling */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
                whileHover={{ scale: 1.05 }}
                className="relative group/tag cursor-default"
              >
                {/* Liquid glass tag background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full"></div>
                <div className="absolute inset-0 opacity-0 group-hover/tag:opacity-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full transition-opacity duration-300"></div>
                <span className={`relative text-[12px] px-3 py-1 block ${tag.color} transition-all duration-300`}>
                  #{tag.name}
                </span>
              </motion.span>
            ))}
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-lg" />
        </div>
      </Tilt>
    </motion.div>
  );
};

const TeamWork = () => {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} relative`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-green-200">
            Group Projects
          </span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6"
        >
          <p className="text-secondary text-[16px] max-w-4xl leading-[32px] relative">
            I have collaborated on several projects with my university friends. 
            These projects provided me with valuable experience in teamwork and project management. 
            We utilized tools like Jira and ClickUp to effectively manage our tasks and workflows.
          </p>
          
          {/* Decorative quote mark */}
          <div className="absolute -left-4 top-0 text-4xl text-blue-500/30 font-serif">"</div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {teamworks.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(TeamWork, "project");