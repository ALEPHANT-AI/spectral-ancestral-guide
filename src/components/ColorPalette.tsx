
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    {
      name: 'Verde Matrix Elétrico',
      hex: '#00FF88',
      rgb: 'rgb(0, 255, 136)',
      usage: 'Chamadas, botões, textos-chave',
      className: 'bg-matrix-green',
    },
    {
      name: 'Preto Cósmico Azulado',
      hex: '#0B0F1E',
      rgb: 'rgb(11, 15, 30)',
      usage: 'Fundo principal',
      className: 'bg-cosmic-black border border-moss-green/30',
    },
    {
      name: 'Cinza Estelar',
      hex: '#151923',
      rgb: 'rgb(21, 25, 35)',
      usage: 'Fundos de cards, detalhes de UI',
      className: 'bg-stellar-gray',
    },
    {
      name: 'Branco Mineral',
      hex: '#F2F2F2',
      rgb: 'rgb(242, 242, 242)',
      usage: 'Tipografia geral',
      className: 'bg-mineral-white',
    },
    {
      name: 'Verde Musgo Espiritual',
      hex: '#2F6D5A',
      rgb: 'rgb(47, 109, 90)',
      usage: 'Detalhes, bordas, elementos de contraste',
      className: 'bg-moss-green',
    },
    {
      name: 'Laranja Ritual',
      hex: '#FF944D',
      rgb: 'rgb(255, 148, 77)',
      usage: 'Luz em fotos rituais, jamais na interface',
      className: 'bg-ritual-orange',
    },
  ];

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">PALETA</span>
          <span className="text-mineral-white"> DE CORES</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          Cores que conectam o futuro tecnológico com a sabedoria ancestral.
          Cada cor tem sua função específica na construção da identidade visual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colors.map((color, index) => (
          <Card key={color.hex} className="brand-card group hover:scale-105 transition-transform duration-300">
            <div className="space-y-6">
              {/* Color Swatch */}
              <div className="relative">
                <div 
                  className={`color-swatch w-full h-32 ${color.className}`}
                  style={{ backgroundColor: color.hex }}
                />
                {color.name.includes('Matrix') && (
                  <div className="absolute inset-0 bg-matrix-green/20 rounded-xl animate-glow" />
                )}
              </div>

              {/* Color Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-mineral-white mb-2">
                    {color.name}
                  </h3>
                  <p className="text-sm text-mineral-white/60">
                    {color.usage}
                  </p>
                </div>

                {/* Color Codes */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-cosmic-black/50 rounded-lg">
                    <span className="font-mono text-matrix-green">{color.hex}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(color.hex)}
                      className="text-mineral-white/70 hover:text-matrix-green"
                    >
                      {copiedColor === color.hex ? (
                        <Check size={16} className="text-matrix-green" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-cosmic-black/50 rounded-lg">
                    <span className="font-mono text-sm text-mineral-white/70">{color.rgb}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(color.rgb)}
                      className="text-mineral-white/70 hover:text-matrix-green"
                    >
                      {copiedColor === color.rgb ? (
                        <Check size={16} className="text-matrix-green" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Usage Guidelines */}
      <Card className="brand-card mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold matrix-text mb-6">DIRETRIZES DE USO</h3>
            <div className="space-y-4 text-mineral-white/90">
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">Interface Digital</h4>
                <p className="text-sm">Sempre use Matrix Green para CTAs e elementos importantes. Nunca use Laranja Ritual na interface.</p>
              </div>
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">Fotografia</h4>
                <p className="text-sm">Laranja Ritual aparece apenas em lighting de fotos rituais, criando contraste com a interface clean.</p>
              </div>
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">Contraste</h4>
                <p className="text-sm">Sempre garanta contraste mínimo de 4.5:1 para legibilidade em todos os pares de cores.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cosmic-black/30 rounded-xl p-6">
            <h4 className="font-semibold matrix-text mb-4">EXEMPLO DE APLICAÇÃO</h4>
            <div className="space-y-3">
              <div className="bg-matrix-green/10 border border-matrix-green/30 rounded-lg p-4">
                <div className="text-matrix-green font-semibold mb-2">CALL TO ACTION</div>
                <div className="text-mineral-white/80 text-sm">Botão ou elemento de destaque</div>
              </div>
              <div className="bg-stellar-gray/50 border border-moss-green/20 rounded-lg p-4">
                <div className="text-mineral-white font-semibold mb-2">CONTEÚDO</div>
                <div className="text-mineral-white/60 text-sm">Cards e blocos de informação</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ColorPalette;
