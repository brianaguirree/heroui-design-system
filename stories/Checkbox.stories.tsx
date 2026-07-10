import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkbox, Description, FieldError } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isIndeterminate: { control: 'boolean' },
    defaultSelected: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    isIndeterminate: false,
    defaultSelected: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Checkbox {...args} name="terms">
      <Checkbox.Content>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        Accept terms and conditions
      </Checkbox.Content>
    </Checkbox>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <Checkbox name="primary" variant="primary">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Primary checkbox
            </Checkbox.Content>
            <Description>Standard styling with default background</Description>
          </Checkbox>
          <Checkbox name="secondary" variant="secondary">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Secondary checkbox
            </Checkbox.Content>
            <Description>Lower emphasis variant for use in surfaces</Description>
          </Checkbox>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Selection states</p>
        <div className="flex flex-col gap-3">
          <Checkbox name="unselected">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Unselected
            </Checkbox.Content>
          </Checkbox>
          <Checkbox defaultSelected name="selected">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Selected
            </Checkbox.Content>
          </Checkbox>
          <Checkbox isIndeterminate name="indeterminate">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Indeterminate
            </Checkbox.Content>
          </Checkbox>
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
        <Checkbox isDisabled id="feature">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Premium Feature
          </Checkbox.Content>
          <Description>This feature is coming soon</Description>
        </Checkbox>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <Checkbox isInvalid isRequired name="agreement">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            I agree to the terms
          </Checkbox.Content>
          <FieldError>You must accept the terms to continue</FieldError>
        </Checkbox>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Indeterminate</p>
        <Checkbox isIndeterminate name="select-all">
          <Checkbox.Content>
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            Select all
          </Checkbox.Content>
          <Description>Shows indeterminate state (dash icon)</Description>
        </Checkbox>
      </div>
    </div>
  ),
}
