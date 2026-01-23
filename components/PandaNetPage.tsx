import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { 
  ExternalLink, 
  Rocket, 
  ShieldCheck, 
  Users, 
  FileText, 
  Layout, 
  MessageSquare, 
  Share2,
  ChevronRight,
  Monitor,
  Zap
} from 'lucide-react';
import { Logo } from './Logo';

export const PandaNetPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section PandaNet - Premium & Dark */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0c] text-white pt-20 overflow-hidden">
        {/* Efeitos de Fundo (Blobs) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -mr-64 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] -ml-48 -mb-32"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texto Hero */}
            <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl border border-brand-500/30 backdrop-blur-xl shadow-2xl shadow-brand-500/20 animate-in fade-in zoom-in duration-700 overflow-hidden">
                  <Logo app="pandanet" className="w-12 h-12" />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">PandaNet Enterprise</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">Powered by Grupopixel</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                PandaNet: A Intranet <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">
                  Reinventada
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                Centralize comunicados, documentos e a cultura da sua empresa em um ecossistema 
                <span className="text-white"> moderno, seguro e gamificado.</span> A comunicação que o seu time merece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 relative z-50">
                <a 
                  href="https://pandanet.grupopixel.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white border-none px-10 py-7 text-[19px] font-bold group shadow-xl shadow-brand-500/20 w-full sm:w-auto">
                    Acessar PandaNet
                    <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </a>
                <Button 
                  onClick={() => navigate('/cadastro')}
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-7 text-[19px] font-bold w-full sm:w-auto transition-all"
                >
                  Agendar Demonstração
                </Button>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-12 flex items-center gap-6 text-gray-500 border-t border-white/5 pt-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-400" />
                  <span className="text-xs font-medium uppercase tracking-tighter">Segurança Enterprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-brand-400" />
                  <span className="text-xs font-medium uppercase tracking-tighter">Foco em Engajamento</span>
                </div>
              </div>
            </div>

            {/* Visual Preview (Mockup flutuante) */}
            <div className="relative animate-in zoom-in duration-1000 delay-200 lg:pl-10">
              <div className="relative z-10 glass-morphism rounded-3xl border border-white/10 shadow-2xl overflow-hidden group max-w-[500px] lg:max-w-none mx-auto">
                {/* Header do Mockup */}
                <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-4 h-5 w-3/4 bg-white/10 rounded-md"></div>
                </div>
                
                {/* Conteúdo Simulado */}
                <div className="p-4 bg-[#0c0c0e]">
                   <img 
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
                    alt="PandaNet Interface Preview" 
                    className="w-full h-auto rounded-xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Flutuante Interativo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 flex flex-col items-center gap-4">
                    <div className="bg-brand-500 p-4 rounded-full shadow-2xl animate-pulse">
                      <Monitor size={32} className="text-white" />
                    </div>
                    <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-bold border border-white/10">Interface Intuitiva</span>
                  </div>
                </div>
              </div>

              {/* Cards Flutuantes de Status - Reposicionados para evitar overlap e ficar na FRENTE */}
              <div className="absolute -top-12 -right-12 glass-morphism p-4 rounded-2xl border border-white/20 shadow-xl hidden xl:block animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-full">
                    <Zap className="text-green-400 w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tight">Engajamento</div>
                    <div className="text-lg font-bold text-white">+85%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl hidden xl:block animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                    <span className="text-xs font-bold">Novo Comunicado:</span>
                 </div>
                 <div className="text-sm font-medium text-gray-200">Resultado do Trimestre! 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Funcionalidades Principais */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Recursos de <span className="text-brand-600">Elite</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Tudo o que sua equipe precisa para se manter informada, conectada e produtiva em um só lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-[#0c0c0e] border border-white/10 p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group/cta transition-all duration-700 hover:border-brand-500/40">
          {/* Fundo Premium com Gradiente Suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-transparent to-brand-900/40"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] group-hover:bg-brand-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] group-hover:bg-brand-600/20 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <div className="inline-block p-4 bg-brand-500/10 rounded-2xl border border-brand-500/20 mb-8 animate-bounce">
              <Rocket className="text-brand-400 animate-pulse" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Venha fazer parte do <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600 leading-normal">PandaNet agora mesmo!</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Junte-se a diversas empresas que já usam o PandaNet para engajar seus times e centralizar informações com inteligência.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-20">
              <Button 
                onClick={() => navigate('/cadastro')}
                size="lg" 
                className="bg-brand-500 text-white hover:bg-brand-400 hover:scale-105 border-none px-16 py-8 text-xl font-bold shadow-2xl shadow-brand-500/40 w-full sm:w-auto transition-all duration-300"
              >
                Testar Gratuitamente
              </Button>
              <Button 
                onClick={() => navigate('/cadastro')}
                size="lg" 
                className="bg-white hover:bg-gray-100 text-black hover:scale-105 border-none px-16 py-8 text-xl font-bold w-full sm:w-auto transition-all duration-300"
              >
                Agendar Demonstração
              </Button>
            </div>
            
            <p className="mt-12 text-gray-500 text-sm font-bold flex items-center justify-center gap-2 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-brand-500" /> Sem cartão de crédito necessário • Setup em 24h
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <MessageSquare />,
    title: "Feed Social",
    description: "Um feed dinâmico para comunicados, conquistas e interação entre os membros da equipe em tempo real."
  },
  {
    icon: <Users />,
    title: "Pessoas",
    description: "Encontre quem você precisa instantaneamente com perfis detalhados, skills e contatos diretos."
  },
  {
    icon: <FileText />,
    title: "Repositório de Arquivos",
    description: "Centralize manuais, documentos legais e materiais de treinamento com controle de acesso robusto."
  },
  {
    icon: <Layout />,
    title: "Widgets Customizáveis",
    description: "Aniversariantes do mês, enquetes e comunicados importantes direto na home do seu time."
  },
  {
    icon: <Share2 />,
    title: "Gamificação",
    description: "Estimule o engajagemto com sistemas de pontos, rankings e reconhecimentos públicos."
  },
  {
    icon: <Monitor />,
    title: "Acesso Mobile",
    description: "Sua intranet em qualquer lugar com interface responsiva otimizada para smartphones e tablets."
  }
];
