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

// Memoized EducationCard component for better performance
const EducationCard = memo(({ education, index }) => {
  // Memoize content style to prevent recreation
  const contentStyle = useMemo(() => ({
    background: "linear-gradient(135deg, rgba(29, 24, 54, 0.95) 0%, rgba(35, 38, 49, 0.95) 100%)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
  }), []);

  // Memoize arrow style
  const contentArrowStyle = useMemo(() => ({ 
    borderRight: "7px solid rgba(35, 38, 49, 0.95)" 
  }), []);

  // Memoize icon style with enhanced glass effect
  const iconStyle = useMemo(() => ({
    background: `linear-gradient(135deg, ${education.iconBg} 0%, ${education.iconBg}CC 100%)`,
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  }), [education.iconBg]);

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={education.date}
      iconStyle={iconStyle}
      icon={
        <div className='flex justify-center items-center w-full h-full relative'>
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
          <img
            src={education.icon}
            alt={`${education.institution_name} logo`}
            className='w-[60%] h-[60%] object-contain relative z-10 drop-shadow-lg'
            loading="lazy" // Lazy loading for performance
          />
        </div>
      }
    >
      <div className="relative">
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg pointer-events-none" />
        
        {/* Header section */}
        <div className="relative z-10">
          <motion.h3 
            className='text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.degree}
          </motion.h3>
          
          <motion.p
            className='text-secondary text-sm sm:text-base font-semibold mb-4 opacity-90'
            style={{ margin: 0, marginBottom: "1rem" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.institution_name}
          </motion.p>
        </div>

        {/* Points section with enhanced styling */}
        <motion.ul 
          className='mt-4 space-y-2 sm:space-y-3 relative z-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 * index, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.points?.slice(0, 4).map((point, pointIndex) => ( // Limit points for mobile
            <motion.li
              key={`education-point-${pointIndex}`}
              className='text-white/90 text-sm leading-relaxed flex items-start gap-3 group'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * pointIndex + 0.3 * index, 
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Custom bullet point with gradient */}
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-sm" />
              <span className="group-hover:text-white transition-colors duration-300">
                {point}
              </span>
            </motion.li>
          ))}
          
          {/* Show more indicator if there are more points */}
          {education.points?.length > 4 && (
            <li className="text-gray-400 text-sm italic ml-5">
              +{education.points.length - 4} more achievements...
            </li>
          )}
        </motion.ul>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-lg pointer-events-none" />
      </div>
    </VerticalTimelineElement>
  );
});

EducationCard.displayName = 'EducationCard';

const Education = () => {
  // Memoize timeline line color for mobile responsiveness
  const timelineLineColor = useMemo(() => ({
    background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #3b82f6)',
  }), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center relative z-10`}>
          My Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center relative z-10 mb-4`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
            Education
          </span>
        </h2>
        
        {/* Decorative line under heading */}
        <div className="flex justify-center relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </motion.div>

      <div className='mt-12 sm:mt-20 flex flex-col relative z-10'>
        {/* Custom CSS for mobile responsiveness */}
        <style jsx>{`
          @media (max-width: 768px) {
            :global(.vertical-timeline::before) {
              left: 30px !important;
              width: 2px !important;
            }
            :global(.vertical-timeline-element-content) {
              margin-left: 60px !important;
              margin-right: 0 !important;
            }
            :global(.vertical-timeline-element-content-arrow) {
              border-right: 7px solid rgba(35, 38, 49, 0.95) !important;
              border-left: 0 !important;
              left: -7px !important;
              right: auto !important;
            }
            :global(.vertical-timeline-element-icon) {
              width: 40px !important;
              height: 40px !important;
              left: 10px !important;
            }
            :global(.vertical-timeline-element-date) {
              position: relative !important;
              left: 0 !important;
              padding: 0.5em 0 0 0 !important;
              text-align: left !important;
              font-size: 0.9em !important;
              color: #aaa !important;
              margin-bottom: 1em !important;
            }
          }
          
          @media (max-width: 480px) {
            :global(.vertical-timeline-element-icon) {
              width: 35px !important;
              height: 35px !important;
            }
            :global(.vertical-timeline-element-content) {
              margin-left: 50px !important;
              padding: 1em !important;
            }
          }
        `}</style>

        <VerticalTimeline
          lineColor={timelineLineColor.background}
          animate={true}
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

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent relative z-10" />
    </div>
  );
};

export default SectionWrapper(Education, "education");