import React, { memo, useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Memoized ProjectCard component for better performance
const ProjectCard = memo(({
  index,
  name,
  points,
  tags,
  image,
  source_code_link,
}) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("up", "spring", index * 0.5, 0.75), [index]
  );

  // Memoize tilt options
  const tiltOptions = useMemo(() => ({
    max: 45,
    scale: 1.05,
    speed: 450,
  }), []);

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] mx-auto group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Simplified Glass Effect Container */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:shadow-purple-500/25 transition-shadow duration-500">
          {/* Reduced glass effects for better performance */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative bg-black/30 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col">
          {/* Simplified liquid effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Image Container - Responsive sizing */}
          <div className="relative w-full h-48 sm:h-52 md:h-60 overflow-hidden rounded-2xl flex-shrink-0">
            <img
              src={image}
              alt={`${name} project`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              loading="lazy" // Lazy loading for performance
            />
            
            {/* Simplified overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* GitHub button - Better mobile positioning */}
            <div className="absolute top-3 right-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-gray-900 to-black backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/10"
                aria-label={`View ${name} source code`}
              >
                <img
                  src={github}
                  alt=""
                  className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
                />
              </motion.button>
            </div>

            {/* Project index - Better mobile sizing */}
            <div className="absolute top-3 left-3">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-2 py-1">
                <span className="text-white text-xs font-medium">
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>

          {/* Content section - Flexible layout */}
          <div className="mt-4 sm:mt-6 flex-1 flex flex-col">
            <motion.h3 
              className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>
            
            {/* Points with better mobile spacing */}
            <ul className="space-y-2 sm:space-y-3 flex-1">
              {points.slice(0, 3).map((point, idx) => ( // Limit points for mobile
                <motion.li
                  key={`point-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-secondary text-sm leading-relaxed flex items-start gap-2 sm:gap-3 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="line-clamp-2">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tags with responsive wrapping */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {tags.slice(0, 4).map((tag, tagIndex) => ( // Limit tags for mobile
              <motion.span
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
                whileHover={{ scale: 1.05 }}
                className={`text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm border border-white/10 ${tag.color} bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default`}
              >
                #{tag.name}
              </motion.span>
            ))}
            {tags.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/10 text-gray-400 bg-white/5">
                +{tags.length - 4} more
              </span>
            )}
          </div>

          {/* Simplified decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-white/5 via-purple-500/10 to-transparent rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-white/5 via-cyan-500/10 to-transparent rounded-full blur-lg pointer-events-none"></div>
        </div>
      </Tilt>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Works = () => {
  // Memoize background elements
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} relative text-center sm:text-left`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200">
            Personal Projects
          </span>
          <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6"
        >
          <p className="text-secondary text-sm sm:text-base max-w-4xl leading-relaxed sm:leading-[32px] relative text-center sm:text-left">
            <span className="font-semibold text-white">Hi, I'm Sandalu Thushan Ekanayaka.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            The following projects showcase my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos.
            It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
            I have also developed SwiftUI apps like a weather app.
          </p>
          
          {/* Decorative quote mark - hidden on mobile */}
          <div className="absolute -left-4 top-0 text-4xl text-purple-500/30 font-serif hidden sm:block">"</div>
        </motion.div>
      </div>

      {/* Responsive grid with better mobile layout */}
      <motion.div 
        className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(Works, "project");