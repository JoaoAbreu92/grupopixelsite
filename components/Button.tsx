/**
 * Componente de Botão Reutilizável
 * Fornece estilos padronizados para botões em toda a aplicação.
 */

import React from 'react';

// Interface que define as propriedades aceitas pelo botão
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // Estilos visuais
  size?: 'sm' | 'md' | 'lg'; // Tamanhos disponíveis
  fullWidth?: boolean; // Se deve ocupar 100% da largura
  children: React.ReactNode; // Conteúdo do botão
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  // Estilos base aplicados a todos os botões (acessibilidade e layout)
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Mapeamento de variantes de estilo
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 shadow-sm", // Verde Principal
    secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900", // Escuro
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-brand-500", // Borda
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900", // Transparente
  };

  // Mapeamento de tamanhos
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-14 px-8 text-lg",
  };

  // Classe utilitária para largura total
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};