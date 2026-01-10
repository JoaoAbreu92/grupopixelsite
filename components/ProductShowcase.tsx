/**
 * Componente ProductShowcase (Vitrine do Produto)
 * Exibe as funcionalidades chave com riqueza visual (Gráficos CSS/HTML).
 * Foca em CRM, IA, Exportação PDF, Chat Interno, Dashboard, Agendamentos e Integrações.
 */

import React from 'react';
import { Button } from './Button';
import {
  FileText, Download, CheckCircle2, MoreHorizontal,
  BrainCircuit, Sparkles, MessageSquare, Share2,
  Workflow, Database, Zap, ArrowRight,
  Users, Lock, BarChart3, PieChart, Calendar, Clock, Bell
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

        {/* --- BLOCO 1: CRM & KANBAN --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
              Organização Visual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CRM Kanban Integrado: <br />
              <span className="text-brand-600">Nunca mais perca uma venda.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Abandone as planilhas. Arraste e solte seus clientes entre as etapas do funil de vendas.
              Tenha uma visão clara de quantos negócios estão em negociação, fechamento ou perdidos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-brand-500 w-5 h-5" /> Etapas customizáveis
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-brand-500 w-5 h-5" /> Agendamento de follow-up
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-brand-500 w-5 h-5" /> Atribuição automática de leads
              </li>
            </ul>
          </div>

          {/* Gráfico Visual: Kanban Board */}
          <div className="flex-1 w-full lg:order-2">
            <div className="relative bg-gray-100 rounded-xl p-6 border border-gray-200 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-brand-500/20 group">
              {/* Header do Mockup */}
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-700">Funil de Vendas</h4>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
              </div>

              {/* Colunas do Kanban */}
              <div className="grid grid-cols-3 gap-4">
                {/* Coluna 1: Novos */}
                <div className="bg-gray-200/50 p-3 rounded-lg flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase">
                    <span>Novos</span> <span className="bg-gray-300 px-1.5 rounded">3</span>
                  </div>
                  {/* Card 1 */}
                  <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 cursor-move hover:-translate-y-1 transition-transform">
                    <p className="text-sm font-semibold text-gray-800">Loja de Móveis</p>
                    <p className="text-xs text-gray-400 mt-1">Interesse em Plano Growth</p>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full text-[10px] flex items-center justify-center text-blue-600 font-bold">JD</div>
                      <span className="text-[10px] text-gray-400">14:00</span>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 opacity-70">
                    <div className="h-2 bg-gray-100 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-50 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Coluna 2: Negociação */}
                <div className="bg-gray-200/50 p-3 rounded-lg flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase">
                    <span>Negociação</span> <span className="bg-gray-300 px-1.5 rounded">1</span>
                  </div>
                  {/* Card Ativo */}
                  <div className="bg-white p-3 rounded shadow-lg border-l-4 border-yellow-500 ring-2 ring-brand-200 relative">
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Urgente</div>
                    <p className="text-sm font-semibold text-gray-800">Clínica Saúde</p>
                    <p className="text-xs text-gray-400 mt-1">Aguardando contrato</p>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] rounded">Quente</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 3: Fechado */}
                <div className="bg-gray-200/50 p-3 rounded-lg flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase">
                    <span>Fechado</span> <span className="bg-gray-300 px-1.5 rounded">5</span>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-gray-800">Tech Solutions</p>
                    <p className="text-xs text-green-600 mt-1 font-medium">R$ 2.400,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCO 2: CHAT INTERNO (Novo) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Gráfico Visual: Team Chat */}
          <div className="flex-1 w-full lg:order-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-md transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-blue-500/20">
              {/* Chat Header */}
              <div className="bg-gray-900 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Equipe Comercial</h4>
                    <p className="text-xs text-gray-400">5 membros online</p>
                  </div>
                </div>
                <Lock size={16} className="text-gray-500" />
              </div>

              {/* Chat Body */}
              <div className="p-4 bg-gray-50 h-64 flex flex-col gap-4 overflow-hidden relative">
                {/* Mensagem 1 */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AN</div>
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-gray-700">Ana Nogueira</span>
                      <span className="text-[10px] text-gray-400">09:15</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600">
                      Pessoal, quem está cuidando do lead da <strong>Tech Solutions</strong>? Eles pediram urgência.
                    </div>
                  </div>
                </div>

                {/* Mensagem 2 (Nota Interna) */}
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">VC</div>
                  <div className="flex flex-col gap-1 items-end max-w-[80%]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-gray-700">Você</span>
                      <span className="text-[10px] text-gray-400">09:18</span>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-2xl rounded-tr-none shadow-sm border border-yellow-100 text-sm text-gray-800">
                      <span className="text-xs font-bold text-yellow-600 block mb-1 uppercase tracking-wide">Nota Interna</span>
                      Eu assumi! Já agendei a reunião para amanhã às 14h. Pode deixar. 👍
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-400">Escreva uma mensagem para a equipe...</div>
                <div className="w-9 h-9 bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              Colaboração
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chat Interno e <br />
              <span className="text-brand-600">Notas Privadas.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A comunicação da sua equipe não precisa sair da plataforma. Converse com outros atendentes,
              deixe notas ocultas dentro das conversas dos clientes e resolva problemas sem trocar de aba.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-brand-500 w-5 h-5" /> @Menções para notificar colegas
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-brand-500 w-5 h-5" /> Notas invisíveis para o cliente
              </li>
            </ul>
          </div>
        </div>

        {/* --- BLOCO 3: INTELIGÊNCIA ARTIFICIAL --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6">
              Inteligência Artificial
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Atendimento Humanizado <br />
              <span className="text-brand-600">gerado por IA.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              O Floki aprende com o histórico da sua empresa. Ele entende perguntas complexas, consulta sua base de conhecimento e responde como se fosse seu melhor funcionário, 24 horas por dia.
            </p>
          </div>

          {/* Gráfico Visual: Chat AI */}
          <div className="flex-1 w-full lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-lg mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-purple-500/20">
              <div className="bg-brand-600 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Floki AI Assistant</h4>
                    <p className="text-xs text-brand-100">Digitando...</p>
                  </div>
                </div>
                <MoreHorizontal size={20} />
              </div>

              <div className="p-6 bg-gray-50 h-80 flex flex-col gap-4">
                {/* Mensagem Cliente */}
                <div className="self-start max-w-[85%]">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-gray-700 text-sm">
                    Olá, gostaria de saber se o sistema consegue agendar reuniões e tirar dúvidas sobre os planos.
                  </div>
                  <span className="text-[10px] text-gray-400 ml-2 mt-1">Cliente - 10:42</span>
                </div>

                {/* Análise da IA (Box Flutuante) */}
                <div className="self-center bg-purple-50 border border-purple-100 p-2 rounded-lg flex items-center gap-2 animate-pulse">
                  <BrainCircuit size={14} className="text-purple-600" />
                  <span className="text-xs font-medium text-purple-700">Analisando contexto e documentação...</span>
                </div>

                {/* Resposta IA */}
                <div className="self-end max-w-[90%]">
                  <div className="bg-brand-100 p-4 rounded-2xl rounded-tr-none shadow-sm text-brand-900 text-sm">
                    Olá! Sim! O <strong>Floki</strong> consulta sua agenda em tempo real para marcar reuniões e responde instantaneamente dúvidas sobre preços e planos.
                    <br /><br />
                    Gostaria que eu te enviasse a tabela de preços?
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[10px] text-gray-400">Gerado por IA</span>
                    <Sparkles size={10} className="text-brand-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCO 4: AGENDAMENTO (Novo) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Gráfico Visual: Agendamento */}
          <div className="flex-1 w-full lg:order-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm p-6 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-brand-500/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                    <Calendar size={20} />
                  </div>
                  <h4 className="font-bold text-gray-800">Agendamentos</h4>
                </div>
                <div className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">3 Pendentes</div>
              </div>

              {/* Lista de Agendamentos */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 text-sm">Campanha Black Friday</h5>
                    <p className="text-xs text-gray-500 mt-1">Lista: Leads Quentes (2.400 contatos)</p>
                    <div className="flex items-center gap-2 mt-3 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded border border-gray-200 w-fit">
                      <Calendar size={12} /> 24 Nov - 09:00
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex items-start gap-4 opacity-70">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-gray-900 text-sm">Lembrete de Renovação</h5>
                    <p className="text-xs text-gray-500 mt-1">Lista: Clientes Ativos</p>
                    <div className="flex items-center gap-2 mt-3 text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded border border-gray-200 w-fit">
                      <Calendar size={12} /> 01 Dez - 08:00
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-brand-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-brand-700 transition-colors">
                Novo Agendamento
              </button>
            </div>
          </div>

          <div className="flex-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider mb-6">
              Produtividade
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Agende mensagens <br />
              <span className="text-brand-600">e dispare em massa.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Programe campanhas de marketing ou lembretes de renovação para serem enviados automaticamente.
              Segmente sua base de clientes e deixe o Floki trabalhar enquanto você dorme.
            </p>
          </div>
        </div>

        {/* --- BLOCO 5: DASHBOARD (Novo) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              Gestão à Vista
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dashboards com <br />
              <span className="text-brand-600">métricas em tempo real.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tome decisões baseadas em dados, não em "achismos". Monitore o tempo de resposta da sua equipe,
              o volume de atendimentos por departamento e a conversão de vendas em um painel unificado.
            </p>
          </div>

          {/* Gráfico Visual: Dashboard */}
          <div className="flex-1 w-full lg:order-2 flex justify-center">
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl">
              {/* Dash Header */}
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-white font-bold flex items-center gap-2"><BarChart3 size={20} className="text-brand-400" /> Analytics</h4>
                <div className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Últimos 7 dias</div>
              </div>

              {/* Big Numbers */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Total Atendimentos</p>
                  <p className="text-2xl font-bold text-white">1.402</p>
                  <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">▲ 12% vs semana passada</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <p className="text-xs text-gray-400 mb-1">Tempo Médio</p>
                  <p className="text-2xl font-bold text-white">2m 14s</p>
                  <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">▼ 30s melhoria</span>
                </div>
              </div>

              {/* Gráfico de Barras CSS */}
              <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
                <p className="text-xs text-gray-400 mb-4">Volume por Dia</p>
                <div className="flex justify-between items-end h-32 gap-2">
                  <div className="w-full bg-gray-700 rounded-t-md h-[40%] hover:bg-brand-500 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">40</div></div>
                  <div className="w-full bg-gray-700 rounded-t-md h-[65%] hover:bg-brand-500 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">65</div></div>
                  <div className="w-full bg-gray-700 rounded-t-md h-[45%] hover:bg-brand-500 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">45</div></div>
                  <div className="w-full bg-brand-600 rounded-t-md h-[90%] shadow-[0_0_15px_rgba(16,185,129,0.4)] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">90</div></div>
                  <div className="w-full bg-gray-700 rounded-t-md h-[75%] hover:bg-brand-500 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">75</div></div>
                  <div className="w-full bg-gray-700 rounded-t-md h-[30%] hover:bg-brand-500 transition-colors relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">30</div></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
                  <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCO 6: EXPORTAÇÃO E AUDITORIA --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              Segurança e Auditoria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Exporte conversas em PDF <br />
              <span className="text-brand-600">com um clique.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Precisa documentar um atendimento ou fazer auditoria? Exporte o histórico completo de qualquer chat para PDF, organizado cronologicamente, com imagens e áudios inclusos. Perfeito para o Jurídico.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">Histórico Vitalício</span>
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">Backup na Nuvem</span>
            </div>
          </div>

          {/* Gráfico Visual: Documento PDF */}
          <div className="flex-1 w-full lg:order-2 flex justify-center">
            <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105">
              {/* Card do Documento */}
              <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-2xl relative z-10 flex flex-col items-center pt-10 px-6 transition-transform group-hover:-translate-y-2 group-hover:shadow-brand-500/20">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText size={32} className="text-red-500" />
                </div>
                <div className="w-full space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-gray-50 rounded w-full"></div>
                  <div className="h-2 bg-gray-50 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-50 rounded w-full"></div>
                  <div className="h-2 bg-gray-50 rounded w-4/5"></div>
                </div>
                <div className="mt-auto mb-6 w-full">
                  <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                    <Download size={16} /> Baixar PDF
                  </button>
                </div>
              </div>
              {/* Elementos Decorativos Fundo */}
              <div className="absolute top-2 -right-4 w-64 h-80 bg-gray-50 border border-gray-200 rounded-lg z-0 rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 z-20 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={16} /></div>
                <div className="text-xs font-bold text-gray-700">Exportação Concluída</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCO 7: INTEGRAÇÕES --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Gráfico Visual: Rede de Integrações */}
          <div className="flex-1 w-full lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl rounded-full p-4 hover:bg-gray-50/50">
              {/* Círculos Orbitais (CSS Animation) */}
              <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-12 border border-dashed border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Logo Central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-600 rounded-2xl shadow-2xl shadow-brand-500/50 flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <MessageSquare size={40} className="text-white" />
              </div>

              {/* Logos Orbitando (Representações Abstratas) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-100 shadow-lg rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <Workflow className="text-orange-500" /> {/* n8n */}
                <span className="absolute -bottom-6 text-xs font-bold text-gray-500">n8n</span>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white border border-gray-100 shadow-lg rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <Database className="text-blue-500" /> {/* MySQL/Database */}
                <span className="absolute -bottom-6 text-xs font-bold text-gray-500">Banco de Dados</span>
              </div>

              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-100 shadow-lg rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <Share2 className="text-purple-500" /> {/* Webhooks */}
                <span className="absolute -bottom-6 text-xs font-bold text-gray-500">Webhooks</span>
              </div>

              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-100 shadow-lg rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <Zap className="text-yellow-500" /> {/* Zapier/API */}
                <span className="absolute -bottom-6 text-xs font-bold text-gray-500">API</span>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              Ecossistema Conectado
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Integrações Poderosas <br />
              <span className="text-brand-600">API, Webhooks e n8n.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              O Floki não trabalha sozinho. Conecte-o ao seu ERP, dispare mensagens quando um pagamento for aprovado, ou sincronize leads com seu CRM favorito usando nossa integração nativa com n8n e Typebot.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 font-mono text-xs text-gray-600">
              <span className="text-purple-600">POST</span> /api/v1/messages/send <br />
              Authorization: Bearer <span className="text-brand-600">floki_token_123</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};