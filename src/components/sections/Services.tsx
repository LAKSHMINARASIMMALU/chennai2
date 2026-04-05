"use client";

import React from 'react';
import { Scissors, Zap, Sparkles, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Precision Cut',
    description: 'Advanced geometric cutting techniques for a sharp, modern silhouette.',
    price: 'From $85',
    icon: Scissors,
    details: ['Style consultation', 'Detox wash', 'Precision cut', 'Finish']
  },
  {
    title: 'Chromatic Dye',
    description: 'Multi-tonal holographic coloring that reacts to light environments.',
    price: 'From $160',
    icon: Sparkles,
    details: ['Color mapping', 'High-res pigment', 'Bond shield', 'Tone seal']
  },
  {
    title: 'Cyber Treatment',
    description: 'Nanotechnology-infused deep conditioning for ultimate hair health.',
    price: 'From $95',
    icon: Droplets,
    details: ['Structural repair', 'Surface smoothing', 'Frizz block', 'Shine plus']
  },
  {
    title: 'Executive Style',
    description: 'Complete transformation including grooming, styling, and scalp care.',
    price: 'From $120',
    icon: Zap,
    details: ['Signature cut', 'Facial groom', 'Scalp detox', 'Energy massage']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#15191B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            UPGRADE YOUR <span className="gradient-text">AESTHETIC</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated menu of futuristic styling services designed to enhance your unique identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/5 border-white/10 hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(42,173,237,0.2)]">
              <CardContent className="p-8 pt-12">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <service.icon className="text-primary group-hover:text-white w-8 h-8 transition-colors duration-500" />
                </div>
                
                <h4 className="text-xl font-headline font-bold text-white mb-4">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Reveal Details */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-primary font-bold">{service.price}</span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
