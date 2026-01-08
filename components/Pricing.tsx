/**
 * Componente Pricing (Preços)
 * Planos atualizados: Start (R$100, 5 atendentes) e Growth (R$200, 10 atendentes + Chat interno).
 */

import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Start",
    price: "R$ 100",
    period: "/mês",
    description: "Ideal para iniciar a organização do seu atendimento.",
    features: [
      "1 Número de WhatsApp",
      "5 Atendentes",
      "Chatbot Básico",
      "Disparos Manuais",
      "Suporte por Email",
      "Acesso ao Kanban"
    ],
    highlight: false,
    cta: "Teste 7 dias grátis"
  },
  {
    name: "Growth",
    price: "R$ 200",
    period: "/mês",
    description: "Potência total para times de vendas e suporte.",
    features: [
      "1 Número de WhatsApp",
      "10 Atendentes",
      "Chat Interno de Equipe",
      "Chatbot com IA",
      //"Integração n8n e Webhooks",
      "Suporte Prioritário"
    ],
    highlight: true,
    cta: "Teste 7 dias grátis"
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Soluções customizadas para grandes operações.",
    features: [
      "Múltiplos Números",
      "Atendentes Ilimitados",
      "API Dedicada",
      "Gestor de Conta",
      "SLA Garantido",
      "Desenvolvimento Customizado"
    ],
    highlight: false,
    cta: "Falar com Vendas"
  }
];

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Planos Flexíveis</h2>
          <p className="text-lg text-gray-600">
            Tecnologia de ponta acessível para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 bg-white border transition-transform duration-300 ${plan.highlight
                ? 'border-brand-500 shadow-xl ring-2 ring-brand-500 ring-opacity-20 scale-105 z-10'
                : 'border-gray-200 shadow-lg hover:border-brand-200'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Melhor Custo-Benefício
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                fullWidth
                size="lg"
                onClick={() => navigate('/cadastro')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};