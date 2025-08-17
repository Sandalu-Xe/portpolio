import React, { memo, useMemo, useCallback } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Mock data for demonstration
const mockExperiences = [
  {
    title: "React.js Developer",
    company_name: "Tech Solutions Inc",
    icon: "🚀",
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Innovations",
    icon: "💻",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Built scalable web applications using MERN stack.",
      "Designed and implemented RESTful APIs.",
      "Optimized application performance and user experience.",
      "Mentored junior developers and led technical discussions."
    ]
  },
  {
    title: "Frontend Intern",
    company_name: "StartUp Hub",
    icon: "🎨",
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2020",
    points: [
      "Assisted in developing user interfaces for web applications.",
      "Learned modern JavaScript frameworks and libraries.",
      "Collaborated with design team to implement pixel-perfect designs.",
      "Gained experience in version control and agile development."
    ]
  }
];

// Use mock data or actual experiences
const experienceData = experiences || mockExperiences;

// Memoized ExperienceCard component for better performance
const ExperienceCard = memo(({ experience, index }) => {
  // Memoize timeline element props
  const timelineProps = useMemo(() => ({
    contentStyle: {
      background: 'transparent',
      color: '#fff',
      border: 'none',
      boxShadow: 'none',
    },
    contentArrowStyle: { 
      borderRight: "7px solid rgba(255, 255, 255, 0.1)",
    },
    iconStyle: { 
      background: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    },
  }), []);

  // Check if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <VerticalTimelineElement
      {...timelineProps}
      date={
        <motion.span 
          className="text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {experience.date}
        </motion.span>
      }
      icon={
        <motion.div 
          className='flex justify-center items-center w-full h-full relative group'
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon background with liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"></div>
          
          {typeof experience.icon === 'string' && experience.icon.startsWith('http') ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='relative z-10 w-[60%] h-[60%] object-contain group-hover:scale-110 transition-transform duration-300'
            />
          ) : (
            <span className="relative z-10 text-2xl group-hover:scale-110 transition-transform duration-300">
              {experience.icon}
            </span>
          )}
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500"></div>
        </motion.div>
      }
    >
      {/* Liquid Glass Content Container */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: isMobile ? -2 : -5 }}
      >
        {/* Enhanced glass background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/3 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
        
        {/* Multi-layered glass effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <motion.h3 
              className='text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300'
              whileHover={{ x: 5 }}
            >
              {experience.title}
            </motion.h3>
            <motion.p
              className='text-gray-300 text-base sm:text-lg font-semibold group-hover:text-gray-200 transition-colors duration-300'
              style={{ margin: 0 }}
              whileHover={{ x: 3 }}
            >
              {experience.company_name}
            </motion.p>
          </div>

          {/* Experience Points */}
          <ul className='space-y-3 sm:space-y-4'>
            {experience.points?.slice(0, 4).map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * pointIndex }}
                className='text-gray-200 text-sm sm:text-base leading-relaxed flex items-start gap-3 group-hover:text-gray-100 transition-colors duration-300'
              >
                {/* Enhanced bullet point */}
                <motion.span 
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="line-clamp-3">{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* Experience index indicator */}
          <div className="absolute top-4 right-4">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-3 py-1">
              <span className="text-white text-xs font-medium">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
          <div className="absolute top-1/2 right-6 w-2 h-2 bg-pink-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-500 transition-opacity duration-300"></div>

          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-lg pointer-events-none"></div>
        </div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>
    </VerticalTimelineElement>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

const Experience = () => {
  // Memoize background elements
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <motion.div 
        variants={textVariant()}
        className="relative z-10"
      >
        <p className={`${styles.sectionSubText} text-center relative`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center relative`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
            Work Experience
          </span>
          <span className="text-blue-400">.</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </h2>
      </motion.div>

      {/* Enhanced Timeline Container */}
      <motion.div 
        className='mt-12 sm:mt-20 flex flex-col relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Custom timeline styles applied via CSS */}
        <style jsx>{`
          .vertical-timeline::before {
            background: linear-gradient(to bottom, 
              rgba(59, 130, 246, 0.5), 
              rgba(147, 51, 234, 0.5), 
              rgba(236, 72, 153, 0.5)
            ) !important;
            width: 4px !important;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3) !important;
          }
          
          .vertical-timeline-element-date {
            color: white !important;
            font-weight: 600 !important;
          }
          
          @media (max-width: 768px) {
            .vertical-timeline::before {
              width: 2px !important;
            }
          }
        `}</style>
        
        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
          {experienceData?.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent relative z-10" />
      
      {/* Additional ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-pink-900/5 pointer-events-none"></div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");