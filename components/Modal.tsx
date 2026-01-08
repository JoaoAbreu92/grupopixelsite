/**
 * Componente Modal
 * Janela sobreposta para exibir informações rápidas (usado para PandaNet e Helpdesk).
 */
import React from 'react';
import { X, Clock } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay Escuro com Blur */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Conteúdo do Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Ícone/Logo do Produto */}
          <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-inner">
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          {/* Badge de "Em Breve" */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600 font-medium text-sm border border-gray-200">
            <Clock size={16} />
            <span>Lançamento em breve</span>
          </div>
        </div>
      </div>
    </div>
  );
};