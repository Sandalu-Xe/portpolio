import React from "react";
import whatsapp from "../assets/social/whatsapp.png";
import instagram from "../assets/social/instagram.png";
import linkedin from "../assets/social/linkedin.png";
import github from "../assets/social/github.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-black-900 via-purple-700 to-indigo-900 py-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 text-center">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              href: "https://wa.link/6dl0v9",
              imgSrc: whatsapp,
              alt: "WhatsApp",
              label: "WhatsApp",
            },
            {
              href: "https://www.instagram.com/sandalu_x/",
              imgSrc: instagram,
              alt: "Instagram",
              label: "Instagram",
            },
            {
              href: "https://www.linkedin.com/in/sandalu/",
              imgSrc: linkedin,
              alt: "LinkedIn",
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Sandalu-Xe",
              imgSrc: github,
              alt: "GitHub",
              label: "GitHub",
            },
          ].map(({ href, imgSrc, alt, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-white text-[16px] font-medium hover:text-blue-600 transition-all duration-300"
            >
              <img
                src={imgSrc}
                alt={alt}
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-white text-sm opacity-75">
          © {new Date().getFullYear()} Sandalu | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
