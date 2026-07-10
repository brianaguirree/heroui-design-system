import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Disclosure, DisclosureGroup, Separator } from '@heroui/react'
import { Widget, Home } from '@solar-icons/react/ssr'
import { useState } from 'react'

const meta = {
  title: 'HeroUI/DisclosureGroup',
  component: DisclosureGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    allowsMultipleExpanded: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    allowsMultipleExpanded: false,
    isDisabled: false,
  },
} satisfies Meta<typeof DisclosureGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = useState(new Set<string | number>(['preview']))

    return (
      <div className="w-full max-w-md">
        <DisclosureGroup {...args} expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
          <Disclosure id="preview">
            <Disclosure.Heading>
              <Button className="w-full" slot="trigger" variant="secondary">
                <Widget weight="Linear" color="currentColor" className="size-4" />
                Preview
                <Disclosure.Indicator className="ml-auto" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
                Preview panel content.
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
          <Separator className="my-2" />
          <Disclosure id="download">
            <Disclosure.Heading>
              <Button className="w-full" slot="trigger" variant="secondary">
                <Home weight="Linear" color="currentColor" className="size-4" />
                Download
                <Disclosure.Indicator className="ml-auto" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
                Download panel content.
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
        </DisclosureGroup>
      </div>
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState(new Set<string | number>(['preview', 'download']))

    return (
      <div className="w-full max-w-md">
        <p className="mb-3 text-sm font-medium text-muted">Multiple expanded (allowsMultipleExpanded)</p>
        <DisclosureGroup allowsMultipleExpanded expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
          <Disclosure id="preview">
            <Disclosure.Heading>
              <Button className="w-full" slot="trigger" variant="secondary">
                <Widget weight="Linear" color="currentColor" className="size-4" />
                Preview
                <Disclosure.Indicator className="ml-auto" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
                Preview panel content.
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
          <Separator className="my-2" />
          <Disclosure id="download">
            <Disclosure.Heading>
              <Button className="w-full" slot="trigger" variant="secondary">
                <Home weight="Linear" color="currentColor" className="size-4" />
                Download
                <Disclosure.Indicator className="ml-auto" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
                Download panel content.
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
        </DisclosureGroup>
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="mb-3 text-sm font-medium text-muted">Disabled group</p>
      <DisclosureGroup isDisabled>
        <Disclosure id="preview">
          <Disclosure.Heading>
            <Button className="w-full" isDisabled slot="trigger" variant="secondary">
              Preview
              <Disclosure.Indicator className="ml-auto" />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
              Preview panel content.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
        <Separator className="my-2" />
        <Disclosure id="download">
          <Disclosure.Heading>
            <Button className="w-full" isDisabled slot="trigger" variant="secondary">
              Download
              <Disclosure.Indicator className="ml-auto" />
            </Button>
          </Disclosure.Heading>
          <Disclosure.Content>
            <Disclosure.Body className="mt-2 rounded-2xl bg-surface p-4 text-sm text-muted">
              Download panel content.
            </Disclosure.Body>
          </Disclosure.Content>
        </Disclosure>
      </DisclosureGroup>
    </div>
  ),
}
