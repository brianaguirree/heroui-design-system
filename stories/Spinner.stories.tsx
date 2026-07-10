import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner } from '@heroui/react'

const meta = {
  title: 'HeroUI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['current', 'accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    size: 'md',
    color: 'current',
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Spinner {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex items-center gap-8">
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Spinner size={size} />
              <span className="text-xs text-muted">{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Colors</p>
        <div className="flex items-center gap-8">
          {(['current', 'accent', 'success', 'warning', 'danger'] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <Spinner color={color} />
              <span className="text-xs text-muted">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
