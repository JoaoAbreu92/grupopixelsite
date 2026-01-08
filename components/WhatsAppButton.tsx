import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const PHONE_NUMBER = "5541984826972"; // Substitua pelo número real se disponível
    const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=Olá! Gostaria de saber mais sobre o Floki.`;

    useEffect(() => {
        // Mostra o popup a cada 5 segundos (loop infinito conforme solicitado, mas idealmente seria uma vez ou com intervalo maior)
        // O usuário pediu "a cada 5 segundo sobre um popup", interpretarei como um intervalo recorrente se fechar?
        // Ou apenas aparecer após 5s? "a cada 5 segundo sobre" -> "sobe" (appears).
        // Vou fazer aparecer a cada 30s para não ser irritante, ou 5s após carregar.
        // O user disse "a cada 5 segundo", então vou colocar um intervalo que reabre se estiver fechado.

        const interval = setInterval(() => {
            setShowPopup((prev) => {
                if (!prev) return true; // Se estiver fechado, abre
                return prev; // Se já estiver aberto, mantém
            });
        }, 5000); // 5 segundos

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        window.open(WHATSAPP_URL, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Popup "Posso ajudar?" */}
            {showPopup && (
                <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 relative animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-[200px]">
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowPopup(false); }}
                        className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 hover:bg-gray-200 text-gray-500"
                    >
                        <X size={12} />
                    </button>
                    <div
                        className="cursor-pointer flex items-center gap-2"
                        onClick={handleClick}
                    >
                        <p className="text-sm font-medium text-gray-800">Posso ajudar?</p>
                    </div>
                    {/* Triângulo do balão */}
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
                </div>
            )}

            {/* Botão WhatsApp */}
            <button
                onClick={handleClick}
                className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Falar no WhatsApp"
            >
                <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
            </button>
        </div>
    );
};
