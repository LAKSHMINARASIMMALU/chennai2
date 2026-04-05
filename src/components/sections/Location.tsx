
"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Navigation, TrainFront, Car } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Location = () => {
  const mapImage = PlaceHolderImages.find(img => img.id === 'location-map');
  const googleMapsUrl = "https://maps.app.goo.gl/TCM5aho46kiAaJXN9";

  return (
    <section id="location" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">The Sanctuary</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">
              FIND THE <span className="gradient-text">ORBIT</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0 border-primary/20">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Neo District Headquarters</h4>
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    101 Cyber Plaza, Level 42<br />
                    Neo District, Metropolis 2049
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <TrainFront size={18} className="text-primary" />
                    <h5 className="text-white text-sm font-bold uppercase tracking-wider">Hyperloop</h5>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Exit at Station 7. Follow the neon blue transit line to Cyber Plaza North.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-2xl border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Navigation size={18} className="text-primary" />
                    <h5 className="text-white text-sm font-bold uppercase tracking-wider">Skywalk</h5>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Direct access from Level 4 Skywalk connecting to the Central Hub.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-[0.2em] mb-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span>Validation Available</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <Car size={16} className="text-primary" />
                  Underground anti-gravity parking available for all clients.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block w-full aspect-[4/3] rounded-3xl overflow-hidden glass border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/50"
            >
              <Image 
                src={mapImage?.imageUrl || 'https://picsum.photos/seed/map49/1200/600'}
                alt="Studio Map"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                data-ai-hint="futuristic map"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
              
              {/* Animated Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75 h-8 w-8 -m-2" />
                  <div className="relative bg-primary text-white p-2 rounded-full shadow-[0_0_20px_rgba(42,173,237,0.8)] border-2 border-white">
                    <MapPin size={24} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl backdrop-blur-md border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs font-bold text-center uppercase tracking-widest">Open in Google Maps</p>
              </div>
            </a>
            
            {/* Decorative background glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
