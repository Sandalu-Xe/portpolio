import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Memoized ServiceCard component for better performance
const ServiceCard = memo(({ index, title, icon }) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("right", "spring", index * 0.3, 0.75), [index]
  );

  // Memoize tilt options
  const tiltOptions = useMemo(() => ({
    max: 45,
    scale: 1.05,
    speed: 450,
  }), []);

  // Check if we're on mobile for responsive hover effects
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[280px] sm:max-w-[320px] mx-auto group"
      whileHover={{ y: isMobile ? -5 : -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Liquid Glass Effect Container */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl group-hover:shadow-green-500/25 transition-shadow duration-500">
          {/* Enhanced glass effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-white/10 overflow-hidden h-full min-h-[280px] flex flex-col justify-center items-center">
          {/* Liquid effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Icon Container - Enhanced glass morphism */}
          <div className="relative mb-6 group/icon">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
              <img
                src={icon}
                alt={`${title} service`}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Icon glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-lg" />
            
            {/* Floating particles around icon */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300" />
          </div>

          {/* Title with gradient effect */}
          <motion.h3 
            className="text-white font-bold text-lg sm:text-xl text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all duration-300 leading-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Service index indicator */}
          <div className="absolute top-4 right-4">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-2 py-1">
              <span className="text-white text-xs font-medium">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-lg pointer-events-none" />
          
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-green-400/30 via-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
        </div>
      </Tilt>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const About = () => {
  // Memoize background elements
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} relative text-center sm:text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} relative text-center sm:text-left`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-pink-200">
            Overview
          </span>
          <span className="text-green-400">.</span>
          <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 rounded-full" />
        </h2>
      </motion.div>

      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6"
        >
          {/* Enhanced description with liquid glass container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-pink-500/5 to-purple-500/5"></div>
            
            <p className="relative z-10 text-secondary text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed sm:leading-[32px] text-center sm:text-left">
              I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-400 to-purple-400 font-semibold">Sandalu Thushan Ekanayaka</span>, a dedicated and innovative undergraduate pursuing a Bachelor of Information and Communication Technology (Hons), specializing in Software Technology at the Faculty of Technology, University of Sri Jayewardenepura. Passionate about building user-friendly React.js applications and developing secure, scalable backend systems using Node.js and Express.js, I am driven to deliver impactful tech solutions.
              <br /><br />
              With expertise in modern web development, SwiftUI, and project management, I bring a creative and problem-solving mindset to every task. I thrive in collaborative environments and enjoy applying cutting-edge technologies to real-world challenges.
            </p>
            
            {/* Floating particles effect */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 right-12 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce delay-1000"></div>
            
            {/* Decorative quote mark - hidden on mobile */}
            <div className="absolute -left-4 top-0 text-4xl text-green-500/30 font-serif hidden sm:block">"</div>
          </div>
        </motion.div>
      </div>

      {/* Responsive grid with better mobile layout */}
      <motion.div 
        className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(About, "about");