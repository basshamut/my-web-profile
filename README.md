# Jesús Fajardo — Portfolio

Sitio personal construido con **Astro + Vite + pnpm** (sin TypeScript). Estilo minimalista con tema claro/oscuro y descarga de CV.

## Requisitos
- Node.js 18.17+ o 20+
- pnpm 9+

## Comandos

```bash
pnpm install
pnpm dev       # servidor de desarrollo en http://localhost:4321
pnpm build     # build de producción en ./dist
pnpm preview   # previsualiza el build
```

## Estructura

```
src/
  components/    # Header, Footer, ThemeToggle, secciones
  layouts/       # Layout base con SEO + theming
  pages/         # index.astro (home)
  styles/        # global.css (tokens + dark mode)
public/
  CV_Jesus_Fajardo.pdf
```

## Personalización
Edita los datos en `src/data/profile.js` y los estilos en `src/styles/global.css`.
