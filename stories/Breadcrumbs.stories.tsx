import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Breadcrumbs } from '@heroui/react'

const meta = {
  title: 'HeroUI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
  args: {
    isDisabled: false,
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">2 levels</p>
        <Breadcrumbs>
          <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current page</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">3 levels</p>
        <Breadcrumbs>
          <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Category</Breadcrumbs.Item>
          <Breadcrumbs.Item>Current page</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">4 levels</p>
        <Breadcrumbs>
          <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
          <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
        </Breadcrumbs>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <Breadcrumbs isDisabled>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
}
