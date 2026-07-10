import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, ScrollShadow } from '@heroui/react'

const listItems = Array.from({ length: 20 }, (_, idx) => ({
  id: idx,
  title: `Elemento ${idx + 1}`,
  subtitle: `Descripción del elemento número ${idx + 1} en la lista larga.`,
}))

const meta = {
  title: 'HeroUI/ScrollShadow',
  component: ScrollShadow,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    size: { control: 'number' },
    offset: { control: 'number' },
    hideScrollBar: { control: 'boolean' },
    isEnabled: { control: 'boolean' },
    visibility: {
      control: 'select',
      options: ['auto', 'both', 'top', 'bottom', 'left', 'right', 'none'],
    },
  },
  args: {
    orientation: 'vertical',
    size: 40,
    offset: 0,
    hideScrollBar: false,
    isEnabled: true,
    visibility: 'auto',
  },
} satisfies Meta<typeof ScrollShadow>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-full p-0 sm:max-w-sm">
      <ScrollShadow {...args} className="max-h-[280px] p-4">
        <div className="space-y-3">
          {listItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-sm font-medium text-muted">Vertical — lista larga con altura fija</p>
        <Card className="w-full max-w-sm p-0">
          <ScrollShadow className="max-h-[240px] p-4" orientation="vertical">
            <div className="space-y-3">
              {listItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </ScrollShadow>
        </Card>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-muted">Horizontal — cards en fila</p>
        <Card className="w-full max-w-sm p-0">
          <ScrollShadow className="p-4" orientation="horizontal">
            <div className="flex flex-row gap-4">
              {listItems.slice(0, 8).map((item) => (
                <Card key={item.id} className="min-w-[160px] p-3" variant="transparent">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted">{item.subtitle}</p>
                </Card>
              ))}
            </div>
          </ScrollShadow>
        </Card>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-muted">Con scrollbar oculto</p>
        <Card className="w-full max-w-sm p-0">
          <ScrollShadow hideScrollBar className="max-h-[240px] p-4">
            <div className="space-y-3">
              {listItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </ScrollShadow>
        </Card>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div>
      <p className="mb-2 text-sm font-medium text-muted">Dentro de un Card, con footer de acciones</p>
      <Card className="max-w-[400px]">
        <Card.Header>
          <Card.Title>Términos y Condiciones</Card.Title>
          <Card.Description>Revisa antes de continuar</Card.Description>
        </Card.Header>
        <Card.Content className="p-0">
          <ScrollShadow className="h-[240px] px-4" size={80}>
            <div className="space-y-4">
              {listItems.map((item) => (
                <p key={item.id} className="text-sm text-muted">
                  {item.title}: {item.subtitle}
                </p>
              ))}
            </div>
          </ScrollShadow>
        </Card.Content>
      </Card>
    </div>
  ),
}
