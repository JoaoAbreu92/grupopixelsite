/**
* Componente NewsCarousel (Carrossel de Novidades)
* Exibe banners rotativos com novidades da plataforma.
* 
* ATUALIZAÇÃO: Agora suporta Banners de Imagem ou Banners de Texto/Ícone.
* - Para usar IMAGEM: Preencha a propriedade 'imageUrl'.
* - Para usar TEXTO/ÍCONE: Deixe 'imageUrl' vazio e use 'color' + 'icon'.
*/

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, Star, Shield, Smartphone } from 'lucide-react';

// --- CONFIGURAÇÃO DOS SLIDES ---
const slides = [
  {
    id: 1,
    imageUrl: "/images/floki_new.png",
    title: "",
    description: "",
    icon: null,
    color: "bg-[#0c0c0c]" // Cor de fundo para combinar com o Floki
  },
  {
    id: 2,
    imageUrl: "/images/pandanet_new.png",
    title: "",
    description: "",
    icon: null,
    color: "bg-[#0a0f1e]" // Cor de fundo para combinar com PandaNet
  },
  {
    id: 3,
    imageUrl: "/images/grupopixel_new.png",
    title: "",
    description: "",
    icon: null,
    color: "bg-[#111111]" // Cor de fundo para combinar com GrupoPixel
  },
];

export const NewsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Avançar automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="w-full bg-white py-[10px]">
      <div className="w-full px-[10px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Novidades Grupopixel</h2>

        <div className="relative w-full h-64 md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl shadow-2xl group bg-gray-100">

          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${index === current ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-10 z-10'
                } ${slide.color}`}
              style={{ display: index === current ? 'block' : 'none' }}
            >
              {/* LÓGICA DE RENDERIZAÇÃO: IMAGEM OU TEXTO */}

              {slide.imageUrl ? (
                // --- MODO IMAGEM ---
                <div className="w-full h-full relative">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Overlay Escuro para leitura do texto (Só aparece se tiver texto) */}
                  {(slide.title || slide.description) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end justify-center pb-12 md:pb-16 px-8 text-center">
                      <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700">
                        {slide.title && (
                          <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
                            {slide.title}
                          </h3>
                        )}
                        {slide.description && (
                          <p className="text-gray-200 text-lg md:text-xl font-medium drop-shadow-sm">
                            {slide.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // --- MODO TEXTO / ÍCONE (Clássico) ---
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-8 md:px-20 max-w-3xl animate-in slide-in-from-bottom-10 duration-700">
                    <div className="mb-6 flex justify-center animate-bounce-slow">
                      {slide.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}

            </div>
          ))}

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute z-30 left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute z-30 right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors border border-white/10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores (Dots) */}
          <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${index === current ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
