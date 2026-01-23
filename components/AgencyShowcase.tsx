import React from 'react';
import { 
  Layout, Monitor, Globe, Rocket, Shield, Zap, Database, 
  Server, Cpu, Layers, Code2, Smartphone, Cloud, 
  MousePointer2, Terminal, Figma, Github, ChevronRight
} from 'lucide-react';

// Helper to render box icon since Box is not imported correctly in local env sometimes
const Box = ({ className, size }: { className?: string, size?: number }) => (
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
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

const services = [
  {
    title: "Web Applications de Alta Performance",
    description: "Engenharia de software focada em resultados. Desenvolvemos dashboards complexos, CRMs e ecossistemas empresariais que rodam em infraestrutura auto-escalável, garantindo disponibilidade total e processamento massivo de dados.",
    icon: <Monitor className="w-8 h-8 text-brand-600" />,
    features: ["Arquitetura de Microserviços", "Bancos de Dados Relacionais & NoSQL", "Segurança é nossa prioridade"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Ecossistemas Digitais Modernos",
    description: "A presença digital da sua marca levada ao extremo da tecnologia. Desenvolvemos sites institucionais ultra-rápidos com Next.js e React, otimizados para core web vitals e prontos para converter tráfego em receita real.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    features: ["Edge Computing", "Serverless Architecture", "DevOps & CI/CD Integrados"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    reverse: true
  }
];

const techStack = [
  { name: "PostgreSQL", icon: <Database className="text-blue-500" />, category: "Database" },
  { name: "MongoDB", icon: <Database className="text-green-500" />, category: "NoSQL" },
  { name: "AWS / Cloud", icon: <Server className="text-orange-500" />, category: "Cloud" },
  { name: "Node.js", icon: <Cpu className="text-green-600" />, category: "Backend" },
  { name: "React / Next", icon: <Layers className="text-blue-400" />, category: "Frontend" },
  { name: "TypeScript", icon: <Code2 className="text-blue-600" />, category: "Language" },
  { name: "Docker", icon: <Box className="text-blue-500" />, category: "DevOps" },
  { name: "Tailwind", icon: <Layout className="text-sky-400" />, category: "Styling" }
];

export const AgencyShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header com Efeito Alpha */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-200/20 blur-3xl rounded-full animate-pulse-glow"></div>
          <h2 className="text-brand-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 relative z-10">Software Engineering</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 font-display tracking-tight relative z-10">
            Criamos o futuro <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-purple-600">
              uma linha de código por vez.
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10">
            Muito mais que uma agência. Somos seu parceiro estratégico de tecnologia, especializados em arquiteturas escaláveis e designs que encantam.
          </p>
        </div>

        {/* Interactive Experience Section (Simulated UI) */}
        <div className="mb-32 relative">
          <div className="bg-gray-900 rounded-3xl p-4 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 text-xs text-gray-600 px-4 py-3 flex gap-2 border-b border-gray-800 items-center justify-between">
              <div className="flex gap-1.5 font-bold">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex gap-4 items-center">
                 <div className="bg-gray-800 h-2 w-32 rounded-full px-2 py-0.5 text-[8px] flex items-center justify-center">grupopixel.tech/dashboard</div>
                 <Terminal size={12} />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-12 gap-6 min-h-[400px]">
              {/* Sidebar simulada - File Explorer */}
              <div className="col-span-3 space-y-6 border-r border-gray-800 pr-6 hidden md:block overflow-y-auto">
                <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase font-bold tracking-widest pb-2 border-b border-gray-800/50">
                   <span>Explorer</span>
                </div>
                
                <div className="space-y-1">
                  {/* Root Folder */}
                  <div className="flex items-center gap-2 text-gray-300 text-[11px] py-1 cursor-default">
                    <ChevronRight size={12} className="text-gray-600 rotate-90" />
                    <span className="font-semibold">grupopixel-site</span>
                  </div>

                  {/* Subfolders & Files */}
                  <div className="pl-3 space-y-1">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] py-1">
                      <ChevronRight size={10} className="text-gray-600 rotate-90" />
                      <span className="text-blue-400 opacity-80">components</span>
                    </div>
                    
                    <div className="pl-4 space-y-1 border-l border-gray-800/50 ml-1">
                      <div className="flex items-center gap-2 text-brand-400/90 text-[10px] py-1 bg-brand-500/5 border-r-2 border-brand-500 -mr-6 px-1">
                        <Code2 size={12} />
                        AgencyShowcase.tsx
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-[10px] py-1 hover:text-gray-300">
                        <Code2 size={12} />
                        Hero.tsx
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-[10px] py-1 hover:text-gray-300">
                        <Code2 size={12} />
                        Navbar.tsx
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-[10px] py-1">
                      <ChevronRight size={10} className="text-gray-600" />
                      <span>public</span>
                    </div>

                    <div className="flex items-center gap-2 text-blue-300/60 text-[10px] py-1">
                      <Code2 size={12} />
                      App.tsx
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[10px] py-1">
                      <Layout size={12} className="text-orange-400/50" />
                      index.html
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[10px] py-1">
                      <Terminal size={12} />
                      package.json
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content simulado */}
              <div className="col-span-12 md:col-span-9 p-4 relative">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50 h-32 flex flex-col justify-end gap-2 hover:bg-gray-800 transition-colors">
                      <div className="h-4 bg-brand-500/20 w-1/2 rounded ring-1 ring-brand-500/30"></div>
                      <div className="h-2 bg-gray-700 w-3/4 rounded"></div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-800 min-h-[300px] relative overflow-hidden font-mono text-[11px] leading-relaxed shadow-inner">
                   {/* Tabs IDE */}
                   <div className="flex gap-2 mb-6 border-b border-gray-800/50 pb-2 -mt-2">
                      <div className="px-3 py-1 bg-[#2d2d2d] text-brand-400 border-t border-brand-500 flex items-center gap-2">
                        <Code2 size={12} />
                        App.tsx
                      </div>
                      <div className="px-3 py-1 text-gray-500 flex items-center gap-2">
                        <Monitor size={12} />
                        styles.css
                      </div>
                   </div>

                   {/* Code Typing Simulation */}
                   <div className="space-y-1.5 pt-2">
                      <div className="flex gap-2">
                        <span className="text-purple-400">export const</span> 
                        <span className="text-yellow-400">MainProject</span> 
                        <span className="text-purple-400">=</span> 
                        <span className="text-blue-400">() {"=>"}</span>
                        <span className="text-gray-300"> {"{"}</span>
                      </div>
                      <div className="pl-4 flex gap-2">
                        <span className="text-purple-400">const</span> 
                        <span className="text-blue-300">{"[status, setStatus]"}</span> 
                        <span className="text-purple-400">=</span> 
                        <span className="text-yellow-400">useState</span><span className="text-gray-300">("active");</span>
                      </div>
                      <div className="pl-4 h-5 flex items-center">
                        <span className="text-brand-500 border-r-2 border-brand-500 animate-pulse pr-1">const deploy = async () {"=>"} await push(PROD);</span>
                      </div>
                      <div className="pl-4 text-pink-400">
                        {"return ("}
                      </div>
                      <div className="pl-8 text-gray-400">
                        {"<"} <span className="text-blue-400">Layout</span> <span className="text-yellow-400">mode</span>="premium" {">"}
                      </div>
                      <div className="pl-12 text-gray-500 italic">
                        {"/* Finalizando engenharia... */"}
                      </div>
                   </div>
                   
                   {/* DEPLOY BUTTON - Target for mouse */}
                   <button className="absolute bottom-8 right-8 bg-brand-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-pulse hover:scale-105 transition-transform active:scale-95 group/btn">
                      <Rocket size={18} className="group-hover/btn:rotate-12 transition-transform" />
                      Deploy Now
                   </button>
                </div>

                {/* MOUSE CURSOR ANIMATION */}
                <div className="absolute pointer-events-none animate-cursor-move z-50">
                   <MousePointer2 size={24} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] fill-brand-600 stroke-gray-900" />
                   <div className="absolute -top-1 -left-1 w-4 h-4 bg-brand-500/20 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Services Split */}
        <div className="space-y-40 mb-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 group`}>
              {/* Lado do Texto */}
              <div className="flex-1 space-y-10">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gray-50 shadow-inner group-hover:scale-110 transition-transform duration-500 border border-gray-100`}>
                  {service.icon}
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">{service.title}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4 text-gray-700 font-bold text-sm uppercase tracking-wider group/feat">
                      <div className="p-1 bg-brand-50 text-brand-600 rounded-md group-hover/feat:bg-brand-600 group-hover/feat:text-white transition-colors">
                        <Zap size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lado da Imagem com Efeito Hover */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-blue-500 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-gray-100 transform group-hover:-translate-y-4 transition-all duration-700 ease-out">
                  <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold">Architecture</div>
                    <div className="bg-brand-500/20 backdrop-blur-md border border-brand-500/30 px-4 py-2 rounded-full text-brand-200 text-xs font-bold uppercase tracking-widest">Quality</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-50 rounded-full border border-brand-100 flex items-center justify-center animate-float hidden lg:flex">
                   <Smartphone className="text-brand-600" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid (Modern Glass) */}
        <div className="relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-gray-200 to-transparent"></div>
          
          <div className="bg-gray-50 rounded-[48px] p-12 md:p-20 border border-gray-100 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Code2 size={200} className="text-gray-900" />
            </div>

            <div className="text-center mb-16 relative z-10">
              <h4 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight font-display">Nossa Toolbox de Elite</h4>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Usamos ferramentas que definem o padrão da indústria moderna para garantir estabilidade, segurança e performance absoluta.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-10 relative z-10">
              {techStack.map((tech, tIndex) => (
                <div key={tIndex} className="bg-white rounded-3xl p-8 border border-gray-200/50 flex flex-col items-center gap-6 group hover:shadow-2xl hover:border-brand-200 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                    {React.cloneElement(tech.icon as React.ReactElement, { size: 36 })}
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 mb-1">{tech.name}</p>
                    <p className="text-[10px] text-brand-600 uppercase font-bold tracking-[0.2em]">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <Github size={32} />
               <Figma size={32} />
               <Smartphone size={32} />
               <Cloud size={32} />
               <Shield size={32} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
