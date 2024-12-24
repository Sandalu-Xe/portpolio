import React from "react";
import whatsapp from "../assets/social/whatsapp.png";
import instagram from "../assets/social/instagram.png";
import linkedin from "../assets/social/linkedin.png";
import github from "../assets/social/github.png"; // Add GitHub icon

const Footer = () => {
  return (
    <footer className="w-full bg-primary py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 px-6 text-center">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://wa.link/6dl0v9" // Replace with your WhatsApp link
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
            href="https://www.linkedin.com/in/sandalu/" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-[18px] hover:text-secondary"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sandalu-Xe" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-[18px] hover:text-secondary"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-6 h-6 object-contain"
            />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
