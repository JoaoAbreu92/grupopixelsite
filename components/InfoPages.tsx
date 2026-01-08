/**
 * Páginas Institucionais (Sobre, Contato, Jurídico, Carreiras)
 * Design rico, moderno e responsivo com métricas e dashboards visuais.
 */

import React from 'react';
import { 
  Mail, MapPin, Phone, Clock, Send, Shield, FileText, 
  Lock, CheckCircle2, Award, Users, Rocket, BarChart3, 
  ArrowRight, Briefcase
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

// --- PÁGINA SOBRE ---
export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        {/* Elementos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-brand-400 text-xs font-medium mb-6 uppercase tracking-wider">
            Desde 2023
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Nós somos a <span className="text-brand-500">Grupopixel</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Nascemos em 2023 com uma missão clara: democratizar a tecnologia de ponta para empresas brasileiras. 
            Transformamos complexidade em softwares intuitivos que geram crescimento real.
          </p>
        </div>
      </section>

      {/* Seção de Métricas (Visual "Vivo") */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">2+ Anos</h3>
              <p className="text-gray-500 font-medium">De inovação contínua no mercado SaaS</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-500 font-medium">Usuários ativos em nossas plataformas</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-500 font-medium">Interações processadas mensalmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* História e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Jornada</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Fundada em 2023, a Grupopixel surgiu da necessidade de encontrar ferramentas que unissem 
                  potência e simplicidade. Começamos pequenos, desenvolvendo soluções internas, e rapidamente 
                  percebemos que nossas ferramentas poderiam ajudar milhares de outros empreendedores.
                </p>
                <p>
                  Hoje, somos referência em automação de WhatsApp e desenvolvimento web, mantendo o espírito 
                  de startup: ágil, focada no cliente e obcecada por qualidade.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" /> <span>Transparência Radical</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" /> <span>Suporte Humanizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" /> <span>Tecnologia de Ponta</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" /> <span>Foco em Resultado</span>
                </div>
              </div>
            </div>
            
            {/* Visual Dashboard Abstract */}
            <div className="flex-1 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Award className="text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Excelência Comprovada</h4>
                      <p className="text-sm text-gray-500">Reconhecimento do Mercado</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-brand-500 w-[95%]"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Satisfação do Cliente (CSAT)</span>
                      <span className="font-bold text-gray-900">9.8/10</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- PÁGINA CONTATO ---
export const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vamos conversar?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida sobre o Floki ou quer um projeto personalizado? 
            Nossa equipe responde em média em menos de 1 hora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="text-brand-600" size={20} /> Comercial
              </h3>
              <p className="text-gray-600 mb-2 text-sm">Para vendas e parcerias:</p>
              <a href="mailto:contato@grupopixel.com.br" className="text-brand-600 font-medium hover:underline block mb-4">
                contato@grupopixel.com.br
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 p-2 rounded">
                <Clock size={12} /> Seg-Sex (Comercial) e Sáb até 12h
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="text-blue-600" size={20} /> Telefone & WhatsApp
              </h3>
              <p className="text-gray-600 mb-2 text-sm">Fale conosco agora:</p>
              <a href="https://wa.me/5541984826972" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline block mb-4">
                (41) 98482-6972
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 p-2 rounded">
                <Clock size={12} /> 24/7 para emergências
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-gray-600" size={20} /> Escritório
              </h3>
              <p className="text-gray-600 text-sm">
                Travessa Londrina, 189<br />
                CEP 83830-373 - Fazenda Rio Grande, PR
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                    placeholder="João Silva" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Corporativo</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                    placeholder="joao@empresa.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-brand-500 outline-none transition-all">
                  <option>Tenho interesse no Floki</option>
                  <option>Quero desenvolver um Site/App</option>
                  <option>Preciso de Suporte</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                  placeholder="Como podemos ajudar você hoje?"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button size="lg" className="flex items-center gap-2 group">
                  Enviar Mensagem <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- PÁGINA TRABALHE CONOSCO ---
export const CareersPage = () => {
  const benefits = [
    { icon: <Rocket className="text-brand-600" size={24} />, title: "Crescimento Acelerado", desc: "Plano de carreira estruturado e feedbacks constantes." },
    { icon: <Users className="text-blue-600" size={24} />, title: "Cultura Colaborativa", desc: "Ambiente sem burocracia, focado em inovação e pessoas." },
    { icon: <Clock className="text-purple-600" size={24} />, title: "Horário Flexível", desc: "Trabalhe de forma híbrida ou remota, focado em entregas." },
  ];

  // --- CONFIGURAÇÃO DE VAGAS ---
  // Para adicionar uma vaga, descomente as linhas dentro do array abaixo.
  // Deixe o array vazio [] para mostrar a mensagem de "Não há vagas".
  const jobs: Array<{title: string, type: string, dept: string}> = [
    // { title: "Desenvolvedor Full Stack (Pleno)", type: "Remoto", dept: "Engenharia" },
    // { title: "SDR - Pré-vendas", type: "São Paulo - Híbrido", dept: "Comercial" },
    // { title: "Analista de Suporte N2", type: "Remoto", dept: "Customer Success" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
       {/* Hero */}
       <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-brand-400 text-xs font-medium mb-6 uppercase tracking-wider">
               Carreiras
             </div>
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Construa o futuro conosco</h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Estamos sempre em busca de talentos que queiram desafiar o status quo e criar tecnologia de impacto.
             </p>
          </div>
       </section>
       
       {/* Benefits */}
       <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Por que ser um Pixel?</h2>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((b, i) => (
                   <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="mb-4 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">{b.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Openings */}
       <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vagas Abertas</h2>
             <div className="space-y-4">
                {jobs.length > 0 ? (
                  // Lista de Vagas (Renderizada apenas se houver itens no array jobs)
                  jobs.map((job, i) => (
                     <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-white p-6 border border-gray-200 rounded-lg hover:border-brand-300 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                             <Briefcase size={18} />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg text-gray-900">{job.title}</h4>
                              <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                  <span>{job.dept}</span>
                                  <span>•</span>
                                  <span>{job.type}</span>
                              </div>
                           </div>
                        </div>
                        <Button variant="outline" className="mt-4 md:mt-0 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200">
                          Aplicar <ArrowRight size={16} className="ml-2" />
                        </Button>
                     </div>
                  ))
                ) : (
                  // Mensagem de "Sem Vagas"
                  <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 border-dashed rounded-xl p-10 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-400 mb-4 shadow-sm">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Não há vagas abertas no momento</h3>
                    <p className="text-gray-500 max-w-md">
                      Nossa equipe está completa por enquanto, mas estamos sempre crescendo. Fique ligado em nossas redes!
                    </p>
                  </div>
                )}
             </div>

             <div className="text-center mt-12 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Quer fazer parte do banco de talentos?</h4>
                <p className="text-gray-600 mb-4">Envie seu currículo e entraremos em contato assim que surgir uma oportunidade.</p>
                <a href="mailto:talentos@grupopixel.com.br" className="text-brand-600 font-bold hover:underline flex items-center justify-center gap-2">
                  <Mail size={16} /> talentos@grupopixel.com.br
                </a>
             </div>
          </div>
       </section>
    </div>
  );
};

// --- LAYOUT JURÍDICO (Sidebar) ---
const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const location = useLocation();
  const links = [
    { path: '/termos', label: 'Termos de Uso', icon: <FileText size={18} /> },
    { path: '/privacidade', label: 'Política de Privacidade', icon: <Lock size={18} /> },
    { path: '/lgpd', label: 'LGPD', icon: <Shield size={18} /> },
    { path: '/compliance', label: 'Compliance & Ética', icon: <CheckCircle2 size={18} /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar de Navegação */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-24">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">Jurídico</h3>
              <nav className="space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'bg-brand-50 text-brand-700' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">{title}</h1>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
              {children}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- PÁGINAS JURÍDICAS ---

export const TermsPage = () => (
  <LegalLayout title="Termos de Uso">
    <h3>1. Aceitação dos Termos</h3>
    <p>
      Ao acessar e usar os serviços fornecidos pelo <strong>Grupopixel</strong>, incluindo o software <strong>Floki</strong>, 
      você concorda em cumprir estes Termos de Uso e todas as leis aplicáveis. Se você não concordar com algum destes termos, 
      está proibido de usar ou acessar este site e seus serviços.
    </p>

    <h3>2. Licença de Uso</h3>
    <p>
      É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site do Grupopixel, 
      apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
    </p>

    <h3>3. Responsabilidades do Usuário</h3>
    <p>O usuário concorda em não:</p>
    <ul>
      <li>Usar o serviço para envio de SPAM ou mensagens não solicitadas em massa;</li>
      <li>Violar direitos autorais ou propriedade intelectual;</li>
      <li>Tentar fazer engenharia reversa de qualquer software contido nos produtos Grupopixel.</li>
    </ul>

    <h3>4. Cancelamento e Reembolso</h3>
    <p>
      Você pode cancelar sua assinatura a qualquer momento. Oferecemos uma garantia de reembolso de 7 dias para novos assinantes, 
      caso o serviço não atenda às expectativas, mediante solicitação formal via suporte.
    </p>
  </LegalLayout>
);

export const PrivacyPage = () => (
  <LegalLayout title="Política de Privacidade">
    <h3>1. Coleta de Informações</h3>
    <p>
      Coletamos informações pessoais identificáveis (como nome, email, telefone) apenas quando estritamente necessário para 
      o fornecimento de nossos serviços. Todos os dados são coletados por meios justos e legais, com o seu conhecimento e consentimento.
    </p>

    <h3>2. Uso das Informações</h3>
    <p>Utilizamos os dados coletados para:</p>
    <ul>
      <li>Fornecer, operar e manter nossos serviços;</li>
      <li>Melhorar, personalizar e expandir nossa plataforma;</li>
      <li>Entender e analisar como você usa nossos serviços;</li>
      <li>Desenvolver novos produtos, serviços, características e funcionalidades.</li>
    </ul>

    <h3>3. Segurança dos Dados</h3>
    <p>
      Valorizamos sua confiança em nos fornecer suas informações pessoais e, portanto, estamos nos esforçando para usar meios 
      comercialmente aceitáveis de protegê-las. Utilizamos criptografia SSL em todas as transações e armazenamento seguro em nuvem.
    </p>
  </LegalLayout>
);

export const LgpdPage = () => (
  <LegalLayout title="LGPD">
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
      <Shield className="text-green-600 flex-shrink-0 mt-1" />
      <p className="text-sm text-green-800 m-0">
        O Grupopixel está em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>
    </div>

    <h3>1. Seus Direitos</h3>
    <p>Como titular dos dados, você tem direito a:</p>
    <ul>
      <li>Confirmação da existência de tratamento;</li>
      <li>Acesso aos dados;</li>
      <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
      <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
      <li>Portabilidade dos dados a outro fornecedor de serviço ou produto.</li>
    </ul>

    <h3>2. Encarregado de Dados (DPO)</h3>
    <p>
      Para exercer seus direitos ou tirar dúvidas sobre o tratamento de seus dados pessoais, entre em contato com nosso 
      Encarregado de Proteção de Dados:
    </p>
    <p className="font-medium mt-4">
      Email: dpo@grupopixel.com.br<br />
      Endereço: Travessa Londrina, 189 - Fazenda Rio Grande, PR
    </p>
  </LegalLayout>
);

export const CompliancePage = () => (
  <LegalLayout title="Compliance & Ética">
    <h3>1. Código de Conduta</h3>
    <p>
      Nosso Código de Conduta estabelece os princípios éticos que guiam todas as nossas ações e decisões. 
      Comprometemo-nos com a integridade, transparência e respeito em todas as relações com clientes, parceiros e colaboradores.
    </p>

    <h3>2. Política Anticorrupção</h3>
    <p>
      O Grupopixel adota uma política de tolerância zero contra corrupção e suborno. Seguimos rigorosamente a Lei Anticorrupção Brasileira (Lei nº 12.846/2013) 
      e exigimos o mesmo padrão de nossos fornecedores.
    </p>

    <h3>3. Canal de Denúncias</h3>
    <p>
      Disponibilizamos um canal seguro e confidencial para o reporte de violações ao nosso código de ética ou leis vigentes. 
      Garantimos o anonimato e a não retaliação.
    </p>
    
    <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
       <h4 className="font-bold text-gray-900 mb-2">Canal de Ouvidoria</h4>
       <p className="text-sm text-gray-600 mb-4">Para denúncias de má conduta ou violações éticas:</p>
       <a href="mailto:compliance@grupopixel.com.br" className="text-brand-600 font-bold hover:underline">compliance@grupopixel.com.br</a>
    </div>
  </LegalLayout>
);