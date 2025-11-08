'use client';

import React, { useEffect } from 'react';
import './HeroVideo.css';

interface HeroVideoProps {
  lang: 'ja' | 'en';
}

const HeroVideo: React.FC<HeroVideoProps> = ({ lang }) => {
  // Neural Network Particle Animation
  useEffect(() => {
    const canvas = document.getElementById('neuralCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particles: Particle[] = [];
    const particleCount = 40;
    const connectionDistance = 120;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00d9ff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00d9ff';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = {
    ja: {
      headline: '日本の製造業をAIで革新する',
      subheadline: 'デジタルツイン技術とグローバルエンジニアリングで、製造業の完全な変革を数週間で実現。実証済みのAIソリューションで生産性を最大化します。',
      scroll: 'スクロール'
    },
    en: {
      headline: 'Revolutionizing Japanese Manufacturing with AI',
      subheadline: 'Completely transform your manufacturing operations in weeks with digital twin technology and global engineering. Maximize productivity with proven AI solutions.',
      scroll: 'Scroll'
    }
  };

  const currentContent = content[lang];

  return (
    <section className="hero-video-section" aria-label={lang === 'ja' ? 'ヒーロー' : 'Hero'}>
      {/* Background Image */}
      <div className="hero-video-container">
        <div
          className="hero-background-image"
          style={{
            backgroundImage: 'url(/images/Hero-manufacturing.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div className="hero-video-overlay"></div>
      </div>

      {/* AI Tech Effects - HUD Brackets */}
      <div className="hero-hud-top-left"></div>
      <div className="hero-hud-bottom-right"></div>

      {/* HUD Status Display */}
      <div className="hero-hud-status">
        <span>SOLUNAI AI SYSTEMS</span>
        <span className="hero-hud-scanning">▰▰▰▰▱ ONLINE</span>
      </div>

      {/* Neural Network Particles */}
      <canvas className="hero-neural-network" id="neuralCanvas"></canvas>

      {/* Scan Line Effect */}
      <div className="hero-scan-line"></div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-headline">
            {currentContent.headline}
          </h1>
          <p className="hero-subheadline">{currentContent.subheadline}</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">{currentContent.scroll}</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default HeroVideo;
