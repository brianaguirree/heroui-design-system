import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input, Label } from '@heroui/react'

const meta = {
  title: 'HeroUI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isRequired: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
    children: 'Name',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1">
      <Label {...args} htmlFor="playground-name" />
      <Input className="w-64" id="playground-name" placeholder="Enter your name" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <Input className="w-64" id="name" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email" isRequired>
          Email address
        </Label>
        <Input className="w-64" id="email" placeholder="you@example.com" type="email" />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="username" isDisabled>
          Username
        </Label>
        <Input className="w-64" disabled id="username" placeholder="Disabled field" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password" isInvalid>
          Password
        </Label>
        <Input aria-invalid className="w-64" id="password" placeholder="Invalid field" type="password" />
      </div>
    </div>
  ),
}
