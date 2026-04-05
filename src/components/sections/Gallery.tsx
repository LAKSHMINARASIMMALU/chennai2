"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryItems = [
  { id: 'gallery-1', className: 'md:col-span-1 md:row-span-2' },
  { id: 'gallery-2', className: 'md:col-span-1 md:row-span-1' },
  { id: 'gallery-3', className: 'md:col-span-1 md:row-span-2' },
  { id: 'gallery-4', className: 'md:col-span-1 md:row-span-1' },
  { id: 'gallery-5', className: 'md:col-span-1 md:row-span-2' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">
              VISUAL <span className="gradient-text">CHRONICLES</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md text-right">
            A look into the transformative work we perform every day. Modern masterpieces crafted for unique personalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-2xl ${item.className}`}
              >
                <Image 
                  src={imgData?.imageUrl || `https://picsum.photos/seed/gal${index}/800/1000`}
                  alt={imgData?.description || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  data-ai-hint={imgData?.imageHint || "modern haircut"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-headline font-bold text-lg mb-1">{imgData?.description || 'Style Mastery'}</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/30 uppercase tracking-widest">Futuristic</span>
                      <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded border border-secondary/30 uppercase tracking-widest">Premium</span>
                    </div>
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

export default Gallery;
