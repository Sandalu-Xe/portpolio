import React, { useRef, useState, memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Memoized form input component for better performance
const FormInput = memo(({ 
  label, 
  type = "text", 
  name, 
  value, 
  onChange, 
  placeholder, 
  rows = null,
  required = false 
}) => {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <motion.label 
      className="flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-white font-medium mb-4 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-blue-400 group-focus-within:to-purple-400 transition-all duration-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </span>
      
      <div className="relative">
        {/* Liquid glass background */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl group-focus-within:border-blue-400/30 transition-all duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-focus-within:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <InputComponent
          type={!isTextarea ? type : undefined}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="relative z-10 w-full bg-transparent py-4 px-6 placeholder:text-gray-400 text-white rounded-2xl outline-none border-none font-medium resize-none transition-all duration-300 focus:placeholder:text-gray-500"
        />
        
        {/* Focus glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-focus-within:opacity-30 blur-xl transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Floating particles on focus */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/60 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400/60 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
      </div>
    </motion.label>
  );
});

FormInput.displayName = 'FormInput';

// Memoized submit button component
const SubmitButton = memo(({ loading, onClick }) => (
  <motion.button
    type="submit"
    onClick={onClick}
    disabled={loading}
    className="relative group w-fit overflow-hidden"
    whileHover={{ scale: loading ? 1 : 1.05 }}
    whileTap={{ scale: loading ? 1 : 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {/* Liquid glass background */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
    
    {/* Button content */}
    <span className="relative z-10 block py-4 px-8 text-white font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
      {loading ? (
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </span>
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"></div>
    
    {/* Decorative elements */}
    <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
  </motion.button>
));

SubmitButton.displayName = 'SubmitButton';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Memoized form validation
  const validateForm = useCallback(() => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
  }, [form]);

  const handleChange = useCallback((e) => {
    const { target } = e;
    const { name, value } = target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  }, [formErrors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setFormErrors({});

    try {
      await emailjs.send(
        "service_12213",
        "template_zgdddkb",
        {
          from_name: form.name,
          to_name: "sandalu thushan",
          from_email: form.email,
          to_email: "sandaluthushan20@gmail.com",
          message: form.message,
        },
        "uxdriekI7IRCw5LYM"
      );

      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  }, [form, validateForm]);

  // Memoize background elements
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </>
  ), []);

  // Check if we're on mobile for responsive behavior
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 sm:gap-12 overflow-hidden relative z-10">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] relative"
        >
          {/* Liquid glass container for form */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/2 backdrop-blur-xl border border-white/20 shadow-2xl">
            {/* Enhanced glass effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent"></div>
            
            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className={`${styles.sectionSubText} relative`}>
                  Get in touch
                </p>
                <h3 className={`${styles.sectionHeadText} relative`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                    Contact
                  </span>
                  <span className="text-blue-400">.</span>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h3>
              </motion.div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
              >
                <FormInput
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />
                {formErrors.name && (
                  <span className="text-red-400 text-sm -mt-4">{formErrors.name}</span>
                )}

                <FormInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  required
                />
                {formErrors.email && (
                  <span className="text-red-400 text-sm -mt-4">{formErrors.email}</span>
                )}

                <FormInput
                  label="Your Message"
                  type="textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  rows={7}
                  required
                />
                {formErrors.message && (
                  <span className="text-red-400 text-sm -mt-4">{formErrors.message}</span>
                )}

                <SubmitButton loading={loading} onClick={handleSubmit} />
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-pink-400/50 rounded-full animate-bounce delay-1000"></div>
          </div>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
        >
          {/* Liquid glass container for canvas */}
          <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl">
            {/* Canvas background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            
            {/* Earth Canvas */}
            <div className="relative z-10 w-full h-full">
              <EarthCanvas />
            </div>

            {/* Decorative elements around canvas */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-md pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");