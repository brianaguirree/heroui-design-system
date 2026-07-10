import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Label, TimeField } from '@heroui/react'
import { Time, getLocalTimeZone, now } from '@internationalized/date'
import { AltArrowDown, ClockCircle } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/TimeField',
  component: TimeField,
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
      options: ['hour', 'minute', 'second'],
    },
    hourCycle: {
      control: 'select',
      options: [12, 24],
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
} satisfies Meta<typeof TimeField>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <TimeField {...args} name="time">
      <Label>Time</Label>
      <TimeField.Group>
        <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
      </TimeField.Group>
    </TimeField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <TimeField className="w-[256px]" name="primary-time">
            <Label>Primary variant</Label>
            <TimeField.Group variant="primary">
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <TimeField className="w-[256px]" name="secondary-time">
            <Label>Secondary variant</Label>
            <TimeField.Group variant="secondary">
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
          </TimeField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With description</p>
        <TimeField className="w-[256px]" name="time">
          <Label>Start time</Label>
          <TimeField.Group>
            <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
          </TimeField.Group>
          <Description>Enter the start time</Description>
        </TimeField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With prefix / suffix icons</p>
        <div className="flex flex-col gap-4">
          <TimeField className="w-[256px]" name="time-prefix">
            <Label>Time (prefix)</Label>
            <TimeField.Group>
              <TimeField.Prefix>
                <ClockCircle className="text-muted" color="currentColor" size={16} weight="Linear" />
              </TimeField.Prefix>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
          </TimeField>
          <TimeField className="w-[256px]" name="time-suffix">
            <Label>Time (suffix)</Label>
            <TimeField.Group>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
              <TimeField.Suffix>
                <AltArrowDown className="text-muted" color="currentColor" size={16} weight="Linear" />
              </TimeField.Suffix>
            </TimeField.Group>
          </TimeField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[320px]">
          <TimeField fullWidth name="time-full">
            <Label>Time</Label>
            <TimeField.Group fullWidth>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
          </TimeField>
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => {
    const currentTime = now(getLocalTimeZone())
    const timeValue = new Time(currentTime.hour, currentTime.minute, currentTime.second)

    return (
      <div className="flex flex-col gap-8">
        <div>
          <p className="mb-3 text-sm font-medium text-muted">Required</p>
          <TimeField isRequired className="w-[256px]" name="time">
            <Label>Time</Label>
            <TimeField.Group>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
          </TimeField>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
          <TimeField isDisabled className="w-[256px]" name="time" value={timeValue}>
            <Label>Time</Label>
            <TimeField.Group>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
            <Description>This time field is disabled</Description>
          </TimeField>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-muted">Invalid (with error)</p>
          <TimeField isInvalid isRequired className="w-[256px]" name="time">
            <Label>Time</Label>
            <TimeField.Group>
              <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
            </TimeField.Group>
            <FieldError>Please enter a valid time</FieldError>
          </TimeField>
        </div>
      </div>
    )
  },
}
