import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react'

const meta = {
  title: 'HeroUI/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: 'w-96',
  },
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Form>
      <Fieldset {...args}>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <Fieldset.Group>
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
        </Fieldset.Group>
        <Fieldset.Actions>
          <Button type="submit">Save changes</Button>
          <Button type="reset" variant="tertiary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Default</p>
        <Form>
          <Fieldset className="w-96">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <Fieldset.Group>
              <TextField isRequired name="name">
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
              <TextField isRequired name="bio">
                <Label>Bio</Label>
                <TextArea placeholder="Tell us about yourself..." />
                <Description>Minimum 10 characters</Description>
                <FieldError />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button type="submit">Save changes</Button>
              <Button type="reset" variant="tertiary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Grid layout (Fieldset.Group)</p>
        <Form>
          <Fieldset className="w-96">
            <Fieldset.Legend>Team members</Fieldset.Legend>
            <Fieldset.Group className="grid grid-cols-2 gap-4">
              <TextField>
                <Label>First name</Label>
                <Input placeholder="Jane" />
              </TextField>
              <TextField>
                <Label>Last name</Label>
                <Input placeholder="Doe" />
              </TextField>
            </Fieldset.Group>
          </Fieldset>
        </Form>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid fields</p>
        <Form>
          <Fieldset className="w-96">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Fieldset.Group>
              <TextField
                isRequired
                defaultValue="ab"
                name="name"
                validate={(value) => (value.length < 3 ? 'Name must be at least 3 characters' : null)}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button type="submit">Save changes</Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled fields</p>
        <Form>
          <Fieldset className="w-96">
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Fieldset.Group>
              <TextField isDisabled name="name">
                <Label>Name</Label>
                <Input placeholder="John Doe" />
              </TextField>
              <TextField isDisabled name="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </TextField>
            </Fieldset.Group>
            <Fieldset.Actions>
              <Button isDisabled type="submit">
                Save changes
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  ),
}
