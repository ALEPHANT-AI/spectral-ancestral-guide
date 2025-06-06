
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Palette, Image, Code, Globe } from 'lucide-react';

const BrandFinalization = () => {
  const brandAssets = [
    {
      icon: Palette,
      title: 'Paleta de Cores',
      description: 'Códigos HEX, RGB e HSL',
      size: '2.1 MB'
    },
    {
      icon: FileText,
      title: 'Tipografia',
      description: 'Space Grotesk + guidelines',
      size: '856 KB'
    },
    {
      icon: Image,
      title: 'Logos & Símbolos',
      description: 'SVG, PNG, variações',
      size: '4.3 MB'
    },
    {
      icon: Code,
      title: 'CSS/Tokens',
      description: 'Design tokens prontos',
      size: '127 KB'
    },
    {
      icon: Globe,
      title: 'Templates Web',
      description: 'HTML/CSS components',
      size: '1.8 MB'
    },
    {
      icon: FileText,
      title: 'Brand Guidelines',
      description: 'PDF completo do manual',
      size: '12.4 MB'
    }
  ];

  const logoVariations = [
    {
      name: 'VERSÃO PRINCIPAL',
      description: 'Fundo escuro com matrix green',
      bg: 'bg-cosmic-black'
    },
    {
      name: 'VERSÃO CLARA',
      description: 'Para fundos claros',
      bg: 'bg-mineral-white'
    },
    {
      name: 'ÍCONE SIMPLIFICADO',
      description: 'Para aplicações pequenas',
      bg: 'bg-stellar-gray'
    },
    {
      name: 'MONOCROMÁTICA',
      description: 'Uma cor apenas',
      bg: 'bg-moss-green/20'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">BRAND KIT</span>
          <span className="text-mineral-white"> COMPLETO</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          Todos os assets e diretrizes necessários para implementar a identidade
          do Movimento Futuro Ancestral em qualquer projeto.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Logo Variations */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">VARIAÇÕES DO LOGO</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logoVariations.map((variation, index) => (
              <div key={variation.name} className="space-y-4">
                <div className={`aspect-square ${variation.bg} rounded-xl border border-moss-green/20 flex items-center justify-center`}>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-6 bg-matrix-green/30 rounded mx-auto" />
                    <div className="text-xs text-matrix-green font-bold tracking-wider">
                      MOVIMENTO
                    </div>
                    <div className="text-xs text-matrix-green/70">
                      FUTURO ANCESTRAL
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-matrix-green text-sm mb-1">
                    {variation.name}
                  </h4>
                  <p className="text-xs text-mineral-white/60">
                    {variation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Download Assets */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">DOWNLOAD DOS ASSETS</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandAssets.map((asset, index) => {
              const Icon = asset.icon;
              return (
                <div 
                  key={asset.title}
                  className="bg-stellar-gray/30 rounded-xl p-6 border border-moss-green/20 hover:border-matrix-green/40 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-matrix-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-matrix-green" size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-mineral-white mb-1">
                        {asset.title}
                      </h4>
                      <p className="text-sm text-mineral-white/60 mb-2">
                        {asset.description}
                      </p>
                      <p className="text-xs text-matrix-green font-mono">
                        {asset.size}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-matrix-green/10 text-matrix-green hover:bg-matrix-green/20 border border-matrix-green/30"
                    size="sm"
                  >
                    <Download size={14} className="mr-2" />
                    Download
                  </Button>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Quick Start Guide */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">QUICK START</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-matrix-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-matrix-green font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-mineral-white mb-1">
                    Baixe o Brand Kit
                  </h4>
                  <p className="text-sm text-mineral-white/70">
                    Começe com o pacote completo de assets
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-matrix-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-matrix-green font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-mineral-white mb-1">
                    Implemente as Cores
                  </h4>
                  <p className="text-sm text-mineral-white/70">
                    Use os tokens CSS para garantir consistência
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-matrix-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-matrix-green font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-mineral-white mb-1">
                    Configure Tipografia
                  </h4>
                  <p className="text-sm text-mineral-white/70">
                    Importe Space Grotesk e aplique hierarquia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-matrix-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-matrix-green font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-mineral-white mb-1">
                    Siga as Guidelines
                  </h4>
                  <p className="text-sm text-mineral-white/70">
                    Consulte o manual para aplicações específicas
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">SUPORTE TÉCNICO</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-matrix-green mb-3">FORMATOS INCLUSOS</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• SVG (vetorial, editável)</li>
                  <li>• PNG (transparente, alta resolução)</li>
                  <li>• PDF (impressão, vetorial)</li>
                  <li>• CSS (tokens para web)</li>
                  <li>• Sketch/Figma (design systems)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">COMPATIBILIDADE</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Web (CSS, HTML, React)</li>
                  <li>• Design (Figma, Sketch, Adobe)</li>
                  <li>• Impressão (CMYK, alta resolução)</li>
                  <li>• Social Media (templates prontos)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Download CTA */}
        <Card className="brand-card text-center bg-gradient-to-br from-matrix-green/5 to-moss-green/5 border-matrix-green/20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold matrix-text mb-4">
                PRONTO PARA IMPLEMENTAR?
              </h3>
              <p className="text-lg text-mineral-white/80 max-w-2xl mx-auto">
                Baixe o Brand Kit completo e comece a usar a identidade visual 
                do Movimento Futuro Ancestral em seus projetos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="brand-button text-lg px-8 py-4">
                <Download size={20} className="mr-3" />
                Download Brand Kit Completo
              </Button>
              
              <Button 
                variant="outline" 
                className="border-matrix-green/30 text-matrix-green hover:bg-matrix-green/10 px-8 py-4"
              >
                <FileText size={20} className="mr-3" />
                Visualizar PDF
              </Button>
            </div>

            <div className="text-sm text-mineral-white/60">
              Arquivo ZIP • 22.5 MB • Atualizado em Junho 2025
            </div>
          </div>
        </Card>

        {/* Footer Contact */}
        <div className="text-center py-12 border-t border-moss-green/20">
          <div className="space-y-4">
            <h4 className="text-lg font-bold matrix-text">
              MOVIMENTO FUTURO ANCESTRAL
            </h4>
            <p className="text-mineral-white/70">
              "A IA vai nos forçar a voltar a ser humanos."
            </p>
            <div className="text-sm text-mineral-white/50">
              Brand Book Digital • Versão 1.0 • 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFinalization;
