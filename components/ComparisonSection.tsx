/**
 * Componente de Comparação (Novo)
 * Mostra visualmente a diferença de eficiência entre usar e não usar o Floki.
 * Utiliza barras de progresso animadas para representar métricas.
 */

import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Texto Explicativo */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A diferença entre o caos e o <span className="text-brand-600">controle total</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gerenciar funcionários e setores sem uma ferramenta centralizada gera perda de informações e clientes insatisfeitos. Veja como o Floki otimiza sua operação.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">Histórico centralizado de conversas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">Monitoramento em tempo real da equipe</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">Separação automática por departamentos</span>
              </li>
            </ul>
          </div>

          {/* Gráfico Visual Comparativo */}
          <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Índice de Eficiência Operacional</h3>
            
            <div className="space-y-8">
              
              {/* Cenário: Sem Floki */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-500 flex items-center gap-2">
                    <X size={16} className="text-red-500" /> Empresa Comum
                  </span>
                  <span className="font-bold text-red-500">35%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="bg-red-400 h-4 rounded-full w-[35%]"></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Mensagens perdidas, falta de controle, demora no atendimento.</p>
              </div>

              {/* Cenário: Com Floki */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-brand-700 flex items-center gap-2">
                    <Check size={16} className="text-brand-500" /> Empresa com Floki
                  </span>
                  <span className="font-bold text-brand-600">98%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="bg-brand-500 h-4 rounded-full w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                <p className="text-xs text-brand-600 mt-2 font-medium">Automação inteligente, satisfação do cliente, organização total.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};