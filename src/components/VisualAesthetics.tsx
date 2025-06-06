
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Shield, Circle, Square } from 'lucide-react';

const VisualAesthetics = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">ESTÉTICA</span>
          <span className="text-mineral-white"> VISUAL</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          A interface limpa e tecnológica contrasta com imagens rituais ancestrais.
          Modernidade e tradição em perfeita harmonia visual.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Design Principles */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">PRINCÍPIOS DE DESIGN</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Circle className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-mineral-white mb-2">MINIMALISMO</h4>
                <p className="text-sm text-mineral-white/70">
                  Interface limpa sem elementos desnecessários. Cada elemento tem propósito.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Square className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-mineral-white mb-2">GRID SYSTEM</h4>
                <p className="text-sm text-mineral-white/70">
                  Layouts baseados em grid 12 colunas. Alinhamento matemático perfeito.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-mineral-white mb-2">CONTRASTE</h4>
                <p className="text-sm text-mineral-white/70">
                  Interface IA vs. presença ancestral. Tecnologia vs. humanidade.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-mineral-white mb-2">PROFUNDIDADE</h4>
                <p className="text-sm text-mineral-white/70">
                  Sombras sutis e backdrop blur para criar camadas visuais.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Interface Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">INTERFACE GUIDELINES</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-mineral-white mb-3">✨ ELEMENTOS PERMITIDOS</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Cards com bordas arredondadas (12px)</li>
                  <li>• Sombras sutis e backdrop blur</li>
                  <li>• Ícones geométricos minimalistas</li>
                  <li>• Gradientes sutis Matrix/Moss</li>
                  <li>• Animações suaves (fade, scale)</li>
                  <li>• Grid layouts responsivos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">🚫 ELEMENTOS PROIBIDOS</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Elementos tribais na interface</li>
                  <li>• Texturas orgânicas em UI</li>
                  <li>• Cores quentes na interface</li>
                  <li>• Tipografia decorativa</li>
                  <li>• Elementos 3D complexos</li>
                  <li>• Ilustrações cartoon</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">FOTOGRAFIA & RITUAL</h3>
            
            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-ritual-orange/20 via-cosmic-black to-moss-green/20 rounded-xl flex items-center justify-center border border-moss-green/20">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-ritual-orange/30 rounded-full mx-auto" />
                  <p className="text-xs text-mineral-white/60">
                    Exemplo: Figura em túnica ancestral<br />
                    com lighting âmbar ritual
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">DIRETRIZES FOTOGRÁFICAS</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Lighting âmbar/laranja em cenas rituais</li>
                  <li>• Figuras humanas em vestes ancestrais</li>
                  <li>• Ambientes com elementos naturais</li>
                  <li>• Contraste com interface clean</li>
                  <li>• Composição cinematográfica</li>
                  <li>• Mood contemplativo/espiritual</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Examples */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">EXEMPLOS VISUAIS</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* UI Example */}
            <div className="space-y-4">
              <h4 className="font-semibold text-matrix-green">INTERFACE PADRÃO</h4>
              <div className="bg-cosmic-black/50 rounded-xl p-6 border border-moss-green/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-3 bg-matrix-green/30 rounded" />
                    <div className="w-6 h-6 bg-matrix-green/20 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-mineral-white/20 rounded" />
                    <div className="w-3/4 h-2 bg-mineral-white/20 rounded" />
                  </div>
                  <div className="w-20 h-8 bg-matrix-green/20 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Card Example */}
            <div className="space-y-4">
              <h4 className="font-semibold text-matrix-green">CARD COMPONENT</h4>
              <div className="bg-stellar-gray/50 rounded-xl p-6 border border-moss-green/20 backdrop-blur-sm">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-matrix-green/10 rounded-full" />
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-matrix-green/30 rounded" />
                    <div className="w-2/3 h-2 bg-mineral-white/30 rounded" />
                    <div className="w-1/2 h-2 bg-mineral-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Button States */}
            <div className="space-y-4">
              <h4 className="font-semibold text-matrix-green">ESTADOS DE BOTÃO</h4>
              <div className="space-y-3">
                <div className="w-full h-10 bg-matrix-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-matrix-green">DEFAULT</span>
                </div>
                <div className="w-full h-10 bg-matrix-green/30 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-matrix-green">HOVER</span>
                </div>
                <div className="w-full h-10 bg-matrix-green/10 rounded-lg flex items-center justify-center border border-matrix-green/30">
                  <span className="text-xs text-matrix-green">OUTLINE</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VisualAesthetics;
