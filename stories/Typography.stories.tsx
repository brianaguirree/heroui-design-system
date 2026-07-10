import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Typography } from '@heroui/react'

const meta = {
  title: 'HeroUI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body-sm', 'body-xs', 'code'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'justify'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    truncate: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    type: 'body',
    align: 'start',
    color: 'default',
    children: 'Build better interfaces',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <Typography {...args} />,
}

const scale = [
  { label: 'h1', meta: '36px / 600 / 1.11 / tight', sample: 'Build better interfaces', type: 'h1' as const },
  { label: 'h2', meta: '30px / 600 / 1.17 / tight', sample: 'Built for the intelligence age', type: 'h2' as const },
  { label: 'h3', meta: '24px / 600 / 1.25 / tight', sample: 'Pricing on your terms', type: 'h3' as const },
  { label: 'h4', meta: '20px / 600 / 1.33 / tight', sample: 'Apply to the startup program', type: 'h4' as const },
  { label: 'h5', meta: '18px / 600 / 1.39 / tight', sample: 'Card titles', type: 'h5' as const },
  { label: 'h6', meta: '16px / 600 / 1.50 / tight', sample: 'Smaller feature headers', type: 'h6' as const },
  {
    label: 'body',
    meta: '16px / 400 / 1.75',
    sample: 'Primary body text used across documentation, marketing copy, and descriptions.',
    type: 'body' as const,
  },
  {
    label: 'body-sm',
    meta: '14px / 400 / 1.50',
    sample: 'Secondary body, table cells, navigation, and sidebar items.',
    type: 'body-sm' as const,
  },
  {
    label: 'body-xs',
    meta: '12px / 400 / 1.25',
    sample: 'Captions, badges, helper text, and fine print.',
    type: 'body-xs' as const,
  },
  { label: 'code', meta: '14px / mono', sample: 'pnpm add @heroui/react', type: 'code' as const },
]

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[560px] flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Type scale</p>
        <div className="flex w-full flex-col divide-y divide-border">
          {scale.map((row) => (
            <div key={row.label} className="grid grid-cols-[100px_1fr] items-center gap-6 py-4">
              <div className="flex shrink-0 flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">{row.label}</span>
                <span className="text-xs whitespace-nowrap text-muted">{row.meta}</span>
              </div>
              <Typography type={row.type}>{row.sample}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Primitives</p>
        <div className="flex flex-col gap-3">
          <Typography.Heading level={2}>Typography.Heading level=2</Typography.Heading>
          <Typography.Paragraph>Typography.Paragraph size=base (default)</Typography.Paragraph>
          <Typography.Paragraph color="muted" size="sm">
            Typography.Paragraph size=sm color=muted
          </Typography.Paragraph>
          <Typography.Code>Typography.Code</Typography.Code>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Color &amp; weight</p>
        <div className="flex flex-col gap-2">
          <Typography color="default">Default color</Typography>
          <Typography color="muted">Muted color</Typography>
          <Typography weight="normal">Weight normal</Typography>
          <Typography weight="semibold">Weight semibold</Typography>
          <Typography weight="bold">Weight bold</Typography>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Truncate</p>
        <Typography truncate>
          This is a very long sentence that should be truncated with an ellipsis once it runs out of space.
        </Typography>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Alignment</p>
        <div className="flex flex-col gap-2 rounded-lg border border-border p-3">
          <Typography align="start">Aligned start</Typography>
          <Typography align="center">Aligned center</Typography>
          <Typography align="end">Aligned end</Typography>
        </div>
      </div>
    </div>
  ),
}
