import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar, Button, Card, Link } from '@heroui/react'
import { DollarMinimalistic } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Card',
  component: Card,
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Card {...args} className="w-[400px]">
      <DollarMinimalistic
        aria-label="Dollar sign icon"
        className="size-6 text-accent"
        color="currentColor"
        role="img"
        weight="Linear"
      />
      <Card.Header>
        <Card.Title>Conviértete en Acme Creator!</Card.Title>
        <Card.Description>
          Visita el Acme Creator Hub para registrarte hoy y empezar a ganar créditos de tus
          seguidores.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Ir a Acme Creator Hub (se abre en una pestaña nueva)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card className="w-[320px]" variant="transparent">
        <Card.Header>
          <Card.Title>Transparent</Card.Title>
          <Card.Description>Prominencia mínima, fondo transparente</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Úsalo para contenido secundario o cards anidadas</p>
        </Card.Content>
      </Card>

      <Card className="w-[320px]" variant="default">
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>Apariencia estándar (surface-secondary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>La variante por defecto para la mayoría de casos</p>
        </Card.Content>
      </Card>

      <Card className="w-[320px]" variant="secondary">
        <Card.Header>
          <Card.Title>Secondary</Card.Title>
          <Card.Description>Prominencia media (surface-tertiary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Úsalo para captar atención moderada</p>
        </Card.Content>
      </Card>

      <Card className="w-[320px]" variant="tertiary">
        <Card.Header>
          <Card.Title>Tertiary</Card.Title>
          <Card.Description>Prominencia alta (surface-tertiary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Úsalo para contenido destacado o principal</p>
        </Card.Content>
      </Card>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Card completa (Header + Content + Footer)</p>
        <Card className="w-[360px]">
          <Card.Header>
            <Card.Title>Indie Hackers</Card.Title>
            <Card.Description>148 miembros</Card.Description>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-muted">Comunidad de builders compartiendo proyectos.</p>
          </Card.Content>
          <Card.Footer className="flex items-center gap-2">
            <Avatar aria-label="Foto de perfil de Martha" className="size-5">
              <Avatar.Image
                alt="Avatar de Martha"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
              />
              <Avatar.Fallback className="text-xs">M</Avatar.Fallback>
            </Avatar>
            <span className="text-xs text-muted">Por Martha</span>
          </Card.Footer>
        </Card>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Card horizontal con acción</p>
        <Card className="w-[420px] items-stretch md:flex-row">
          <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-2xl">
            <img
              alt="Cerezas"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title>Conviértete en ACME Creator!</Card.Title>
              <Card.Description>Solo quedan 10 cupos, cierra el 10 de octubre.</Card.Description>
            </Card.Header>
            <Card.Footer className="mt-auto">
              <Button className="w-full sm:w-auto">Aplicar ahora</Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    </div>
  ),
}
