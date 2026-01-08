/**
 * Componente Logo Centralizado
 * Responsável por renderizar a identidade visual da Grupopixel e de seus produtos.
 * 
 * COMO USAR:
 * 1. Para o logo principal do site: <Logo variant="dark" />
 * 2. Para logos dos produtos (Menu): <Logo app="floki" />
 * 
 * PARA ALTERAR AS IMAGENS:
 * Preencha as strings dentro de `appUrls` ou `mainLogoUrl` com os links das suas imagens.
 */

import React from 'react';
import { Box, MessageSquare, Server, LifeBuoy } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light'; // 'dark' = texto escuro (navbar), 'light' = texto claro (footer)
  className?: string;
  app?: 'floki' | 'pandanet' | 'helpdesk'; // Se definido, renderiza o logo do produto específico
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', app }) => {

  // ==================================================================================
  // ÁREA DE CONFIGURAÇÃO DE IMAGENS
  // ==================================================================================

  // URL do Logo Principal (Grupopixel)
  // Deixe vazio para usar o ícone padrão (Box) + Texto
  const mainLogoUrl = "https://i.postimg.cc/L8WTJ4PM/grupopixel-logo-placeholder-verde.webp";

  // URLs dos Logos dos Produtos (Submenus)
  // Preencha com o link da imagem (ex: "https://site.com/logo-floki.png")
  // Se deixar vazio (""), ele mostrará o ícone padrão correspondente.
  const appUrls = {
    floki: "https://i.postimg.cc/65mR0jQt/1.png",
    pandanet: "",
    helpdesk: ""
  };

  // ==================================================================================

  // LÓGICA 1: RENDERIZAÇÃO DE LOGOS DE PRODUTOS (Submenu)
  if (app) {
    const url = appUrls[app];

    // Se tiver URL de imagem configurada, exibe a imagem
    if (url) {
      return (
        <img
          src={url}
          alt={`Logo ${app}`}
          className={`w-10 h-10 object-contain rounded-lg ${className}`}
        />
      );
    }

    // Caso contrário, exibe o ícone padrão (Fallback) mantendo o design original
    const iconStyles = {
      floki: "bg-green-50 text-green-600 group-hover/item:bg-white",
      pandanet: "bg-orange-50 text-orange-600 group-hover/item:bg-white",
      helpdesk: "bg-teal-50 text-teal-600 group-hover/item:bg-white"
    };

    return (
      <div className={`p-2 rounded-lg transition-colors ${iconStyles[app]} ${className}`}>
        {app === 'floki' && <MessageSquare size={18} />}
        {app === 'pandanet' && <Server size={18} />}
        {app === 'helpdesk' && <LifeBuoy size={18} />}
      </div>
    );
  }

  // LÓGICA 2: RENDERIZAÇÃO DO LOGO PRINCIPAL (Grupopixel)
  const textColorPrincipal = variant === 'dark' ? 'text-gray-900' : 'text-white';
  const textColorSecondary = variant === 'dark' ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>

      {mainLogoUrl ? (
        <div className="bg-white rounded-full p-0 flex items-center justify-center">
          <img src={mainLogoUrl} alt="Logo Grupopixel" className="h-20 w-20 object-contain rounded-full" />
        </div>
      ) : (
        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30 transition-transform hover:scale-105">
          <Box size={24} />
        </div>
      )}

      {/* Texto da Marca */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-none tracking-tight ${textColorPrincipal}`}>
          Grupopixel
        </span>
        <span className={`text-[10px] font-medium tracking-widest uppercase ${textColorSecondary}`}>
          Technology
        </span>
      </div>
    </div>
  );
};