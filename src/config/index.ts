import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yasmin Belo — Analista de Dados",
  author: "Yasmin Belo",
  description:
    "Analista de Dados especializada em transformar dados em insights estratégicos.",
  lang: "pt-BR",
  

  navLinks: [
    { text: "Home", href: "#hero" },
    { text: "Sobre Mim", href: "#about" },
    { text: "Habilidades", href: "#skills" },
    { text: "Projetos", href: "#projects" },
    { text: "Contato", href: "#contact" },
  ],

  socialLinks: [
    { text: "LinkedIn", href: "SEU_LINK_LINKEDIN" },
    { text: "GitHub", href: "SEU_LINK_GITHUB" },
  ],

  socialImage: "/zen-og.png",
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

  experience: [
    {
      company: "Projeto Pessoal",
      position: "Analista de Dados",
      startDate: "2024",
      endDate: "Atual",
      summary: [
        "Realizei análise de dados utilizando Python e Pandas para identificar padrões e tendências.",
        "Criei dashboards interativos para visualização de dados e apoio à tomada de decisão.",
        "Utilizei SQL para extração e manipulação de dados em bancos relacionais.",
      ],
    },
  ],

  projects: [
  {
    name: "Dashboard Comercial",
    summary:
      "Análise de vendas, margem de lucro e performance com foco em indicadores estratégicos.",
    image: "/dashboard1.png",
    linkPreview: "https://app.powerbi.com/SEU-LINK-1",
  },
  {
    name: "Dashboard Logístico",
    summary:
      "Monitoramento de entregas, custos logísticos e eficiência operacional.",
    image: "/dashboard2.png",
    linkPreview: "https://app.powerbi.com/SEU-LINK-2",
  },
  {
    name: "Dashboard Financeiro",
    summary:
      "Análise financeira completa com indicadores de receita, despesas e lucratividade.",
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

// #5755ff
