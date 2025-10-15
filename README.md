# 🍽️ Cardápio Digital

Sistema **Full Stack** desenvolvido com **TypeScript**, **Supabase**, **React**, **TailwindCSS** e integração com **PIX (Gerencianet)** e **WhatsApp**.

> 💡 Projeto em desenvolvimento para estudo e demonstração prática de arquitetura moderna em nuvem (Supabase + Vercel + integrações reais).

---

## 🚀 Tecnologias principais

### 🧱 **Backend**
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Supabase](https://supabase.com/) (banco de dados + autenticação + storage)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- Integração PIX com [Gerencianet](https://gerencianet.com.br/)
- Envio de pedidos via [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/)

### 🎨 **Frontend** *(em construção)*
- [React + Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Supabase Client](https://supabase.com/docs/reference/javascript/start)

---

## ⚙️ Instalação (Backend)

```bash
# Clone o repositório
git clone https://github.com/Ary-Leal/cardapio-digital.git
cd cardapio-digital/backend

# Instale as dependências
npm install

# Crie o arquivo .env
cp .env.example .env

# Configure as variáveis de ambiente
# (use as chaves do seu projeto Supabase)
SUPABASE_URL=https://<sua-instancia>.supabase.co
SUPABASE_ANON_KEY=<sua-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<sua-service-role-key>

# Rode o servidor em modo desenvolvimento
npm run dev
