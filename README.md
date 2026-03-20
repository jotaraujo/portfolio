# Portfólio Pessoal

<div align="center">

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Portfólio pessoal de desenvolvedor web built with React + TailwindCSS.

</div>

## Funcionalidades

- Smooth scroll entre seções
- Animações de entrada ao scroll (IntersectionObserver)
- Tema dark/light com persistência no localStorage
- Navbar com glassmorphism e highlight do link ativo
- Marquee infinito de skills em CSS puro
- Botão de download de currículo com múltiplos estados
- Formulário de contato com validação
- 100% responsivo (mobile-first)
- Componentes reutilizáveis com JSDoc

## Estrutura de Diretórios

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   └── docs/
│       └── curriculo.pdf     # Coloque seu currículo aqui
├── components/
│   ├── layout/
│   │   ├── Navbar/           # Navegação principal
│   │   └── Footer/           # Rodapé
│   ├── sections/
│   │   ├── Hero/             # Seção inicial
│   │   ├── About/            # Sobre mim
│   │   ├── Skills/           # Skills com marquee
│   │   ├── Projects/         # Projetos
│   │   └── Contact/          # Formulário de contato
│   └── ui/                   # Componentes base
├── contexts/                 # ThemeContext, ScrollContext
├── hooks/                    # 7 hooks customizados
├── constants/                # Dados estáticos
├── styles/                   # CSS global, variáveis, animações
├── utils/                    # Helpers (cn, scrollTo, etc)
├── App.jsx
└── main.jsx
```

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Abra http://localhost:5173 no navegador
```

## Como Personalizar

### 1. Adicionar seu currículo

Coloque seu arquivo PDF em `src/assets/docs/curriculo.pdf`.

### 2. Alterar dados pessoais

Edite os arquivos em `src/constants/`:

- `navigation.js` - Links de navegação
- `skills.js` - Suas skills
- `projects.js` - Seus projetos
- `stats.js` - Estatísticas e cards
- `social.js` - Links sociais

### 3. Alterar foto

Substitua o conteúdo de `HeroAvatar.jsx` pelo seu componente de imagem:

```jsx
<img
  src="/assets/images/sua-foto.jpg"
  alt="Sua foto"
  className="w-full h-full object-cover"
/>
```

## Deploy

### Vercel

1. Importe seu repositório no [Vercel](https://vercel.com)
2. Framework preset: Vite
3. Deploy!

### Netlify

1. Conecte seu repositório no [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Lint do código

## Licença

MIT © [Seu Nome](https://github.com/seu-usuario)
