import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Link } from '@heroui/react'
import { LinkRound } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: { control: 'text' },
    isDisabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    isDisabled: false,
    children: 'Call to action',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Link href={args.href} isDisabled={args.isDisabled}>
      {typeof args.children === 'string' ? args.children : 'Call to action'}
      <Link.Icon />
    </Link>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Default</p>
        <Link href="#">
          Call to action
          <Link.Icon />
        </Link>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Custom icon</p>
        <Link href="#">
          Go to page
          <Link.Icon>
            <LinkRound weight="Linear" color="currentColor" className="size-3.5" />
          </Link.Icon>
        </Link>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Icon placement</p>
        <div className="flex flex-col gap-3">
          <Link href="#">
            Icon at end (default)
            <Link.Icon />
          </Link>
          <Link className="gap-1" href="#">
            <Link.Icon />
            Icon at start
          </Link>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Underline</p>
        <div className="flex flex-col gap-3">
          <Link className="underline" href="#">
            Always visible underline
            <Link.Icon />
          </Link>
          <Link className="no-underline" href="#">
            No underline
            <Link.Icon />
          </Link>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#">
        Enabled link
        <Link.Icon />
      </Link>
      <Link isDisabled href="#">
        Disabled link
        <Link.Icon />
      </Link>
    </div>
  ),
}
