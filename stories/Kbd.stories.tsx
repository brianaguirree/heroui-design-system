import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Kbd } from '@heroui/react'

const meta = {
  title: 'HeroUI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'light'],
    },
  },
  args: {
    variant: 'default',
    children: (
      <>
        <Kbd.Abbr keyValue="command" />
        <Kbd.Content>K</Kbd.Content>
      </>
    ),
  },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Kbd {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Modifier combinations</p>
        <div className="flex flex-wrap items-center gap-4">
          <Kbd>
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="shift" />
            <Kbd.Content>P</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="ctrl" />
            <Kbd.Content>C</Kbd.Content>
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="option" />
            <Kbd.Content>D</Kbd.Content>
          </Kbd>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Navigation keys</p>
        <div className="flex items-center gap-2">
          <Kbd>
            <Kbd.Abbr keyValue="up" />
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="down" />
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="left" />
          </Kbd>
          <Kbd>
            <Kbd.Abbr keyValue="right" />
          </Kbd>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex items-center gap-3">
          <Kbd>
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>C</Kbd.Content>
          </Kbd>
          <Kbd variant="light">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>C</Kbd.Content>
          </Kbd>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Inline usage</p>
        <p className="text-sm">
          Press{' '}
          <Kbd>
            <Kbd.Content>Esc</Kbd.Content>
          </Kbd>{' '}
          to close the dialog, or{' '}
          <Kbd>
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>{' '}
          to open the command palette.
        </p>
      </div>
    </div>
  ),
}
