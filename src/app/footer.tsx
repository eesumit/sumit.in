import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-outfit">

        {/* Copyright & Brand */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400">© {new Date().getFullYear()}</span>
          <span className="font-bold font-space text-white">esumit.in</span>
          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-mono uppercase tracking-wider">
            Beta
          </span>
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-2 text-gray-300">
          Made with pride and <span className="animate-bounce">💖</span> in <span className="font-bold text-white">India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;