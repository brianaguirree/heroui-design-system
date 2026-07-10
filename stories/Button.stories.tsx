import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Spinner } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isPending: { control: 'boolean' },
    isIconOnly: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    isDisabled: false,
    isPending: false,
    isIconOnly: false,
    children: 'Click me',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Button {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[320px] space-y-3">
          <Button fullWidth>Primary button</Button>
          <Button fullWidth variant="secondary">
            Secondary button
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <div className="flex flex-wrap gap-3">
          <Button isDisabled>Primary</Button>
          <Button isDisabled variant="secondary">
            Secondary
          </Button>
          <Button isDisabled variant="tertiary">
            Tertiary
          </Button>
          <Button isDisabled variant="outline">
            Outline
          </Button>
          <Button isDisabled variant="ghost">
            Ghost
          </Button>
          <Button isDisabled variant="danger">
            Danger
          </Button>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Loading (isPending)</p>
        <div className="flex flex-wrap gap-3">
          <Button isPending>
            {({ isPending }) => (
              <>
                {isPending ? <Spinner color="current" size="sm" /> : null}
                Uploading...
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  ),
}
