"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video / Image Container with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Using Image component as placeholder for cinematic video background */}
        <Image 
          src={heroImage?.imageUrl || 'https://picsum.photos/seed/prism1/1920/1080'}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          data-ai-hint="hair styling"
        />
        
        {/* Animated Particle Overlay Effect */}
        <div className="absolute inset-0 z-20 opacity-30 pointer-events-none">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(42,173,237,0.1),transparent_70%)]" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-4">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-headline font-bold text-white tracking-tighter leading-tight animate-in slide-in-from-bottom-20 duration-1000">
            REDEFINE <br />
            <span className="gradient-text text-neon">YOUR STYLE</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          Precision engineering meets artistic mastery. Experience the fusion of futuristic aesthetics and premium hair care in the heart of Metropolis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 bg-neon-glow rounded-full group">
            Book Appointment
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/20 text-white hover:bg-white/10 rounded-full glass">
            View Services
          </Button>
        </div>
      </div>

      {/* Floating Animated Border Section Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
