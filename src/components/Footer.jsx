import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "../assets/social/whatsapp.png"
import instagram from "../assets/social/instragram.jpeg"
// Replace with the correct path to your icons

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 px-6 text-center">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://wa.me/yourwhatsapplink" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-[18px] hover:text-secondary"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="w-6 h-6 object-contain"
            />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/yourusername" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-[18px] hover:text-secondary"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-6 h-6 object-contain"
            />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-[18px] hover:text-secondary"
          >
            <img
              src={whatsapp}
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
