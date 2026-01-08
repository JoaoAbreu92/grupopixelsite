/**
 * Arquivo de Entrada Principal (Entry Point)
 * Responsável por montar a aplicação React no DOM do navegador.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Busca o elemento raiz no HTML
const rootElement = document.getElementById('root');

// Verificação de segurança para garantir que o elemento existe
if (!rootElement) {
  throw new Error("Não foi possível encontrar o elemento root para montar a aplicação");
}

// Cria a raiz do React e renderiza o componente principal (App)
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);