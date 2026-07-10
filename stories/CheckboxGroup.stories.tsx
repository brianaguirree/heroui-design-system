import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkbox, CheckboxGroup, Description, FieldError, Label } from '@heroui/react'

const meta = {
  title: 'HeroUI/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <CheckboxGroup {...args} name="interests">
      <Label>Select your interests</Label>
      <Description>Choose all that apply</Description>
      <Checkbox value="coding">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Coding
        </Checkbox.Content>
        <Description>Love building software</Description>
      </Checkbox>
      <Checkbox value="design">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Design
        </Checkbox.Content>
        <Description>Enjoy creating beautiful interfaces</Description>
      </Checkbox>
      <Checkbox value="writing">
        <Checkbox.Content>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          Writing
        </Checkbox.Content>
        <Description>Passionate about content creation</Description>
      </Checkbox>
    </CheckboxGroup>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-6">
          <CheckboxGroup name="skills-primary" variant="primary">
            <Label>Primary</Label>
            <Checkbox value="coding">
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                Coding
              </Checkbox.Content>
            </Checkbox>
            <Checkbox value="design">
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                Design
              </Checkbox.Content>
            </Checkbox>
          </CheckboxGroup>
          <CheckboxGroup name="skills-secondary" variant="secondary">
            <Label>Secondary</Label>
            <Checkbox value="coding">
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                Coding
              </Checkbox.Content>
            </Checkbox>
            <Checkbox value="design">
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                Design
              </Checkbox.Content>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Controlled selection</p>
        <CheckboxGroup defaultValue={['coding', 'design']} name="skills-controlled">
          <Label>Your skills</Label>
          <Checkbox value="coding">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Coding
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="design">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Design
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="writing">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Writing
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <CheckboxGroup isDisabled name="disabled-features">
          <Label>Features</Label>
          <Description>Feature selection is temporarily disabled</Description>
          <Checkbox value="feature1">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Feature 1
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="feature2">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Feature 2
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (required)</p>
        <CheckboxGroup isRequired name="preferences">
          <Label>Preferences</Label>
          <Checkbox value="email">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Email notifications
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="sms">
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              SMS notifications
            </Checkbox.Content>
          </Checkbox>
          <FieldError>Please select at least one notification method.</FieldError>
        </CheckboxGroup>
      </div>
    </div>
  ),
}
