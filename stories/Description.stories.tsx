import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, Input, Label, TextField } from '@heroui/react'

const meta = {
  title: 'HeroUI/Description',
  component: Description,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: "We'll never share your email with anyone else.",
  },
} satisfies Meta<typeof Description>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1">
      <Label htmlFor="playground-email">Email</Label>
      <Input className="w-64" id="playground-email" placeholder="you@example.com" type="email" />
      <Description {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <Input className="w-64" id="email" placeholder="you@example.com" type="email" />
        <Description>We&apos;ll never share your email with anyone else.</Description>
      </div>

      <TextField className="w-64" type="password">
        <Label>Password</Label>
        <Input placeholder="Enter password" />
        <Description>Must be at least 8 characters with one uppercase letter.</Description>
      </TextField>
    </div>
  ),
}
