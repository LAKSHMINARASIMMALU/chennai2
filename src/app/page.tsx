import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Booking from '@/components/sections/Booking';
import AIAssistant from '@/components/sections/AIAssistant';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <AIAssistant />
      <Testimonials />
      <Booking />
      <Toaster />
    </div>
  );
}
