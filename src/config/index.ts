import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yasmin Belo — Analista de Dados",
  author: "Yasmin Belo",
  description:
    "Analista de Dados especializada em transformar dados em insights estratégicos.",
  lang: "pt-BR",
  siteLogo: "/alejandro-small.jpg",

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
    email: "seuemail@email.com",
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
      name: "Análise de Churn",
      summary:
        "Projeto de análise de evasão de clientes utilizando Python e técnicas de análise exploratória.",
      linkPreview: "/",
      linkSource: "SEU_LINK_GITHUB",
      image: "/spotifu.png",
    },
    {
      name: "Dashboard de Vendas",
      summary:
        "Dashboard interativo com indicadores de vendas e faturamento para análise de desempenho.",
      linkPreview: "/",
      linkSource: "SEU_LINK",
      image: "/shopify-clon.png",
    },
    {
      name: "Análise de Dados com SQL",
      summary:
        "Consultas e manipulação de dados para geração de insights estratégicos.",
      linkPreview: "/",
      linkSource: "SEU_LINK",
      image: "/clone-ig.png",
    },
  ],

  about: {
    description: `
      Olá! Sou Yasmin Belo, apaixonada por dados e por transformar informações em insights valiosos.

      Tenho experiência com ferramentas como Python, SQL e plataformas de visualização de dados, criando análises que ajudam na tomada de decisões.

      Estou em constante evolução na área de dados, buscando sempre aprender novas tecnologias e aplicar soluções práticas para problemas reais.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
