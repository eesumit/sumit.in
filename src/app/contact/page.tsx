'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [form, setForm] = useState({ to: '', subject: '', html: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/eesumit', name: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/e-sumit/', name: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: 'https://x.com/SUMITSINGHALGO', name: 'Twitter' },
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/summiitsingh/', name: 'Instagram' },
    { icon: <SiLeetcode size={24} />, url: 'https://leetcode.com/u/e_sumit/', name: 'LeetCode' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope size={20} />, text: 'yessumitsingh007@gmail.com' },
    { icon: <FaPhone size={20} />, text: '+91 78780 59243' },
    { icon: <FaMapMarkerAlt size={20} />, text: 'Mirzapur, Neemrana, Alwar, Rajasthan' },
  ];

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
      if (data.success) {
        setMessage('Message sent successfully!');
        setForm({ to: '', subject: '', html: '' });
      } else {
        setMessage('Failed to send message.');
      }
    } catch (err) {
      setMessage('Network error occurred.');
    }
    setLoading(false);
  }

  return (
    <div className="py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-space font-bold mb-4">
          Get in <span className="text-purple-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Have a project in mind or just want to say hi? I'm always open to new ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-mono text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.to}
                onChange={e => setForm(f => ({ ...f, to: e.target.value }))}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={form.html}
                onChange={e => setForm(f => ({ ...f, html: e.target.value }))}
                required
                rows={5}
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500 text-white resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
            </button>

            {message && (
              <p className={`text-center text-sm ${message.includes('success') ? 'text-teal-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          {/* Info Cards */}
          <div className="glass-panel p-8 space-y-6">
            <h3 className="text-2xl font-space font-bold mb-6">Contact Info</h3>
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-full text-purple-400">
                  {info.icon}
                </div>
                <div className="py-2">{info.text}</div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-space font-bold mb-6">Socials</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-600 border border-white/10 transition-all hover:scale-110 text-white"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
