import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Disclosure } from '@heroui/react'
import { Widget } from '@solar-icons/react/ssr'
import { useState } from 'react'

const meta = {
  title: 'HeroUI/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
  args: {
    isDisabled: false,
  },
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
      <div className="w-full max-w-md">
        <Disclosure {...args} isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Disclosure.Heading>
            <Button slot="trigger" variant="secondary">
              <Widget weight="Linear" color="currentColor" className="size-4" />
              Preview settings
              <Disclosure.Indicator />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="rounded-2xl bg-surface p-4 text-sm text-muted">
              Expandable content lives here. It can hold any composition of text, forms, or media.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
      <div className="w-full max-w-md">
        <p className="mb-3 text-sm font-medium text-muted">Full structure (compound)</p>
        <Disclosure isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
          <Disclosure.Heading>
            <Button slot="trigger" variant="secondary">
              <Widget weight="Linear" color="currentColor" className="size-4" />
              Preview HeroUI
              <Disclosure.Indicator />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
              Scan the QR code with your camera app to preview the components on device.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <Disclosure isDisabled>
          <Disclosure.Heading>
            <Button isDisabled slot="trigger" variant="secondary">
              Disabled disclosure
              <Disclosure.Indicator />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
              This content cannot be expanded.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Collapsed by default</p>
        <Disclosure>
          <Disclosure.Heading>
            <Button slot="trigger" variant="secondary">
              Click to expand
              <Disclosure.Indicator />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
              Hidden content revealed on expand.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
      </div>
    </div>
  ),
}
