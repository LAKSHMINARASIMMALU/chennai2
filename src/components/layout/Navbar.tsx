"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Consult AI', href: '#ai-assistant' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'glass py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center bg-neon-glow group-hover:rotate-12 transition-transform duration-300">
            <Scissors className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-headline font-bold tracking-tighter text-white">
            PRISM<span className="text-primary">SHEAR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:text-neon"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-neon-glow hover:scale-105 transition-transform">
            <Link href="#booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass p-6 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="#booking">Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
