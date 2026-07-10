import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    validationBehavior: {
      control: 'select',
      options: ['native', 'aria'],
    },
    className: { control: 'text' },
  },
  args: {
    validationBehavior: 'native',
    className: 'flex w-96 flex-col gap-4',
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Form {...args} onSubmit={(e) => e.preventDefault()}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) =>
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? 'Please enter a valid email address'
            : null
        }
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => (value.length < 8 ? 'Password must be at least 8 characters' : null)}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">validationBehavior=&quot;native&quot; (blocks submit)</p>
        <Form className="flex w-96 flex-col gap-4" validationBehavior="native" onSubmit={(e) => e.preventDefault()}>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <Button type="submit">Submit</Button>
        </Form>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">validationBehavior=&quot;aria&quot; (realtime errors)</p>
        <Form className="flex w-96 flex-col gap-4" validationBehavior="aria" onSubmit={(e) => e.preventDefault()}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => (value.length === 0 ? 'Email is required' : null)}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Server-side validation errors</p>
        <Form
          className="flex w-96 flex-col gap-4"
          validationErrors={{ email: 'This email is already registered' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField name="email" type="email">
            <Label>Email</Label>
            <Input defaultValue="jane@example.com" />
            <FieldError />
          </TextField>
          <Button type="submit">Submit</Button>
        </Form>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled submit</p>
        <Form className="flex w-96 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <TextField name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
          </TextField>
          <Button isDisabled type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  ),
}
