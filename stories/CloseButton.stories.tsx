import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CloseButton } from '@heroui/react'
import { CloseCircle } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
  args: {
    isDisabled: false,
  },
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <CloseButton {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <CloseButton />
        <span className="text-xs text-muted">Default icon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CloseButton>
          <CloseCircle weight="Linear" color="currentColor" className="size-4" />
        </CloseButton>
        <span className="text-xs text-muted">Custom icon</span>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <CloseButton />
        <span className="text-xs text-muted">Enabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CloseButton isDisabled />
        <span className="text-xs text-muted">Disabled</span>
      </div>
    </div>
  ),
}
