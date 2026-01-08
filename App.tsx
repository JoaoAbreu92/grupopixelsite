
/**
 * Componente App Principal
 * Gerencia o roteamento e o layout global da aplicação.
 * Atualizado com novas rotas de serviços e institucionais.
 */

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Página Inicial com a nova ordem solicitada
const HomePage = () => (
  <>
    {/* Carrossel de Novidades no Topo (Ticker) */}
    <NewsCarousel />

    {/* Hero Section Principal com barra de logos */}
    <Hero />

    {/* Seção de Comparação (Caos vs Controle) */}
    <ComparisonSection />

    {/* Vitrine detalhada de funcionalidades (Zig-Zag) */}
    <ProductShowcase />

    {/* NOVA SEÇÃO: Feedbacks (acima das métricas) */}
    <Testimonials />

    {/* Prova Social (Métricas) */}
    <Stats />

    {/* Grid de Funcionalidades (Resumo) */}
    <Features />
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
