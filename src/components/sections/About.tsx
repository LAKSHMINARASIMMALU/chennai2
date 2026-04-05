import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'service-1');

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group [perspective:1000px]">
          <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden glass group-hover:[transform:rotateY(12deg)] transition-transform duration-500 ease-out">
            <Image 
              src={aboutImage?.imageUrl || 'https://picsum.photos/seed/cut1/600/800'}
              alt="Stylist working"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              data-ai-hint="precision haircut"
            />
          </div>
          {/* Neon Border Effect */}
          <div className="absolute -inset-2 border-2 border-primary/30 rounded-3xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 glass rounded-2xl p-6 hidden md:block z-20">
            <p className="text-primary font-headline font-bold text-4xl mb-1">15+</p>
            <p className="text-white/60 text-xs uppercase tracking-widest">Years of <br />Mastery</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">The Brand</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8 leading-tight">
            WHERE TECHNOLOGY <br />
            MEETS <span className="gradient-text">ARTISTRY</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            PrismShear was born from a vision of the future. We don't just cut hair; we engineer looks that reflect your digital and physical identity. Our stylists use quantum-precision techniques and organic-synthetic fusion products to ensure your style is as resilient as it is beautiful.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Located in the heart of the Neo District, our studio provides a sensory experience like no other. From AI-driven style simulations to chromatic treatment chambers, we've redefined what a visit to the salon means.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-2">Futuristic Vision</h4>
              <p className="text-sm text-muted-foreground">Constantly evolving techniques for the modern age.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Premium Tech</h4>
              <p className="text-sm text-muted-foreground">The latest styling technology at your service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
