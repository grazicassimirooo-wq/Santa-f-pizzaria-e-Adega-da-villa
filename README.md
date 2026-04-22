# # 🍕🍷 Pizzaria Santa Fé & Adega da Villa

Bem-vindo ao repositório oficial do aplicativo web da **Pizzaria Santa Fé e Adega da Villa**.

## ⚠️ Por que a landing page não aparecia na Vercel?

A branch publicada na Vercel continha apenas arquivos de documentação (`README.md` e `LICENSE`) e não tinha arquivos de aplicação (como `index.html`, `package.json` ou uma estrutura Next.js completa). Sem um ponto de entrada web, a Vercel não tinha conteúdo para renderizar a landing page esperada.

## ✅ Estrutura mínima adicionada para deploy

Este repositório agora inclui uma landing page estática pronta para deploy:

- `index.html`
- `styles.css`
- `vercel.json`

Com isso, o deploy da Vercel já consegue servir a homepage corretamente.

## 🚀 Como testar localmente

Abra o `index.html` no navegador ou rode um servidor estático:

```bash
python3 -m http.server 4173
```

Depois acesse: [http://localhost:4173](http://localhost:4173)
