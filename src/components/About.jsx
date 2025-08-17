import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Memoized ServiceCard component with stunning black & white design
const ServiceCard = memo(({ index, title, icon }) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("right", "spring", index * 0.2, 0.75), [index]
  );

  // Memoize tilt options for premium interaction
  const tiltOptions = useMemo(() => ({
    max: 25,
    scale: 1.08,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  }), []);

  // Check if we're on mobile for responsive hover effects
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[280px] sm:max-w-[320px] mx-auto group cursor-pointer"
      whileHover={{ y: isMobile ? -8 : -15, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Main card container with premium black design */}
        <div className="relative bg-black/95 backdrop-blur-xl border border-gray-800/80 rounded-3xl overflow-hidden h-full min-h-[320px] shadow-2xl group-hover:shadow-white/20 transition-all duration-700">
          
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20"></div>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/0 via-white/20 to-white/0 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Premium content container */}
          <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
            
            {/* Geometric background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full"></div>
            </div>

            {/* Premium number badge */}
            <div className="absolute top-6 right-6">
              <div className="relative bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg group-hover:bg-gray-100 transition-colors duration-300">
                <span className="relative z-10">0{index + 1}</span>
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Sophisticated icon container */}
            <div className="relative mb-8 group/icon">
              <motion.div 
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/50 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon}
                  alt={`${title} service`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-700 group-hover:brightness-125 group-hover:contrast-125"
                  loading="lazy"
                />
                
                {/* Icon highlight effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              {/* Premium icon glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/30 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl scale-110"></div>
              
              {/* Floating accent dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-60 animate-pulse transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-40 animate-pulse delay-300 transition-opacity duration-500"></div>
            </div>

            {/* Elegant title with sophisticated typography */}
            <motion.h3 
              className="text-white font-bold text-xl sm:text-2xl text-center leading-tight mb-4 group-hover:text-gray-100 transition-colors duration-300 tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>

            {/* Subtle description line */}
            <div className="w-16 h-px bg-white/40 group-hover:w-24 group-hover:bg-white/60 transition-all duration-500"></div>

            {/* Corner accents for premium feel */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>

            {/* Subtle background elements */}
            <div className="absolute top-8 left-8 w-1 h-12 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>
            <div className="absolute bottom-8 right-8 w-12 h-1 bg-white/10 group-hover:bg-white/20 transition-colors duration-500"></div>

            {/* Hover reveal elements */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Premium shadow effect */}
          <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20"></div>
        </div>
      </Tilt>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const About = () => {
  // Memoize sophisticated background elements
  const backgroundElements = useMemo(() => (
    <>
      {/* Geometric grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Elegant geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 border border-white/10 rounded-lg rotate-45 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 border-t-2 border-r-2 border-white/8 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
      
      {/* Sophisticated line elements */}
      <div className="absolute top-40 left-0 w-32 h-px bg-gradient-to-r from-transparent to-white/20 pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-32 h-px bg-gradient-to-l from-transparent to-white/20 pointer-events-none"></div>
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-black/5">
      {/* Sophisticated background elements */}
      {backgroundElements}
      
      {/* Premium header section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} relative text-center sm:text-left text-gray-300 tracking-widest uppercase text-sm`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} relative text-center sm:text-left text-white font-light tracking-tight`}>
          Overview
          <span className="text-gray-400 font-thin">.</span>
          <div className="absolute -bottom-4 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-24 h-px bg-white" />
          <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-px bg-white/50" />
        </h2>
      </motion.div>

      {/* Premium description container */}
      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/90 backdrop-blur-xl border border-gray-800/50 shadow-2xl p-8 sm:p-10">
            
            {/* Elegant border accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            
            {/* Premium typography */}
            <p className="relative z-10 text-gray-300 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed sm:leading-[36px] text-center sm:text-left font-light tracking-wide">
              I am{" "}
              <span className="text-white font-medium bg-white/5 px-2 py-1 rounded">
                Sandalu Thushan Ekanayaka
              </span>
              , a dedicated and innovative undergraduate pursuing a Bachelor of Information and Communication Technology (Hons), specializing in Software Technology at the Faculty of Technology, University of Sri Jayewardenepura.
              <br /><br />
              <span className="text-white/90">
                Passionate about building user-friendly React.js applications and developing secure, scalable backend systems using Node.js and Express.js, I am driven to deliver impactful tech solutions.
              </span>
              <br /><br />
              With expertise in modern web development, SwiftUI, and project management, I bring a creative and problem-solving mindset to every task. I thrive in collaborative environments and enjoy applying cutting-edge technologies to real-world challenges.
            </p>
            
            {/* Sophisticated corner elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20"></div>
            
            {/* Elegant quote accent */}
            <div className="absolute -left-6 -top-2 text-6xl text-white/10 font-serif leading-none hidden sm:block select-none">"</div>
            <div className="absolute -right-6 -bottom-8 text-6xl text-white/10 font-serif leading-none hidden sm:block rotate-180 select-none">"</div>
          </div>
        </motion.div>
      </div>

      {/* Premium services grid */}
      <motion.div 
        className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative z-10 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Sophisticated bottom separator */}
      <div className="mt-16 sm:mt-20 w-full relative">
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Decorative center accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");