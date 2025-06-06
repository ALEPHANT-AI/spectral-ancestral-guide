
import React from 'react';
import { Card } from '@/components/ui/card';
import { Instagram, Video, Presentation } from 'lucide-react';

const PracticalApplications = () => {
  const applications = [
    {
      icon: Instagram,
      title: 'SOCIAL MEDIA',
      description: 'Posts para Instagram e LinkedIn',
      features: [
        'Carrosséis com design clean',
        'Quotes em matriz green sobre preto',
        'Fotos com branding consistente',
        'Stories com elementos minimalistas',
        'Templates reutilizáveis'
      ]
    },
    {
      icon: Video,
      title: 'VÍDEO CONTENT',
      description: 'YouTube, reels e conteúdo audiovisual',
      features: [
        'Lower thirds matrix green',
        'Backgrounds cosmic-black',
        'Tipografia legível em movimento',
        'Transições suaves e tech',
        'Elementos gráficos minimalistas'
      ]
    },
    {
      icon: Presentation,
      title: 'PITCH DECKS',
      description: 'Apresentações comerciais e estratégicas',
      features: [
        'Slides com fundo cosmic-black',
        'Títulos em matrix-green impact',
        'Gráficos com paleta brand',
        'Fotos rituais como elementos visuais',
        'Tipografia Space Grotesk limpa'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="matrix-text">APLICAÇÕES</span>
          <span className="text-mineral-white"> PRÁTICAS</span>
        </h2>
        <p className="text-xl text-mineral-white/70 max-w-3xl mx-auto leading-relaxed">
          Como a identidade visual se traduz em diferentes mídias e pontos de contato.
          Consistência em todos os canais de comunicação.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Applications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <Card key={app.title} className="brand-card hover:scale-[1.02] transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-matrix-green/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-matrix-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold matrix-text">{app.title}</h3>
                      <p className="text-sm text-mineral-white/70">{app.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-matrix-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-mineral-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Social Media Templates */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">TEMPLATES SOCIAL MEDIA</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram Post */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">INSTAGRAM POST</h4>
              <div className="aspect-square bg-cosmic-black/80 rounded-xl p-6 border border-moss-green/20 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <img 
                    src="/lovable-uploads/38d9b5b0-77fe-465f-8796-f221c6ac0dfd.png" 
                    alt="Logo" 
                    className="w-6 h-6 object-contain opacity-60"
                  />
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-matrix-green/30 rounded" />
                    <div className="w-3/4 h-4 bg-mineral-white/20 rounded" />
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-ritual-orange/20 rounded-full mx-auto mb-4" />
                    <div className="w-32 h-3 bg-mineral-white/30 rounded mx-auto" />
                  </div>
                  <div className="w-24 h-6 bg-matrix-green/20 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Story Template */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">INSTAGRAM STORY</h4>
              <div className="aspect-[9/16] bg-cosmic-black/80 rounded-xl p-6 border border-moss-green/20">
                <div className="h-full flex flex-col justify-between">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-4 bg-matrix-green/30 rounded mx-auto" />
                    <div className="w-32 h-6 bg-mineral-white/20 rounded mx-auto" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-24 h-24 bg-ritual-orange/20 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-mineral-white/20 rounded" />
                    <div className="w-2/3 h-3 bg-mineral-white/10 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div>
              <h4 className="font-semibold text-matrix-green mb-4">CARROSSEL</h4>
              <div className="aspect-square bg-cosmic-black/80 rounded-xl p-4 border border-moss-green/20">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="bg-stellar-gray/30 rounded-lg p-3 relative">
                    <div className="absolute top-2 right-2">
                      <img 
                        src="/lovable-uploads/38d9b5b0-77fe-465f-8796-f221c6ac0dfd.png" 
                        alt="Logo" 
                        className="w-4 h-4 object-contain opacity-40"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-matrix-green/30 rounded" />
                      <div className="w-3/4 h-2 bg-mineral-white/20 rounded" />
                    </div>
                  </div>
                  <div className="bg-stellar-gray/30 rounded-lg p-3">
                    <div className="w-full h-8 bg-ritual-orange/20 rounded" />
                  </div>
                  <div className="bg-stellar-gray/30 rounded-lg p-3">
                    <div className="w-full h-8 bg-moss-green/20 rounded" />
                  </div>
                  <div className="bg-stellar-gray/30 rounded-lg p-3">
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-mineral-white/20 rounded" />
                      <div className="w-1/2 h-2 bg-matrix-green/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Real Photo Applications */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-8">APLICAÇÕES COM FOTOGRAFIA REAL</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* LinkedIn Post Example */}
            <div className="space-y-4">
              <h4 className="font-semibold text-matrix-green">LINKEDIN POST EXAMPLE</h4>
              <div className="bg-cosmic-black/60 rounded-xl p-6 border border-moss-green/20">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/lovable-uploads/38d9b5b0-77fe-465f-8796-f221c6ac0dfd.png" 
                      alt="Logo" 
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <div className="text-sm font-medium text-mineral-white">Movimento Futuro Ancestral</div>
                      <div className="text-xs text-mineral-white/60">Transformação Digital Humana</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-sm text-mineral-white/90">
                      "A IA vai nos forçar a voltar a ser humanos."
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/aa6d391d-42a4-4fb7-b422-54a162bad075.png" 
                        alt="Conteúdo visual da marca"
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <p className="text-xs text-mineral-white/70">
                      Enquanto a IA assume tarefas mecânicas, redescubrimos nossa essência ancestral.
                    </p>
                  </div>
                  
                  {/* Engagement */}
                  <div className="flex items-center space-x-4 pt-2 border-t border-moss-green/20">
                    <div className="text-xs text-matrix-green">👍 147</div>
                    <div className="text-xs text-matrix-green">💬 23</div>
                    <div className="text-xs text-matrix-green">🔄 41</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Thumbnail Example */}
            <div className="space-y-4">
              <h4 className="font-semibold text-matrix-green">VIDEO THUMBNAIL</h4>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/1a34fed5-2820-42b0-af7b-a12a53fe5237.png" 
                  alt="Video thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-cosmic-black/40" />
                <div className="absolute top-4 left-4">
                  <img 
                    src="/lovable-uploads/38d9b5b0-77fe-465f-8796-f221c6ac0dfd.png" 
                    alt="Logo" 
                    className="w-6 h-6 object-contain opacity-90"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h5 className="text-sm font-bold text-matrix-green mb-1">
                    O FUTURO É ANCESTRAL
                  </h5>
                  <p className="text-xs text-mineral-white/80">
                    Como a IA nos liberta para sermos humanos
                  </p>
                </div>
                <div className="absolute center-center">
                  <div className="w-12 h-12 bg-matrix-green/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-4 border-l-matrix-green border-y-2 border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Usage Guidelines */}
        <Card className="brand-card">
          <h3 className="text-2xl font-bold matrix-text mb-6">DIRETRIZES DE APLICAÇÃO</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">CONSISTÊNCIA</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Paleta de cores sempre respeitada</li>
                <li>• Tipografia Space Grotesk em toda comunicação</li>
                <li>• Espaçamentos baseados na escala 8pt</li>
                <li>• Elementos matrix apenas para CTAs/destaques</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">FLEXIBILIDADE</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Adaptar layouts para diferentes formatos</li>
                <li>• Manter essência em todas as aplicações</li>
                <li>• Elementos rituais apenas em fotografia</li>
                <li>• Interface sempre clean e tecnológica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-matrix-green mb-3">QUALIDADE</h4>
              <ul className="space-y-2 text-sm text-mineral-white/80">
                <li>• Imagens sempre em alta resolução</li>
                <li>• Textos revisados e impactantes</li>
                <li>• Elementos alinhados matematicamente</li>
                <li>• Testes em diferentes dispositivos</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PracticalApplications;
