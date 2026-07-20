import React, { useState, useEffect } from 'react';
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
  FileText,
  Lock,
  ChevronRight,
  RefreshCw,
  Server
} from 'lucide-react';
import { Logo } from './Logo';

export const SentinelaPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'acessos' | 'diretorios' | 'sistema' | 'computadores'>('dashboard');
  const [consoleLog, setConsoleLog] = useState<string[]>([
    '[Agent] Sincronizando políticas administrativas com o console central (SLA 99.9%)...',
    '[Agent] Políticas aplicadas com sucesso: bloqueio USB ativo, diretórios protegidos.'
  ]);
  const [simulationLog, setSimulationLog] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simular eventos periódicos do console ou interações
  const triggerSimulation = (type: string, message: string) => {
    setIsSimulating(true);
    const time = new Date().toLocaleTimeString();
    setSimulationLog(prev => [
      `[${time}] [SIMULAÇÃO] Tentativa detectada: ${message}`,
      `[${time}] [AÇÃO SENTINELA] Bloqueio efetuado instantaneamente e reportado ao Admin!`,
      ...prev
    ]);
    setTimeout(() => setIsSimulating(false), 800);
  };

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

            {/* Right Side: Lighthouse Premium Visual & Mini Badge */}
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

      {/* Interactive Admin Console Mockup Section */}
      <section className="py-24 border-t border-white/5 bg-[#07090E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Painel de Controle do <span className="text-emerald-400">Sentinela</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Explore o painel de controle administrativo. Veja os dados de bloqueio reais e teste o simulador de proteção abaixo.
            </p>
          </div>

          {/* Console Emulator Box */}
          <div className="bg-[#080B10] border border-white/10 rounded-2xl shadow-3xl overflow-hidden max-w-5xl mx-auto">
            {/* Header */}
            <div className="bg-[#05070A] p-4 flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-950/40 rounded-lg text-emerald-400 border border-emerald-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M12 2L9 7h6z" />
                    <path d="M9 7l-2 15h10l-2-15" />
                    <path d="M6 22h12" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    Sentinela Security <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded uppercase">v1.2.0-stable</span>
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Console Central de Segurança e Agentes Electron</div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-emerald-400 font-bold">CONECTADO À NUVEM</span>
                </div>
                <div className="hidden sm:block text-gray-500">IP: 189.36.252.32</div>
              </div>
            </div>

            {/* Menu Tabs */}
            <div className="bg-[#06080D] px-4 border-b border-white/5 flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-all focus:outline-none ${activeTab === 'dashboard' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('acessos')}
                className={`py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-all focus:outline-none ${activeTab === 'acessos' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Acessos Bloqueados
              </button>
              <button 
                onClick={() => setActiveTab('diretorios')}
                className={`py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-all focus:outline-none ${activeTab === 'diretorios' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Diretórios Protegidos
              </button>
              <button 
                onClick={() => setActiveTab('sistema')}
                className={`py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-all focus:outline-none ${activeTab === 'sistema' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Bloqueios do Sistema & Web
              </button>
              <button 
                onClick={() => setActiveTab('computadores')}
                className={`py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-wider border-b-2 transition-all focus:outline-none ${activeTab === 'computadores' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Computadores Ativos
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-8 min-h-[380px]">
              
              {/* TAB 1: DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {/* Grid Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-[#05070B] border border-white/5 p-5 rounded-xl hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Acessos Bloqueados</span>
                        <AlertTriangle size={16} className="text-red-500" />
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        144 <span className="text-xs bg-red-950/40 text-red-400 px-1.5 py-0.5 rounded font-mono ml-2">HOJE</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">Histórico acumulado de tentativas travadas nas estações.</p>
                      <button onClick={() => setActiveTab('acessos')} className="mt-4 text-[10px] text-emerald-400 hover:underline flex items-center gap-1 font-mono uppercase font-bold">
                        Ir para Painel de Acessos <ChevronRight size={12} />
                      </button>
                    </div>

                    <div className="bg-[#05070B] border border-white/5 p-5 rounded-xl hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Diretórios Protegidos</span>
                        <FolderLock size={16} className="text-blue-500" />
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        7 <span className="text-xs bg-blue-950/40 text-blue-400 px-1.5 py-0.5 rounded font-mono ml-2">ATIVOS</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">Pastas bloqueadas nos discos locais NTFS e Linux Ext4.</p>
                      <button onClick={() => setActiveTab('diretorios')} className="mt-4 text-[10px] text-emerald-400 hover:underline flex items-center gap-1 font-mono uppercase font-bold">
                        Ir para Diretórios <ChevronRight size={12} />
                      </button>
                    </div>

                    <div className="bg-[#05070B] border border-white/5 p-5 rounded-xl hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Proteção USB</span>
                        <Usb size={16} className="text-yellow-500" />
                      </div>
                      <div className="text-3xl font-black text-white mb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-emerald-400 text-lg uppercase tracking-wider font-bold">Bloqueio Ativo</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">Estado global do driver de armazenamento removível USB.</p>
                      <button onClick={() => setActiveTab('sistema')} className="mt-4 text-[10px] text-emerald-400 hover:underline flex items-center gap-1 font-mono uppercase font-bold">
                        Ir para Bloqueios Globais <ChevronRight size={12} />
                      </button>
                    </div>

                    <div className="bg-[#05070B] border border-white/5 p-5 rounded-xl hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Computadores Ativos</span>
                        <Laptop size={16} className="text-emerald-500" />
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        2 / 2 <span className="text-xs bg-emerald-950/40 text-emerald-400 px-1.5 py-0.5 rounded font-mono ml-2">CONECTADOS</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">Estações Windows/Linux com agente reportando pulso.</p>
                      <button onClick={() => setActiveTab('computadores')} className="mt-4 text-[10px] text-emerald-400 hover:underline flex items-center gap-1 font-mono uppercase font-bold">
                        Ir para Computadores <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Sentinela Info Alert */}
                  <div className="bg-[#070A0F] border border-emerald-500/20 rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-4 text-left">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400"><CheckCircle2 size={24} /></div>
                    <div className="space-y-2">
                      <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Sentinela Ativo & Monitorando</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Bem-vindo ao console central do Sentinela. O sistema de proteção de endpoints está operando em regime de alta disponibilidade (99.9% SLA). Os daemons locais estão sincronizados e as políticas administrativas de bloqueio de USB, configurações, pastas, redes sociais, pornografia e apostas estão ativas. Use as abas do topo para gerenciar cada aspecto de maneira organizada.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ACESSOS BLOQUEADOS */}
              {activeTab === 'acessos' && (
                <div className="space-y-6 text-left animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Painel de Monitoramento de Acessos Bloqueados</h3>
                      <p className="text-[11px] text-gray-500">Acompanhe e audite tentativas de violação de políticas de segurança em tempo real.</p>
                    </div>
                    <span className="text-[10px] bg-red-500/10 border border-red-500/25 text-red-400 px-2.5 py-1 rounded font-mono font-bold uppercase">26 Eventos Recentes</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs max-h-[250px] overflow-y-auto pr-2">
                    <div className="bg-[#05070B] border-l-4 border-yellow-500 p-3 rounded flex items-center justify-between">
                      <div>
                        <span className="text-yellow-400 font-bold">[POLICY_CHANGE]</span> <span className="text-gray-300">Bypass temporário expirado. Políticas reativadas.</span>
                        <div className="text-[10px] text-gray-500 mt-1">Estação: CESAR-INSTALACAO • Usuário: SF-TI • IP: 192.168.18.38</div>
                      </div>
                      <span className="text-gray-500 text-[10px]">17/07/2026, 13:51:29</span>
                    </div>

                    <div className="bg-[#05070B] border-l-4 border-blue-500 p-3 rounded flex items-center justify-between">
                      <div>
                        <span className="text-blue-400 font-bold">[ADMIN_BYPASS]</span> <span className="text-gray-300">Bypass local ativado via código PIN na estação.</span>
                        <div className="text-[10px] text-gray-500 mt-1">Estação: CESAR-INSTALACAO • Usuário: SF-TI • IP: 192.168.18.38</div>
                      </div>
                      <span className="text-gray-500 text-[10px]">17/07/2026, 13:21:29</span>
                    </div>

                    <div className="bg-[#05070B] border-l-4 border-red-500 p-3 rounded flex items-center justify-between">
                      <div>
                        <span className="text-red-400 font-bold">[SETTINGS_BLOCK]</span> <span className="text-gray-300">Tentativa de alteração do Painel de Configurações bloqueada.</span>
                        <div className="text-[10px] text-gray-500 mt-1">Estação: CESAR-INSTALACAO • Usuário: SF-TI • IP: 192.168.18.38</div>
                      </div>
                      <span className="text-gray-500 text-[10px]">17/07/2026, 13:20:45</span>
                    </div>

                    <div className="bg-[#05070B] border-l-4 border-red-500 p-3 rounded flex items-center justify-between">
                      <div>
                        <span className="text-red-400 font-bold">[USB_MOUNT_ATTEMPT]</span> <span className="text-gray-300">Dispositivo USB removível (Kingston DataTraveler) montagem negada.</span>
                        <div className="text-[10px] text-gray-500 mt-1">Estação: DESKTOP-G9d3DAV • Usuário: USER • IP: 192.168.98.42</div>
                      </div>
                      <span className="text-gray-500 text-[10px]">17/07/2026, 13:09:07</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: DIRETÓRIOS PROTEGIDOS */}
              {activeTab === 'diretorios' && (
                <div className="space-y-6 text-left animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Pastas, Arquivos e Diretórios Protegidos</h3>
                    <p className="text-[11px] text-gray-500">Proteja pastas confidenciais corporativas nos discos rígidos contra roubo, vazamento manual ou sequestro (Ransomware).</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Regras Ativas */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Diretrizes em Execução (Ativas: 7)</span>
                      
                      <div className="bg-[#05070B] border border-white/5 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <div className="font-mono font-bold text-white">Chaves Privadas SSH (Anti-Lateral)</div>
                          <div className="text-[10px] text-gray-500 font-mono">~/.ssh/</div>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase">Bloqueio Total</span>
                      </div>

                      <div className="bg-[#05070B] border border-white/5 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <div className="font-mono font-bold text-white">Arquivo Hosts (DNS Windows)</div>
                          <div className="text-[10px] text-gray-500 font-mono">C:\Windows\System32\drivers\etc\hosts</div>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase">Bloqueio Escrita</span>
                      </div>

                      <div className="bg-[#05070B] border border-white/5 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <div className="font-mono font-bold text-white">Base SAM do Registro</div>
                          <div className="text-[10px] text-gray-500 font-mono">C:\Windows\System32\config\SAM</div>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase">Bloqueio Leitura</span>
                      </div>
                    </div>

                    {/* Criar Nova Regra */}
                    <div className="bg-[#05070B] border border-white/5 p-5 rounded-xl space-y-4">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block border-b border-white/5 pb-2">Criar Nova Diretriz de Bloqueio</span>
                      <div className="space-y-3 text-xs">
                        <div>
                          <label className="text-[10px] text-gray-400 font-bold block mb-1">Nome Identificador</label>
                          <input type="text" placeholder="Ex: Pasta Contabilidade Fiscal" className="w-full bg-[#0a0d13] border border-white/10 rounded p-2 text-white focus:outline-none" disabled />
                        </div>
                        <div>
                          <label className="text-[10px] text-gray-400 font-bold block mb-1">Caminho Absoluto Local (NTFS / EXT4)</label>
                          <input type="text" placeholder="Ex: C:\Financeiro\FolhasDePagamento" className="w-full bg-[#0a0d13] border border-white/10 rounded p-2 text-white focus:outline-none" disabled />
                        </div>
                        <button className="w-full bg-emerald-600/50 text-emerald-400 border border-emerald-500/30 rounded p-2 font-mono font-bold uppercase hover:bg-emerald-600 transition-colors mt-2" disabled>
                          + Salvar Nova Diretriz
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: BLOQUEIOS DO SISTEMA & WEB */}
              {activeTab === 'sistema' && (
                <div className="space-y-6 text-left animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Restrições do PC */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Bloqueios de Sistema</h4>
                      
                      <div className="flex items-center justify-between bg-[#05070B] p-4 rounded-xl border border-white/5">
                        <div>
                          <div className="font-semibold text-white text-xs">Bloqueio Geral de Driver USB</div>
                          <p className="text-[10px] text-gray-500 mt-0.5">Desativa a montagem de pendrives e discos removíveis locais.</p>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded font-mono text-[10px] font-bold">ATIVO</span>
                      </div>

                      <div className="flex items-center justify-between bg-[#05070B] p-4 rounded-xl border border-white/5">
                        <div>
                          <div className="font-semibold text-white text-xs">Bloquear Configurações do PC</div>
                          <p className="text-[10px] text-gray-500 mt-0.5">Bloqueia Painel de Controle, app de configurações, CMD e redes.</p>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded font-mono text-[10px] font-bold">ATIVO</span>
                      </div>

                      <div className="flex items-center justify-between bg-[#05070B] p-4 rounded-xl border border-white/5">
                        <div>
                          <div className="font-semibold text-white text-xs">PIN Admin de Emergência</div>
                          <p className="text-[10px] text-gray-500 mt-0.5">Permite desativação local temporária sob manutenção de TI.</p>
                        </div>
                        <span className="bg-gray-800 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-wider">1310</span>
                      </div>
                    </div>

                    {/* Filtro Web */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Filtro de Conteúdo Web</h4>
                      
                      <div className="flex items-center justify-between bg-[#05070B] p-4 rounded-xl border border-white/5">
                        <div>
                          <div className="font-semibold text-white text-xs">Filtro de Redes Sociais</div>
                          <p className="text-[10px] text-gray-500 mt-0.5">Bloqueia acesso a Facebook, Instagram, TikTok e Twitter.</p>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded font-mono text-[10px] font-bold">ATIVO</span>
                      </div>

                      <div className="flex items-center justify-between bg-[#05070B] p-4 rounded-xl border border-white/5">
                        <div>
                          <div className="font-semibold text-white text-xs">Bloqueio de Adultos & Cassinos</div>
                          <p className="text-[10px] text-gray-500 mt-0.5">Bloqueia sites pornô e plataformas de apostas online.</p>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded font-mono text-[10px] font-bold">ATIVO</span>
                      </div>

                      <div className="bg-[#05070B] p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="font-semibold text-white text-xs">Lista Branca de Sites Permitidos</div>
                        <div className="flex flex-wrap gap-1.5 text-[9px] font-mono">
                          <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">github.com</span>
                          <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">google.com</span>
                          <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">linkedin.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: COMPUTADORES ATIVOS */}
              {activeTab === 'computadores' && (
                <div className="space-y-6 text-left animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Computadores Monitorados na Rede Corporativa</h3>
                    <p className="text-[11px] text-gray-500">Estações de trabalho com o daemon local do Sentinela reportando pulso.</p>
                  </div>

                  <div className="bg-[#05070B] border border-white/5 rounded-xl overflow-hidden text-xs">
                    <table className="w-full text-left font-mono">
                      <thead>
                        <tr className="bg-[#0a0d14] border-b border-white/5 text-gray-400 text-[10px] uppercase font-bold">
                          <th className="p-4">Hostname</th>
                          <th className="p-4">S.O.</th>
                          <th className="p-4">Endereço IP</th>
                          <th className="p-4">Usuário Ativo</th>
                          <th className="p-4">Último Sinal</th>
                          <th className="p-4">Status Proteção</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="p-4 font-bold text-white">DESKTOP-G9d3DAV</td>
                          <td className="p-4"><span className="bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded text-[10px]">WINDOWS</span></td>
                          <td className="p-4 text-gray-300">192.168.98.42</td>
                          <td className="p-4 text-gray-400">USER</td>
                          <td className="p-4 text-gray-400">Há 5s</td>
                          <td className="p-4"><span className="text-emerald-400 font-bold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> CONECTADO</span></td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-white">Cesar-Instalacao</td>
                          <td className="p-4"><span className="bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded text-[10px]">WINDOWS</span></td>
                          <td className="p-4 text-gray-300">192.168.18.38</td>
                          <td className="p-4 text-gray-400">Instalacao</td>
                          <td className="p-4 text-gray-400">Há 12s</td>
                          <td className="p-4"><span className="text-emerald-400 font-bold flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> CONECTADO</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Interactive Agent Simulator Section */}
          <div className="mt-16 bg-[#080B10] border border-white/10 rounded-2xl p-8 max-w-5xl mx-auto text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] font-bold uppercase mb-2">
                Simulador do Agente Local (Daemon)
              </div>
              <h3 className="text-xl font-bold text-white">Simular Comportamento no Computador do Usuário</h3>
              <p className="text-xs text-gray-400 max-w-2xl font-light">
                Com o agente local instalado, teste abaixo o que acontece se o usuário final tentar burlar a segurança corporativa:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Simulator Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => triggerSimulation('usb', 'Conexão de pendrive contendo vírus no drive D:/')}
                  className="bg-[#05070B] border border-white/5 hover:border-emerald-500 p-4 rounded-xl text-left space-y-2 group transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-950/30 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20"><Usb size={20} /></div>
                  <div className="text-xs font-bold text-white">Inserir Pendrive</div>
                  <p className="text-[10px] text-gray-500">Tenta montar um dispositivo USB removível local.</p>
                </button>

                <button 
                  onClick={() => triggerSimulation('config', 'Abertura do Painel de Controle e CMD')}
                  className="bg-[#05070B] border border-white/5 hover:border-emerald-500 p-4 rounded-xl text-left space-y-2 group transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-950/30 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20"><Terminal size={20} /></div>
                  <div className="text-xs font-bold text-white">Abrir CMD ou Painel</div>
                  <p className="text-[10px] text-gray-500">Tenta abrir configurações restritas do sistema.</p>
                </button>

                <button 
                  onClick={() => triggerSimulation('folder', 'Acesso à pasta confidenciais SSH ~/.ssh/')}
                  className="bg-[#05070B] border border-white/5 hover:border-emerald-500 p-4 rounded-xl text-left space-y-2 group transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-950/30 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20"><FolderLock size={20} /></div>
                  <div className="text-xs font-bold text-white">Acessar Pasta Bloqueada</div>
                  <p className="text-[10px] text-gray-500">Tenta ler ou modificar diretórios protegidos por kernel.</p>
                </button>

                <button 
                  onClick={() => triggerSimulation('web', 'Acesso a site de apostas bet365.com')}
                  className="bg-[#05070B] border border-white/5 hover:border-emerald-500 p-4 rounded-xl text-left space-y-2 group transition-all"
                >
                  <div className="w-10 h-10 bg-emerald-950/30 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20"><Globe size={20} /></div>
                  <div className="text-xs font-bold text-white">Acessar Site de Apostas</div>
                  <p className="text-[10px] text-gray-500">Tenta carregar domínios restritos no navegador.</p>
                </button>
              </div>

              {/* Simulator Execution Terminal */}
              <div className="bg-[#05070B] border border-white/10 rounded-xl p-5 font-mono text-[11px] text-gray-300 space-y-3 relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5 text-gray-500">
                  <span className="flex items-center gap-1.5"><Terminal size={12} /> terminal_de_execucao_local</span>
                  {isSimulating && <RefreshCw size={12} className="animate-spin text-emerald-400" />}
                </div>

                <div className="space-y-2 max-h-[160px] overflow-y-auto">
                  {simulationLog.map((log, idx) => (
                    <div key={idx} className={`leading-relaxed ${log.includes('detectada') ? 'text-yellow-500' : log.includes('Bloqueio') ? 'text-red-400' : 'text-gray-400'}`}>
                      {log}
                    </div>
                  ))}
                  <div className="text-emerald-500">[Agent] Daemon Sentinela ativo e escutando novas políticas do painel...</div>
                  {consoleLog.map((log, idx) => (
                    <div key={idx} className="text-gray-500">{log}</div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Security Features Catalog Section */}
      <section className="py-32 bg-[#05070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-20">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">Recursos do <span className="text-emerald-400">Sentinela</span></h2>
            <p className="text-gray-400 text-lg font-light">Tudo o que sua TI precisa para blindar e controlar a segurança de endpoints remotamente.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-[#07090E] border border-white/5 rounded-3xl hover:bg-[#090D14] hover:border-emerald-500/20 transition-all duration-300 text-left space-y-4 group">
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
      <section id="manual-instalacao" className="py-24 bg-[#07090E] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-white">Manuais de Instalação</h2>
            <p className="text-gray-400 text-sm font-light">
              O Sentinela Security é composto por um instalador silencioso para os computadores corporativos (clientes) e por este painel web central para gerenciamento de políticas.
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
      <section className="py-24 bg-[#05070B]">
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
