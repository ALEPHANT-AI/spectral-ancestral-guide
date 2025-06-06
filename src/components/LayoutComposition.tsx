
import React from 'react';
import { Card } from '@/components/ui/card';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

const LayoutComposition = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">COMPOSIÇÃO</span>
          <span className="text-mineral-white"> & LAYOUT</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          Grids matemáticos, espaçamento generoso e hierarquia visual clara.
          Layouts que respiram e conduzem o olhar naturalmente.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Responsive Breakpoints */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">BREAKPOINTS RESPONSIVOS</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">MOBILE</h4>
                <p className="text-sm text-mineral-white/70 mb-3">320px - 768px</p>
                <ul className="text-xs text-mineral-white/60 space-y-1">
                  <li>• 1 coluna principal</li>
                  <li>• Stack vertical</li>
                  <li>• Padding 16px</li>
                  <li>• Touch targets 44px+</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Tablet className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">TABLET</h4>
                <p className="text-sm text-mineral-white/70 mb-3">768px - 1024px</p>
                <ul className="text-xs text-mineral-white/60 space-y-1">
                  <li>• 2 colunas flexíveis</li>
                  <li>• Grid adaptativo</li>
                  <li>• Padding 24px</li>
                  <li>• Sidebar colapsável</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                <Monitor className="text-matrix-green" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-matrix-green mb-2">DESKTOP</h4>
                <p className="text-sm text-mineral-white/70 mb-3">1024px+</p>
                <ul className="text-xs text-mineral-white/60 space-y-1">
                  <li>• Grid 12 colunas</li>
                  <li>• Max-width 1400px</li>
                  <li>• Padding 32px</li>
                  <li>• Layouts complexos</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Grid System */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">SISTEMA DE GRID</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-mineral-white mb-3">ESPECIFICAÇÕES</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• <strong>Colunas:</strong> 12 (desktop), 6 (tablet), 1 (mobile)</li>
                  <li>• <strong>Gutter:</strong> 24px entre colunas</li>
                  <li>• <strong>Margin:</strong> 32px laterais (desktop)</li>
                  <li>• <strong>Max Width:</strong> 1400px centralizado</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">GRID VISUAL</h4>
                <div className="grid grid-cols-12 gap-1 h-16">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-matrix-green/10 rounded-sm flex items-center justify-center"
                    >
                      <span className="text-xs text-matrix-green/60">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">ESPAÇAMENTO</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-mineral-white mb-3">ESCALA 8PT</h4>
                <div className="space-y-3">
                  {[
                    { size: '4px', name: 'XS', usage: 'Bordas, detalhes' },
                    { size: '8px', name: 'SM', usage: 'Elementos próximos' },
                    { size: '16px', name: 'MD', usage: 'Padrão geral' },
                    { size: '24px', name: 'LG', usage: 'Entre seções' },
                    { size: '32px', name: 'XL', usage: 'Seções principais' },
                    { size: '64px', name: '2XL', usage: 'Separação major' },
                  ].map((space) => (
                    <div key={space.name} className="flex items-center space-x-4">
                      <div 
                        className="bg-matrix-green/20 rounded-sm"
                        style={{ width: space.size, height: '12px' }}
                      />
                      <span className="text-sm text-matrix-green font-mono w-12">{space.size}</span>
                      <span className="text-sm text-mineral-white/70">{space.usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Layout Examples */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">EXEMPLOS DE LAYOUT</h3>
          
          <div className="grid gap-8">
            {/* Hero Layout */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">HERO SECTION</h4>
              <div className="bg-cosmic-black/30 rounded-xl p-8 border border-moss-green/20">
                <div className="text-center space-y-6">
                  <div className="w-24 h-4 bg-matrix-green/30 rounded mx-auto" />
                  <div className="w-80 h-8 bg-mineral-white/20 rounded mx-auto" />
                  <div className="w-96 h-6 bg-mineral-white/10 rounded mx-auto" />
                  <div className="w-32 h-10 bg-matrix-green/20 rounded-lg mx-auto" />
                </div>
              </div>
            </div>

            {/* Card Grid */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">GRID DE CARDS</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-stellar-gray/30 rounded-xl p-6 border border-moss-green/20"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-matrix-green/20 rounded-lg" />
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-mineral-white/20 rounded" />
                        <div className="w-3/4 h-3 bg-mineral-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Layout */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">LAYOUT DE CONTEÚDO</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-48 h-6 bg-matrix-green/30 rounded" />
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-mineral-white/20 rounded" />
                    <div className="w-full h-3 bg-mineral-white/20 rounded" />
                    <div className="w-2/3 h-3 bg-mineral-white/20 rounded" />
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-ritual-orange/10 to-moss-green/10 rounded-xl border border-moss-green/20" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LayoutComposition;
