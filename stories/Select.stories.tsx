import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FieldError, Header, Label, ListBox, Select, Separator } from '@heroui/react'

const meta = {
  title: 'HeroUI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    selectionMode: 'single',
    placeholder: 'Select one',
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    fullWidth: false,
    className: 'w-[256px]',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Select {...args}>
      <Label>State</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Florida">
            Florida
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Delaware">
            Delaware
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="california" textValue="California">
            California
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="texas" textValue="Texas">
            Texas
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="new-york" textValue="New York">
            New York
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <Select className="w-[256px]" placeholder="Select one" variant="primary">
            <Label>Primary variant</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="option1" textValue="Option 1">
                  Option 1
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="option2" textValue="Option 2">
                  Option 2
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Select className="w-[256px]" placeholder="Select one" variant="secondary">
            <Label>Secondary variant</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="option1" textValue="Option 1">
                  Option 1
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="option2" textValue="Option 2">
                  Option 2
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Selection modes</p>
        <div className="flex flex-col gap-4">
          <Select className="w-[256px]" placeholder="Select one" selectionMode="single">
            <Label>Single selection</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="argentina" textValue="Argentina">
                  Argentina
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="japan" textValue="Japan">
                  Japan
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="france" textValue="France">
                  France
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Select className="w-[256px]" placeholder="Select countries" selectionMode="multiple">
            <Label>Multiple selection</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox selectionMode="multiple">
                <ListBox.Item id="argentina" textValue="Argentina">
                  Argentina
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="japan" textValue="Japan">
                  Japan
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="france" textValue="France">
                  France
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With sections</p>
        <Select className="w-[256px]" placeholder="Select a country">
          <Label>Country</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Section>
                <Header>North America</Header>
                <ListBox.Item id="usa" textValue="United States">
                  United States
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="canada" textValue="Canada">
                  Canada
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox.Section>
              <Separator />
              <ListBox.Section>
                <Header>Europe</Header>
                <ListBox.Item id="uk" textValue="United Kingdom">
                  United Kingdom
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="france" textValue="France">
                  France
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox.Section>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[320px]">
          <Select fullWidth placeholder="Select one">
            <Label>Favorite Animal</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="cat" textValue="Cat">
                  Cat
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="dog" textValue="Dog">
                  Dog
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
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
        <Select isDisabled className="w-[256px]" defaultValue="california" placeholder="Select one">
          <Label>State</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="florida" textValue="Florida">
                Florida
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="california" textValue="California">
                California
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled options</p>
        <Select className="w-[256px]" disabledKeys={['cat', 'kangaroo']} placeholder="Select an animal">
          <Label>Animal</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="dog" textValue="Dog">
                Dog
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="cat" textValue="Cat">
                Cat
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="kangaroo" textValue="Kangaroo">
                Kangaroo
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (required, with error)</p>
        <Select isRequired className="w-[256px]" name="state" placeholder="Select one">
          <Label>State</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="florida" textValue="Florida">
                Florida
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="california" textValue="California">
                California
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
          <FieldError />
        </Select>
      </div>
    </div>
  ),
}
