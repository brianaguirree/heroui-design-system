import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Description, FieldError, InputGroup, Label, Surface, TextField } from '@heroui/react'
import { Eye, Global, Letter } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    fullWidth: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    fullWidth: false,
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <TextField className="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup {...args}>
        <InputGroup.Prefix>
          <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
        </InputGroup.Prefix>
        <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
      </InputGroup>
      <Description>We&apos;ll never share this with anyone else</Description>
    </TextField>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Prefix icon</p>
        <TextField className="w-full max-w-[280px]" name="email">
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
          </InputGroup>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Suffix icon</p>
        <TextField className="w-full max-w-[280px]" name="email">
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
            <InputGroup.Suffix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Prefix and suffix (text)</p>
        <TextField className="w-full max-w-[280px]" defaultValue="10" name="price">
          <Label>Set a price</Label>
          <InputGroup>
            <InputGroup.Prefix>$</InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[200px]" type="number" />
            <InputGroup.Suffix>USD</InputGroup.Suffix>
          </InputGroup>
          <Description>What customers would pay</Description>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Icon prefix + text suffix</p>
        <TextField className="w-full max-w-[280px]" defaultValue="heroui" name="website">
          <Label>Website</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Global className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[280px]" />
            <InputGroup.Suffix>.com</InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <TextField className="w-[280px]" name="primary">
            <Label>Primary variant</Label>
            <InputGroup variant="primary">
              <InputGroup.Prefix>
                <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" />
            </InputGroup>
          </TextField>
          <TextField className="w-[280px]" name="secondary">
            <Label>Secondary variant</Label>
            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" />
            </InputGroup>
          </TextField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With TextArea</p>
        <TextField className="w-full max-w-[280px]" name="feedback">
          <Label>Your feedback</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.TextArea
              className="resize-none"
              placeholder="Share your thoughts..."
              rows={4}
            />
          </InputGroup>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[400px] space-y-4">
          <TextField fullWidth name="email">
            <Label>Email address</Label>
            <InputGroup fullWidth>
              <InputGroup.Prefix>
                <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" />
            </InputGroup>
          </TextField>
          <TextField fullWidth name="password">
            <Label>Password</Label>
            <InputGroup fullWidth>
              <InputGroup.Input placeholder="Enter password" type="password" />
              <InputGroup.Suffix>
                <Eye className="text-muted" color="currentColor" size={16} weight="Linear" />
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">In Surface (secondary variant)</p>
        <Surface className="rounded-2xl p-6">
          <TextField className="w-full max-w-[280px]" name="email">
            <Label>Email address</Label>
            <InputGroup variant="secondary">
              <InputGroup.Prefix>
                <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
              </InputGroup.Prefix>
              <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
            </InputGroup>
          </TextField>
        </Surface>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Required field</p>
        <TextField isRequired className="w-full max-w-[280px]" name="email">
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
          </InputGroup>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <TextField isInvalid isRequired className="w-full max-w-[280px]" name="email">
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
          </InputGroup>
          <FieldError>Please enter a valid email address</FieldError>
        </TextField>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <TextField
          isDisabled
          className="w-full max-w-[280px]"
          defaultValue="name@email.com"
          name="email"
        >
          <Label>Email address</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Letter className="text-muted" color="currentColor" size={16} weight="Linear" />
            </InputGroup.Prefix>
            <InputGroup.Input className="w-full max-w-[280px]" />
          </InputGroup>
        </TextField>
      </div>
    </div>
  ),
}
