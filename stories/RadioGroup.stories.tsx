import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Label, Radio, RadioGroup } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    orientation: 'vertical',
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="premium" name="plan">
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <Radio.Content>
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          Basic Plan
        </Radio.Content>
        <Description>Includes 100 messages per month</Description>
      </Radio>
      <Radio value="premium">
        <Radio.Content>
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          Premium Plan
        </Radio.Content>
        <Description>Includes 200 messages per month</Description>
      </Radio>
      <Radio value="business">
        <Radio.Content>
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          Business Plan
        </Radio.Content>
        <Description>Unlimited messages</Description>
      </Radio>
    </RadioGroup>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-6">
          <RadioGroup defaultValue="option1" name="primary-plan" variant="primary">
            <Label>Primary</Label>
            <Radio value="option1">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Option 1
              </Radio.Content>
            </Radio>
            <Radio value="option2">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Option 2
              </Radio.Content>
            </Radio>
          </RadioGroup>
          <RadioGroup defaultValue="option1" name="secondary-plan" variant="secondary">
            <Label>Secondary</Label>
            <Radio value="option1">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Option 1
              </Radio.Content>
            </Radio>
            <Radio value="option2">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Option 2
              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Orientation</p>
        <div className="flex flex-col gap-6">
          <RadioGroup defaultValue="pro" name="plan-vertical" orientation="vertical">
            <Label>Vertical</Label>
            <Radio value="starter">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Starter
              </Radio.Content>
            </Radio>
            <Radio value="pro">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Pro
              </Radio.Content>
            </Radio>
          </RadioGroup>
          <RadioGroup defaultValue="pro" name="plan-horizontal" orientation="horizontal">
            <Label>Horizontal</Label>
            <Radio value="starter">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Starter
              </Radio.Content>
            </Radio>
            <Radio value="pro">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Pro
              </Radio.Content>
            </Radio>
            <Radio value="teams">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                Teams
              </Radio.Content>
            </Radio>
          </RadioGroup>
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
        <RadioGroup isDisabled defaultValue="pro" name="plan-disabled">
          <Label>Subscription plan</Label>
          <Description>Plan changes are temporarily paused while we roll out updates.</Description>
          <Radio value="starter">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Starter
            </Radio.Content>
          </Radio>
          <Radio value="pro">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Pro
            </Radio.Content>
          </Radio>
        </RadioGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (required)</p>
        <RadioGroup isRequired name="plan-validation">
          <Label>Subscription plan</Label>
          <Radio value="starter">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Starter
            </Radio.Content>
          </Radio>
          <Radio value="pro">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Pro
            </Radio.Content>
          </Radio>
          <FieldError>Choose a subscription before continuing.</FieldError>
        </RadioGroup>
      </div>
    </div>
  ),
}
