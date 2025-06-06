
import React from 'react';
import { Card } from '@/components/ui/card';
import { Monitor, Camera, Palette, Grid } from 'lucide-react';

const VisualAesthetics = () => {
  const aestheticPrinciples = [
    {
      icon: Monitor,
      title: 'INTERFACE CLEAN',
      description: 'Design minimalista inspirado em IA avançada',
      details: [
        'Fundo cosmic-black sempre',
        'Elementos geométricos simples',
        'Espaçamento generoso (8pt grid)',
        'Ícones line-style minimalistas',
        'Zero elementos tribais na UI'
      ]
    },
    {
      icon: Camera,
      title: 'FOTOGRAFIA RITUAL',
      description: 'Presença ancestral em imagens',
      details: [
        'Pessoa com tatuagens ancestrais',
        'Vestes naturais/rituais',
        'Luz âmbar/dourada sutil',
        'Ambientes naturais ou arquitetônicos',
        'Contraste: high-tech UI + presença ancestral'
      ]
    },
    {
      icon: Palette,
      title: 'COMPOSIÇÃO DUALISTA',
      description: 'Futuro e ancestral em harmonia',
      details: [
        'Interface: matrix-green + cosmic-black',
        'Fotos: cores naturais + luz ritual',
        'Tipografia tech + conteúdo espiritual',
        'Geometria precisa + organicidade humana',
        'Frieza digital + calor ancestral'
      ]
    },
    {
      icon: Grid,
      title: 'LAYOUT SISTEMA',
      description: 'Estrutura matemática e respirável',
      details: [
        'Grid 12 colunas responsivo',
        'Cards com 12px border-radius',
        'Sombras sutis e depth layers',
        'Animações fade e scale suaves',
        'Hierarquia visual clara'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">ESTÉTICA</span>
          <span className="text-mineral-white"> VISUAL</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          A dualidade entre interface tecnológica avançada e presença humana ancestral.
          Design limpo que contrasta com a riqueza ritual das fotografias.
        </p>
      </div>

      {/* Visual Examples Section */}
      <div className="grid gap-8 mb-16">
        {/* Interface vs Ritual Contrast */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">CONTRASTE FUNDAMENTAL</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interface Clean */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">INTERFACE: FRIEZA TECNOLÓGICA</h4>
              <div className="bg-cosmic-black/60 p-6 rounded-xl border border-matrix-green/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-matrix-green rounded-full animate-glow" />
                    <div className="h-3 bg-mineral-white/80 rounded flex-1" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-mineral-white/40 rounded w-full" />
                    <div className="h-2 bg-mineral-white/30 rounded w-2/3" />
                  </div>
                  <div className="bg-matrix-green/10 p-3 rounded-lg border border-matrix-green/30">
                    <div className="h-2 bg-matrix-green/60 rounded w-1/2" />
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-mineral-white/70">
                <li>• Elementos geométricos precisos</li>
                <li>• Paleta matrix + cosmic black</li>
                <li>• Tipografia Space Grotesk clean</li>
                <li>• Zero ornamentação tribal</li>
              </ul>
            </div>

            {/* Ritual Photography */}
            <div>
              <h4 className="font-semibold text-ritual-orange mb-4">FOTOGRAFIA: CALOR ANCESTRAL</h4>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/1a34fed5-2820-42b0-af7b-a12a53fe5237.png" 
                  alt="Presença Ancestral em ambiente ritual"
                  className="w-full h-48 object-cover"
                />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-mineral-white/70">
                <li>• Tatuagens ancestrais visíveis</li>
                <li>• Luz natural/âmbar sutil</li>
                <li>• Vestes rituais em tons terrosos</li>
                <li>• Ambientes orgânicos/sagrados</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Photo Gallery */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">GALERIA VISUAL DE REFERÊNCIA</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/dfea379b-e02e-425d-88e9-99f6c3fa633b.png" 
                  alt="Tecnologia e Natureza"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h5 className="font-medium text-matrix-green text-sm">TECNOLOGIA + NATUREZA</h5>
                <p className="text-xs text-mineral-white/60">Dispositivos em ambiente natural</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e3430bd7-68a3-45c8-9806-08a129a7621e.png" 
                  alt="Presença Urbana Ancestral"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h5 className="font-medium text-matrix-green text-sm">URBANO + ANCESTRAL</h5>
                <p className="text-xs text-mineral-white/60">Presença ritual em espaços modernos</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/6c766c90-2191-4493-aeb8-3adabbfddcd6.png" 
                  alt="Profile Ancestral"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h5 className="font-medium text-matrix-green text-sm">IDENTIDADE VISUAL</h5>
                <p className="text-xs text-mineral-white/60">Tatuagens como linguagem ancestral</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Aesthetic Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {aestheticPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title} className="brand-card hover:scale-[1.02] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-matrix-green/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-matrix-green" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold matrix-text">{principle.title}</h4>
                      <p className="text-sm text-mineral-white/70">{principle.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {principle.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-matrix-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-mineral-white/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Usage Guidelines */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-6">DIRETRIZES DE USO</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">O QUE FAZER</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>✓ Interface sempre clean e tech</li>
                <li>✓ Fotos com presença ancestral autêntica</li>
                <li>✓ Contraste entre frieza digital e calor humano</li>
                <li>✓ Elementos rituais apenas em fotografias</li>
                <li>✓ Luz âmbar sutil em imagens rituais</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-ritual-orange mb-3">O QUE EVITAR</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>✗ Elementos tribais na interface</li>
                <li>✗ Cores rituais em botões/UI</li>
                <li>✗ Ornamentação excessiva</li>
                <li>✗ Misturar estéticas na mesma área</li>
                <li>✗ Sobrecarga visual desnecessária</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-moss-green mb-3">EQUILÍBRIO</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• 70% interface tecnológica</li>
                <li>• 30% elementos ancestrais (fotos)</li>
                <li>• Transições suaves entre ambos</li>
                <li>• Harmonia sem mistura direta</li>
                <li>• Cada elemento no seu contexto</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VisualAesthetics;
