
/**
 * Componente Testimonials (Depoimentos/Feedbacks)
 * Exibe a prova social com notas e comentários de clientes.
 * 
 * PARA EDITAR:
 * Adicione, remova ou altere os objetos dentro da lista 'feedbacks' abaixo.
 */

import React from 'react';
import { Star, Award, Quote, CheckCircle2 } from 'lucide-react';

// ==================================================================================
// CONFIGURAÇÃO DOS DEPOIMENTOS
// ==================================================================================
// - photoUrl: Coloque o link da foto da pessoa (ex: "https://site.com/foto.jpg"). 
//             Se deixar vazio (""), o sistema usará as iniciais coloridas.
// - content: O texto do depoimento.
// - rating: Nota de 1 a 5.

interface FeedbackItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  photoUrl?: string;
  avatarColor: string;
}

const feedbacks: FeedbackItem[] = [
  {
    id: 1,
    name: "Leandro",
    role: "CEO",
    company: "Deploy Infotmática",
    content: "Usamos a Floki a meses e estamos muito satisfeitos. A plataforma é muito funcional e ajudou na organização dos nossos atendimentos. Seja para pequena ou grande empresa eu tenho certeza que será uma grande ajuda.",
    rating: 5,
    //photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop", // EXEMPLO: Foto real
    avatarColor: "bg-blue-100 text-blue-600" // Cor de fallback se não tiver foto
  },
  {
    id: 2,
    name: "Franciele Snack",
    role: "Gerente financeiro",
    company: "Coldox Frios e Embutidos Bovinos",
    content: "A estabilidade é o ponto forte. Já testamos outras ferramentas que caíam toda hora. Com o Grupopixel, temos segurança e o suporte é nota 10.",
    rating: 5,
    //photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop", // EXEMPLO: Foto real
    avatarColor: "bg-purple-100 text-purple-600"
  },
  /*{
    id: 3,
    name: "Fernando Alencar",
    role: "Diretor Operacional",
    company: "Logística Express",
    content: "A estabilidade é o ponto forte. Já testamos outras ferramentas que caíam toda hora. Com o Grupopixel, temos segurança e o suporte é nota 10.",
    rating: 4.5,
    photoUrl: "", // EXEMPLO: Sem foto (Usa as iniciais)
    avatarColor: "bg-orange-100 text-orange-600"
  }*/
];

// Configuração da Nota Geral
const overallRating = {
  score: "4.9",
  total: "5.0",
  label: "Excelência Comprovada",
  sublabel: "Baseado em +100 avaliações (CSAT)"
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* SVG Definitions for Rating */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
      </svg>

      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute right-0 top-20 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center mb-16">

          {/* Cabeçalho de Texto */}
          <div className="flex-1">
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
              <Star size={16} fill="currentColor" /> Feedback de Parceiros
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Empresas que confiam na <br />
              <span className="text-brand-600">nossa tecnologia.</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-xl">
              Não acredite apenas na nossa palavra. Veja o impacto real que o ecossistema Grupopixel gera no dia a dia de operações reais.
            </p>
          </div>

          {/* Badge de Excelência (Estilo solicitado) */}
          <div className="flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Brilho de fundo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-transparent opacity-50"></div>

              <div className="relative z-10 flex items-center gap-6">
                {/* Ícone Award */}
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-brand-400 shadow-lg">
                  <Award size={32} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{overallRating.label}</h4>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{overallRating.score}<span className="text-xl text-gray-400">/{overallRating.total}</span></span>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                  </div>

                  {/* Barra de Progresso Visual */}
                  <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-500 w-[98%] rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{overallRating.sublabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Cards de Feedbacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 group relative flex flex-col"
            >
              {/* Ícone de Aspas decorativo */}
              <Quote className="absolute top-6 right-6 text-gray-100 w-10 h-10 group-hover:text-brand-100 transition-colors" />

              {/* Conteúdo */}
              <div className="flex-grow mb-6 relative z-10">
                <div className="flex text-yellow-400 mb-4 gap-0.5">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  {item.rating % 1 !== 0 && <Star size={14} fill="url(#half)" className="opacity-50" />}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">

                {/* Lógica de Imagem do Autor */}
                {item.photoUrl ? (
                  // Opção 1: Foto Real
                  <img
                    src={item.photoUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                ) : (
                  // Opção 2: Iniciais (Fallback)
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.avatarColor}`}>
                    {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                  <p className="text-xs text-brand-600 font-medium flex items-center gap-1 mt-0.5">
                    <CheckCircle2 size={10} /> {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
