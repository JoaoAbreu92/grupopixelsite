import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { 
  Shield, 
  Terminal, 
  Download, 
  Eye, 
  Laptop, 
  Globe, 
  AlertTriangle, 
  FolderLock, 
  Usb, 
  Clock, 
  Key, 
  CheckCircle2, 
  Lock,
  ChevronRight,
  Zap,
  Server,
  Skull,
  UserCheck
} from 'lucide-react';

export const SentinelaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#05070B] text-gray-200 min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Hero Section - Dark Premium com Neon Verde */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.05),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
        
        {/* Lighthouse Light Beam Effect */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Copy */}
            <div className="space-y-8 text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Shield size={14} className="animate-pulse" />
                Segurança de Endpoints Local & Cloud
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
                Sentinela <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Security
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl font-light">
                Controle e blindagem completa de computadores corporativos. Bloqueie pendrives, Painel de Controle, CMD, redes, sites e pastas críticas remotamente por um painel central web.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/cadastro')}
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white border-none px-8 py-6 text-lg font-bold shadow-xl shadow-emerald-950/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Teste 15 dias grátis
                  <ChevronRight size={18} />
                </Button>
                <a href="#manual-instalacao" className="w-full sm:w-auto">
                  <Button 
                    variant="ghost"
                    size="lg" 
                    className="border border-white/10 hover:bg-white/5 text-white px-8 py-6 text-lg font-bold w-full"
                  >
                    Manuais de Instalação
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 border-t border-white/5 pt-8 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Agente Electron Leve
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  Sincronização a cada 30s
                </div>
              </div>
            </div>

            {/* Right Side: Visual representation of security status (Premium Mockup) */}
            <div className="relative flex justify-center lg:justify-end animate-in zoom-in duration-1000 delay-200">
              <div className="relative w-full max-w-[480px] p-1 bg-gradient-to-tr from-emerald-500/20 via-white/5 to-transparent rounded-3xl border border-white/10 shadow-2xl">
                <div className="bg-[#080B10] rounded-[22px] overflow-hidden p-8 text-center space-y-6 relative">
                  
                  {/* Glowing light behind the lighthouse symbol */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                  <div className="mx-auto w-24 h-24 bg-emerald-950/30 rounded-2xl border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                      <path d="M12 2L9 7h6z" fill="currentColor" opacity="0.2" />
                      <path d="M9 7l-2 15h10l-2-15" />
                      <path d="M6 22h12" />
                      <path d="M12 7v15" />
                      <path d="M9 12h6" />
                      <path d="M9 17h6" />
                      <circle cx="12" cy="4.5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Console Sentinela</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto font-light">
                      O farol da segurança corporativa, monitorando e protegendo a integridade dos seus endpoints locais 24/7.
                    </p>
                  </div>

                  <div className="bg-[#05070A] border border-white/5 rounded-xl p-4 flex items-center justify-between text-left text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold">Status do Agente</div>
                        <div className="font-semibold text-white">Ativo & Protegendo</div>
                      </div>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded font-mono font-bold">v1.2.0</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section (Caos vs Controle) */}
      <section className="py-24 bg-[#07090D] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              O Controle que sua <span className="text-emerald-400">TI Precisa</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Compare a vulnerabilidade de uma rede sem controle com a tranquilidade da proteção unificada do Sentinela.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Caos */}
            <div className="p-8 rounded-3xl bg-[#090b10] border border-red-500/10 space-y-6">
              <div className="flex items-center gap-3 text-red-500">
                <Skull size={28} />
                <h3 className="text-xl font-bold text-white">Sem Sentinela Security</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg leading-none">•</span>
                  <span><strong>Vazamento de dados:</strong> Usuários podem copiar arquivos confidenciais para pendrives comuns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg leading-none">•</span>
                  <span><strong>Desconfigurações locais:</strong> Funcionários podem abrir o CMD, alterar IPs ou desativar defesas do Windows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg leading-none">•</span>
                  <span><strong>Invasão e Malware:</strong> Facilidade para instalar softwares não autorizados ou vírus por drivers USB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg leading-none">•</span>
                  <span><strong>Distrações e Riscos Web:</strong> Acesso livre a sites de apostas, redes sociais e pornografia no horário de trabalho.</span>
                </li>
              </ul>
            </div>

            {/* Controle */}
            <div className="p-8 rounded-3xl bg-[#080d10] border border-emerald-500/20 space-y-6 shadow-xl shadow-emerald-950/5 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 text-emerald-400">
                <UserCheck size={28} />
                <h3 className="text-xl font-bold text-white">Com Sentinela Security</h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Políticas de USB Rígidas:</strong> Bloqueio total ou permissões em nível de leitura para mídias externas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Sistema Operacional Blindado:</strong> Acesso negado ao CMD, Powershell, Registro e Painel de Controle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Proteção de Pastas Críticas:</strong> Blindagem local contra criptografia de ransomwares em diretórios confidenciais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Filtro de Rede Avançado:</strong> Controle dinâmico de navegação web com listas negras, listas brancas e palavras-chave.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Showcase (Zig-Zag presentation) */}
      <section className="py-24 bg-[#05070B] space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Item 1: USB Block */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6 text-left">
              <div className="w-12 h-12 bg-emerald-950/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/10">
                <Usb size={22} />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">Bloqueio Geral de Driver USB</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Evite contaminações por malware e roubo de dados. O Sentinela Security desativa a inicialização e montagem automática de qualquer driver de armazenamento em massa (pendrives, HDs externos, cartões de memória) diretamente no sistema operacional.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Bloqueio ativo em nível de driver local.
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Opção de liberação apenas em modo Leitura (Read-Only).
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full max-w-lg relative bg-[#090b10] border border-white/5 p-8 rounded-3xl">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <div className="relative font-mono text-xs text-left text-gray-400 space-y-2 bg-[#05070A] p-6 rounded-xl border border-white/10 shadow-2xl">
                <div className="text-emerald-400 font-bold">[USB_DRIVER_DETECTOR]</div>
                <div className="text-red-400">ALERT: Dispositivo USB não autorizado conectado (VID: 0930, PID: 6545)</div>
                <div className="text-gray-500">Status: Dispositivo desmontado e acesso bloqueado instantaneamente.</div>
              </div>
            </div>
          </div>

          {/* Item 2: OS Configuration Lock */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 pt-16">
            <div className="flex-1 space-y-6 text-left">
              <div className="w-12 h-12 bg-emerald-950/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/10">
                <Terminal size={22} />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">Bloqueio de Configurações do PC</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Mantenha os endpoints da empresa padronizados e seguros. O agente local impede que os colaboradores abram ferramentas restritas que possam comprometer as políticas de segurança ou as configurações de rede locais.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Bloqueia Painel de Controle, CMD e Powershell.
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Evita modificações de IP, DNS e desativação de antivírus.
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full max-w-lg relative bg-[#090b10] border border-white/5 p-8 rounded-3xl">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <div className="relative font-mono text-xs text-left text-gray-400 space-y-2 bg-[#05070A] p-6 rounded-xl border border-white/10 shadow-2xl">
                <div className="text-emerald-400 font-bold">[OS_PROTECTION_DAEMON]</div>
                <div className="text-red-400">ALERT: Tentativa de execução de 'cmd.exe' detectada.</div>
                <div className="text-gray-500">Status: Processo finalizado com código de segurança 0x0F (Bloqueado).</div>
              </div>
            </div>
          </div>

          {/* Item 3: Protected Folders */}
          <div className="flex flex-col lg:flex-row items-center gap-16 pt-16">
            <div className="flex-1 space-y-6 text-left">
              <div className="w-12 h-12 bg-emerald-950/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/10">
                <FolderLock size={22} />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">Pastas e Arquivos Protegidos</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Defina diretórios locais imutáveis. O Sentinela cria um escudo protetor sobre pastas contendo planilhas de faturamento, chaves SSH, arquivos hosts ou pastas críticas de bancos de dados. Qualquer alteração ou tentativa de criptografia de arquivos (Ransomware) é frustrada imediatamente.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Blindagem contra remoção ou alteração de pastas críticas.
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Ideal para isolamento de arquivos sensíveis do sistema.
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full max-w-lg relative bg-[#090b10] border border-white/5 p-8 rounded-3xl">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
              <div className="relative font-mono text-xs text-left text-gray-400 space-y-2 bg-[#05070A] p-6 rounded-xl border border-white/10 shadow-2xl">
                <div className="text-emerald-400 font-bold">[FILE_SHIELD_DAEMON]</div>
                <div className="text-red-400">ALERT: Tentativa de modificação em 'C:\Windows\System32\drivers\etc\hosts'</div>
                <div className="text-gray-500">Status: Ação de gravação negada. Integridade do arquivo mantida.</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Security Features Catalog Section (Cards Grid) */}
      <section className="py-32 bg-[#07090E] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-20">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">Recursos do <span className="text-emerald-400">Sentinela</span></h2>
            <p className="text-gray-400 text-lg font-light">Tudo o que sua TI precisa para blindar e controlar a segurança de endpoints remotamente.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-[#090B10] border border-white/5 rounded-3xl hover:bg-[#0c0f16] hover:border-emerald-500/20 transition-all duration-300 text-left space-y-4 group">
                <div className="w-12 h-12 bg-emerald-950/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Installation Manuals Section */}
      <section id="manual-instalacao" className="py-24 bg-[#05070B] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white">Manuais de Instalação</h2>
            <p className="text-gray-400 text-sm font-light">
              O Sentinela Security é composto por um instalador silencioso para os computadores corporativos (clientes) e por um painel web central para gerenciamento de políticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Windows Agent Card */}
            <div className="bg-[#080B10] border border-white/10 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl"><Laptop size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white">Agente Cliente Windows</h4>
                    <span className="text-[10px] text-gray-500 font-mono">Compatível com Windows 10 e 11 Pro/Enterprise</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Instale silenciosamente via Active Directory (GPO) ou instalador local. O agente opera como serviço do sistema sob baixíssimo consumo de memória (menos de 20MB) e comunica-se com a nuvem a cada 30 segundos.
                </p>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500 border-none text-white font-bold flex items-center justify-center gap-2">
                <Download size={16} /> Baixar Instalador Windows (.msi)
              </Button>
            </div>

            {/* Linux Agent Card */}
            <div className="bg-[#080B10] border border-white/10 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-yellow-500/10 text-yellow-400 rounded-xl"><Server size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white">Agente Cliente Linux</h4>
                    <span className="text-[10px] text-gray-500 font-mono">Compatível com Ubuntu 20.04+, Debian e RHEL</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Execute no endpoint via daemon systemd. Protege e monitora partições de disco Ext4 contra modificações indevidas, além de forçar regras de iptables locais alinhadas com o painel central de segurança.
                </p>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500 border-none text-white font-bold flex items-center justify-center gap-2">
                <Download size={16} /> Baixar Pacote Linux (.deb / .rpm)
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Final - Teste Grátis de 15 Dias */}
      <section className="py-24 bg-[#07090D] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-tr from-[#081510] via-[#05070B] to-[#05070B] border border-emerald-500/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group">
            
            {/* Glow design effects */}
            <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/15 transition-all duration-700"></div>
            <div className="absolute bottom-[-20%] left-[-20%] w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] group-hover:bg-emerald-600/10 transition-all duration-700"></div>

            <div className="relative z-10 space-y-8">
              <div className="inline-block p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <Lock className="text-emerald-400 animate-pulse" size={32} />
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Proteja sua Empresa com o <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Sentinela Security</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
                Centralize a segurança dos computadores da sua empresa. Implemente diretrizes imediatas e gerencie tudo por um console robusto e simples.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/cadastro')}
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-500 border-none px-12 py-6 text-lg font-bold text-white shadow-xl shadow-emerald-950/20"
                >
                  Iniciar Teste de 15 Dias
                </Button>
                <Button 
                  onClick={() => navigate('/cadastro')}
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-12 py-6 text-lg font-bold"
                >
                  Agendar Demonstração
                </Button>
              </div>

              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
                Instalação rápida • Suporte corporativo dedicado • Sem burocracia
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

const features = [
  {
    icon: <Usb />,
    title: "Bloqueio USB Inteligente",
    description: "Desative a leitura ou gravação de pendrives e discos removíveis locais instantaneamente por política de endpoint."
  },
  {
    icon: <Terminal />,
    title: "Restrição do S.O. & CMD",
    description: "Bloqueie comandos locais no CMD, Powershell, Painel de Controle, gerenciador de tarefas e configurações do sistema."
  },
  {
    icon: <FolderLock />,
    title: "Blindagem de Diretórios",
    description: "Bloqueie escrita, leitura ou cópia de pastas locais confidenciais da empresa contra ransomware e vazamento de dados."
  },
  {
    icon: <Globe />,
    title: "Filtro Web por Categoria",
    description: "Filtre o acesso de rede a redes sociais, sites de apostas, pornografia ou insira regras para domínios específicos."
  },
  {
    icon: <Key />,
    title: "PIN Admin Temporário",
    description: "Use um código PIN administrador dinâmico para dar bypass e desativar temporariamente o agente local para manutenção."
  },
  {
    icon: <Clock />,
    title: "Agendamento de Regras",
    description: "Defina janelas automáticas de bloqueio e libere acessos em horários específicos, como almoço ou fim do expediente."
  }
];
