import React, { useState } from 'react'
import { Code2, Rocket, Clock, Target, Zap, CheckCircle2, ArrowRight, Laptop, Puzzle, Workflow, Bot, Database, FileSpreadsheet, Globe } from 'lucide-react'

const NoCodeWorkshop = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workshopSteps = [
    {
      title: "Introdução ao No-Code e Low-Code",
      icon: Puzzle,
      content: [
        "No-Code: Criar sites, apps e automações sem programar.",
        "Low-Code: Usar pouco código para estender funcionalidades.",
        "Casos reais:",
        "- Pequenos negócios criando apps sem desenvolvedores.",
        "- Empresas automatizando processos internos rapidamente."
      ]
    },
    {
      title: "Ferramentas Populares",
      icon: Rocket,
      content: [
        "No-Code:",
        "- Typeform: Formulários interativos",
        "- Zapier: Automação de tarefas",
        "- Webflow: Criação de sites sem código",
        "Low-Code:",
        "- OutSystems: Desenvolvimento de aplicativos corporativos",
        "- Retool: Ferramentas internas personalizadas",
        "- PowerApps (Microsoft): Aplicações empresariais"
      ]
    },
    {
      title: "Criando um Formulário no Typeform",
      icon: FileSpreadsheet,
      content: [
        "1. Acesse Typeform e crie uma conta",
        "2. Clique em 'Create Typeform'",
        "3. Escolha um template ou 'Start from scratch'",
        "4. Adicione perguntas:",
        "   - Nome (Resposta curta)",
        "   - E-mail (Campo de e-mail)",
        "   - Interesse (Múltipla escolha)",
        "5. Clique em 'Publish' para salvar"
      ]
    },
    {
      title: "Ativando a Lógica no Typeform",
      icon: Workflow,
      content: [
        "1. No painel de edição do formulário, clique em 'Workflow' no menu superior",
        "2. Clique em 'Add Logic' para adicionar uma regra",
        "3. Escolha a pergunta base",
        "4. Defina regras, por exemplo:",
        "   - Se a resposta for 'Sim', vá para a próxima pergunta",
        "   - Se a resposta for 'Não', pule para o final",
        "5. Teste clicando em 'Preview'",
        "6. Se estiver tudo certo, clique em 'Publish'",
        "Exemplo:",
        "Pergunta: 'Você quer receber novidades por e-mail?'",
        "- Sim → Perguntar o e-mail",
        "- Não → Finalizar o formulário"
      ]
    },
    {
      title: "Integrando Typeform com Google Sheets via Zapier",
      icon: Database,
      content: [
        "1. Crie uma planilha no Google Sheets com colunas: Nome, E-mail, Interesse",
        "2. Acesse Zapier e crie uma conta",
        "3. Clique em 'Create Zap'",
        "4. Escolha Typeform como trigger",
        "5. Selecione Google Sheets como action",
        "6. Mapeie os campos do Typeform para as colunas do Google Sheets",
        "7. Teste o Zap e ative a automação"
      ]
    },
    {
      title: "Criando um Site No-Code com Webflow",
      icon: Globe,
      content: [
        "1. Acesse Webflow e crie uma conta",
        "2. Clique em 'New Project' e escolha um template ou inicie do zero",
        "3. Adicione uma seção 'Respostas do Formulário'",
        "4. No menu 'CMS', crie uma Collection para as respostas",
        "5. Configure os campos: Nome, E-mail, Interesse",
        "6. Conecte Webflow ao Google Sheets via Zapier:",
        "   - Crie um novo Zap",
        "   - Use Google Sheets como trigger",
        "   - Escolha Webflow como action",
        "   - Mapeie os campos e teste",
        "7. Publique o site"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sand dark:bg-jungle text-jungle dark:text-sand">
      {/* Hero Section com animação */}
      <section className="relative overflow-hidden bg-gradient-to-br from-jungle via-terra to-sand text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-jungle via-terra to-sand animate-gradient-xy"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-terra rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/2 left-1/2 w-64 h-64 bg-sand rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Workshop: No-Code e Low-Code</h1>
          <p className="text-xl mb-8">Aprenda a criar aplicações poderosas sem escrever código</p>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 w-fit">
            <Clock className="h-6 w-6" />
            <span className="text-lg">Duração: 2 horas</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Objetivo do Workshop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Puzzle, text: "Explicar o conceito de No-Code e Low-Code" },
              { icon: Rocket, text: "Demonstrar ferramentas populares" },
              { icon: Laptop, text: "Criar um projeto prático com Typeform, Zapier e Webflow" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-jungle/50 rounded-lg p-6 shadow-lg flex items-start gap-4">
                <item.icon className="h-8 w-8 text-terra flex-shrink-0" />
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Conteúdo do Workshop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {workshopSteps.map((step, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg text-center transition-all ${
                  activeStep === index
                    ? 'bg-terra text-white'
                    : 'bg-white dark:bg-jungle/50 hover:bg-terra/20'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <step.icon className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{step.title}</h3>
              </button>
            ))}
          </div>
          <div className="bg-white dark:bg-jungle/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{workshopSteps[activeStep].title}</h3>
            <ul className="space-y-2">
              {workshopSteps[activeStep].content.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-terra flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">O que você vai aprender</h2>
          <div className="bg-white dark:bg-jungle/50 p-8 rounded-lg shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "O que é No-Code e Low-Code",
                "Como criar um formulário interativo no Typeform",
                "Como configurar lógica condicional em formulários",
                "Como automatizar o envio de dados para o Google Sheets via Zapier",
                "Como exibir os dados do formulário em um site criado no Webflow"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-terra flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Recursos Adicionais</h2>
          <div className="bg-white dark:bg-jungle/50 p-8 rounded-lg shadow-lg">
            <p className="mb-4">Para continuar seu aprendizado em No-Code e Low-Code, confira estes recursos:</p>
            <ul className="space-y-2">
              {[
                { text: "Documentação oficial do Typeform", href: "#" },
                { text: "Tutoriais do Zapier", href: "#" },
                { text: "Universidade Webflow", href: "#" },
                { text: "Comunidade No-Code no Reddit", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-terra hover:underline flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default NoCodeWorkshop