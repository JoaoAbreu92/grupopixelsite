
/**
 * Componente Hero
 * Atualizado para focar na solução Grupopixel.
 * Inclui barra de logos de confiança no final para aumentar densidade visual.
 */

import React from 'react';
import { Button } from './Button';
import { ChevronRight, CheckCircle2, MessageCircle, BarChart3, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ==================================================================================
// CONFIGURAÇÃO DOS LOGOS DAS EMPRESAS PARCEIRAS (RODAPÉ DO HERO)
// ==================================================================================
// Para alterar, substitua as URLs abaixo pelos links das logos (PNG ou SVG recomendados).
// Use imagens com fundo transparente para melhor visualização.
const partnerLogos = [
  {
    name: "Empresa 1",
    url: "https://acrilight.vagas.solides.com.br/_next/image?url=https%3A%2F%2Fc5gwmsmjx1.execute-api.us-east-1.amazonaws.com%2Fprod%2Fdados_processo_seletivo%2Flogo_empresa%2F183275%2FLogo%20Acrilight.jpg&w=828&q=100" // Exemplo
  },
  {
    name: "Empresa 2",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVaMyPpJkXxMxInH61Jb4lejXg1ipztZUwA&s" // Exemplo
  },
  {
    name: "Empresa 3",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7T9x4xHmspaahiVowqwx7cDHRf4vcoLzwG5JfGZ_vnKWj47fZwpCcPjmFoG_Ev4Kctkw&usqp=CAU" // Exemplo
  },
  {
    name: "Cordel com Açaí",
    url: "/images/logo-cordel-com-acai.jpg",
    className: "rounded-full scale-125 shadow-sm" // Ajuste para cortar e arredondar
  }
];

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">

          {/* Lado Esquerdo: Texto */}
          <div className="flex-1 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 border border-brand-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Nova Suíte de Ferramentas Grupopixel
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforme seu WhatsApp em uma
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 block mt-2">
                Máquina de Vendas
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              O ecossistema <strong>Grupopixel</strong> centraliza seus atendimentos, automatiza respostas e organiza seus leads.
              Tecnologia de ponta para escalar seu negócio com inteligência.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button size="lg" className="group shadow-lg shadow-brand-500/20" onClick={() => navigate('/cadastro')}>
                Teste 7 dias grátis
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/funcionalidades')}>
                Ver Funcionalidades
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Setup em 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>Cancelamento grátis</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Mockup CSS da Interface */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0">
            {/* Elementos de Fundo Decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Interface Simulada (Dashboard) */}
            <div className="relative rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">

              {/* Barra Superior do Mockup */}
              <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white h-6 rounded border border-gray-200 flex items-center px-2 text-[10px] text-gray-400 font-mono">
                  app.grupopixel.com.br/dashboard
                </div>
              </div>

              {/* Corpo do Mockup */}
              <div className="flex h-[320px]">
                {/* Sidebar Lateral */}
                <div className="w-16 bg-gray-900 flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">GP</div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400"><MessageCircle size={16} /></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400"><Users size={16} /></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400"><BarChart3 size={16} /></div>
                </div>

                {/* Área Principal (Lista de Chats) */}
                <div className="w-64 bg-white border-r border-gray-100 flex flex-col">
                  <div className="p-4 border-b border-gray-100">
                    <div className="h-4 bg-gray-100 rounded w-24 mb-2"></div>
                    <div className="h-8 bg-gray-50 rounded w-full"></div>
                  </div>
                  <div className="p-2 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
                        <div className="flex-1 space-y-2 py-1">
                          <div className="h-3 bg-gray-200 rounded w-20"></div>
                          <div className="h-2 bg-gray-100 rounded w-28"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Área de Chat */}
                <div className="flex-1 bg-gray-50 p-6 flex flex-col gap-4">
                  <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600 max-w-[80%]">
                    Olá! Gostaria de saber mais sobre os planos do Floki.
                  </div>
                  <div className="self-end bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs max-w-[80%]">
                    Claro! Temos planos a partir de R$ 100/mês. Quer agendar uma demonstração?
                  </div>
                  <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-600 max-w-[80%]">
                    Sim, por favor!
                  </div>
                </div>
              </div>

              {/* Popup Flutuante (Corrigido para não cortar) */}
              <div className="absolute bottom-4 left-4 lg:left-8 right-auto bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow max-w-xs z-20">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Performance Hoje</p>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-green-600 font-bold">+128 Leads</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de Clientes (Trusted By) - Logos Editáveis */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Várias empresas já estão escalando
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="group cursor-pointer">
                {/* 
                   LOGOS DAS EMPRESAS
                   As imagens são renderizadas em escala de cinza (grayscale) e ficam coloridas ao passar o mouse.
                   A altura é fixa em h-8 para manter consistência.
                */}
                <img
                  src={partner.url}
                  alt={partner.name}
                  className={`h-12 md:h-20 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${partner.className || ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
