import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Switch, SwitchGroup } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isSelected: { control: 'boolean' },
    defaultSelected: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
  args: {
    size: 'md',
    defaultSelected: false,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Switch {...args}>
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        Enable notifications
      </Switch.Content>
    </Switch>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex items-center gap-6">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Switch key={size} size={size}>
              <Switch.Content>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <span className="capitalize">{size}</span>
              </Switch.Content>
            </Switch>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Label position</p>
        <div className="flex flex-col gap-4">
          <Switch>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Label after
            </Switch.Content>
          </Switch>
          <Switch>
            <Switch.Content>
              Label before
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Content>
          </Switch>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With description</p>
        <div className="max-w-sm">
          <Switch>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Public profile
            </Switch.Content>
            <Description>Allow others to see your profile information</Description>
          </Switch>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">SwitchGroup (vertical)</p>
        <SwitchGroup>
          <Switch name="notifications">
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Allow Notifications
            </Switch.Content>
          </Switch>
          <Switch name="marketing">
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Marketing emails
            </Switch.Content>
          </Switch>
          <Switch name="social">
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Social media updates
            </Switch.Content>
          </Switch>
        </SwitchGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">SwitchGroup (horizontal)</p>
        <SwitchGroup orientation="horizontal">
          <Switch name="notifications">
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Notifications
            </Switch.Content>
          </Switch>
          <Switch name="marketing">
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              Marketing
            </Switch.Content>
          </Switch>
        </SwitchGroup>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Default selected</p>
        <Switch defaultSelected>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            Enable notifications
          </Switch.Content>
        </Switch>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <Switch isDisabled>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            Enable notifications
          </Switch.Content>
        </Switch>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <Switch isReadOnly defaultSelected>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            Enable notifications
          </Switch.Content>
        </Switch>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (with error)</p>
        <Switch isInvalid isRequired name="terms">
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            Accept terms and conditions
          </Switch.Content>
          <FieldError>You must accept the terms to continue</FieldError>
        </Switch>
      </div>
    </div>
  ),
}
