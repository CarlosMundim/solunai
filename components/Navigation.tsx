'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-solunai-blue">SoLUN</span>
              <span className="text-solunai-navy">.ai</span>
            </div>
            <div className="text-xs text-gray-600">Systems K.K.</div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-solunai-blue transition">Solutions</a>
            <a href="#success" className="text-gray-700 hover:text-solunai-blue transition">Success Stories</a>
            <a href="#partners" className="text-gray-700 hover:text-solunai-blue transition">Partners</a>
            <a href="#contact" className="px-6 py-2 bg-solunai-blue text-white rounded-full hover:bg-blue-700 transition">
              Contact
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-2">
              <span className={"block w-8 h-0.5 bg-gray-800 transition-transform " + (mobileMenuOpen ? "rotate-45 translate-y-2.5" : "")}></span>
              <span className={"block w-8 h-0.5 bg-gray-800 transition-opacity " + (mobileMenuOpen ? "opacity-0" : "")}></span>
              <span className={"block w-8 h-0.5 bg-gray-800 transition-transform " + (mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : "")}></span>
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#solutions" className="block text-gray-700 hover:text-solunai-blue">Solutions</a>
            <a href="#success" className="block text-gray-700 hover:text-solunai-blue">Success Stories</a>
            <a href="#partners" className="block text-gray-700 hover:text-solunai-blue">Partners</a>
            <a href="#contact" className="block px-6 py-2 bg-solunai-blue text-white rounded-full text-center">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
