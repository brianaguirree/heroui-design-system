import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar } from '@heroui/react'
import { UserRounded } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'select',
      options: ['default', 'soft'],
    },
  },
  args: {
    size: 'md',
    color: 'default',
    variant: 'default',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Avatar {...args}>
      <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex items-center gap-4">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Avatar key={size} size={size}>
              <Avatar.Image
                alt={`${size} avatar`}
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
              />
              <Avatar.Fallback>{size.toUpperCase()}</Avatar.Fallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Colors</p>
        <div className="flex items-center gap-4">
          {(['default', 'accent', 'success', 'warning', 'danger'] as const).map((color) => (
            <Avatar key={color} color={color}>
              <Avatar.Fallback>{color.charAt(0).toUpperCase()}</Avatar.Fallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants (letter / icon / soft)</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <Avatar.Fallback>AG</Avatar.Fallback>
          </Avatar>
          <Avatar variant="soft">
            <Avatar.Fallback>AG</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Fallback>
              <UserRounded weight="Linear" color="currentColor" className="size-4" />
            </Avatar.Fallback>
          </Avatar>
          <Avatar color="accent" variant="soft">
            <Avatar.Fallback>
              <UserRounded weight="Linear" color="currentColor" className="size-4" />
            </Avatar.Fallback>
          </Avatar>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Avatar group</p>
        <div className="flex -space-x-2">
          {['blue', 'green', 'purple', 'orange'].map((color) => (
            <Avatar key={color} className="ring-2 ring-background">
              <Avatar.Image
                alt={color}
                src={`https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/${color}.jpg`}
              />
              <Avatar.Fallback>{color.charAt(0).toUpperCase()}</Avatar.Fallback>
            </Avatar>
          ))}
          <Avatar className="ring-2 ring-background">
            <Avatar.Fallback className="text-xs">+3</Avatar.Fallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <Avatar.Image alt="Loaded image" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
        <Avatar.Fallback>OK</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image alt="Broken image" src="https://invalid-url-to-show-fallback.com/image.jpg" />
        <Avatar.Fallback>NA</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>JR</Avatar.Fallback>
      </Avatar>
    </div>
  ),
}
