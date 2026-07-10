import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Popover } from '@heroui/react'

const meta = {
  title: 'HeroUI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Popover>
      <Button>Click me</Button>
      <Popover.Content className="max-w-64">
        <Popover.Dialog>
          <Popover.Heading>Popover Title</Popover.Heading>
          <p className="mt-2 text-sm text-muted">
            This is the popover content. You can put any content here.
          </p>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">With arrow</p>
        <Popover>
          <Button variant="secondary">With Arrow</Button>
          <Popover.Content className="max-w-64">
            <Popover.Dialog>
              <Popover.Arrow />
              <Popover.Heading>Popover with Arrow</Popover.Heading>
              <p className="mt-2 text-sm text-muted">
                The arrow shows which element triggered the popover.
              </p>
            </Popover.Dialog>
          </Popover.Content>
        </Popover>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Placement</p>
        <div className="grid grid-cols-3 gap-4">
          <div />
          <Popover>
            <Button className="w-full" variant="tertiary">
              Top
            </Button>
            <Popover.Content placement="top">
              <Popover.Dialog>
                <Popover.Arrow />
                <p className="text-sm">Top placement</p>
              </Popover.Dialog>
            </Popover.Content>
          </Popover>
          <div />

          <Popover>
            <Button className="w-full" variant="tertiary">
              Left
            </Button>
            <Popover.Content placement="left">
              <Popover.Dialog>
                <Popover.Arrow />
                <p className="text-sm">Left placement</p>
              </Popover.Dialog>
            </Popover.Content>
          </Popover>

          <div className="flex items-center justify-center">
            <span className="text-xs text-muted">Click buttons</span>
          </div>

          <Popover>
            <Button className="w-full" variant="tertiary">
              Right
            </Button>
            <Popover.Content placement="right">
              <Popover.Dialog>
                <Popover.Arrow />
                <p className="text-sm">Right placement</p>
              </Popover.Dialog>
            </Popover.Content>
          </Popover>

          <div />
          <Popover>
            <Button className="w-full" variant="tertiary">
              Bottom
            </Button>
            <Popover.Content placement="bottom">
              <Popover.Dialog>
                <Popover.Arrow />
                <p className="text-sm">Bottom placement</p>
              </Popover.Dialog>
            </Popover.Content>
          </Popover>
          <div />
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger aria-label="User profile">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-soft-foreground">
            SJ
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-muted">@sarahj</p>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Content className="w-[320px]">
        <Popover.Dialog>
          <Popover.Heading>Sarah Johnson</Popover.Heading>
          <p className="mt-3 text-sm text-muted">
            Product designer and creative director. Building beautiful experiences that matter.
          </p>
          <div className="mt-3 flex gap-4">
            <div>
              <span className="font-semibold">892</span>
              <span className="ml-1 text-sm text-muted">Following</span>
            </div>
            <div>
              <span className="font-semibold">12.5K</span>
              <span className="ml-1 text-sm text-muted">Followers</span>
            </div>
          </div>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  ),
}
