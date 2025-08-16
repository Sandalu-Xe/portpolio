import React, { memo, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Memoized EducationCard component with liquid glass effect
const EducationCard = memo(({ education, index }) => {
  // Liquid glass content style with enhanced glassmorphism
  const contentStyle = useMemo(() => ({
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "24px",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.37),
      inset 0 1px 0 rgba(255, 255, 255, 0.16),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.05)
    `,
  }), []);

  // Enhanced liquid glass arrow style
  const contentArrowStyle = useMemo(() => ({ 
    borderRight: "7px solid rgba(255, 255, 255, 0.1)",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
  }), []);

  // Enhanced liquid glass icon style
  const iconStyle = useMemo(() => ({
    background: `linear-gradient(135deg, ${education.iconBg}40 0%, ${education.iconBg}20 100%)`,
    border: "2px solid rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    boxShadow: `
      0 12px 35px rgba(0, 0, 0, 0.35),
      inset 0 2px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(255, 255, 255, 0.15)
    `,
  }), [education.iconBg]);

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={education.date}
      iconStyle={iconStyle}
      icon={
        <div className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-full">
          {/* Liquid shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/5 to-transparent animate-pulse" />
          
          {/* Moving liquid gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-spin-slow opacity-60" />
          
          <img
            src={education.icon}
            alt={`${education.institution_name} logo`}
            className="w-3/5 h-3/5 object-contain relative z-10 drop-shadow-lg filter brightness-110"
            loading="lazy"
          />
        </div>
      }
    >
      <div className="relative overflow-hidden">
        {/* Liquid glass overlay with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3 rounded-3xl pointer-events-none" />
        
        {/* Floating liquid orbs */}
        <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-transparent rounded-full blur-2xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-4 left-3 w-16 h-16 bg-gradient-to-tr from-purple-400/15 via-pink-400/10 to-transparent rounded-full blur-xl animate-pulse delay-1000 pointer-events-none" />
        
        {/* Liquid shimmer animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
        
        {/* Header section */}
        <div className="relative z-10 mb-6">
          <motion.h3 
            className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.degree}
          </motion.h3>
          
          <motion.p
            className="text-blue-100/80 text-sm sm:text-base font-medium mb-4 filter drop-shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.institution_name}
          </motion.p>
        </div>

        {/* Points section with liquid glass styling */}
        <motion.ul 
          className="mt-4 space-y-3 sm:space-y-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 * index, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.points?.slice(0, window.innerWidth < 768 ? 3 : 4).map((point, pointIndex) => (
            <motion.li
              key={`education-point-${pointIndex}`}
              className="text-white/90 text-sm sm:text-base leading-relaxed flex items-start gap-4 group hover:text-white transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * pointIndex + 0.3 * index, 
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Liquid glass bullet point */}
              <div className="relative mt-2 flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full blur-sm animate-pulse delay-500" />
              </div>
              
              <span className="group-hover:drop-shadow-sm transition-all duration-300 filter">
                {point}
              </span>
            </motion.li>
          ))}
          
          {/* Show more indicator with liquid glass effect */}
          {education.points?.length > (window.innerWidth < 768 ? 3 : 4) && (
            <li className="text-blue-200/60 text-sm italic ml-7 backdrop-blur-sm bg-white/5 rounded-full px-3 py-1 w-fit">
              +{education.points.length - (window.innerWidth < 768 ? 3 : 4)} more achievements...
            </li>
          )}
        </motion.ul>

        {/* Liquid glass decorative elements */}
        <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-bl from-cyan-400/15 via-blue-400/10 to-transparent rounded-full blur-2xl pointer-events-none animate-float" />
        <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-purple-400/15 via-pink-400/10 to-transparent rounded-full blur-xl pointer-events-none animate-float-delayed" />
        
        {/* Edge highlights for glass effect */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </VerticalTimelineElement>
  );
});

EducationCard.displayName = 'EducationCard';

const Education = () => {
  // Liquid glass timeline line with animated gradient
  const timelineLineColor = useMemo(() => ({
    background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, rgba(59, 130, 246, 0.8) 100%)',
    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
    width: '3px'
  }), []);

  return (
    <>
      {/* Custom Tailwind animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-8px) rotate(-180deg); opacity: 0.7; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Mobile responsive overrides using Tailwind-first approach */
        @media (max-width: 768px) {
          .vertical-timeline::before {
            left: 30px !important;
            width: 2px !important;
            background: linear-gradient(to bottom, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.4)) !important;
          }
          .vertical-timeline-element-content {
            margin-left: 60px !important;
            margin-right: 0 !important;
          }
          .vertical-timeline-element-content-arrow {
            border-right: 7px solid rgba(255, 255, 255, 0.1) !important;
            border-left: 0 !important;
            left: -7px !important;
            right: auto !important;
          }
          .vertical-timeline-element-icon {
            width: 42px !important;
            height: 42px !important;
            left: 9px !important;
          }
          .vertical-timeline-element-date {
            position: relative !important;
            left: 0 !important;
            padding: 0.5em 0 0 0 !important;
            text-align: left !important;
            font-size: 0.875rem !important;
            color: rgba(147, 197, 253, 0.8) !important;
            margin-bottom: 1rem !important;
            font-weight: 500 !important;
          }
        }
        
        @media (max-width: 480px) {
          .vertical-timeline-element-icon {
            width: 36px !important;
            height: 36px !important;
            left: 12px !important;
          }
          .vertical-timeline-element-content {
            margin-left: 54px !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>

      <div className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated liquid background orbs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-purple-500/10 via-pink-400/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />
        
        {/* Floating liquid particles */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-indigo-400/8 to-transparent rounded-full blur-2xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-tr from-violet-400/8 to-transparent rounded-full blur-2xl animate-float-delayed pointer-events-none" />
        
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center relative z-10 text-blue-100/80 drop-shadow-sm`}>
            My Academic Journey
          </p>
          <h2 className={`${styles.sectionHeadText} text-center relative z-10 mb-6`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 drop-shadow-lg filter">
              Education
            </span>
          </h2>
          
          {/* Liquid glass decorative line */}
          <div className="flex justify-center relative z-10 mb-4">
            <div className="relative">
              <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg" />
              <div className="absolute inset-0 w-28 h-1 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 rounded-full blur-sm" />
            </div>
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-20 flex flex-col relative z-10">
          <VerticalTimeline
            lineColor={timelineLineColor.background}
            animate={true}
            className="liquid-glass-timeline"
          >
            {education?.map((edu, index) => (
              <EducationCard 
                key={`education-${index}`} 
                education={edu} 
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>

        {/* Liquid glass bottom separator */}
        <div className="mt-12 sm:mt-16 w-full relative z-10">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent blur-sm mt-1" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");