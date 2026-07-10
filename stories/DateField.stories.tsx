import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DateField, Description, FieldError, Label } from '@heroui/react'
import { getLocalTimeZone, today } from '@internationalized/date'
import { AltArrowDown, Calendar } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Formularios/DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    granularity: {
      control: 'select',
      options: ['day', 'hour', 'minute', 'second'],
    },
  },
  args: {
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
    fullWidth: false,
    className: 'w-[256px]',
  },
} satisfies Meta<typeof DateField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <DateField {...args} name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <DateField className="w-[256px]" name="primary-date">
            <Label>Primary variant</Label>
            <DateField.Group variant="primary">
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
          <DateField className="w-[256px]" name="secondary-date">
            <Label>Secondary variant</Label>
            <DateField.Group variant="secondary">
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With description</p>
        <DateField className="w-[256px]" name="date">
          <Label>Birth date</Label>
          <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          </DateField.Group>
          <Description>Enter your date of birth</Description>
        </DateField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With prefix / suffix icons</p>
        <div className="flex flex-col gap-4">
          <DateField className="w-[256px]" name="date-prefix">
            <Label>Date (prefix)</Label>
            <DateField.Group>
              <DateField.Prefix>
                <Calendar className="text-muted" color="currentColor" size={16} weight="Linear" />
              </DateField.Prefix>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
          <DateField className="w-[256px]" name="date-suffix">
            <Label>Date (suffix)</Label>
            <DateField.Group>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
              <DateField.Suffix>
                <AltArrowDown className="text-muted" color="currentColor" size={16} weight="Linear" />
              </DateField.Suffix>
            </DateField.Group>
          </DateField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[320px]">
          <DateField fullWidth name="date-full">
            <Label>Date</Label>
            <DateField.Group fullWidth>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
            </DateField.Group>
          </DateField>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Required</p>
        <DateField isRequired className="w-[256px]" name="date">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <DateField isDisabled className="w-[256px]" name="date" value={today(getLocalTimeZone())}>
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          </DateField.Group>
          <Description>This date field is disabled</Description>
        </DateField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (with error)</p>
        <DateField isInvalid isRequired className="w-[256px]" name="date">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          </DateField.Group>
          <FieldError>Please enter a valid date</FieldError>
        </DateField>
      </div>
    </div>
  ),
}
