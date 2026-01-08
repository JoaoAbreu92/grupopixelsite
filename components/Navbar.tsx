/**
 * Componente Navbar (Barra de Navegação)
 * Atualizado com rebranding Grupopixel e lógica de modais para aplicações.
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Monitor, Layout, Server, LifeBuoy, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from './Modal';
import { Logo } from './Logo'; // Importação do novo componente Logo

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Estado para controlar qual modal está aberto
  const [activeModal, setActiveModal] = useState<'pandanet' | 'helpdesk' | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const LOGIN_URL = "https://floki2.grupopixel.com.br/#/login";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <>
      {/* Modais das Aplicações */}
      <Modal
        isOpen={activeModal === 'pandanet'}
        onClose={() => setActiveModal(null)}
        title="PandaNet"
        description="A Intranet Corporativa definitiva. Centralize comunicados, documentos e a cultura da sua empresa em um ambiente seguro e engajador."
        icon={<Server size={40} />}
      />

      <Modal
        isOpen={activeModal === 'helpdesk'}
        onClose={() => setActiveModal(null)}
        title="Helpdesk Pixel"
        description="Sistema de gestão de chamados e tickets. Organize o suporte de TI e manutenção com SLAs, filas de atendimento e relatórios de performance."
        icon={<LifeBuoy size={40} />}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white shadow-md py-2 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            {/* Logo Grupopixel (Componente Reutilizável) */}
            <Link to="/" className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
              <Logo variant="dark" />
            </Link>

            {/* Navegação Desktop */}
            <div className="hidden lg:flex items-center gap-6">

              <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium text-sm">Início</Link>

              {/* DROPDOWN: O que fazemos */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 group-hover:text-brand-600 font-medium text-sm py-2 focus:outline-none">
                  O que fazemos <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <Link to="/sites-modernos" className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group/item">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover/item:bg-white">
                      <Layout size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Sites Modernos</p>
                      <p className="text-xs text-gray-500">Landing pages de alta conversão.</p>
                    </div>
                  </Link>
                  <Link to="/web-applications" className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group/item">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg group-hover/item:bg-white">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Web Applications</p>
                      <p className="text-xs text-gray-500">Sistemas complexos na nuvem.</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* DROPDOWN: Nossas Aplicações */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 group-hover:text-brand-600 font-medium text-sm py-2 focus:outline-none">
                  Nossas Aplicações <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">

                  {/* Floki - Link para Home (Software Principal) */}
                  <Link to="/" className="flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group/item">
                    {/* Substituído pelo componente Logo com app="floki" */}
                    <Logo app="floki" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Floki</p>
                      <p className="text-xs text-gray-500">Automação de WhatsApp.</p>
                    </div>
                  </Link>

                  {/* PandaNet - Modal */}
                  <button onClick={() => setActiveModal('pandanet')} className="w-full text-left flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group/item">
                    {/* Substituído pelo componente Logo com app="pandanet" */}
                    <Logo app="pandanet" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">PandaNet</p>
                      <p className="text-xs text-gray-500">Intranet Corporativa.</p>
                    </div>
                  </button>

                  {/* Helpdesk - Modal */}
                  <button onClick={() => setActiveModal('helpdesk')} className="w-full text-left flex items-start gap-3 p-3 rounded-lg hover:bg-brand-50 transition-colors group/item">
                    {/* Substituído pelo componente Logo com app="helpdesk" */}
                    <Logo app="helpdesk" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Helpdesk</p>
                      <p className="text-xs text-gray-500">Gestão de Chamados.</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Link Simples para Funcionalidades */}
              <Link to="/funcionalidades" className="text-gray-600 hover:text-brand-600 font-medium text-sm">Funcionalidades</Link>

              <Link to="/precos" className="text-gray-600 hover:text-brand-600 font-medium text-sm">Preços</Link>
            </div>

            {/* Botões de Ação */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={handleLogin}>
                Entrar
              </Button>
              <Button size="sm" onClick={() => navigate('/cadastro')}>
                Teste 7 dias grátis
              </Button>
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="p-4 flex flex-col gap-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Início</Link>

              <div className="px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">O que fazemos</p>
                <Link to="/sites-modernos" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">Sites Modernos</Link>
                <Link to="/web-applications" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">Web Applications</Link>
              </div>

              <div className="px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nossas Aplicações</p>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-sm text-gray-600">Floki</Link>
                <button onClick={() => { setActiveModal('pandanet'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-1 text-sm text-gray-600">PandaNet</button>
                <button onClick={() => { setActiveModal('helpdesk'); setIsMobileMenuOpen(false); }} className="block w-full text-left py-1 text-sm text-gray-600">Helpdesk</button>
              </div>

              <Link to="/funcionalidades" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Funcionalidades</Link>

              <Link to="/precos" onClick={() => setIsMobileMenuOpen(false)} className="py-2 px-4 hover:bg-gray-50 rounded-lg font-medium text-gray-700">Preços</Link>

              <hr className="my-2 border-gray-100" />

              <Button variant="ghost" fullWidth onClick={handleLogin}>
                Entrar
              </Button>
              <Button fullWidth onClick={() => {
                navigate('/cadastro');
                setIsMobileMenuOpen(false);
              }}>
                Teste 7 dias grátis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};