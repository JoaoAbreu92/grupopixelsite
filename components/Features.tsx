/**
 * Componente Features (Funcionalidades)
 * Lista os principais recursos do software em um grid.
 */

import React from 'react';
import { Bot, Users, BarChart3, Zap, Lock, Kanban, Workflow, BrainCircuit } from 'lucide-react';

// Dados das funcionalidades atualizados
const features = [
  {
    icon: <Bot className="w-6 h-6 text-white" />,
    title: "Chatbots Inteligentes",
    description: "Crie fluxos de conversa automáticos para qualificar leads e agendar reuniões 24h por dia sem intervenção humana."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Multi-atendentes",
    description: "Um único número de WhatsApp para toda a sua equipe. Distribua conversas por departamentos automaticamente."
  },
  {
    icon: <Kanban className="w-6 h-6 text-white" />,
    title: "CRM e Kanban",
    description: "Organize seus leads visualmente em colunas (Novo, Em negociação, Fechado) e nunca perca uma oportunidade de venda."
  },
  {
    icon: <Workflow className="w-6 h-6 text-white" />,
    title: "APIs e n8n",
    description: "Conecte o Floki a milhares de outros softwares. Webhooks prontos e integração nativa com fluxos do n8n."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    title: "Inteligência Artificial",
    description: "Respostas humanizadas geradas por IA que entendem o contexto da conversa e auxiliam seus atendentes."
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "Segurança de Dados",
    description: "Seus dados criptografados e seguros. Conformidade total com a LGPD e backups automáticos."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Recursos Poderosos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tudo o que você precisa para escalar</h3>
          <p className="text-lg text-gray-600">
            A plataforma Grupopixel foi desenhada para eliminar gargalos no seu atendimento e potencializar suas vendas.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all duration-300 group cursor-default"
            >
              {/* Ícone com efeito hover */}
              <div className="w-12 h-12 rounded-lg bg-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-500/30">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};