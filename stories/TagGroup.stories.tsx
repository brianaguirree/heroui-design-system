import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, ErrorMessage, Label, Tag, TagGroup } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/TagGroup',
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'surface'],
    },
    selectionMode: {
      control: 'select',
      options: ['none', 'single', 'multiple'],
    },
  },
  args: {
    size: 'md',
    variant: 'default',
    selectionMode: 'single',
  },
} satisfies Meta<typeof TagGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <TagGroup {...args} aria-label="Categories">
      <Label>Categories</Label>
      <TagGroup.List>
        <Tag id="news">News</Tag>
        <Tag id="travel">Travel</Tag>
        <Tag id="gaming">Gaming</Tag>
        <Tag id="shopping">Shopping</Tag>
      </TagGroup.List>
      <Description>Choose one or more categories</Description>
    </TagGroup>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex flex-col gap-4">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <TagGroup key={size} selectionMode="single" size={size}>
              <Label className="capitalize">{size}</Label>
              <TagGroup.List>
                <Tag>News</Tag>
                <Tag>Travel</Tag>
                <Tag>Gaming</Tag>
              </TagGroup.List>
            </TagGroup>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          {(['default', 'surface'] as const).map((variant) => (
            <TagGroup key={variant} selectionMode="single" variant={variant}>
              <Label className="capitalize">{variant}</Label>
              <TagGroup.List>
                <Tag>News</Tag>
                <Tag>Travel</Tag>
                <Tag>Gaming</Tag>
              </TagGroup.List>
            </TagGroup>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Selection modes</p>
        <div className="flex flex-col gap-4">
          <TagGroup defaultSelectedKeys={new Set(['news'])} selectionMode="single">
            <Label>Single selection</Label>
            <TagGroup.List>
              <Tag id="news">News</Tag>
              <Tag id="travel">Travel</Tag>
              <Tag id="gaming">Gaming</Tag>
            </TagGroup.List>
          </TagGroup>
          <TagGroup defaultSelectedKeys={new Set(['news', 'travel'])} selectionMode="multiple">
            <Label>Multiple selection</Label>
            <TagGroup.List>
              <Tag id="news">News</Tag>
              <Tag id="travel">Travel</Tag>
              <Tag id="gaming">Gaming</Tag>
            </TagGroup.List>
          </TagGroup>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled tags</p>
        <TagGroup selectionMode="single">
          <Label>Disabled tags</Label>
          <TagGroup.List>
            <Tag isDisabled>News</Tag>
            <Tag>Travel</Tag>
            <Tag isDisabled>Gaming</Tag>
          </TagGroup.List>
          <Description>Some tags are disabled</Description>
        </TagGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled via disabledKeys</p>
        <TagGroup disabledKeys={['news', 'travel', 'gaming']} selectionMode="single">
          <Label>Disabled group</Label>
          <TagGroup.List>
            <Tag id="news">News</Tag>
            <Tag id="travel">Travel</Tag>
            <Tag id="gaming">Gaming</Tag>
          </TagGroup.List>
        </TagGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (with error message)</p>
        <TagGroup selectionMode="multiple">
          <Label>Amenities</Label>
          <TagGroup.List>
            <Tag id="laundry">Laundry</Tag>
            <Tag id="fitness">Fitness center</Tag>
            <Tag id="parking">Parking</Tag>
          </TagGroup.List>
          <ErrorMessage>Please select at least one category</ErrorMessage>
        </TagGroup>
      </div>
    </div>
  ),
}
