# GD Portel — site

Site estático (HTML + CSS + JS), sem dependências nem build.

## Ver localmente
Abre `index.html` no browser, ou corre `python3 -m http.server 8000` e vai a http://localhost:8000.

## Editar conteúdo
Tudo está em `data/players.js`: plantel, clube, próximo jogo, resultados, classificação e notícias.
Fotos dos jogadores: coloca em `assets/players/` e indica o caminho no campo `photo`.
Cores: variáveis `--accent` e `--accent-2` no topo de `css/style.css`.

## Publicar grátis (domínio gratuito)
- **Netlify Drop**: arrasta a pasta para https://app.netlify.com/drop → dá um endereço `*.netlify.app`.
- **Cloudflare Pages** / **Vercel**: ligar um repositório GitHub → `*.pages.dev` / `*.vercel.app`.
- **GitHub Pages**: repositório com estes ficheiros → `utilizador.github.io/gd-portel`.
