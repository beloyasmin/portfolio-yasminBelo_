import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Yasmin Belo",
    specialty: "Analista de Dados",
    summary:
      "Profissional focada em análise de dados, utilizando Python, SQL e ferramentas de visualização para gerar insights e apoiar decisões estratégicas.",
    email: "beloyasmin93@gmail.com",
    image: "/foto_yasmin.png" 
  },

  // DEIXANDO VAZIO PARA NÃO APARECER A SEÇÃO DE EXPERIÊNCIA ANTERIOR
  experience: [],

  projects: [
    {
      name: "Dashboard Comercial",
      category: "Comercial",
      summary: "Análise de vendas, margem de lucro e performance com foco em indicadores estratégicos.",
      descriptionModal: "Análise detalhada de performance comercial, permitindo a visualização de KPIs de faturamento e rentabilidade por canal e vendedor.",
      objectives: [
        "Acompanhar faturamento mensal e anual",
        "Análise da margem de lucro por categoria",
        "Performance individual da equipe"
      ],
      indicators: ["Power BI", "SQL", "DAX"],
      image: "/dashboard2.png",
      linkPreview: "https://app.powerbi.com/SEU-LINK-1",
    },
    {
      name: "Dashboard Logístico",
      category: "Logística",
      summary: "Monitoramento de entregas, custos logísticos e eficiência operacional.",
      descriptionModal: "Dashboard completo para análise logística com foco em fretes, tempos de entrega e performance de transportadoras.",
      objectives: [
        "Acompanhar Lead Time de entrega",
        "Monitoramento de custos de frete",
        "Otimização de rotas e performance"
      ],
      indicators: ["Power BI", "Python", "SQL"],
      image: "/dashboard1.png",
      linkPreview: "https://app.powerbi.com/SEU-LINK-2",
    },
    {
      name: "Dashboard Financeiro",
      category: "Financeiro",
      summary: "Análise financeira completa com indicadores de receita, despesas e lucratividade.",
      descriptionModal: "Painel estratégico para gestão de fluxo de caixa, DRE e indicadores de liquidez e endividamento.",
      objectives: [
        "Acompanhamento de Receita vs Despesa",
        "Análise de Lucratividade por período",
        "Gestão de fluxo de caixa e inadimplência"
      ],
      indicators: ["Excel", "Power BI", "Financeiro"],
      image: "/dashboard3.png",
      linkPreview: "https://app.powerbi.com/SEU-LINK-3",
    },
  ],

  about: {
    description: 
    `
  Olá! Sou Yasmin Belo, apaixonada por dados...

  Tenho experiência com Python, SQL...

  Estou em constante evolução...
`,
  },
};
