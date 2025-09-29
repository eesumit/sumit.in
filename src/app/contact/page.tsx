"use client";
import React, { useState } from 'react';
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

  const [form, setForm] = useState({ to: '', subject: '', html: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        setMessage('Mail sent!');
        setForm({ to: '', subject: '', html: '' });
      } else {
        setMessage('Failed to send mail.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Network error');
    }
    setLoading(false);
  }

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-500 to-black text-white p-6 md:p-12 pt-24">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-lg md:text-xl text-center mb-12 text-orange-300">
          Let&#39;s build something amazing together
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white/20">
          <h2 className='text-2xl font-semibold text-white/90 bg-white/20 p-2 text-center rounded-2xl'>Feel Free to ask me anything...</h2>
          <div className='flex flex-col gap-5 mt-5'>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Please Enter your Email"
              value={form.to}
              onChange={e => setForm(f => ({ ...f, to: e.target.value }))}
              required
              className='w-full px-4 py-3 border border-white/30 rounded-lg outline-none focus:border-blue-400 bg-white/10 text-white placeholder-white/60 transition-colors duration-200'
            />
            {/* Email validation warning */}
            {form.to && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.to) && (
              <span className="text-red-400 text-sm">Please enter a valid email address.</span>
            )}
            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              required
              className='w-full px-4 py-3 border border-white/30 rounded-lg outline-none focus:border-blue-400 bg-white/10 text-white placeholder-white/60 transition-colors duration-200'
            />
            {/* Textarea for Message */}
            <textarea
              placeholder="Message (HTML allowed)"
              value={form.html}
              onChange={e => setForm(f => ({ ...f, html: e.target.value }))}
              required
              rows={5}
              className='w-full px-4 py-3 border border-white/30 rounded-lg outline-none focus:border-blue-400 bg-white/10 text-white placeholder-white/60 transition-colors duration-200'
            />
          </div>
          <div className='flex items-center justify-center mt-4'>
            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`relative w-full py-3 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300
        ${loading ? 'bg-blue-600 cursor-wait' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer'}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Mail'}
            </button>
          </div>
          {message && <div className='mt-4 text-center text-white'>{message} 
            </div>}
            {message=="Mail sent!" && <h3 className='text-center'>
              Thanks for reaching out! I’ll get back to you shortly.
            </h3>}
            
        </form>


        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-stretch mt-4">

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
