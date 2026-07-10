import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Alert, Button, CloseButton, Spinner } from '@heroui/react'

const meta = {
  title: 'HeroUI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    status: 'default',
    children: null,
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>New features available</Alert.Title>
        <Alert.Description>
          Check out our latest updates including dark mode support and improved accessibility
          features.
        </Alert.Description>
      </Alert.Content>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid w-96 gap-4">
      {(['default', 'accent', 'success', 'warning', 'danger'] as const).map((status) => (
        <Alert key={status} status={status}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Status: {status}</Alert.Title>
            <Alert.Description>This is an alert with the {status} status.</Alert.Description>
          </Alert.Content>
        </Alert>
      ))}
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid w-96 gap-4">
      <Alert status="success">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Profile updated successfully</Alert.Title>
        </Alert.Content>
        <CloseButton />
      </Alert>

      <Alert status="accent">
        <Alert.Indicator>
          <Spinner size="sm" />
        </Alert.Indicator>
        <Alert.Content>
          <Alert.Title>Processing your request</Alert.Title>
          <Alert.Description>Please wait while we sync your data.</Alert.Description>
        </Alert.Content>
      </Alert>

      <Alert status="danger">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to connect to server</Alert.Title>
          <Alert.Description>We&apos;re experiencing connection issues.</Alert.Description>
          <Button className="mt-2" size="sm" variant="danger">
            Retry
          </Button>
        </Alert.Content>
      </Alert>
    </div>
  ),
}
