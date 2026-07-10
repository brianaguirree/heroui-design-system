import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Description,
  InputOTP,
  Label,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  Surface,
} from '@heroui/react'

const meta = {
  title: 'HeroUI/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxLength: { control: 'number' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    isDisabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
  args: {
    maxLength: 6,
    variant: 'primary',
    textAlign: 'left',
    isDisabled: false,
    isInvalid: false,
    children: (
      <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
    ),
  },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: meta.args,
  render: (args) => (
    <div className="flex w-[280px] flex-col gap-2">
      <Label>Verify account</Label>
      <InputOTP {...args}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
    </div>
  ),
}

export const AllVariants: Story = {
  args: meta.args,
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Primary variant</Label>
            <InputOTP maxLength={6} variant="primary">
              <InputOTP.Group>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
              </InputOTP.Group>
              <InputOTP.Separator />
              <InputOTP.Group>
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
              </InputOTP.Group>
            </InputOTP>
          </div>
          <div>
            <Label>Secondary variant</Label>
            <InputOTP maxLength={6} variant="secondary">
              <InputOTP.Group>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
              </InputOTP.Group>
              <InputOTP.Separator />
              <InputOTP.Group>
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
              </InputOTP.Group>
            </InputOTP>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Length (4 digits)</p>
        <div className="flex flex-col gap-2">
          <Label>Enter PIN</Label>
          <InputOTP maxLength={4}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
            </InputOTP.Group>
          </InputOTP>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With pattern (letters only)</p>
        <div className="flex flex-col gap-2">
          <Label>Enter code (letters only)</Label>
          <Description>Only alphabetic characters are allowed</Description>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_CHARS}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Digits only pattern</p>
        <div className="flex flex-col gap-2">
          <Label>Enter code (digits only)</Label>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">In Surface (secondary variant)</p>
        <Surface className="flex w-full flex-col gap-2 rounded-3xl p-6">
          <div className="flex flex-col gap-1">
            <Label>Verify account</Label>
            <p className="text-sm text-muted">We&apos;ve sent a code to a****@gmail.com</p>
          </div>
          <InputOTP maxLength={6} variant="secondary">
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </Surface>
      </div>
    </div>
  ),
}

export const States: Story = {
  args: meta.args,
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Disabled</p>
        <div className="flex w-[280px] flex-col gap-2">
          <Label isDisabled>Verify account</Label>
          <Description>Code verification is currently disabled</Description>
          <InputOTP isDisabled maxLength={6}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Invalid</p>
        <div className="flex w-[280px] flex-col gap-2">
          <Label>Verify account</Label>
          <InputOTP isInvalid maxLength={6}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
          <span className="field-error" data-visible="true">
            Invalid code. Please try again.
          </span>
        </div>
      </div>
    </div>
  ),
}
