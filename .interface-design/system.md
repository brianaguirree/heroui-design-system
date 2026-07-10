# Interface Design System — HeroUI v3
_Template personal de Brian · Basado en el theme oficial de HeroUI v3_
---
## Intención del sistema
**¿Para quién?** Brian, product designer iterando entre diseño y código. Herramientas personales + productos fintech Chile/LATAM.
**¿Qué debe hacer?** Mover ideas a pantalla rápido, con consistencia garantizada por el sistema de tokens de HeroUI. Sin decisiones repetidas en cada proyecto.
**¿Cómo debe sentirse?** Preciso y técnico sin ser frío. El mismo sistema base sirve para herramientas internas y para Breap, donde la confianza del usuario es crítica.
---
## Cómo funciona el sistema de tokens en HeroUI v3
HeroUI define tres capas de variables importadas vía `@heroui/styles`:
1. **Base variables** — valores fijos (spacing, typography scale, etc.)
2. **Theme variables** — colores que cambian entre light/dark ← **esta capa la controlamos nosotros**
3. **Calculated variables** — hover states, soft variants, borders derivados (vía `color-mix()`)
El theme que usamos es el **oficial de HeroUI**, generado desde su Theme Builder. Solo tocamos la capa de Theme variables en `app/globals.css`.
**Base cromática:** todo el theme gira sobre el hue `253.83` (azul), lo que da coherencia — grises, superficies y acento comparten temperatura.
---
## Tokens del theme (fuente de verdad)
El bloque completo vive en `app/globals.css`. Referencia de qué controla cada token:
### Marca / acción
| Token | Rol |
|-------|-----|
| `--accent` | Color de acción principal (botones primary, links, focus) |
| `--accent-foreground` | Texto/icono sobre fondo accent |
| `--focus` | Anillo de foco (mismo azul que accent) |
### Superficies
| Token | Rol |
|-------|-----|
| `--background` | Canvas base de la app |
| `--surface` | Cards, panels (nivel 1) |
| `--surface-secondary` | Superficies anidadas (nivel 2) |
| `--surface-tertiary` | Superficies más profundas (nivel 3) |
| `--overlay` | Fondos de dropdowns, popovers, tooltips |
| `--*-foreground` | Texto correspondiente sobre cada superficie |
### Texto
| Token | Rol |
|-------|-----|
| `--foreground` | Texto principal |
| `--muted` | Texto secundario, metadata, placeholders de bajo énfasis |
### Bordes y separación
| Token | Rol |
|-------|-----|
| `--border` | Bordes de contenedores |
| `--separator` | Líneas divisorias (más sutil que border) |
| `--scrollbar` | Color del scrollbar custom |
### Controles de formulario
| Token | Rol |
|-------|-----|
| `--field-background` | Fondo de inputs |
| `--field-border` | Borde de inputs (transparent por defecto) |
| `--field-foreground` | Texto ingresado |
| `--field-placeholder` | Placeholder |
| `--field-radius` | Radio de inputs |
### Neutros
| Token | Rol |
|-------|-----|
| `--default` | Fondo de elementos neutros (chips, botones default) |
| `--default-foreground` | Texto sobre neutros |
### Semánticos (cada uno con `-foreground`)
| Token | Rol |
|-------|-----|
| `--danger` | Errores, acciones destructivas |
| `--success` | Confirmaciones, estados positivos |
| `--warning` | Advertencias |
### Segment (tabs, segmented controls)
| Token | Rol |
|-------|-----|
| `--segment` | Fondo del segmento activo |
| `--segment-foreground` | Texto del segmento |
### Radio y tipografía
| Token | Valor | Rol |
|-------|-------|-----|
| `--radius` | `0.5rem` | Radio base (cards, botones) |
| `--field-radius` | `0.5rem` | Radio de campos de formulario |
| `--font-sans` | `var(--font-inter)` | Fuente principal |
---
## Tipografía
**Fuente:** Inter, cargada vía `next/font/google` y expuesta como `--font-inter`.
**Jerarquía** (clases Tailwind sobre tokens HeroUI):
| Rol | Clase | Color |
|-----|-------|-------|
| Page title | `text-2xl font-bold` | `text-foreground` |
| Section title | `text-xl font-semibold` | `text-foreground` |
| Card title | `text-base font-semibold` | `text-foreground` |
| Body | `text-sm` | `text-foreground` |
| Supporting | `text-sm` | `text-muted` |
| Label / metadata | `text-xs font-medium` | `text-muted` |
| Datos / números | `text-sm tabular-nums` | `text-foreground` |
> Para números financieros (Breap): activar `tabular-nums` para alineación de dígitos.
---
## Estrategia de profundidad
HeroUI gestiona la mayoría de la elevación internamente vía las superficies escalonadas:
- **Jerarquía de superficies:** `background` → `surface` → `surface-secondary` → `surface-tertiary`. Usar el nivel según qué tan anidado está el contenido, en lugar de sombras.
- **Separación:** `--separator` para divisores internos, `--border` para límites de contenedor.
- **Flotantes** (dropdowns, modals, tooltips): usan `--overlay` + la elevación nativa de HeroUI.
No mezclar sombras manuales con las superficies — dejar que el sistema de surfaces haga el trabajo de profundidad.
---
## Variantes de componentes HeroUI establecidas
### Button
Variants nativos: `solid`, `bordered`, `ghost`, `flat`, `faded`, `shadow`
Sizes: `sm`, `md`, `lg`
Colors: `default`, `primary`, `secondary`, `success`, `warning`, `danger`
Uso preferido:
```tsx
<Button variant="solid" color="primary">Acción principal</Button>
<Button variant="ghost" color="default">Secundario</Button>
<Button variant="flat" color="danger">Destructivo</Button>
```
### Card
Usa el patrón compound con `.Root`. Fondo `--surface`. Para anidar cards, subir al `surface-secondary`.
### Input / Form controls
HeroUI maneja los tokens `--field-*` internamente para focus, hover y estados. Variantes `bordered` (con borde visible) o `flat` (look más suave).
### Componentes con `.Root`
Consultar el MCP `heroui-react` para el patrón compound exacto de: Accordion, Avatar, Card, Disclosure, Fieldset, Kbd, Link, Popover, Radio, Switch, Tabs, Tooltip.
---
## Proyectos con overrides
### Breap
Decisiones pendientes:
- [ ] Brand color final — evaluar override de `--accent` (candidatos: azul más profundo del actual, o verde USDT `oklch(73% 0.19 150)` que ya está como `--success`)
- [ ] Peso tipográfico display para números grandes (balance, tasas)
Override previsto (se importa después del theme base):
```css
[data-project="breap"] {
  --accent: oklch(/* TBD */);
}
```
---
## MCP Server
```json
// .mcp.json
{
  "mcpServers": {
    "heroui-react": {
      "command": "npx",
      "args": ["-y", "@heroui/react-mcp@latest"]
    }
  }
}
```
Herramientas del MCP: `list_components`, `get_component_docs`, `get_component_source_styles`, `get_theme_variables`.
---
## Decisiones pendientes
- [ ] Brand color final de Breap
- [ ] Motion system (HeroUI usa animaciones CSS nativas en v3)
- [ ] Data visualization tokens (charts para dashboards financieros)
- [ ] Evaluar si algún proyecto necesita ajustar la base cromática (hue 253.83)
---
## Diferencias clave vs template shadcn
| Aspecto | shadcn template | HeroUI template |
|---------|----------------|-----------------|
| Componentes | Copiados al repo (`/components/ui/`) | Importados de `@heroui/react` |
| Tokens | CSS vars propias en `@layer base` | Theme oficial HeroUI en `:root`/`.dark` |
| Profundidad | Bordes + sombras | Superficies escalonadas (surface 1/2/3) |
| Variantes | `cva()` por componente | BEM global + `tv()` extendiendo HeroUI |
| Tipografía | Geist | Inter |
| Dark mode | `next-themes` + clases | `next-themes` (`attribute="class"`) + tokens `.dark` |
| Updates | Manual por componente | `npm update @heroui/react` |
| MCP | No nativo | `@heroui/react-mcp` oficial |
---
## Changelog
| Fecha | Cambio |
|-------|--------|
| 2026-07 | Setup inicial HeroUI v3 template con theme oficial (hue 253.83, Inter) |
