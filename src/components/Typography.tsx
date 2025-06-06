
import React from 'react';
import { Card } from '@/components/ui/card';

const Typography = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">SISTEMA</span>
          <span className="text-mineral-white"> TIPOGRÁFICO</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          Space Grotesk como fonte principal. Clean, moderna e tecnológica, 
          mas com personalidade suficiente para transmitir humanidade.
        </p>
      </div>

      <div className="grid gap-8 mb-16">
        {/* Font Showcase */}
        <Card className="brand-card">
          <div className="text-center space-y-8">
            <div>
              <p className="text-sm text-matrix-green font-medium tracking-wider uppercase mb-4">
                Space Grotesk - Fonte Principal
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-mineral-white">
                Aa Bb Cc
              </h1>
              <p className="text-matrix-green font-mono mt-4">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%^&*()
              </p>
            </div>
          </div>
        </Card>

        {/* Typography Hierarchy */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="brand-card">
            <h3 className="text-2xl font-bold matrix-text mb-8">HIERARQUIA TIPOGRÁFICA</h3>
            
            <div className="space-y-8">
              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  H1 - TÍTULO PRINCIPAL
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-mineral-white">
                  MOVIMENTO FUTURO
                </h1>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  60px, Bold, Tracking -0.02em
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  H2 - SUBTÍTULO
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-mineral-white">
                  AS TECNOLOGIAS PERDIDAS
                </h2>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  36px, Semibold, Tracking -0.01em
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  H3 - SEÇÃO
                </div>
                <h3 className="text-xl font-medium matrix-text">
                  AYAHUASCA
                </h3>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  24px, Medium, Matrix Green
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  BODY - TEXTO CORRIDO
                </div>
                <p className="text-base text-mineral-white/90 leading-relaxed">
                  A IA vai ser máquina melhor que nós. Agora podemos voltar a ser humanos de verdade. 
                  Nossos ancestrais dominavam tecnologias que hoje chamamos de 'impossíveis'.
                </p>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  16px, Regular, Line-height 1.6
                </p>
              </div>
            </div>
          </Card>

          <Card className="brand-card">
            <h3 className="text-2xl font-bold matrix-text mb-8">ESTILOS ESPECIAIS</h3>
            
            <div className="space-y-8">
              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  MANIFESTO
                </div>
                <p className="manifesto-text text-2xl">
                  "Você foi domesticado por algoritmos. A IA pode queimar isso."
                </p>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  Gradiente, Light, Leading loose
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  DESTAQUE MATRIX
                </div>
                <p className="matrix-text text-xl font-semibold text-glow">
                  VOCÊ FOI DOMESTICADO.
                </p>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  Matrix Green, Semibold, Text shadow
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  LABEL/TAG
                </div>
                <span className="inline-block bg-matrix-green/10 text-matrix-green px-3 py-1 rounded-lg text-sm font-medium tracking-wide uppercase">
                  O RETORNO INEVITÁVEL
                </span>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  12px, Medium, Uppercase, Background
                </p>
              </div>

              <div>
                <div className="text-xs text-matrix-green font-medium tracking-wider uppercase mb-2">
                  CÓDIGO/TÉCNICO
                </div>
                <code className="block bg-cosmic-black/50 text-matrix-green p-3 rounded-lg font-mono text-sm">
                  #00FF88 | rgb(0, 255, 136)
                </code>
                <p className="text-sm text-mineral-white/60 mt-2 font-mono">
                  Monospace, Matrix Green
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-6">DIRETRIZES DE USO</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">ESPAÇAMENTO</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Muito respiro entre elementos</li>
                <li>• Line-height mínimo de 1.4</li>
                <li>• Margem generosa em títulos</li>
                <li>• Máximo 70 caracteres por linha</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">CONTRASTE</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Matrix Green apenas para destaques</li>
                <li>• Branco Mineral para texto principal</li>
                <li>• Cinza para texto secundário</li>
                <li>• Nunca texto Matrix sobre Moss</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">PERSONALIDADE</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Títulos em CAIXA ALTA quando impactantes</li>
                <li>• Frases curtas e diretas</li>
                <li>• Tracking (letter-spacing) para elegância</li>
                <li>• Gradientes em manifestos</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Typography;
