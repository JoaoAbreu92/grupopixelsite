/**
 * Páginas de Serviços (Sites Modernos e Web Applications)
 * Layouts focados em conversão e demonstração tecnológica.
 * Cores atualizadas para a paleta da marca (Verde, Branco e Cinza).
 */

import React from 'react';
import { Button } from './Button';
import {
  Layout, Smartphone, Search, Globe, Database, Cloud,
  MousePointerClick, Zap, Rocket, Shield, Terminal,
  Code2, Monitor, Cpu, Gauge
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Página: Sites Modernos
export const ModernSitesPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section - Premium & Animated */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-[#0A0F1E] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-600/10 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-widest uppercase">
                <Globe size={14} className="animate-spin-slow" />
                Presença Digital de Elite
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                Sites que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600">
                  Conectam sua Marca.
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Não fazemos apenas sites. Construímos motores de conversão com design premium e performance extrema para colocar sua marca no topo do Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => navigate('/cadastro')} className="bg-brand-600 hover:bg-brand-500 shadow-xl shadow-brand-600/20 text-lg py-7 px-10">
                  Iniciar Projeto
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Simulated Speed Test UI */}
            <div className="flex-1 relative group w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full animate-pulse-glow"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="flex items-center justify-between mb-12">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">PageSpeed Insights</p>
                    <h4 className="text-xl font-bold">Mobile Performance</h4>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-brand-500 flex items-center justify-center text-brand-500 font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    100
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'First Contentful Paint', value: '0.4s', icon: <Gauge size={14} /> },
                    { label: 'Speed Index', value: '0.6s', icon: <Zap size={14} /> },
                    { label: 'Largest Contentful Paint', value: '0.8s', icon: <Smartphone size={14} /> }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-brand-500/20 rounded-lg text-brand-400">
                          {stat.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                      </div>
                      <span className="font-bold text-brand-400">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center opacity-60">
                  <div className="bg-gray-800 h-2 w-32 rounded-full"></div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Smartphone />,
                title: "Touch Optimized",
                desc: "Responsividade nível A+, focada na melhor experiência de toque e navegação mobile."
              },
              {
                icon: <Search />,
                title: "SEO Structural",
                desc: "Estrutura semântica que o Google ama, garantindo que seu site seja encontrado."
              },
              {
                icon: <Gauge />,
                title: "LXP Performance",
                desc: "Lightweight Experience: código limpo para carregamento abaixo de 1 segundo."
              },
              {
                icon: <Layout />,
                title: "UI Conversion",
                desc: "Design psicológico focado em gatilhos de conversão e jornadas de compra."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-brand-500/5 transition-all duration-500 group border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Experiências Reais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Resultados mensuráveis entregues para parceiros que buscaram o próximo nível.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Coldox Frios",
                url: "https://coldox.com.br/",
                logo: "/coldox-logo.png",
                tag: "Indústria de Alimentos",
                desc: "Plataforma institucional robusta com catálogo dinâmico de produtos."
              },
              {
                name: "Cordel com Açaí",
                url: "https://cordelcomacai.com/",
                logo: "/cordel-logo.png",
                tag: "Cultura & Poesia",
                desc: "Experiência imersiva de leitura com design focado em acessibilidade."
              }
            ].map((client, i) => (
              <div key={i} className="group relative bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[16/10] mb-6 rounded-2xl bg-gray-50 overflow-hidden relative flex items-center justify-center border border-gray-100">
                  <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border border-gray-100 transform group-hover:scale-110 transition-transform duration-700">
                    <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="space-y-3 mb-8 text-center md:text-left">
                  <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">{client.tag}</div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{client.name}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">{client.desc}</p>
                </div>
                <a 
                  href={client.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-gray-900/10 group-hover:shadow-brand-600/30"
                >
                  Visitar Projeto
                  <ChevronRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Página: Web Applications
export const WebAppsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#050810] min-h-screen text-white overflow-hidden uppercase-none">
      {/* Hero Section - Technical & Dark */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-52">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-[800px] bg-brand-600/5 blur-[150px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div className="flex items-center gap-3">
                <div className="bg-brand-500/20 text-brand-400 p-2 rounded-lg border border-brand-500/30">
                  <Cpu size={24} className="animate-pulse" />
                </div>
                <span className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">Enterprise Engineering</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Software que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-400 to-purple-500">
                  Molda seu Negócio.
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed font-light max-w-xl">
                Criamos ecossistemas complexos, CRMs sob medida e dashboards inteligentes com as tecnologias mais usadas do momento.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { label: 'Uptime', val: '99.9%' },
                  { label: 'Security', val: 'End-to-end' },
                  { label: 'Cloud', val: 'Auto-scaling' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 border-l border-brand-500/30 pl-6">
                    <span className="text-2xl font-bold font-display">{stat.val}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-5">
                <Button size="lg" onClick={() => navigate('/cadastro')} className="bg-brand-600 hover:bg-brand-500 py-7 px-10 text-lg shadow-2xl shadow-brand-500/20">
                  Agendar Mentoria Técnica
                </Button>
              </div>
            </div>

            {/* Simulated Logic Controller / Terminal */}
            <div className="flex-1 w-full max-w-xl">
              <div className="bg-[#0d1117] rounded-[40px] p-2 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative group">
                {/* Floating Tech Badges */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-float z-20">
                  <Database className="text-white" size={32} />
                </div>

                <div className="bg-[#161b22] rounded-[38px] p-8 min-h-[450px] relative overflow-hidden border border-white/5">
                  <div className="flex items-center gap-2 mb-10 opacity-40">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-px bg-white/10 flex-1"></div>
                  </div>

                  <div className="font-mono text-sm space-y-6">
                    <div className="flex items-center gap-4 text-brand-400">
                      <Terminal size={18} />
                      <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-brand-500 w-fit pr-1 inline-block">Connecting to Infrastructure...</span>
                    </div>

                    <div className="space-y-4 pt-4">
                      {[
                        { label: 'Bancos de Dados Relacionais', status: 'Healthy', color: 'text-green-400' },
                        { label: 'Clusters de Microserviços', status: 'Scaling', color: 'text-blue-400' },
                        { label: 'Firewall de Segurança', status: 'Secured', color: 'text-brand-400' },
                        { label: 'Gateway de Integração', status: 'Online', color: 'text-green-400' }
                      ].map((sys, i) => (
                        <div key={i} className="flex flex-col gap-2 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-xs">{sys.label}</span>
                            <span className={`text-[10px] font-bold ${sys.color} uppercase tracking-tighter`}>{sys.status}</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${sys.color.replace('text', 'bg')} opacity-40 rounded-full w-4/5 animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detail Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#161b22] to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stack Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database />,
                title: "Business Intelligence",
                desc: "Transformamos dados brutos em insights poderosos com dashboards de análise em tempo real."
              },
              {
                icon: <Cloud />,
                title: "Cloud Native",
                desc: "Sua aplicação nasce na nuvem, pronta para escalar infinitamente conforme o sucesso do seu negócio."
              },
              {
                icon: <Shield />,
                title: "Security Hardened",
                desc: "Protocolos de segurança de nível corporativo e monitoramento constante contra ameaças."
              }
            ].map((item, i) => (
              <div key={i} className="group p-12 bg-white/5 rounded-[48px] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-700">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-400 mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 30 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Architecture Section */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5">
          <Code2 size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight font-display">Arquitetura de <br /> Nível Global</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nossa equipe de programadores segue os padrões mais rigorosos do mercado mundial. Desenvolvemos soluções em **Node.js, TypeScript e React**, garantindo que cada linha de código seja eficiente e modular.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'Next.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map(tech => (
                <span key={tech} className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs font-bold text-gray-400 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet Premium */}
          <div className="flex-1 w-full bg-white/5 rounded-[32px] p-8 border border-white/10 shadow-3xl font-mono text-xs overflow-hidden backdrop-blur-md">
            <div className="flex gap-2 mb-8 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-brand-500/50"></div>
              <div className="px-3 text-brand-400 border-b border-brand-400 pb-4 mb-[-17px] font-bold">core_logic.ts</div>
              <div className="px-3 text-gray-600">types.d.ts</div>
            </div>
            <div className="space-y-2 py-4">
              <p className="text-purple-400">interface <span className="text-blue-400">SystemConfig</span> {"{"}</p>
              <p className="pl-4 text-gray-400">scale: <span className="text-yellow-400">boolean</span>;</p>
              <p className="pl-4 text-gray-400">performance: <span className="text-emerald-400">'MAX' | 'ULTRA'</span>;</p>
              <p className="text-purple-400">{"}"}</p>
              <p className="pt-4 text-purple-400">export const <span className="text-yellow-400">bootstrap</span> = () ={'>'} {"{"}</p>
              <p className="pl-4 text-gray-500 italic">{"// Inicializando infraestrutura auto-escalável"}</p>
              <p className="pl-4 text-emerald-400"><span className="text-purple-400">return</span> <span className="text-blue-400">new</span> PixelCloudEngine<span className="text-gray-400">({"{"}</span></p>
              <p className="pl-8 text-gray-400">security: <span className="text-purple-400">true</span>,</p>
              <p className="pl-8 text-gray-400">cacheStrategy: <span className="text-yellow-400">'REDIS_MASTER'</span></p>
              <p className="pl-4 text-gray-400">{"});"}</p>
              <p className="text-purple-400">{"}"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);