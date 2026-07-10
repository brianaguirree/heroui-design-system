import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, Label, TextArea, TextField } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    placeholder: 'Share a quick project update...',
    rows: 3,
    fullWidth: false,
    disabled: false,
    readOnly: false,
    className: 'w-96',
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => <TextArea aria-label="Quick project update" {...args} />,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex w-96 flex-col gap-2">
          <TextArea aria-label="Primary textarea" fullWidth placeholder="Primary textarea" variant="primary" />
          <TextArea aria-label="Secondary textarea" fullWidth placeholder="Secondary textarea" variant="secondary" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Rows</p>
        <div className="flex w-96 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-rows-3">Short feedback</Label>
            <TextArea id="textarea-rows-3" placeholder="This week's highlights..." rows={3} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-rows-6">Detailed notes</Label>
            <TextArea id="textarea-rows-6" placeholder="Write out the full meeting notes..." rows={6} />
          </div>
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
        <TextArea aria-label="Disabled textarea" className="w-96" disabled placeholder="Can't type here" />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Read only</p>
        <TextArea
          aria-label="Read only textarea"
          className="w-96"
          defaultValue="This value cannot be edited."
          readOnly
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid (via TextField)</p>
        <TextField
          className="w-96"
          defaultValue="ab"
          isRequired
          name="bio"
          validate={(value) => (value.length < 10 ? 'Minimum 10 characters' : null)}
        >
          <Label>Bio</Label>
          <TextArea placeholder="Tell us about yourself..." />
          <Description>Minimum 10 characters</Description>
          <FieldError />
        </TextField>
      </div>
    </div>
  ),
}
