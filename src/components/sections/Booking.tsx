"use client";

import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Appointment Requested",
        description: "We'll confirm your slot via neural-link (email) shortly.",
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 px-6 bg-background">
        <div className="max-w-xl mx-auto glass p-12 rounded-3xl text-center border-primary/30 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 bg-neon-glow">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-headline font-bold text-white mb-4">CONFIRMATION SENT</h2>
          <p className="text-muted-foreground mb-8">
            Your appointment request has been beamed to our systems. Expect a confirmation within the next 15 minutes.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            variant="outline" 
            className="border-white/20 text-white"
          >
            Make Another Booking
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 px-6 bg-[#15191B] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.4em] uppercase mb-4">Book Online</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            RESERVE YOUR <span className="gradient-text">SLOT</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your service, choose a preferred time, and join the elite. Our calendar syncs in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass rounded-3xl p-8 border-white/10">
            <h4 className="text-white font-headline font-bold text-xl mb-6">1. Select Date</h4>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-white/5 bg-transparent text-white"
              />
            </div>
          </div>

          <form onSubmit={handleBooking} className="glass rounded-3xl p-8 border-white/10 space-y-6">
            <h4 className="text-white font-headline font-bold text-xl mb-2">2. Appointment Details</h4>
            
            <div className="space-y-2">
              <Label className="text-white/60 text-xs uppercase">Full Name</Label>
              <Input placeholder="John Doe" className="glass border-white/10 text-white" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase">Email Address</Label>
                <Input type="email" placeholder="john@nebula.com" className="glass border-white/10 text-white" required />
              </div>
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase">Phone</Label>
                <Input type="tel" placeholder="+1 (555) 000-0000" className="glass border-white/10 text-white" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase">Service Type</Label>
                <Select required>
                  <SelectTrigger className="glass border-white/10 text-white">
                    <SelectValue placeholder="Choose Service" />
                  </SelectTrigger>
                  <SelectContent className="glass text-white">
                    <SelectItem value="cut">Precision Cut</SelectItem>
                    <SelectItem value="color">Chromatic Dye</SelectItem>
                    <SelectItem value="treat">Cyber Treatment</SelectItem>
                    <SelectItem value="exec">Executive Style</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-white/60 text-xs uppercase">Time Slot</Label>
                <Select required>
                  <SelectTrigger className="glass border-white/10 text-white">
                    <SelectValue placeholder="Available Times" />
                  </SelectTrigger>
                  <SelectContent className="glass text-white">
                    <SelectItem value="9">09:00 AM</SelectItem>
                    <SelectItem value="11">11:00 AM</SelectItem>
                    <SelectItem value="14">02:00 PM</SelectItem>
                    <SelectItem value="16">04:00 PM</SelectItem>
                    <SelectItem value="19">07:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-primary hover:bg-primary/90 bg-neon-glow rounded-xl text-lg font-bold"
              disabled={loading}
            >
              {loading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Transmission in Progress...</>
              ) : (
                "Request Appointment"
              )}
            </Button>
            <p className="text-[10px] text-muted-foreground text-center">
              By clicking request, you agree to our Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
