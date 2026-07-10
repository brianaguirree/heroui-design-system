import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AlertDialog, Button } from '@heroui/react'

const meta = {
  title: 'HeroUI/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <AlertDialog>
      <Button variant="danger">Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  ),
}

export const AllVariants: Story = {
  render: () => {
    const examples = [
      {
        actions: { cancel: 'Stay Signed In', confirm: 'Sign Out' },
        body: "You'll need to sign in again to access your account.",
        header: 'Sign out of your account?',
        status: 'accent' as const,
        trigger: 'Sign Out',
      },
      {
        actions: { cancel: 'Not Yet', confirm: 'Mark Complete' },
        body: 'This will mark the task as complete and notify all team members.',
        header: 'Complete this task?',
        status: 'success' as const,
        trigger: 'Complete Task',
      },
      {
        actions: { cancel: 'Keep Editing', confirm: 'Discard' },
        body: 'You have unsaved changes that will be permanently lost.',
        header: 'Discard unsaved changes?',
        status: 'warning' as const,
        trigger: 'Discard Changes',
      },
      {
        actions: { cancel: 'Cancel', confirm: 'Delete Account' },
        body: 'This will permanently delete your account and remove all your data.',
        header: 'Delete your account?',
        status: 'danger' as const,
        trigger: 'Delete Account',
      },
    ]

    return (
      <div className="flex flex-wrap gap-4">
        {examples.map(({ actions, body, header, status, trigger }) => (
          <AlertDialog key={status}>
            <Button variant={status === 'danger' ? 'danger' : 'secondary'}>{trigger}</Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                    <AlertDialog.Icon status={status} />
                    <AlertDialog.Heading>{header}</AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                    <p>{body}</p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                      {actions.cancel}
                    </Button>
                    <Button slot="close" variant={status === 'danger' ? 'danger' : 'primary'}>
                      {actions.confirm}
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        ))}
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AlertDialog>
        <Button variant="secondary">isDismissable=false (default)</Button>
        <AlertDialog.Backdrop isDismissable={false}>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Requires explicit action</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>Clicking the backdrop won&apos;t close this dialog. Alert dialogs require explicit action.</p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button slot="close" variant="danger">
                  Confirm
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  ),
}
