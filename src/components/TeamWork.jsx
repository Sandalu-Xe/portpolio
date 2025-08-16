import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, weblink } from "../assets";
import { SectionWrapper } from "../hoc";
import { teamworks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Memoized ProjectCard component for better performance
const ProjectCard = memo(({
  index,
  name,
  tags,
  image,
  source_code_link,
  webpage,
  pointss,
}) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("up", "spring", index * 0.3, 0.75), [index]
  );

  // Memoize tilt options
  const tiltOptions = useMemo(() => ({
    max: 45,
    scale: 1.05,
    speed: 450,
  }), []);

  // Memoized click handlers to prevent recreation
  const handleGithubClick = useCallback(() => {
    if (source_code_link) {
      window.open(source_code_link, "_blank", "noopener,noreferrer");
    }
  }, [source_code_link]);

  const handleWebpageClick = useCallback(() => {
    if (webpage) {
      window.open(webpage, "_blank", "noopener,noreferrer");
    }
  }, [webpage]);

  // Check if we're on mobile for responsive hover effects
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] mx-auto group"
      whileHover={{ y: isMobile ? -5 : -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Simplified Glass Effect Container */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-500">
          {/* Reduced glass effects for better performance */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative bg-black/30 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col">
          {/* Simplified liquid effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-green-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
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
            
            {/* Action buttons - Better mobile positioning and sizing */}
            <div className="absolute top-3 right-3 flex gap-2">
              {source_code_link && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGithubClick}
                  className="relative group/btn w-10 h-10 sm:w-12 sm:h-12"
                  aria-label={`View ${name} source code`}
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"></div>
                  <div className="relative w-full h-full rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-all duration-300">
                    <img
                      src={github}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert group-hover/btn:scale-110 transition-transform duration-200"
                    />
                  </div>
                </motion.button>
              )}
              
              {webpage && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWebpageClick}
                  className="relative group/btn w-10 h-10 sm:w-12 sm:h-12"
                  aria-label={`View ${name} live demo`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 shadow-lg"></div>
                  <div className="relative w-full h-full rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-500/10 transition-all duration-300">
                    <img
                      src={weblink}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert group-hover/btn:scale-110 transition-transform duration-200"
                    />
                  </div>
                </motion.button>
              )}
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
              className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-green-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>
            
            {/* Points with better mobile spacing */}
            <ul className="space-y-2 sm:space-y-3 flex-1">
              {pointss?.slice(0, 3).map((point, idx) => ( // Limit points for mobile and add safety check
                <motion.li
                  key={`project-point-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-secondary text-sm leading-relaxed flex items-start gap-2 sm:gap-3 group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="line-clamp-2">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tags with responsive wrapping */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {tags?.slice(0, 4).map((tag, tagIndex) => ( // Limit tags for mobile and add safety check
              <motion.span
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
                whileHover={{ scale: 1.05 }}
                className="relative group/tag cursor-default"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full"></div>
                <div className="absolute inset-0 opacity-0 group-hover/tag:opacity-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full transition-opacity duration-300"></div>
                <span className={`relative text-xs px-2 py-1 sm:px-3 sm:py-1 block ${tag.color} transition-all duration-300`}>
                  #{tag.name}
                </span>
              </motion.span>
            ))}
            {tags?.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/10 text-gray-400 bg-white/5">
                +{tags.length - 4} more
              </span>
            )}
          </div>

          {/* Simplified decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-lg pointer-events-none" />
        </div>
      </Tilt>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const TeamWork = () => {
  // Memoize background elements
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} relative text-center sm:text-left`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-green-200">
            Group Projects
          </span>
          <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6"
        >
          <p className="text-secondary text-sm sm:text-base max-w-4xl leading-relaxed sm:leading-[32px] relative text-center sm:text-left">
            I have collaborated on several projects with my university friends. 
            These projects provided me with valuable experience in teamwork and project management. 
            We utilized tools like Jira and ClickUp to effectively manage our tasks and workflows.
          </p>
          
          {/* Decorative quote mark - hidden on mobile */}
          <div className="absolute -left-4 top-0 text-4xl text-blue-500/30 font-serif hidden sm:block">"</div>
        </motion.div>
      </div>

      {/* Responsive grid with better mobile layout */}
      <motion.div 
        className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {teamworks?.map((project, index) => (
          <ProjectCard key={`teamwork-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(TeamWork, "project");