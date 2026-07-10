import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Label, NumberField } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' },
    fullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    minValue: 0,
    step: 1,
    fullWidth: false,
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  },
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <NumberField {...args} className="w-full max-w-64" defaultValue={1024} name="width">
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.DecrementButton />
        <NumberField.Input className="w-[120px]" />
        <NumberField.IncrementButton />
      </NumberField.Group>
      <Description>Enter the width in pixels</Description>
    </NumberField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex w-full max-w-64 flex-col gap-4">
          <NumberField defaultValue={1024} minValue={0} name="width-primary" variant="primary">
            <Label>Primary</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
          <NumberField defaultValue={1024} minValue={0} name="width-secondary" variant="secondary">
            <Label>Secondary</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Step values</p>
        <div className="flex w-full max-w-64 flex-col gap-4">
          <NumberField defaultValue={0} maxValue={100} minValue={0} name="step1" step={1}>
            <Label>Step: 1</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
            <Description>Increments by 1</Description>
          </NumberField>
          <NumberField defaultValue={0} maxValue={100} minValue={0} name="step5" step={5}>
            <Label>Step: 5</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
            <Description>Increments by 5</Description>
          </NumberField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Format options</p>
        <div className="flex w-full max-w-64 flex-col gap-4">
          <NumberField
            defaultValue={99.99}
            formatOptions={{ currency: 'USD', style: 'currency' }}
            minValue={0}
            name="currency-usd"
          >
            <Label>Currency (USD)</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
          <NumberField
            defaultValue={0.5}
            formatOptions={{ style: 'percent' }}
            maxValue={1}
            minValue={0}
            name="percentage"
            step={0.1}
          >
            <Label>Percentage</Label>
            <NumberField.Group>
              <NumberField.DecrementButton />
              <NumberField.Input className="w-[120px]" />
              <NumberField.IncrementButton />
            </NumberField.Group>
          </NumberField>
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
        <NumberField isDisabled className="w-full max-w-64" defaultValue={1024} minValue={0} name="width-disabled">
          <Label>Width</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input className="w-[120px]" />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <NumberField isReadOnly className="w-full max-w-64" defaultValue={1024} minValue={0} name="width-readonly">
          <Label>Width</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input className="w-[120px]" />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <NumberField
          isInvalid
          isRequired
          className="w-full max-w-64"
          minValue={0}
          name="quantity"
          value={-5}
        >
          <Label>Quantity</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input className="w-[120px]" />
            <NumberField.IncrementButton />
          </NumberField.Group>
          <FieldError>Quantity must be greater than or equal to 0</FieldError>
        </NumberField>
      </div>
    </div>
  ),
}
