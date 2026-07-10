import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Chip } from '@heroui/react'
import { CheckCircle, ClockCircle, CloseCircle } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'soft'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    children: { control: 'text' },
  },
  args: {
    color: 'default',
    variant: 'secondary',
    size: 'md',
    children: 'Label',
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Chip {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Colors</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip>Default</Chip>
          <Chip color="accent">Accent</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip color="accent" variant="primary">
            Primary
          </Chip>
          <Chip color="accent" variant="secondary">
            Secondary
          </Chip>
          <Chip color="accent" variant="tertiary">
            Tertiary
          </Chip>
          <Chip color="accent" variant="soft">
            Soft
          </Chip>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With icons</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip color="success">
            <CheckCircle weight="Linear" color="currentColor" className="size-3" />
            <Chip.Label>Completed</Chip.Label>
          </Chip>
          <Chip color="warning">
            <ClockCircle weight="Linear" color="currentColor" className="size-3" />
            <Chip.Label>Pending</Chip.Label>
          </Chip>
          <Chip color="danger">
            <CloseCircle weight="Linear" color="currentColor" className="size-3" />
            <Chip.Label>Failed</Chip.Label>
          </Chip>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Chip variant="primary">
        <Chip.Label>Default</Chip.Label>
      </Chip>
      <Chip color="success" variant="primary">
        <Chip.Label>Active</Chip.Label>
      </Chip>
      <Chip color="danger" variant="primary">
        <Chip.Label>Inactive</Chip.Label>
      </Chip>
    </div>
  ),
}
