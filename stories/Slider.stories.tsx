import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label, Slider } from '@heroui/react'

const meta = {
  title: 'HeroUI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    isDisabled: { control: 'boolean' },
  },
  args: {
    defaultValue: 30,
    minValue: 0,
    maxValue: 100,
    step: 1,
    orientation: 'horizontal',
    isDisabled: false,
    className: 'w-full max-w-xs',
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Slider {...args}>
      <Label>Volume</Label>
      <Slider.Output />
      <Slider.Track>
        <Slider.Fill />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Default</p>
        <Slider className="w-full max-w-xs" defaultValue={30}>
          <Label>Volume</Label>
          <Slider.Output />
          <Slider.Track>
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
        </Slider>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Range</p>
        <Slider
          className="w-full max-w-xs"
          defaultValue={[100, 500]}
          formatOptions={{ currency: 'USD', style: 'currency' }}
          maxValue={1000}
          minValue={0}
          step={50}
        >
          <Label>Price Range</Label>
          <Slider.Output />
          <Slider.Track>
            {({ state }) => (
              <>
                <Slider.Fill />
                {state.values.map((_, i) => (
                  <Slider.Thumb key={i} index={i} />
                ))}
              </>
            )}
          </Slider.Track>
        </Slider>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Custom value formatting</p>
        <Slider className="w-full max-w-xs" defaultValue={60} formatOptions={{ currency: 'USD', style: 'currency' }}>
          <Label>Price</Label>
          <Slider.Output />
          <Slider.Track>
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
        </Slider>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Vertical orientation</p>
        <div className="flex h-64 items-center justify-center">
          <Slider className="h-full" defaultValue={30} orientation="vertical">
            <Label>Volume</Label>
            <Slider.Output />
            <Slider.Track>
              <Slider.Fill />
              <Slider.Thumb />
            </Slider.Track>
          </Slider>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <Slider isDisabled className="w-full max-w-xs" defaultValue={30}>
          <Label>Volume</Label>
          <Slider.Output />
          <Slider.Track>
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
        </Slider>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled range</p>
        <Slider isDisabled className="w-full max-w-xs" defaultValue={[100, 500]} maxValue={1000} minValue={0}>
          <Label>Price Range</Label>
          <Slider.Output />
          <Slider.Track>
            {({ state }) => (
              <>
                <Slider.Fill />
                {state.values.map((_, i) => (
                  <Slider.Thumb key={i} index={i} />
                ))}
              </>
            )}
          </Slider.Track>
        </Slider>
      </div>
    </div>
  ),
}
