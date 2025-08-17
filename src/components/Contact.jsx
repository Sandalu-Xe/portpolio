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
      <span className="text-gray-200 font-medium mb-4 group-focus-within:text-white transition-all duration-300 tracking-wide">
        {label}
        {required && <span className="text-white ml-1">*</span>}
      </span>
      
      <div className="relative">
        {/* Minimalist black background */}
        <div className="absolute inset-0 bg-black/80 border border-gray-700/50 rounded-lg group-focus-within:border-white/40 group-focus-within:bg-black/90 transition-all duration-300 shadow-lg group-focus-within:shadow-white/10"></div>
        
        <InputComponent
          type={!isTextarea ? type : undefined}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="relative z-10 w-full bg-transparent py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none transition-all duration-300 focus:placeholder:text-gray-400"
        />
        
        {/* Focus accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white group-focus-within:w-full transition-all duration-500 rounded-full"></div>
        
        {/* Corner accents */}
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gray-600/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gray-600/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
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
    whileHover={{ scale: loading ? 1 : 1.02 }}
    whileTap={{ scale: loading ? 1 : 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    {/* Button background */}
    <div className="absolute inset-0 bg-white border border-white rounded-lg shadow-lg group-hover:bg-gray-100 group-active:bg-gray-200 transition-all duration-300"></div>
    
    {/* Button content */}
    <span className="relative z-10 block py-4 px-8 text-black font-bold transition-all duration-300 tracking-wide">
      {loading ? (
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </span>
    
    {/* Subtle shadow on hover */}
    <div className="absolute inset-0 rounded-lg shadow-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
    
    {/* Corner highlights */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      {/* Subtle geometric patterns */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gray-800/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gray-700/20 rounded-lg rotate-45 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-t-2 border-r-2 border-gray-800/40 pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </>
  ), []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-black/5">
      {/* Background decorative elements */}
      {backgroundElements}
      
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 sm:gap-12 overflow-hidden relative z-10">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] relative"
        >
          {/* Minimalist black container for form */}
          <div className="relative overflow-hidden rounded-2xl bg-black/90 border border-gray-800/50 shadow-2xl backdrop-blur-sm">
            {/* Subtle white accent lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className={`${styles.sectionSubText} relative text-gray-300`}>
                  Get in touch
                </p>
                <h3 className={`${styles.sectionHeadText} relative text-white`}>
                  Contact
                  <span className="text-gray-400">.</span>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-white rounded-full" />
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
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.name}</span>
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
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.email}</span>
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
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.message}</span>
                )}

                <SubmitButton loading={loading} onClick={handleSubmit} />
              </div>
            </div>

            {/* Corner decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-700/40"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gray-700/40"></div>
          </div>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
        >
          {/* Minimalist container for canvas */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-black/80 border border-gray-800/50 shadow-2xl backdrop-blur-sm">
            {/* Subtle frame accents */}
            <div className="absolute inset-2 border border-gray-700/20 rounded-xl pointer-events-none"></div>
            
            {/* Earth Canvas */}
            <div className="relative z-10 w-full h-full">
              <EarthCanvas />
            </div>

            {/* Frame corners */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/20"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/20"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-white/20"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-white/20"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Additional decorative line */}
      <div className="mt-1 w-full h-px bg-gradient-to-r from-transparent via-gray-600/20 to-transparent" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");