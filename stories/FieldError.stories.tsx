import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FieldError, Input, Label, TextField } from '@heroui/react'
import { useState } from 'react'

const meta = {
  title: 'HeroUI/FieldError',
  component: FieldError,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Username must be at least 3 characters',
  },
} satisfies Meta<typeof FieldError>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState('jr')
    const isInvalid = value.length > 0 && value.length < 3

    return (
      <TextField className="w-64" isInvalid={isInvalid}>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Enter username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FieldError {...args} />
      </TextField>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    const isInvalid = email.length > 0 && !email.includes('@')

    return (
      <div className="flex flex-col gap-6">
        <TextField className="w-64" isInvalid={isInvalid}>
          <Label>Email</Label>
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError>Email must include @ symbol</FieldError>
        </TextField>

        <TextField
          className="w-64"
          defaultValue="ab"
          isRequired
          name="name"
          validate={(value) => (value.length < 3 ? 'Name must be at least 3 characters' : null)}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <TextField className="w-64" isInvalid>
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <FieldError>
        {['Must be at least 3 characters', 'Must not contain spaces'].map((error) => (
          <div key={error}>{error}</div>
        ))}
      </FieldError>
    </TextField>
  ),
}
