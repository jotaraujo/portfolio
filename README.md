# ⚡ jota.dev — Portfolio & Interface Lab

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://greensock.com/gsap/)

> **Engenharia de Interfaces Modernas, Micro-interações & Performance**  
> Portfolio profissional de **João Paulo Araújo**, focado em desenvolvimento Frontend estrito, arquitetura de componentes reutilizáveis e design systems.

---

### 🔗 Links Rápidos

- 🚀 **Demo Online:** `https://seu-portfolio-aqui.vercel.app` *(adicione seu link aqui após o deploy)*
- 🎨 **Guia de Design:** [DESIGN.md](./DESIGN.md)
- 📄 **Currículo:** [Download PDF](./src/assets/curriculo.pdf)

---

> [!NOTE]
> **Conceito Visual — Laboratório Noturno**  
> Interface baseada em superfície escura tonal ("Void → Surface → Surface Raised"), onde o tom violeta atua como sinal estrito de destaque. Sem gradientes genéricos, sem bibliotecas de componentes prontas.

## 🛠️ Engenharia de Interfaces & Componentes

Em vez de usar componentes prontos ou templates, cada elemento foi projetado do zero com foco em performance, micro-interações e semântica.

### 🌟 Destaques de UI / UX

- 🤖 **Terminal Animado (GSAP + ScrollTrigger):** Linha a linha com efeito typewriter disparado por scroll viewport.
- 🌌 **DotField Interativo (HTML5 Canvas + SVG Glow):** Background dinâmico e leve em matemática de renderização.
- 🔄 **Marquee Infinito:** Dois fluxos contínuos em direções opostas pausáveis sob hover.
- ⚡ **Navbar Inteligente:** Efeito de morphing tonal no scroll + menu mobile acessível via Framer Motion e tab pills animadas via `layoutId`.

> [!TIP]
> **Acessibilidade Nativa (a11y)**  
> Todas as animações do terminal (GSAP) e transições (Framer Motion) respeitam estritamente a configuração do sistema `prefers-reduced-motion: reduce`.

---

## ⚡ Tooling & Qualidade de Código (DX)

Para garantir máxima velocidade de desenvolvimento e build, o projeto utiliza ferramentas de última geração do ecossistema JS:

| Camada | Tecnologia | Por que essa escolha? |
|---|---|---|
| **Framework** | React 19 + TS 6 | Tipagem rigorosa e renderização otimizada. |
| **Build System** | Vite 8 | HMR instantâneo e bundling de alta performance. |
| **Styling** | Tailwind CSS 4 | Configuração nativa de tokens `@theme` sem arquivos de config legados. |
| **Formatter** | Biome | Formatação unificada determinística e extremamente rápida. |
| **Git Hooks** | Husky | Validação automatizada de regras antes do commit. |

---

## 🎨 Design Reference

O sistema de design completo — incluindo paleta OKLCH, hierarquia tipográfica, regras de componente e melhores práticas — está documentado em detalhe no arquivo [`DESIGN.md`](./DESIGN.md).
