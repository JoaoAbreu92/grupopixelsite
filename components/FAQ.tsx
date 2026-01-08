/**
 * Componente FAQ (Perguntas Frequentes)
 * Utiliza um padrão de acordeão (Accordion) para economizar espaço.
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Preciso manter o celular ligado?",
    answer: "Não! O Floki utiliza a tecnologia oficial da API do WhatsApp ou conexão Web multidevice, permitindo que seu sistema funcione na nuvem 24/7 sem depender de um aparelho celular conectado."
  },
  {
    question: "Posso usar meu número atual?",
    answer: "Sim, você pode migrar seu número atual para o Floki. O processo é simples e nossa equipe de suporte auxilia em todas as etapas da configuração."
  },
  {
    question: "Existe limite de atendentes?",
    answer: "Depende do plano escolhido. No plano Growth, você tem até 5 atendentes, e no Enterprise, os atendentes são ilimitados."
  },
  {
    question: "O Floki integra com outros sistemas?",
    answer: "Sim, integramos com os principais CRMs, ERPs e ferramentas de marketing via API e Webhooks, além de possuir conectores nativos para n8n."
  },
  {
    question: "Existe fidelidade contratual?",
    answer: "Não, nossos planos são mensais e você pode cancelar quando quiser sem multas ou taxas escondidas."
  },
  {
    question: "O suporte é humanizado?",
    answer: "Sim, nosso time de sucesso do cliente está pronto para te atender via WhatsApp e Email, garantindo que você tenha a melhor experiência possível."
  }
];

export const FAQ: React.FC = () => {
  // Estado para controlar qual item do acordeão está aberto
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600">Tire suas dúvidas sobre o funcionamento do Floki.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
            >
              {/* Botão do Acordeão */}
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {/* Conteúdo da Resposta (renderizado condicionalmente) */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-100 animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};