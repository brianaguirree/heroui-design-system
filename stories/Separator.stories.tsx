import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Separator, Surface } from '@heroui/react'

const meta = {
  title: 'HeroUI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'tertiary'],
    },
  },
  args: {
    orientation: 'horizontal',
    variant: 'default',
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">HeroUI v3 Components</h4>
        <p className="text-sm text-muted">Beautiful, fast and modern React UI library.</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator {...args} orientation="vertical" />
        <div>Docs</div>
        <Separator {...args} orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variantes (horizontal)</p>
        <div className="flex max-w-md flex-col items-center gap-3">
          <div className="text-sm">Default Variant</div>
          <Separator variant="default" />
          <div className="text-sm">Secondary Variant</div>
          <Separator variant="secondary" />
          <div className="text-sm">Tertiary Variant</div>
          <Separator variant="tertiary" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Vertical</p>
        <div className="flex h-5 items-center gap-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sobre distintas superficies</p>
        <div className="flex flex-col gap-4">
          <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="default">
            <h3 className="text-base font-semibold text-foreground">Default Surface</h3>
            <Separator />
            <p className="text-sm text-muted">Surface Content</p>
          </Surface>

          <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="secondary">
            <h3 className="text-base font-semibold text-foreground">Secondary Surface</h3>
            <Separator variant="secondary" />
            <p className="text-sm text-muted">Surface Content</p>
          </Surface>

          <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="tertiary">
            <h3 className="text-base font-semibold text-foreground">Tertiary Surface</h3>
            <Separator variant="tertiary" />
            <p className="text-sm text-muted">Surface Content</p>
          </Surface>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      {[
        { title: 'Configurar notificaciones', subtitle: 'Recibe actualizaciones de tu cuenta' },
        { title: 'Conectar navegador', subtitle: 'Vincula tu extensión de navegador' },
        { title: 'Crear coleccionable', subtitle: 'Crea tu primer coleccionable' },
      ].map((item, index, arr) => (
        <div key={item.title}>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-sm font-medium">{item.title}</h4>
            <p className="text-sm text-muted">{item.subtitle}</p>
          </div>
          {index < arr.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  ),
}
