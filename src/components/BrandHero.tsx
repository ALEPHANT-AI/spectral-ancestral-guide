
import React from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const BrandHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-12 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/38d9b5b0-77fe-465f-8796-f221c6ac0dfd.png" 
            alt="Movimento Futuro Ancestral Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 text-matrix-green text-sm font-medium tracking-wider uppercase">
            <Sparkles size={16} className="animate-glow" />
            <span>Brand Book Digital</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-mineral-white">MOVIMENTO</span>
            <br />
            <span className="matrix-text text-glow">FUTURO</span>
            <br />
            <span className="text-mineral-white">ANCESTRAL</span>
          </h1>
        </div>

        {/* Main Manifesto */}
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="manifesto-text">
            "A IA vai nos forçar a voltar a ser humanos."
          </p>
          
          <div className="w-24 h-px bg-matrix-green mx-auto" />
        </div>

        {/* Brand Description */}
        <Card className="brand-card max-w-4xl mx-auto text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold matrix-text">
              A GRANDE INVERSÃO ESTÁ ACONTECENDO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold matrix-text">
                  200 ANOS DE DOMESTICAÇÃO
                </h3>
                <div className="space-y-3 text-mineral-white/90 leading-relaxed">
                  <p>Por 200 anos nos transformaram em máquinas obedientes:</p>
                  <ul className="space-y-2 pl-4">
                    <li>• 8 horas repetindo tarefas que IA faz melhor</li>
                    <li>• Escola que moldou robôs, não humanos</li>
                    <li>• Trabalhos que drenam alma para alimentar planilhas</li>
                  </ul>
                  <p className="matrix-text font-medium">
                    Eles nos domesticaram para sermos máquinas enquanto somos animais, somos almas.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-ritual-orange/20 to-moss-green/20 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-matrix-green/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Sparkles size={32} className="text-matrix-green animate-glow" />
                    </div>
                    <p className="text-sm text-mineral-white/70">
                      Imagem conceitual: Figura humana em túnica ancestral
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-moss-green/20 pt-6 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-mineral-white mb-3">O PROBLEMA</h4>
                <p className="text-mineral-white/70 italic">
                  Nos treinaram para sermos máquinas ruins enquanto somos animais extraordinários.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold matrix-text mb-3">A SOLUÇÃO</h4>
                <p className="text-mineral-white/90">
                  A IA vai ser máquina melhor que nós. Agora podemos voltar a ser humanos de verdade.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BrandHero;
