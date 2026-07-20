
/**
 * Componente App Principal
 * Gerencia o roteamento e o layout global da aplicação.
 * Atualizado com novas rotas de serviços e institucionais.
 */

import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Rocket } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ComparisonSection } from './components/ComparisonSection';
import { ProductShowcase } from './components/ProductShowcase';
import { RegisterForm } from './components/RegisterForm';
import { NewsCarousel } from './components/NewsCarousel';
import { ModernSitesPage, WebAppsPage } from './components/ServicePages';
import { AboutPage, ContactPage, TermsPage, PrivacyPage, LgpdPage, CareersPage, CompliancePage } from './components/InfoPages';
import { Testimonials } from './components/Testimonials';
import { BackToTop } from './components/BackToTop'; // Importação do botão voltar ao topo
import { WhatsAppButton } from './components/WhatsAppButton';
import { PandaNetPage } from './components/PandaNetPage';
import { GrupopixelHero } from './components/GrupopixelHero';
import { AgencyShowcase } from './components/AgencyShowcase';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Página de Software Floki (Específica para o sistema de WhatsApp)
const FlokiPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white overflow-hidden">
      {/* Premium Product Hero */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-[#0A0F1E] text-white">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-600/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold tracking-widest uppercase">
                <Zap size={14} className="animate-pulse" />
                WhatsApp Business Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                A Automação que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-500">
                  Liberta sua Equipe.
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Floki não é apenas um bot. É um ecossistema completo de gestão e automação para escalar seu atendimento via WhatsApp com inteligência e controle total.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/cadastro')}
                  className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-600/20 flex items-center justify-center gap-2"
                >
                  Começar Teste Grátis
                  <Rocket size={20} />
                </button>
              </div>
            </div>

            {/* Floating Interface Element */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-brand-500/20 blur-[120px] rounded-full animate-pulse-slow"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-2 border border-white/10 shadow-3xl animate-float">
                <div className="bg-[#0A0F1E] rounded-[22px] overflow-hidden">
                  <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">floki_dashboard_v2.0</span>
                  </div>
                  <div className="p-8 aspect-video flex items-center justify-center">
                    <img src="https://i.postimg.cc/65mR0jQt/1.png" alt="Floki System" className="h-32 w-32 object-contain animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Comparação (Caos vs Controle) */}
      <ComparisonSection />

      {/* Vitrine detalhada de funcionalidades (Zig-Zag) */}
      <ProductShowcase />

      {/* Grid de Funcionalidades (Resumo) */}
      <Features />

      <div className="bg-[#0A0F1E] py-24 text-center relative">
        <div className="absolute inset-0 bg-brand-600/5 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Escale seu negócio agora</h3>
          <p className="text-gray-400 mb-10 text-lg">Conecte sua conta em segundos e transforme o WhatsApp no seu canal de vendas mais lucrativo.</p>
          <button
            onClick={() => window.open('https://floki2.grupopixel.com.br/#/login', '_blank')}
            className="px-12 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:bg-brand-500 hover:text-white transition-all shadow-2xl shadow-white/5"
          >
            Acessar Dashboard Floki
          </button>
        </div>
      </div>
    </div>
  );
};

// Nova Página Inicial - Focada em Grupopixel Tecnologia e Serviços
const HomePage = () => (
  <>
    {/* Carrossel de Novidades no Topo (Ticker) */}
    <NewsCarousel />

    {/* Hero Section Tecnológica Grupopixel */}
    <GrupopixelHero />


    {/* Seção de Parceiros Mais Robusta */}
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-12">Quem confia no nosso trabalho</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          <a href="https://coldox.com.br/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300">
            <img
              src="/coldox-logo.png"
              alt="Coldox"
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-cover shadow-md bg-white p-2"
            />
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-600 uppercase tracking-tighter">COLDOX FRIOS</span>
          </a>

          <div className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300">
            <img
              src="https://acrilight.vagas.solides.com.br/_next/image?url=https%3A%2F%2Fc5gwmsmjx1.execute-api.us-east-1.amazonaws.com%2Fprod%2Fdados_processo_seletivo%2Flogo_empresa%2F183275%2FLogo%20Acrilight.jpg&w=828&q=100"
              alt="Acrilight"
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-cover shadow-md bg-white p-2"
            />
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-600 uppercase tracking-tighter">ACRILIGHT</span>
          </div>

          <a href="https://www.deployinformatica.com.br/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300">
            <img
              src="/deploy-logo.jpg"
              alt="Deploy Informática"
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-cover shadow-md bg-white p-2"
            />
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-600 uppercase tracking-tighter">DEPLOY INF.</span>
          </a>

          <a href="https://cordelcomacai.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300">
            <img
              src="/cordel-logo.png"
              alt="Cordel com Açaí"
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100 object-cover shadow-md bg-white p-2"
            />
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-brand-600 uppercase tracking-tighter">CORDEL COM AÇAÍ</span>
          </a>
        </div>
      </div>
    </div>

    {/* NOVA SEÇÃO: O Que Fazemos (Showcase da Agência) */}
    <AgencyShowcase />

    {/* Seção de Depoimentos (Feedback de Parceiros) */}
    <Testimonials />
  </>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <ScrollToTop />
        <Navbar />

        {/* Botão flutuante Voltar ao Topo (Canto Inferior Esquerdo) */}
        <BackToTop />
        <WhatsAppButton />

        {/* Adicionado padding-top para compensar a navbar fixa */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/funcionalidades" element={<Features />} />
            <Route path="/precos" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cadastro" element={<RegisterForm />} />

            {/* Software Floki */}
            <Route path="/floki" element={<FlokiPage />} />

            {/* Nova Página PandaNet */}
            <Route path="/pandanet" element={<PandaNetPage />} />

            {/* Novas Páginas de Serviços */}
            <Route path="/sites-modernos" element={<ModernSitesPage />} />
            <Route path="/web-applications" element={<WebAppsPage />} />

            {/* Páginas Institucionais do Rodapé */}
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/termos" element={<TermsPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="/lgpd" element={<LgpdPage />} />
            <Route path="/trabalhe-conosco" element={<CareersPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
