import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Tooltip } from '@heroui/react'
import { InfoCircle } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Tooltip delay={0}>
      <Button variant="secondary">Hover me</Button>
      <Tooltip.Content>
        <p>This is a tooltip</p>
      </Tooltip.Content>
    </Tooltip>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">With arrow</p>
        <div className="flex items-center gap-4">
          <Tooltip delay={0}>
            <Button variant="secondary">With Arrow</Button>
            <Tooltip.Content showArrow>
              <Tooltip.Arrow />
              <p>Tooltip with arrow indicator</p>
            </Tooltip.Content>
          </Tooltip>

          <Tooltip delay={0}>
            <Button isIconOnly variant="tertiary">
              <InfoCircle weight="Linear" color="currentColor" />
            </Button>
            <Tooltip.Content showArrow>
              <Tooltip.Arrow />
              <p>More information</p>
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Placement</p>
        <div className="grid grid-cols-3 gap-4">
          <div />
          <Tooltip delay={0}>
            <Button className="w-full" variant="tertiary">
              Top
            </Button>
            <Tooltip.Content showArrow placement="top">
              <Tooltip.Arrow />
              <p>Top placement</p>
            </Tooltip.Content>
          </Tooltip>
          <div />

          <Tooltip delay={0}>
            <Button className="w-full" variant="tertiary">
              Left
            </Button>
            <Tooltip.Content showArrow placement="left">
              <Tooltip.Arrow />
              <p>Left placement</p>
            </Tooltip.Content>
          </Tooltip>

          <div className="flex items-center justify-center">
            <span className="text-xs text-muted">Hover buttons</span>
          </div>

          <Tooltip delay={0}>
            <Button className="w-full" variant="tertiary">
              Right
            </Button>
            <Tooltip.Content showArrow placement="right">
              <Tooltip.Arrow />
              <p>Right placement</p>
            </Tooltip.Content>
          </Tooltip>

          <div />
          <Tooltip delay={0}>
            <Button className="w-full" variant="tertiary">
              Bottom
            </Button>
            <Tooltip.Content showArrow placement="bottom">
              <Tooltip.Arrow />
              <p>Bottom placement</p>
            </Tooltip.Content>
          </Tooltip>
          <div />
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip delay={0}>
        <Button variant="secondary">Enabled (hover)</Button>
        <Tooltip.Content>
          <p>Shown on hover</p>
        </Tooltip.Content>
      </Tooltip>

      <Tooltip delay={0} isDisabled>
        <Button variant="secondary">Disabled tooltip</Button>
        <Tooltip.Content>
          <p>You should not see this</p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  ),
}
