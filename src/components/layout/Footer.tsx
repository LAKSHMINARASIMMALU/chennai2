
import React from 'react';
import Link from 'next/link';
import { Scissors, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/TCM5aho46kiAaJXN9";

  return (
    <footer className="bg-background pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Scissors className="text-primary w-6 h-6" />
            <span className="text-xl font-headline font-bold text-white">
              PRISM<span className="text-primary">SHEAR</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Redefining luxury hair styling with futuristic techniques and premium care. Experience the future of beauty.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
              <Facebook size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={18} className="text-primary shrink-0" />
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                101 Cyber Plaza, Neo District, Metropolis 2049
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+1 (555) 010-2049</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={18} className="text-primary shrink-0" />
              <span>hello@prismshear.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6">Hours</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 21:00</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 22:00</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 18:00</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2049 PrismShear. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
