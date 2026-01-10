/**
 * Páginas de Serviços (Sites Modernos e Web Applications)
 * Layouts focados em conversão e demonstração tecnológica.
 * Cores atualizadas para a paleta da marca (Verde, Branco e Cinza).
 */

import React from 'react';
import { Button } from './Button';
import { Layout, Smartphone, Search, Globe, Database, Cloud, MousePointerClick } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Página: Sites Modernos
export const ModernSitesPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Service com Banner Tecnológico */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Tecnologia e Conectividade"
            className="w-full h-full object-cover"
          />
          {/* Overlays para legibilidade */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Sites que <span className="text-brand-400">vendem por você</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 drop-shadow-md font-medium">
            Desenvolvemos landing pages de alta conversão e sites institucionais com design premium, focados na experiência do usuário e ranqueamento no Google.
          </p>
          <Button onClick={() => navigate('/cadastro')} className="bg-brand-500 hover:bg-brand-600 text-white border-none shadow-lg shadow-brand-500/30">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Grid de Diferenciais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
              <Smartphone className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mobile First</h3>
              <p className="text-gray-600">Seu site perfeito em qualquer tela, do celular ao desktop 4K.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
              <Search className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">SEO Otimizado</h3>
              <p className="text-gray-600">Estrutura preparada para aparecer nas primeiras posições do Google.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
              <Globe className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Velocidade Extrema</h3>
              <p className="text-gray-600">Carregamento instantâneo para não perder nenhum visitante.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
              <Layout className="w-10 h-10 text-brand-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Design UI/UX</h3>
              <p className="text-gray-600">Layouts desenhados estrategicamente para converter visitantes em leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio de Clientes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quem confia na Grupopixel</h2>
            <p className="text-lg text-gray-600">Conheça alguns dos projetos que transformamos em realidade.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Cliente: Coldox */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gray-50">
              <div className="aspect-video bg-white flex items-center justify-center relative overflow-hidden">
                <img src="/coldox-logo.jpg" alt="Coldox Logo" className="relative z-10 w-48 h-48 object-cover rounded-full drop-shadow-lg" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Coldox</h3>
                <p className="text-gray-600 mb-6">Empresa especializada em frios e congelados bovinos.</p>
                <a
                  href="https://coldox.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border-2 border-brand-600 text-brand-600 font-bold rounded-lg hover:bg-brand-600 hover:text-white transition-all duration-300"
                >
                  Veja o nosso trabalho
                </a>
              </div>
            </div>

            {/* Cliente: Cordel com Açaí */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gray-50">
              <div className="aspect-video bg-white flex items-center justify-center relative overflow-hidden">
                <img src="/cordel-logo.jpg" alt="Cordel com Açaí Logo" className="relative z-10 w-48 h-48 object-cover rounded-full drop-shadow-lg" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cordel com Açaí</h3>
                <p className="text-gray-600 mb-6">Site pessoal da escritora Socorro Rebouças: cultura e poesia.</p>
                <a
                  href="https://cordelcomacai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border-2 border-brand-600 text-brand-600 font-bold rounded-lg hover:bg-brand-600 hover:text-white transition-all duration-300"
                >
                  Veja os nosso trabalho
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Tech */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" alt="Coding" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Tecnologias Modernas</h2>
            <p className="text-gray-600">
              Não usamos templates prontos lentos. Desenvolvemos com as tecnologias mais modernas do mercado (React, Next.js, Tailwind CSS) garantindo performance e escalabilidade.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>React & TypeScript</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>Hospedagem em Nuvem</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-500 rounded-full"></div>Integração com WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// Página: Web Applications
export const WebAppsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Service */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        {/* Fundo Sólido e Limpo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Sob Medida <span className="text-brand-400">na Nuvem</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Transformamos processos complexos em sistemas web intuitivos, seguros e escaláveis. A solução exata para a dor da sua empresa.
          </p>
          <Button onClick={() => navigate('/cadastro')} className="bg-brand-600 hover:bg-brand-700 text-white border-none">
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* Grid de Capacidades */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border rounded-2xl border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all">
              <div className="mx-auto w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Gestão de Dados</h3>
              <p className="text-gray-600">Painéis administrativos, CRMs customizados e dashboards de BI.</p>
            </div>
            <div className="p-8 border rounded-2xl border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all">
              <div className="mx-auto w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6">
                <Cloud size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Escalabilidade</h3>
              <p className="text-gray-600">Arquitetura serverless que cresce junto com o seu número de usuários.</p>
            </div>
            <div className="p-8 border rounded-2xl border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all">
              <div className="mx-auto w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6">
                <MousePointerClick size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interface Intuitiva</h3>
              <p className="text-gray-600">Design focado na experiência do usuário (UX/UI), facilitando o uso diário sem treinamentos complexos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Tech Code - Limpo e sem borrões */}
      <section className="py-20 bg-gray-900 text-gray-300 font-mono text-sm">
        <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2">
            <p><span className="text-brand-400">const</span> <span className="text-white">solucaoPixel</span> = <span className="text-brand-400">async</span> () ={'>'} {'{'}</p>
            <p className="pl-6"><span className="text-gray-400">// Otimização automática de processos</span></p>
            <p className="pl-6"><span className="text-brand-400">await</span> system.<span className="text-yellow-400">optimize</span>(<span className="text-green-400">'Processos'</span>);</p>
            <p className="pl-6"><span className="text-brand-400">return</span> <span className="text-green-400">"Eficiência Máxima"</span>;</p>
            <p>{'}'}</p>
          </div>
        </div>
        <div className="text-center mt-12 max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-sans font-bold text-white mb-4">Código Limpo e Eficiente</h3>
          <p className="text-gray-400">Nossa equipe de engenharia garante a estabilidade do seu negócio com as melhores práticas de desenvolvimento.</p>
        </div>
      </section>
    </div>
  );
};