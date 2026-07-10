import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Input, Label, Surface, TextArea, TextField } from '@heroui/react'

const meta = {
  title: 'HeroUI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url', 'tel'],
    },
    fullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
  args: {
    type: 'email',
    fullWidth: false,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <TextField {...args} className="w-full max-w-64" name="email">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
      <Description>We&apos;ll never share your email.</Description>
    </TextField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Basic</p>
        <TextField className="w-full max-w-64" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With description</p>
        <TextField className="w-full max-w-64" name="username">
          <Label>Username</Label>
          <Input placeholder="Enter username" />
          <Description>Choose a unique username for your account</Description>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Input types</p>
        <div className="flex w-full max-w-64 flex-col gap-4">
          <TextField name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="••••••••" />
          </TextField>

          <TextField name="age" type="number">
            <Label>Age</Label>
            <Input max="150" min="0" placeholder="21" />
          </TextField>

          <TextField name="website" type="url">
            <Label>Website</Label>
            <Input placeholder="https://example.com" />
          </TextField>

          <TextField name="phone" type="tel">
            <Label>Phone</Label>
            <Input placeholder="+1 (555) 000-0000" />
          </TextField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With TextArea</p>
        <TextField className="w-full max-w-64" name="message">
          <Label>Message</Label>
          <TextArea placeholder="Write your message here..." rows={4} />
          <Description>Maximum 500 characters</Description>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[400px] space-y-4">
          <TextField fullWidth name="name">
            <Label>Your name</Label>
            <Input placeholder="John" />
          </TextField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">In Surface (secondary variant)</p>
        <Surface className="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl p-6">
          <TextField name="name" variant="secondary">
            <Label>Your name</Label>
            <Input className="w-full" placeholder="John" />
            <Description>We&apos;ll never share this with anyone else</Description>
          </TextField>
          <TextField name="bio" variant="secondary">
            <Label>Bio</Label>
            <TextArea className="w-full" placeholder="Tell us about yourself..." rows={4} />
            <Description>Minimum 4 rows</Description>
          </TextField>
        </Surface>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Required</p>
        <TextField isRequired className="w-full max-w-64" name="fullName">
          <Label>Full Name</Label>
          <Input placeholder="John Doe" />
          <Description>This field is required</Description>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <TextField isInvalid className="w-full max-w-64" name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="user@example.com" />
          <FieldError>Please enter a valid email address</FieldError>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <TextField isDisabled className="w-full max-w-64" name="accountId" value="USR-12345">
          <Label>Account ID</Label>
          <Input placeholder="Auto-generated" />
          <Description>This field cannot be edited</Description>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <TextField isReadOnly className="w-full max-w-64" name="accountId" value="USR-12345">
          <Label>Account ID</Label>
          <Input />
          <Description>This value is read only</Description>
        </TextField>
      </div>
    </div>
  ),
}
