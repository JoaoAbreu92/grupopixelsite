/**
 * Componente de Cadastro
 * Página de formulário para iniciar o teste grátis de 7 dias.
 * Atualizado com lógica de envio e redirecionamento para WhatsApp.
 */

import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  // Estado para controlar se o formulário foi enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui iria a lógica de envio para o backend
    // Simulando envio bem-sucedido:
    setIsSubmitted(true);
  };

  return (
    <section className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Lado Esquerdo: Benefícios */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Comece seu teste de <span className="text-brand-600">7 dias grátis</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Junte-se a outras empresas que transformam seu atendimento com o Floki. Sem necessidade de cartão de crédito.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Acesso total às funcionalidades</h3>
                  <p className="text-sm text-gray-500">Teste chatbots, múltiplos atendentes e métricas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Configuração guiada</h3>
                  <p className="text-sm text-gray-500">Nossa equipe ajuda você a configurar tudo em 2 minutos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cancele quando quiser</h3>
                  <p className="text-sm text-gray-500">Sem contratos longos ou multas escondidas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário ou Confirmação */}
          <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
            
            {isSubmitted ? (
              // --- TELA DE SUCESSO ---
              <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-500 py-8">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cadastro Enviado!</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Recebemos seus dados com sucesso. Para ativar sua conta e liberar o acesso, finalize o processo falando com nosso consultor no WhatsApp.
                </p>
                
                {/* Botão do WhatsApp */}
                <a 
                  href="https://wa.me/5541984826972?text=Ol%C3%A1%2C%20acabei%20de%20enviar%20meu%20cadastro%20no%20site%20e%20gostaria%20de%20liberar%20meu%20acesso%20de%20teste."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/30 group"
                >
                  <MessageCircle size={24} fill="white" className="text-white" />
                  <span>Falar no WhatsApp</span>
                </a>
                <p className="text-xs text-gray-400 mt-4">Você será redirecionado para o WhatsApp Web/App.</p>
              </div>
            ) : (
              // --- FORMULÁRIO DE CADASTRO ---
              <form className="space-y-5 animate-in fade-in" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                  <input 
                    required
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="voce@suaempresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    id="whatsapp" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                  <input 
                    required
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="Sua Empresa Ltda"
                  />
                </div>

                <div className="pt-2">
                  <Button fullWidth size="lg" className="justify-between group" type="submit">
                    Enviar Cadastro
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Ao enviar, você concorda com nossos <a href="#" className="text-brand-600 underline">Termos de Uso</a> e <a href="#" className="text-brand-600 underline">Política de Privacidade</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};