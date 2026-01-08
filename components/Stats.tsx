/**
 * Componente Stats (Estatísticas)
 * Prova social através de números expressivos.
 * Fundo escuro para contraste.
 */

import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration opcional */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-blue-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-gray-800/50">

          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold text-brand-400 mb-2 tracking-tight">100+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Usuários Ativos</div>
          </div>

          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold text-brand-400 mb-2 tracking-tight">1k+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Mensagens/Dia</div>
          </div>

          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold text-brand-400 mb-2 tracking-tight">99.9%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Uptime Garantido</div>
          </div>

          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold text-brand-400 mb-2 tracking-tight">24/7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">Suporte Dedicado</div>
          </div>

        </div>
      </div>
    </section>
  );
};