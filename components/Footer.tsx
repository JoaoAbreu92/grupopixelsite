

/**
 * Componente Footer (Rodapé)
 * Links funcionais, Newsletter e Branding.
 * Layout atualizado para incluir newsletter e 5 colunas.
 */

import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout: Alterado para suportar 5 colunas em telas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Coluna 1: Marca (Mais larga em alguns layouts, aqui padrão) */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              A plataforma definitiva para automação, web e gestão. Tecnologia de ponta para impulsionar seus resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Coluna 2: Produto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/funcionalidades" className="hover:text-brand-400 transition-colors">Funcionalidades</Link></li>
              <li><Link to="/precos" className="hover:text-brand-400 transition-colors">Planos e Preços</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/cadastro" className="hover:text-brand-400 transition-colors">Teste Grátis</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-400 transition-colors">Sobre a Grupopixel</Link></li>
              <li><Link to="/contato" className="hover:text-brand-400 transition-colors">Entre em Contato</Link></li>
              <li><Link to="/trabalhe-conosco" className="hover:text-brand-400 transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/termos" className="hover:text-brand-400 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-brand-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/lgpd" className="hover:text-brand-400 transition-colors">LGPD</Link></li>
              <li><Link to="/compliance" className="hover:text-brand-400 transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Coluna 5: Newsletter (NOVO) */}
          <div className="lg:col-span-1">
             <h4 className="text-white font-bold mb-6 text-lg">Fique Atualizado</h4>
             <p className="text-sm text-gray-400 mb-4">
               Receba novidades sobre tecnologia, gestão e atualizações do Floki.
             </p>
             
             {subscribed ? (
               <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3 animate-in fade-in">
                 <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-white"/></div>
                 <span className="text-sm text-green-400 font-medium">Inscrição confirmada!</span>
               </div>
             ) : (
               <form onSubmit={handleSubscribe} className="relative">
                 <div className="flex flex-col gap-3">
                   <input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                   />
                   <button 
                      type="submit" 
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm group"
                   >
                     Inscrever-se <Send size={14} className="group-hover:translate-x-1 transition-transform"/>
                   </button>
                 </div>
               </form>
             )}
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grupopixel Tecnologia Ltda. Todos os direitos reservados. Feito com amor ❤️</p>
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Sistemas Operacionais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
