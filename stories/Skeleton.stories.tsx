import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Skeleton } from '@heroui/react'

const meta = {
  title: 'HeroUI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    animationType: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
    },
  },
  args: {
    animationType: 'shimmer',
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="shadow-panel w-[250px] space-y-5 rounded-lg bg-transparent p-4">
      <Skeleton {...args} className="h-32 rounded-lg" />
      <div className="space-y-3">
        <Skeleton {...args} className="h-3 w-3/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-4/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-2/5 rounded-lg" />
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Text content</p>
        <div className="w-full max-w-md space-y-3">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
          <Skeleton className="h-4 w-4/6 rounded" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">User profile</p>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-36 rounded-lg" />
            <Skeleton className="h-3 w-24 rounded-lg" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Card</p>
        <div className="shadow-panel w-[250px] space-y-5 rounded-lg bg-transparent p-4">
          <Skeleton className="h-32 rounded-lg" />
          <div className="space-y-3">
            <Skeleton className="h-3 w-3/5 rounded-lg" />
            <Skeleton className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">List items</p>
        <div className="w-full max-w-sm space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 shrink-0 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-4/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-3">
      {(['shimmer', 'pulse', 'none'] as const).map((animationType) => (
        <div key={animationType} className="space-y-2">
          <p className="text-xs text-muted">{animationType}</p>
          <div className="shadow-panel space-y-3 rounded-lg bg-transparent p-4">
            <Skeleton animationType={animationType} className="h-20 rounded-lg" />
            <Skeleton animationType={animationType} className="h-3 w-3/5 rounded-lg" />
            <Skeleton animationType={animationType} className="h-3 w-4/5 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  ),
}
