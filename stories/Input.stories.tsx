import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input, Label, Surface } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url', 'tel'],
    },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    type: 'text',
    placeholder: 'Enter your name',
    fullWidth: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Input {...args} aria-label="Name" className="w-64" />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex w-[240px] flex-col gap-2">
          <Input fullWidth placeholder="Primary input" variant="primary" />
          <Input fullWidth placeholder="Secondary input" variant="secondary" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Types</p>
        <div className="flex w-80 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-type-email">Email</Label>
            <Input id="input-type-email" placeholder="jane@example.com" type="email" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-type-number">Age</Label>
            <Input id="input-type-number" min={0} placeholder="30" type="number" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-type-password">Password</Label>
            <Input id="input-type-password" placeholder="••••••••" type="password" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[400px]">
          <Input fullWidth placeholder="Full width input" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">In Surface (secondary variant)</p>
        <Surface className="flex h-[180px] w-[280px] items-center justify-center rounded-3xl bg-surface p-4">
          <Input className="w-full" placeholder="Your name" variant="secondary" />
        </Surface>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <Input className="w-64" disabled placeholder="Disabled input" />
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <Input className="w-64" placeholder="Read only input" readOnly value="Read only value" />
      </div>
    </div>
  ),
}
