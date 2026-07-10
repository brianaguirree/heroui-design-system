import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input, Surface, TextArea } from '@heroui/react'

const meta = {
  title: 'HeroUI/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['transparent', 'default', 'secondary', 'tertiary'],
    },
  },
  args: {
    variant: 'default',
    children: null,
  },
} satisfies Meta<typeof Surface>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Surface {...args} className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6">
      <h3 className="text-base font-semibold text-foreground">Surface Content</h3>
      <p className="text-sm text-muted">
        El contenido de una superficie se adapta al nivel de prominencia elegido.
      </p>
    </Surface>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Default — bg-surface</p>
        <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="default">
          <h3 className="text-base font-semibold text-foreground">Surface Content</h3>
          <p className="text-sm text-muted">Nivel base de profundidad del sistema.</p>
        </Surface>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Secondary — bg-surface-secondary</p>
        <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="secondary">
          <h3 className="text-base font-semibold text-foreground">Surface Content</h3>
          <p className="text-sm text-muted">Nivel intermedio de profundidad, útil para paneles anidados.</p>
        </Surface>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Tertiary — bg-surface-tertiary</p>
        <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="tertiary">
          <h3 className="text-base font-semibold text-foreground">Surface Content</h3>
          <p className="text-sm text-muted">Nivel más profundo, para el contenido más anidado.</p>
        </Surface>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted">Transparent — sin fondo</p>
        <Surface
          className="flex min-w-[320px] flex-col gap-3 rounded-3xl border border-border p-6"
          variant="transparent"
        >
          <h3 className="text-base font-semibold text-foreground">Surface Content</h3>
          <p className="text-sm text-muted">Sin background propio, útil para overlays y cards custom.</p>
        </Surface>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-muted">Con componentes de formulario (variant=&quot;secondary&quot;)</p>
      <Surface className="flex min-w-[320px] flex-col gap-4 rounded-3xl p-6" variant="default">
        <Input placeholder="Input con variante secondary" variant="secondary" />
        <TextArea placeholder="TextArea con variante secondary" variant="secondary" />
      </Surface>
    </div>
  ),
}
