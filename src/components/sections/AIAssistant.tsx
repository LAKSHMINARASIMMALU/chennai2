"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, BrainCircuit, Loader2 } from 'lucide-react';
import { aiStyleAssistant, type AIStyleAssistantOutput } from '@/ai/flows/ai-style-assistant';

const AIAssistant = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIStyleAssistantOutput | null>(null);
  const [formData, setFormData] = useState({
    hairType: '',
    faceShape: '',
    stylePreferences: '',
    currentStyle: '',
    desiredLook: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/ai-style", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

const output = await res.json();
      setResult(output);
    } catch (error) {
      console.error('AI Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 px-6 bg-[#1A2023] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,225,255,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <BrainCircuit size={14} /> AI Powered Styling
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            CONSULT THE <span className="gradient-text">ORACLE</span>
          </h2>
          <p className="text-muted-foreground">
            Can't decide on your next look? Our AI assistant analyzes your features and preferences to suggest the perfect futuristic style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Your Profile</CardTitle>
              <CardDescription>Tell us about yourself for better suggestions.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/60 text-xs uppercase">Hair Type</Label>
                    <Input 
                      placeholder="e.g. Thick, Wavy" 
                      className="glass border-white/10 text-white" 
                      value={formData.hairType}
                      onChange={(e) => setFormData({...formData, hairType: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/60 text-xs uppercase">Face Shape</Label>
                    <Input 
                      placeholder="e.g. Oval, Square" 
                      className="glass border-white/10 text-white" 
                      value={formData.faceShape}
                      onChange={(e) => setFormData({...formData, faceShape: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase">Style Preferences</Label>
                  <Input 
                    placeholder="e.g. Edgy, Professional, Neon" 
                    className="glass border-white/10 text-white" 
                    value={formData.stylePreferences}
                    onChange={(e) => setFormData({...formData, stylePreferences: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase">Desired Vibe (Optional)</Label>
                  <Textarea 
                    placeholder="Describe the feeling or mood you want..." 
                    className="glass border-white/10 text-white min-h-[100px]" 
                    value={formData.desiredLook}
                    onChange={(e) => setFormData({...formData, desiredLook: e.target.value})}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-neon-gradient bg-neon-glow hover:opacity-90 h-12"
                  disabled={loading}
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
                  ) : (
                    <><Sparkles className="mr-2 h-4 w-4" /> Generate My Style</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result ? (
              <div className="animate-in fade-in slide-in-from-right-10 duration-500">
                <div className="glass p-8 rounded-2xl border-primary/30 relative">
                  <div className="absolute -top-3 -left-3 bg-primary text-white p-2 rounded-lg shadow-[0_0_15px_rgba(42,173,237,0.5)]">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-primary font-headline font-bold text-xl mb-4">Recommended Style</h4>
                  <p className="text-white text-lg font-medium leading-relaxed mb-6">
                    {result.suggestedStyle}
                  </p>
                  
                  <h5 className="text-white/60 text-xs uppercase tracking-widest mb-3">Reasoning</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {result.reasoning}
                  </p>

                  <h5 className="text-white/60 text-xs uppercase tracking-widest mb-3">Keywords</h5>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-primary">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="link" 
                  className="mt-4 text-primary p-0 h-auto"
                  onClick={() => setResult(null)}
                >
                  ← Start Over
                </Button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center glass rounded-2xl border-dashed border-white/10">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <BrainCircuit className="text-white/20 w-10 h-10" />
                </div>
                <h4 className="text-white font-headline font-bold mb-2">Ready to evolve?</h4>
                <p className="text-muted-foreground text-sm">Fill out your profile and let our AI model suggest your next signature look.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
