import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { Selection } from '@heroui/react'
import { Button, Dropdown, Header, Label, Separator } from '@heroui/react'
import { useState } from 'react'

const meta = {
  title: 'HeroUI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Actions
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  ),
}

export const AllVariants: Story = {
  render: () => {
    const [singleSelected, setSingleSelected] = useState<Selection>(new Set(['bold']))
    const [multiSelected, setMultiSelected] = useState<Selection>(new Set(['bold', 'italic']))

    return (
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">Basic (compound structure)</p>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                <Dropdown.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="open-file" textValue="Open file">
                  <Label>Open file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                  <Label>Delete file</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">With sections</p>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                <Dropdown.Section>
                  <Header>Actions</Header>
                  <Dropdown.Item id="new-file" textValue="New file">
                    <Label>New file</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="edit-file" textValue="Edit file">
                    <Label>Edit file</Label>
                  </Dropdown.Item>
                </Dropdown.Section>
                <Separator />
                <Dropdown.Section>
                  <Header>Danger zone</Header>
                  <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                    <Label>Delete file</Label>
                  </Dropdown.Item>
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">Single selection</p>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Format
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                selectedKeys={singleSelected}
                selectionMode="single"
                onSelectionChange={setSingleSelected}
              >
                <Dropdown.Item id="bold" textValue="Bold">
                  <Label>Bold</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
                <Dropdown.Item id="italic" textValue="Italic">
                  <Label>Italic</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
                <Dropdown.Item id="underline" textValue="Underline">
                  <Label>Underline</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">Multiple selection</p>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Style
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                selectedKeys={multiSelected}
                selectionMode="multiple"
                onSelectionChange={setMultiSelected}
              >
                <Dropdown.Item id="bold" textValue="Bold">
                  <Label>Bold</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
                <Dropdown.Item id="italic" textValue="Italic">
                  <Label>Italic</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
                <Dropdown.Item id="underline" textValue="Underline">
                  <Label>Underline</Label>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">With submenu</p>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Share
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                <Dropdown.Item id="copy-link" textValue="Copy Link">
                  <Label>Copy Link</Label>
                </Dropdown.Item>
                <Dropdown.SubmenuTrigger>
                  <Dropdown.Item id="share" textValue="Share">
                    <Label>Other</Label>
                    <Dropdown.SubmenuIndicator />
                  </Dropdown.Item>
                  <Dropdown.Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item id="whatsapp" textValue="WhatsApp">
                        <Label>WhatsApp</Label>
                      </Dropdown.Item>
                      <Dropdown.Item id="telegram" textValue="Telegram">
                        <Label>Telegram</Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown.SubmenuTrigger>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Actions
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu disabledKeys={['edit-file']} onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file (disabled)</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  ),
}
