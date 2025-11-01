'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Sovereign AI Infrastructure',
    subtitle: 'for Japan\'s Digital Transformation',
    description: 'Proven AI engineering excellence delivering real results across Europe and Asia.',
    image: '/images/hero-1.jpg'
  },
  {
    id: 2,
    title: 'PhD Thermal Engineering',
    subtitle: 'World-Class Technical Excellence',
    description: '€2.5M+ contracts secured through demonstrated expertise.',
    image: '/images/hero-2.jpg'
  },
  {
    id: 3,
    title: 'Global AI Partnerships',
    subtitle: 'Connecting Europe, Asia & Beyond',
    description: 'From thermal engineering to M&A mandates - we deliver.',
    image: '/images/hero-3.jpg'
  },
  {
    id: 4,
    title: 'Engineering Excellence',
    subtitle: 'FBM Hudson Italiana Partnership',
    description: 'Advanced air-cooler quotation systems with PhD-level expertise.',
    image: '/images/hero-4.jpg'
  },
  {
    id: 5,
    title: '4 Major European Victories',
    subtitle: 'October 2025 Success',
    description: 'FBM Hudson, Copper Mine M&A, Italian Tax Platform, WorldEmp.',
    image: '/images/hero-5.jpg'
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen mt-20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={"absolute inset-0 transition-opacity duration-1000 " + (index === currentSlide ? "opacity-100" : "opacity-0")}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(" + slide.image + ")",
              backgroundColor: '#1a1a1a'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                  {slide.title}
                  <br />
                  <span className="text-solunai-blue">{slide.subtitle}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 animate-slide-up">
                  <a href="#contact" className="px-8 py-4 bg-solunai-blue text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
                    Schedule Consultation
                  </a>
                  <a href="#solutions" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/30">
                    Explore Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={"w-3 h-3 rounded-full transition-all " + (index === currentSlide ? "bg-white w-8" : "bg-white/50")}
          />
        ))}
      </div>
    </section>
  );
}
