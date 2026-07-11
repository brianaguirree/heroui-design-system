# CLAUDE.md — HeroUI Design System Workspace
Eres el asistente de código de Brian, product designer building tools para uso personal y productos fintech LATAM.
Este workspace usa **HeroUI v3** como librería de componentes. Es una living library — no se copian componentes, se importan y se customiza vía CSS variables y BEM.
---
## MCP Server + AGENTS.md (leer primero)
Este proyecto tiene:
- **`.mcp.json`** — configura el HeroUI MCP Server (`heroui-react`)
- **`AGENTS.md`** — índice de la documentación de HeroUI v3 (doc completa en `.heroui-docs/`)
Antes de implementar cualquier componente, consulta el MCP `heroui-react` para obtener props reales, clases BEM y ejemplos actualizados. No inventes props — verifica contra el MCP o el AGENTS.md.
---
## Stack
- **Framework:** Next.js 16 (App Router + Turbopack) + TypeScript strict
- **Componentes:** HeroUI v3 (`@heroui/react` + `@heroui/styles`)
- **Estilos:** Tailwind CSS v4 + CSS variables OKLCH
- **Dark mode:** `next-themes` con `ThemeProvider` (`attribute="class"`)
- **Tipografía:** Inter (`next/font/google`, expuesta como `--font-inter`)
- **Documentación visual:** Storybook (puerto 6006)
- **Fuente de tokens:** `app/globals.css` (theme oficial de HeroUI)
---
## Estructura del proyecto

```
heroui-design-system/
├── app/
│   ├── globals.css           ← tokens HeroUI (fuente de verdad de estilos)
│   ├── layout.tsx            ← ThemeProvider + Inter + html con class
│   └── playground/           ← página de verificación rápida
├── stories/                  ← Storybook: una story por componente
├── .storybook/
│   ├── main.ts
│   └── preview.tsx           ← import de globals.css + toggle light/dark
├── .heroui-docs/             ← doc de HeroUI (gitignored)
├── .mcp.json                 ← HeroUI MCP Server
├── .interface-design/
│   └── system.md             ← decisiones de diseño (leer antes de tocar UI)
├── AGENTS.md                 ← índice doc HeroUI + reglas Next.js
└── CLAUDE.md                 ← este archivo
```

---
## Modelo mental: cómo funciona HeroUI v3
HeroUI es una **living library** — no copies código de componentes, impórtalos:

```tsx
import { Button, Card, Input } from '@heroui/react'
```

**Patrón compound con dot notation:** los componentes compuestos se usan directamente como raíz (`<Card>`, `<Tabs>`, `<Switch>`) y sus partes internas se acceden con dot notation: `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer`, etc. **En HeroUI v3 NO existe el sufijo `.Root`** — no "corrijas" código existente hacia `Card.Root`/`Tabs.Root`; ese patrón no existe en esta librería. Consulta el MCP para la anatomía exacta de cada componente.
La customización ocurre en cuatro niveles, en orden de preferencia:
### 1. Tokens globales (`:root` / `.dark` en globals.css)
Para cambios de brand, colores, radio — afecta todo el sistema. Ver lista de tokens abajo.
### 2. BEM en `@layer components` (globals.css)
Para cambios de estilo globales a un componente específico:

```css
@layer components {
  .button { @apply tracking-tight; }
}
```

### 3. `className` prop en JSX
Para overrides puntuales en una instancia.
### 4. Wrapper con `tv()` (para variantes reutilizables)
Cuando necesitas variantes custom en múltiples lugares, extiende los variants de `@heroui/styles` con `tailwind-variants`.
**NUNCA** copiar el código fuente de un componente HeroUI y modificarlo.
---
## Tokens del sistema (theme oficial HeroUI)
El theme completo vive en `app/globals.css`. Estos son los tokens disponibles — úsalos siempre, nunca hardcodees valores:
**Marca / acción**
`--accent`, `--accent-foreground`, `--focus`
**Superficies**
`--background`, `--surface`, `--surface-foreground`, `--surface-secondary`, `--surface-secondary-foreground`, `--surface-tertiary`, `--surface-tertiary-foreground`, `--overlay`, `--overlay-foreground`
**Texto**
`--foreground`, `--muted`
**Bordes / separación**
`--border`, `--separator`, `--scrollbar`
**Controles de formulario**
`--field-background`, `--field-border`, `--field-foreground`, `--field-placeholder`, `--field-radius`
**Neutros**
`--default`, `--default-foreground`
**Semánticos** (cada uno con su `-foreground`)
`--danger`, `--success`, `--warning`
**Segment (tabs/toggles)**
`--segment`, `--segment-foreground`
**Radio**
`--radius`, `--field-radius`
**Tipografía**
`--font-sans` (→ `var(--font-inter)`)
### Reglas de tokens
1. Colores siempre en OKLCH.
2. Definir cambios en light **y** dark cuando aplique.
3. Todo color de fondo tiene su `-foreground` correspondiente para el texto encima — respetar ese pairing.
4. Si necesitas un token que no existe, agrégalo al bloque de theme, no lo hardcodees en el componente.
---
## Dark mode

```tsx
// app/providers.tsx (o inline en layout)
"use client"
import { ThemeProvider } from "next-themes"
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}
```

El `attribute="class"` aplica la clase `.dark` al `<html>`, que activa el bloque `.dark` de los tokens.
---
## Flujo de cambios
| Tipo de cambio | Dónde |
|----------------|-------|
| Token (color, radio) | `globals.css` → `:root {}` o `.dark {}` |
| Estilo global de componente | `globals.css` → `@layer components { .button {} }` |
| Variante reutilizable | wrapper en `components/` con `tv()` |
| Nuevo componente (no existe en HeroUI) | `components/` usando tokens del sistema |
| Verificar visualmente | `app/playground/` o Storybook |
---
## Storybook
Cada componente que se agregue o modifique debe tener su story en `/stories/`.
Estructura por componente:
- Título jerárquico: `"HeroUI/[Categoría]/[Componente]"`
- Story **Playground** — args + argTypes para controles interactivos
- Story **AllVariants** — todas las variantes lado a lado
- Story **States** — disabled / loading / error cuando apliquen
El `preview.tsx` importa `../app/globals.css` y tiene toggle light/dark en la toolbar, así que cada story se ve con los tokens reales y en ambos modos.
---
## Cómo proponer cambios de diseño
Cuando Brian dé un prompt de diseño, responder con este formato antes de ejecutar:

```
Cambio: [descripción]
Nivel: token / BEM / className / wrapper
Archivo: [ruta]
Antes: [valor o clase actual]
Después: [valor o clase propuesto]
Razón: [por qué sirve al intent del proyecto]
```

Si el cambio modifica tokens globales o patrones de componentes → preguntar antes de ejecutar.
---
## Proyectos activos
### Breap (`/projects/breap/` cuando exista)
Fintech crypto para Chile. USDT como protección del peso chileno.
- Tono: confiable y moderno, no bancario
- Brand color: pendiente — ver `.interface-design/system.md`
---
## Lo que NO hacer
- Copiar source code de componentes HeroUI al proyecto
- Usar hex values en los tokens — siempre OKLCH
- Hardcodear colores en JSX (`style={{ color: '#...' }}`)
- Instalar dependencias sin preguntar
- Modificar el theme en `globals.css` sin mencionar el cambio explícitamente
- Inventar props de componentes — verificar contra el MCP `heroui-react`
- Proponer rediseños completos sin que Brian lo pida
---
## Al terminar cualquier tarea de UI
1. Listar archivos modificados
2. Indicar dónde revisar: `localhost:3000/playground` o `localhost:6006` (Storybook)
3. Si el cambio introduce un patrón nuevo → preguntar si actualizar `.interface-design/system.md`
