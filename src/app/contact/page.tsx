import React from 'react';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/eesumit', name: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/e-sumit/', name: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: 'https://x.com/SUMITSINGHALGO', name: 'Twitter' },
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/summiitsingh/', name: 'Instagram' },
    { icon: <SiLeetcode size={24} />, url: 'https://leetcode.com/u/e_sumit/', name: 'LeetCode' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope size={20} />, text: 'yessumitsingh007@gmail.com', type: 'email' },
    { icon: <FaPhone size={20} />, text: '+91 78780 59243', type: 'phone' },
    { icon: <FaMapMarkerAlt size={20} />, text: 'Mirzapur, Neemrana, Alwar, Rajasthan', type: 'location' },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-500 to-black text-white p-6 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-lg md:text-xl text-center mb-12 text-orange-300">
          Let&#39;s build something amazing together
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-stretch ">
          {/* Social Media */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Connect With Me</h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 transition-all duration-300 border border-white/20 hover:border-white/40"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <span className="mt-1 mr-4 text-orange-300 hover:text-orange-500">{info.icon}</span>
                  <p className="text-base md:text-lg break-words">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
