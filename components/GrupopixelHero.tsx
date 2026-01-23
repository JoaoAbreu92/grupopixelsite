import React from 'react';
import { Button } from './Button';
import { ChevronRight, Code2, Cpu, Globe, Zap, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export const GrupopixelHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A0F1E] text-white">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content side */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-400 text-sm font-semibold tracking-wide uppercase">
              <Zap size={16} className="text-brand-500" />
              Tecnologia de Próxima Geração
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Transformamos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-400 to-purple-500">
                Ideias em Realidade Digital
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Não fazemos apenas sites. Criamos <strong>Web Applications</strong> robustas, ecossistemas digitais e experiências web modernas que impulsionam o seu negócio para o futuro.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button size="lg" className="px-10 py-7 text-lg bg-brand-600 hover:bg-brand-500 border-none shadow-2xl shadow-brand-600/30 group" onClick={() => navigate('/sites-modernos')}>
                Ver Nossos Serviços
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="px-10 py-7 text-lg border border-white/10 hover:bg-white/5" onClick={() => navigate('/contato')}>
                Falar com Especialista
              </Button>
            </div>

            {/* Quick Stats/Features Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg text-brand-400"><Code2 size={20} /></div>
                <span className="text-sm font-medium">Web Apps</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg text-blue-400"><Globe size={20} /></div>
                <span className="text-sm font-medium">Sites Institucionais</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-white/5 rounded-lg text-purple-400"><Cpu size={20} /></div>
                <span className="text-sm font-medium">Soluções Robustas</span>
              </div>
            </div>
          </div>

          {/* Visual side - Dynamic Tech Element */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative animate-float">
            <div className="relative aspect-square">
                {/* Simulated Modern App UI / Tech visualization */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-purple-600/20 rounded-full blur-[80px]"></div>
                
                <div className="relative h-full flex items-center justify-center">
                    {/* Floating Cards / Elements representing Apps */}
                    <div className="absolute top-10 left-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float-slow">
                        <div className="w-12 h-12 bg-brand-500 rounded-xl mb-4 flex items-center justify-center"><Zap size={24} /></div>
                        <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-white/10 rounded"></div>
                    </div>

                    <div className="absolute bottom-10 right-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-float animation-delay-2000">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                        </div>
                        <div className="h-2 w-32 bg-white/20 rounded mb-2"></div>
                        <div className="h-2 w-24 bg-white/10 rounded"></div>
                    </div>

                    {/* Central Tech Window - Simulated PC/Code */}
                    <div className="relative z-20 w-80 h-60 bg-[#0A0F1E]/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden animate-float">
                        <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                                <Terminal size={12} />
                                code_orchestrator.ts
                            </div>
                        </div>

                        <div className="p-5 font-mono text-xs space-y-3">
                            <div className="flex gap-3">
                                <span className="text-gray-600">01</span>
                                <div className="overflow-hidden whitespace-nowrap border-r-2 border-brand-500 [animation:typing_3s_steps(30)_infinite,blink_.5s_step-end_infinite_alternate] w-full text-brand-400">
                                    <span className="text-purple-400">import</span> {"{ createSystem }"} <span className="text-purple-400">from</span> "@grupopixel";
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-600">02</span>
                                <div className="overflow-hidden whitespace-nowrap border-r-2 border-transparent [animation:typing_3s_steps(30)_infinite_1s,blink_.5s_step-end_infinite_alternate] w-[85%] text-blue-400">
                                    <span className="text-purple-400">const</span> app = <span className="text-yellow-400">createSystem</span>("Scalable");
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-600">03</span>
                                <div className="overflow-hidden whitespace-nowrap border-r-2 border-transparent [animation:typing_3s_steps(30)_infinite_2s,blink_.5s_step-end_infinite_alternate] w-[70%] text-pink-400">
                                    app.<span className="text-yellow-400">bootstrap</span>();
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-600">04</span>
                                <div className="h-4 w-2 bg-brand-500 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Detail elements inside screen */}
                        <div className="absolute bottom-4 right-4 opacity-20">
                            <Code2 size={48} className="text-brand-500" />
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute w-64 h-64 bg-brand-600/20 blur-[100px] rounded-full"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
