import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yasmin Belo — Analista de Dados",
  author: "Yasmin Belo",
  description: "Analista de Dados especializada em transformar dados em insights estratégicos.",
  lang: "pt-BR",
  navLinks: [
    { text: "Home", href: "#hero" },
    { text: "Sobre Mim", href: "#about" },
    { text: "Habilidades", href: "#skills" },
    { text: "Projetos", href: "#projects" },
    { text: "Contato", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/yasminbelo" },
    { text: "GitHub", href: "https://github.com/beloyasmin" },
  ],
 
  socialImage: "/yasmin-belo-og.png", 
  canonicalURL: "https://portfolio-yasmin-belo.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Yasmin Belo",
    specialty: "Analista de Dados",
    summary:
      "Profissional focada em análise de dados, utilizando Python, SQL e ferramentas de visualização para gerar insights e apoiar decisões estratégicas.",
    email: "beloyasmin93@gmail.com",
    image: "/foto_yasmin.png" 
  },

  // Mantendo vazio conforme sua solicitação anterior
  experience: [],

  projects: [
    {
      name: "Dashboard Vendas",
      category: "Vendas",
      summary: "Análise de vendas, margem de lucro e performance com foco em indicadores estratégicos.",
      descriptionModal: "Análise detalhada de performance comercial, permitindo a visualização de KPIs de faturamento e rentabilidade por produto, supervisor e vendedor.",
      objectives: [
        "Acompanhar faturamento mensal e anual",
        "Análise da margem de lucro por categoria",
        "Performance individual da equipe"
      ],
      indicators: ["Power BI", "Excel", "DAX"],
      image: "/dashboard_dark.JPG",
      linkPreview: "https://app.powerbi.com/view?r=eyJrIjoiN2IyNDAyM2MtNTg5NC00ZDFjLWI5MGItMDVkYzVjZmJlNWIxIiwidCI6ImJjMDE0OTFiLTQxZWEtNGRmOC1iMGMwLTJjOWFhMzczYzc4NyJ9",
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
      indicators: ["Power BI", "Excel", "Dax"],
      image: "/dashboard1.png",
      linkPreview: "https://app.powerbi.com/view?r=eyJrIjoiMGI5Zjg4ZTQtN2I1Mi00YjMwLWE3YTYtZmMxMmEzNzRlMzMxIiwidCI6ImJjMDE0OTFiLTQxZWEtNGRmOC1iMGMwLTJjOWFhMzczYzc4NyJ9",
    },
    {
      name: "Dashboard Financeiro",
      category: "Financeiro",
      summary: "Análise financeira completa com indicadores de receita, despesas e lucratividade.",
      descriptionModal: "Painel estratégico para gestão de fluxo de caixa.",
      objectives: [
        "Acompanhamento de Receita vs Despesa",
        "Análise de Lucratividade por período",
        "Principais segmentos"
      ],
      indicators: ["Excel", "Power BI", "Dax"],
      image: "/dashboard_financeiro.png",
      linkPreview: "https://app.powerbi.com/view?r=eyJrIjoiMmQ0OTgwZDUtMDZkZC00OWVhLWIyMGUtYzZjYWE3YzUxYTE4IiwidCI6ImJjMDE0OTFiLTQxZWEtNGRmOC1iMGMwLTJjOWFhMzczYzc4NyJ9",
    },
  ],

  about: {
    description: 
    `
  Olá! Sou Yasmin Belo, apaixonada por dados. Com background em análise de negócios, busco transformar grandes volumes de dados em decisões inteligentes.

  Tenho experiência sólida com Python para análise de dados, SQL para consultas complexas e Power BI para a criação de dashboards de alto impacto.

  Estou em constante evolução, buscando sempre as melhores práticas de Data Analytics e Business Intelligence para agregar valor real aos projetos.
`,
  },
};
