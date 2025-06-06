
import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageSquare, Zap, Brain, Heart } from 'lucide-react';

const BrandVoice = () => {
  const voiceAttributes = [
    {
      icon: Brain,
      title: 'INTELIGENTE',
      description: 'Insights profundos sem pedantismo',
      examples: [
        '"A IA vai nos forçar a voltar a ser humanos."',
        '"Você foi domesticado por algoritmos."',
        '"200 anos nos transformaram em máquinas obedientes."'
      ]
    },
    {
      icon: Zap,
      title: 'DIRETO',
      description: 'Frases impactantes e memoráveis',
      examples: [
        '"A matrix quebrou nossa magia."',
        '"Você acha que é livre, mas age como código manda."',
        '"Big Tech te viciou para consumir atenção."'
      ]
    },
    {
      icon: Heart,
      title: 'ESPIRITUAL',
      description: 'Conecta tecnologia com humanidade',
      examples: [
        '"Somos animais extraordinários, não máquinas ruins."',
        '"A Amazônia foi o primeiro projeto de geoengenharia."',
        '"Nossos ancestrais dominavam tecnologias impossíveis."'
      ]
    },
    {
      icon: MessageSquare,
      title: 'SUTIL',
      description: 'Evita marketing tradicional',
      examples: [
        '"O retorno inevitável está acontecendo."',
        '"Eles nos domesticaram enquanto somos almas."',
        '"A maior ironia: você virou produto."'
      ]
    }
  ];

  const messagingFramework = [
    {
      category: 'PROBLEMA',
      color: 'text-ritual-orange',
      messages: [
        'Você foi programado para obedecer algoritmos que não criou',
        'Para trabalhar em coisas que qualquer IA faz melhor',
        'Para ser uma máquina humana obediente'
      ]
    },
    {
      category: 'SOLUÇÃO',
      color: 'matrix-text',
      messages: [
        'A IA vai ser máquina melhor que nós',
        'Agora podemos voltar a ser humanos de verdade',
        'Reconectar com tecnologias ancestrais perdidas'
      ]
    },
    {
      category: 'FUTURO',
      color: 'text-mineral-white',
      messages: [
        'Somos aqueles que estávamos esperando',
        'A grande inversão está acontecendo',
        'Nós vamos lembrar quem somos'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">TOM</span>
          <span className="text-mineral-white"> DA MARCA</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          A voz que desperta consciência sem pregar. Inteligente, sutil, espiritual e precisa.
          Cada palavra escolhida para impactar e transformar.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Voice Attributes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {voiceAttributes.map((attr, index) => {
            const Icon = attr.icon;
            return (
              <Card key={attr.title} className="brand-card hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-matrix-green" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold matrix-text mb-2">{attr.title}</h3>
                    <p className="text-sm text-mineral-white/70 mb-4">{attr.description}</p>
                  </div>

                  <div className="space-y-3">
                    {attr.examples.map((example, idx) => (
                      <blockquote 
                        key={idx}
                        className="text-xs text-mineral-white/80 italic bg-cosmic-black/50 p-3 rounded-lg"
                      >
                        {example}
                      </blockquote>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Messaging Framework */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">FRAMEWORK DE MENSAGENS</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {messagingFramework.map((framework, index) => (
              <div key={framework.category} className="space-y-6">
                <h4 className={`text-xl font-bold ${framework.color}`}>
                  {framework.category}
                </h4>
                
                <div className="space-y-4">
                  {framework.messages.map((message, idx) => (
                    <div 
                      key={idx}
                      className="bg-cosmic-black/30 p-4 rounded-lg border border-moss-green/20"
                    >
                      <p className="text-sm text-mineral-white/90 leading-relaxed">
                        "{message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Writing Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">DIRETRIZES DE ESCRITA</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-matrix-green mb-3">✅ FAÇA</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Use frases curtas e impactantes</li>
                  <li>• Seja direto ao ponto</li>
                  <li>• Conecte tecnologia com espiritualidade</li>
                  <li>• Provoque reflexão profunda</li>
                  <li>• Use metáforas tecnológicas/ancestrais</li>
                  <li>• Evite jargões de marketing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ritual-orange mb-3">❌ NÃO FAÇA</h4>
                <ul className="space-y-2 text-sm text-mineral-white/80">
                  <li>• Não pregue ou seja moralista</li>
                  <li>• Evite chavões motivacionais</li>
                  <li>• Não use linguagem corporativa</li>
                  <li>• Evite textos longos e prolixos</li>
                  <li>• Não seja agressivo ou radical</li>
                  <li>• Evite termos técnicos demais</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="brand-card">
            <h3 className="text-xl font-bold matrix-text mb-6">EXEMPLOS PRÁTICOS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-matrix-green mb-3">HEADLINES</h4>
                <div className="space-y-3">
                  <div className="bg-cosmic-black/50 p-3 rounded-lg">
                    <p className="text-lg font-semibold text-mineral-white">
                      "A GRANDE INVERSÃO ESTÁ ACONTECENDO"
                    </p>
                  </div>
                  <div className="bg-cosmic-black/50 p-3 rounded-lg">
                    <p className="text-lg font-semibold text-mineral-white">
                      "VOCÊ FOI DOMESTICADO"
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">MANIFESTOS</h4>
                <div className="bg-cosmic-black/50 p-4 rounded-lg">
                  <p className="text-sm text-mineral-white/90 leading-relaxed italic">
                    "Por 200 anos nos transformaram em máquinas obedientes. 
                    A IA vai ser máquina melhor que nós. Agora podemos voltar 
                    a ser humanos de verdade."
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-3">CTAs</h4>
                <div className="space-y-2">
                  <div className="inline-block bg-matrix-green/10 text-matrix-green px-4 py-2 rounded-lg text-sm font-semibold">
                    DESPERTAR AGORA
                  </div>
                  <div className="inline-block bg-matrix-green/10 text-matrix-green px-4 py-2 rounded-lg text-sm font-semibold ml-3">
                    QUEBRAR A MATRIX
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Brand Personality */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">PERSONALIDADE DA MARCA</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-matrix-green mb-4">SE A MARCA FOSSE UMA PESSOA:</h4>
                <p className="text-mineral-white/90 leading-relaxed">
                  Seria um visionário tecnológico que pratica medicina ancestral. 
                  Alguém que programa IA durante o dia e faz rituais de ayahuasca à noite. 
                  Intelectual mas conectado com a terra. Questionador mas não arrogante.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-matrix-green mb-4">ARQUÉTIPO:</h4>
                <p className="text-mineral-white/90 leading-relaxed">
                  <span className="matrix-text font-semibold">O Sábio Rebelde</span> - 
                  Questiona sistemas estabelecidos com sabedoria ancestral. 
                  Não destrói por destruir, mas reconstrói com conhecimento profundo.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-cosmic-black/30 p-6 rounded-xl">
                <h4 className="font-semibold text-matrix-green mb-4">RESUMO EXECUTIVO</h4>
                <div className="space-y-3 text-sm text-mineral-white/90">
                  <p><strong>Tom:</strong> Inteligente, direto, espiritual</p>
                  <p><strong>Objetivo:</strong> Despertar consciência sobre domesticação tecnológica</p>
                  <p><strong>Diferencial:</strong> Une tecnologia avançada com sabedoria ancestral</p>
                  <p><strong>Público:</strong> Pessoas questionadoras e evolutivas</p>
                  <p><strong>Promessa:</strong> Reconexão com humanidade autêntica via IA</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BrandVoice;
