import React, { useState } from 'react';
import {
  Bot,
  Users,
  BarChart3,
  Zap,
  Lock,
  Kanban,
  Workflow,
  BrainCircuit,
  MessageSquare,
  FileText,
  Layout,
  Share2,
  Monitor,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Globe,
  Rocket,
  Usb,
  FolderLock,
  Terminal,
  Key,
  Clock
} from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

const flokiFeatures = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Chatbots Inteligentes",
    description: "Crie fluxos de conversa automáticos para qualificar leads e agendar reuniões 24h por dia."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-atendentes",
    description: "Um único número de WhatsApp para toda a sua equipe. Distribua conversas por departamentos."
  },
  {
    icon: <Kanban className="w-6 h-6" />,
    title: "CRM e Kanban",
    description: "Organize seus leads visualmente em colunas e nunca perca uma oportunidade de venda."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Integrações n8n",
    description: "Conecte o Floki a milhares de outros softwares com webhooks prontos e APIs robustas."
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Inteligência Artificial",
    description: "Respostas humanizadas geradas por IA que entendem o contexto e auxiliam o atendimento."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Segurança de Dados",
    description: "Criptografia de ponta a ponta e conformidade total com a LGPD para sua paz de espírito."
  }
];

const pandanetFeatures = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Feed Social",
    description: "Um feed dinâmico para comunicados, conquistas e interação entre os membros da equipe."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Pessoas",
    description: "Encontre quem você precisa instantaneamente com perfis detalhados e skills mapeadas."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Repositório de Arquivos",
    description: "Centralize manuais, documentos legais e materiais de treinamento com controle total."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Widgets Customizáveis",
    description: "Aniversariantes, enquetes e avisos importantes fixados na home do seu time."
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Gamificação",
    description: "Estimule o engajagemto com sistemas de pontos, rankings e reconhecimentos públicos."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Acesso Mobile",
    description: "Sua intranet em qualquer lugar com interface responsiva otimizada para smartphones."
  }
];

const sentinelaFeatures = [
  {
    icon: <Usb className="w-6 h-6" />,
    title: "Bloqueio USB Inteligente",
    description: "Desative a leitura ou gravação de pendrives e mídias removíveis locais de forma imediata e remota."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Restrição do S.O. & CMD",
    description: "Bloqueie o acesso ao Prompt de Comando (CMD), PowerShell, Painel de Controle e configurações de rede."
  },
  {
    icon: <FolderLock className="w-6 h-6" />,
    title: "Blindagem de Diretórios",
    description: "Impeça a leitura, gravação ou cópia de pastas locais confidenciais contra sequestro por ransomware."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Filtro de Conteúdo Web",
    description: "Bloqueie de forma inteligente redes sociais, pornografia, sites de apostas ou crie listas brancas de domínios."
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "PIN Admin de Emergência",
    description: "Use um código mestre dinâmico local para desativar temporariamente o agente durante manutenções de TI."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Agendamento de Regras",
    description: "Automatize os bloqueios por horário, liberando acessos apenas no almoço ou após o expediente."
  }
];

export const Features: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'floki' | 'pandanet' | 'sentinela'>('all');

  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white pb-20">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in zoom-in duration-700">
            <Cpu size={14} className="animate-spin-slow" />
            Ecosistema Tecnológico
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tighter">
            Funcionalidades de <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-emerald-500">Próxima Geração</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Explore os recursos que fazem da Grupopixel a escolha definitiva das empresas mais ágeis do mercado.
          </p>

          {/* Filtros de Navegação */}
          <div className="flex justify-center gap-4 mb-16 font-sans">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'all' ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('floki')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'floki' ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              Floki
            </button>
            <button
              onClick={() => setActiveTab('pandanet')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'pandanet' ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              PandaNet
            </button>
            <button
              onClick={() => setActiveTab('sentinela')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'sentinela' ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              Sentinela
            </button>
          </div>
        </div>
      </section>

      {/* Floki Features Section */}
      {(activeTab === 'all' || activeTab === 'floki') && (
        <section className="py-20 relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-emerald-500/30 overflow-hidden">
                <img src="https://i.postimg.cc/65mR0jQt/1.png" alt="Floki" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-3xl font-bold">Funcionalidades do <span className="text-emerald-400">Floki</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flokiFeatures.map((f, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PandaNet Features Section */}
      {(activeTab === 'all' || activeTab === 'pandanet') && (
        <section className="py-20 relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-brand-500/30 overflow-hidden">
                <img src="/pandanet-logo.png" alt="PandaNet" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-3xl font-bold">Funcionalidades do <span className="text-brand-400">PandaNet</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pandanetFeatures.map((f, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/20">
                  <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sentinela Features Section */}
      {(activeTab === 'all' || activeTab === 'sentinela') && (
        <section className="py-20 relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-emerald-500/30 overflow-hidden">
                <Logo app="sentinela" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-3xl font-bold">Funcionalidades do <span className="text-emerald-400">Sentinela</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sentinelaFeatures.map((f, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Unified CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-brand-900 via-[#0A0A0C] to-[#0A0A0C] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] group-hover:bg-brand-500/20 transition-all duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              Ainda com dúvidas? <br />
              <span className="text-gray-500">Nossa equipe pode ajudar.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => navigate('/contato')}
                size="lg"
                className="bg-brand-500 text-white px-12 py-7 text-lg font-bold hover:bg-brand-400 transition-all shadow-xl shadow-brand-500/20"
              >
                Falar com Especialista
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => navigate('/cadastro')}
                size="lg"
                className="bg-white/5 text-white border border-white/10 px-12 py-7 text-lg font-bold hover:bg-white/10 transition-all"
              >
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};