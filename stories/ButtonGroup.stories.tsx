import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, ButtonGroup } from '@heroui/react'

const meta = {
  title: 'HeroUI/Formularios/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    fullWidth: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    variant: 'secondary',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
    isDisabled: false,
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>First</Button>
      <Button>
        <ButtonGroup.Separator />
        Second
      </Button>
      <Button>
        <ButtonGroup.Separator />
        Third
      </Button>
    </ButtonGroup>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Variants</p>
        <div className="flex flex-col gap-4">
          {(['primary', 'secondary', 'tertiary', 'ghost', 'danger'] as const).map((variant) => (
            <div key={variant} className="flex flex-col gap-2">
              <p className="text-sm text-muted capitalize">{variant}</p>
              <ButtonGroup variant={variant}>
                <Button>First</Button>
                <Button>
                  <ButtonGroup.Separator />
                  Second
                </Button>
                <Button>
                  <ButtonGroup.Separator />
                  Third
                </Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex flex-col items-start gap-4">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <ButtonGroup key={size} size={size} variant="secondary">
              <Button>First</Button>
              <Button>
                <ButtonGroup.Separator />
                Second
              </Button>
              <Button>
                <ButtonGroup.Separator />
                Third
              </Button>
            </ButtonGroup>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Orientation</p>
        <div className="flex items-start gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted">Horizontal</span>
            <ButtonGroup orientation="horizontal" variant="tertiary">
              <Button>First</Button>
              <Button>
                <ButtonGroup.Separator />
                Second
              </Button>
              <Button>
                <ButtonGroup.Separator />
                Third
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted">Vertical</span>
            <ButtonGroup orientation="vertical" variant="tertiary">
              <Button>First</Button>
              <Button>
                <ButtonGroup.Separator />
                Second
              </Button>
              <Button>
                <ButtonGroup.Separator />
                Third
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Full width</p>
        <div className="w-[400px]">
          <ButtonGroup fullWidth variant="secondary">
            <Button>First</Button>
            <Button>
              <ButtonGroup.Separator />
              Second
            </Button>
            <Button>
              <ButtonGroup.Separator />
              Third
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Without separator</p>
        <ButtonGroup variant="secondary">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">All buttons disabled</p>
        <ButtonGroup isDisabled variant="secondary">
          <Button>First</Button>
          <Button>
            <ButtonGroup.Separator />
            Second
          </Button>
          <Button>
            <ButtonGroup.Separator />
            Third
          </Button>
        </ButtonGroup>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Group disabled, one button overrides</p>
        <ButtonGroup isDisabled variant="secondary">
          <Button>First</Button>
          <Button>
            <ButtonGroup.Separator />
            Second
          </Button>
          <Button isDisabled={false}>
            <ButtonGroup.Separator />
            Third (enabled)
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}
