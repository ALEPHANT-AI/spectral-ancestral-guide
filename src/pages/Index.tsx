
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Palette, Type, Layout, Image, MessageSquare, FileText } from 'lucide-react';
import BrandHero from '@/components/BrandHero';
import ColorPalette from '@/components/ColorPalette';
import Typography from '@/components/Typography';
import VisualAesthetics from '@/components/VisualAesthetics';
import LayoutComposition from '@/components/LayoutComposition';
import PracticalApplications from '@/components/PracticalApplications';
import BrandVoice from '@/components/BrandVoice';
import BrandFinalization from '@/components/BrandFinalization';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'hero', label: 'Apresentação', icon: Eye },
    { id: 'colors', label: 'Paleta de Cores', icon: Palette },
    { id: 'typography', label: 'Tipografia', icon: Type },
    { id: 'aesthetics', label: 'Estética Visual', icon: Image },
    { id: 'layout', label: 'Composição', icon: Layout },
    { id: 'applications', label: 'Aplicações', icon: FileText },
    { id: 'voice', label: 'Tom da Marca', icon: MessageSquare },
    { id: 'finalization', label: 'Download', icon: Download },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-black relative overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-black/80 backdrop-blur-md border-b border-moss-green/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold matrix-text">
              MOVIMENTO FUTURO ANCESTRAL
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-matrix-green/10 text-matrix-green'
                        : 'text-mineral-white/70 hover:text-matrix-green hover:bg-matrix-green/5'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <Button className="brand-button">
              <Download size={16} className="mr-2" />
              Brand Kit
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <BrandHero />
        </section>

        {/* Divider */}
        <div className="section-divider" />

        {/* Color Palette */}
        <section id="colors" className="py-20">
          <ColorPalette />
        </section>

        <div className="section-divider" />

        {/* Typography */}
        <section id="typography" className="py-20">
          <Typography />
        </section>

        <div className="section-divider" />

        {/* Visual Aesthetics */}
        <section id="aesthetics" className="py-20">
          <VisualAesthetics />
        </section>

        <div className="section-divider" />

        {/* Layout & Composition */}
        <section id="layout" className="py-20">
          <LayoutComposition />
        </section>

        <div className="section-divider" />

        {/* Practical Applications */}
        <section id="applications" className="py-20">
          <PracticalApplications />
        </section>

        <div className="section-divider" />

        {/* Brand Voice */}
        <section id="voice" className="py-20">
          <BrandVoice />
        </section>

        <div className="section-divider" />

        {/* Finalization */}
        <section id="finalization" className="py-20">
          <BrandFinalization />
        </section>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 -right-64 w-96 h-96 bg-matrix-green/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -left-64 w-96 h-96 bg-moss-green/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        />
      </div>
    </div>
  );
};

export default Index;
