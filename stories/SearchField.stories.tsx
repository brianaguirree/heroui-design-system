import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Label, SearchField } from '@heroui/react'

const meta = {
  title: 'HeroUI/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    fullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    fullWidth: false,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  },
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <SearchField {...args} name="search">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <SearchField name="search-primary" variant="primary">
            <Label>Primary</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="w-[280px]" placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <SearchField name="search-secondary" variant="secondary">
            <Label>Secondary</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="w-[280px]" placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With description</p>
        <div className="flex flex-col gap-4">
          <SearchField name="search-products">
            <Label>Search products</Label>
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="w-[280px]" placeholder="Search products..." />
              <SearchField.ClearButton />
            </SearchField.Group>
            <Description>Enter keywords to search for products</Description>
          </SearchField>
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
        <SearchField isDisabled name="search-disabled">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <SearchField isReadOnly defaultValue="Read only query" name="search-readonly">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <SearchField isInvalid isRequired name="search-invalid">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
          <FieldError>Search query is required</FieldError>
        </SearchField>
      </div>
    </div>
  ),
}
