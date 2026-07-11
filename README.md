# HeroUI Design System

Template de design system para uso personal y productos fintech LATAM. Combina **HeroUI v3** (Beta), **Next.js 16** (App Router + Turbopack) y **Storybook** como living library — los componentes se importan desde `@heroui/react` y se customizan vía tokens CSS y BEM, nunca copiando su código fuente.

## Stack

- **Framework:** Next.js 16 (App Router + Turbopack) + TypeScript strict
- **Componentes:** [HeroUI v3](https://heroui.com) (`@heroui/react` + `@heroui/styles`)
- **Estilos:** Tailwind CSS v4 + CSS variables en OKLCH
- **Dark mode:** `next-themes` (`attribute="class"`)
- **Iconos:** [Solar Icons](https://www.npmjs.com/package/@solar-icons/react)
- **Tipografía:** Inter (`next/font/google`)
- **Documentación visual:** Storybook 10
- **Tests:** Vitest + Playwright

## Cómo arrancar

```bash
npm install

# App Next.js → http://localhost:3000
npm run dev

# Storybook → http://localhost:6006
npm run storybook
```

Otros comandos disponibles: `npm run build`, `npm run start`, `npm run lint`, `npm run build-storybook`.

## Dónde están las cosas

| Qué | Dónde |
|---|---|
| Tokens del theme (colores OKLCH, radio, tipografía) | [`app/globals.css`](app/globals.css) |
| Decisiones de diseño (brand, tono, criterios) | [`.interface-design/system.md`](.interface-design/system.md) |
| Stories de cada componente | [`stories/`](stories) |
| Página de verificación rápida | [`app/playground/`](app/playground) |
| Config de Storybook | [`.storybook/`](.storybook) |

Todo cambio de color, radio o tipografía debe pasar por los tokens en `globals.css` (definidos en `:root` y `.dark`) — nunca hardcodear valores en los componentes.

## HeroUI MCP Server y Solar Icons

Este proyecto tiene configurado el **HeroUI MCP Server** (`heroui-react`, ver [`.mcp.json`](.mcp.json)), que expone props, clases BEM y ejemplos reales de los componentes de HeroUI v3. Antes de implementar o modificar un componente, hay que consultar el MCP en vez de asumir props.

El set de iconos del sistema es **Solar Icons** (`@solar-icons/react`) — no mezclar con otras librerías de íconos.

## Trabajar con Claude Code en este template

Este repo está preparado para trabajar con [Claude Code](https://claude.com/claude-code). Las reglas del workspace (stack, estructura, flujo de cambios, qué no hacer) viven en [`CLAUDE.md`](CLAUDE.md) — se cargan automáticamente en cada sesión. El índice de la documentación de HeroUI vive en [`AGENTS.md`](AGENTS.md).

Antes de pedir cambios de UI, vale la pena revisar `CLAUDE.md` para entender el formato esperado al proponer cambios (token / BEM / className / wrapper) y las reglas sobre no inventar props ni copiar código fuente de HeroUI.
