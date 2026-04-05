import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Aria Vance',
    role: 'Cyber-Influencer',
    content: "The Chromatic Dye treatment is out of this world. My hair literally glows in low-light environments. I've never felt more futuristic."
  },
  {
    id: 'testimonial-2',
    name: 'Jax Neon',
    role: 'Synth-Pop Artist',
    content: "PrismShear understands the geometry of style. Every cut is a masterpiece of precision. It's the only salon I trust in Metropolis."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            CLIENT <span className="gradient-text">TRANSMISSIONS</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => {
            const userImg = PlaceHolderImages.find(img => img.id === t.id);
            return (
              <div key={index} className="glass p-10 rounded-3xl relative">
                <Quote className="absolute top-8 right-8 text-primary/20 w-16 h-16" />
                <p className="text-white/80 text-xl italic mb-10 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image 
                      src={userImg?.imageUrl || 'https://picsum.photos/seed/user1/100/100'}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-primary text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
