import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, Modal } from '@heroui/react'
import { Rocket } from '@solar-icons/react/ssr'

const meta = {
  title: 'HeroUI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Modal>
      <Button variant="secondary">Open Modal</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket weight="Linear" color="currentColor" className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Welcome to HeroUI</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                A beautiful, fast, and modern React UI library for building accessible and
                customizable web applications with ease.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Placements</p>
        <div className="flex flex-wrap gap-4">
          {(['auto', 'top', 'center', 'bottom'] as const).map((placement) => (
            <Modal key={placement}>
              <Button variant="secondary">{placement}</Button>
              <Modal.Backdrop>
                <Modal.Container placement={placement}>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Heading>Placement: {placement}</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This modal uses the {placement} placement option.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className="w-full" slot="close">
                        Continue
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Backdrop variants</p>
        <div className="flex flex-wrap gap-4">
          {(['opaque', 'blur', 'transparent'] as const).map((variant) => (
            <Modal key={variant}>
              <Button variant="secondary">{variant}</Button>
              <Modal.Backdrop variant={variant}>
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Heading>Backdrop: {variant}</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This modal uses the {variant} backdrop variant.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className="w-full" slot="close">
                        Continue
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex flex-wrap gap-4">
          {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
            <Modal key={size}>
              <Button variant="secondary">{size}</Button>
              <Modal.Backdrop>
                <Modal.Container size={size}>
                  <Modal.Dialog>
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Heading>Size: {size}</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>This modal uses the {size} size variant.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button slot="close" variant="tertiary">
                        Cancel
                      </Button>
                      <Button slot="close">Confirm</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">isDismissable = false</p>
        <Modal>
          <Button variant="secondary">Open Modal</Button>
          <Modal.Backdrop isDismissable={false}>
            <Modal.Container>
              <Modal.Dialog className="sm:max-w-[360px]">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading>isDismissable = false</Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>Clicking the backdrop won&apos;t close this modal.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="w-full" slot="close">
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With form content</p>
        <Modal>
          <Button variant="secondary">Open Contact Form</Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading>Contact Us</Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p className="text-sm text-muted">Fill out the form and we&apos;ll get back to you.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button slot="close" variant="tertiary">
                    Cancel
                  </Button>
                  <Button slot="close">Send Message</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
    </div>
  ),
}
