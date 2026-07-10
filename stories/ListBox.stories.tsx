import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { Selection } from '@heroui/react'
import { Avatar, Description, Header, Label, ListBox, Separator, Surface } from '@heroui/react'
import { useState } from 'react'

const meta = {
  title: 'HeroUI/ListBox',
  component: ListBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selectionMode: {
      control: 'select',
      options: ['none', 'single', 'multiple'],
    },
  },
  args: {
    selectionMode: 'single',
    children: null,
  },
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

const users = [
  { email: 'bob@heroui.com', id: '1', image: 'blue', name: 'Bob' },
  { email: 'fred@heroui.com', id: '2', image: 'green', name: 'Fred' },
  { email: 'martha@heroui.com', id: '3', image: 'purple', name: 'Martha' },
]

export const Playground: Story = {
  render: (args) => (
    <ListBox {...args} aria-label="Users" className="w-[220px]">
      {users.map((user) => (
        <ListBox.Item key={user.id} id={user.id} textValue={user.name}>
          <Avatar size="sm">
            <Avatar.Image
              alt={user.name}
              src={`https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/${user.image}.jpg`}
            />
            <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col">
            <Label>{user.name}</Label>
            <Description>{user.email}</Description>
          </div>
          <ListBox.ItemIndicator />
        </ListBox.Item>
      ))}
    </ListBox>
  ),
}

export const AllVariants: Story = {
  render: () => {
    const [singleSelected, setSingleSelected] = useState<Selection>(new Set(['1']))
    const [multiSelected, setMultiSelected] = useState<Selection>(new Set(['1', '2']))

    return (
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">Single selection</p>
          <Surface className="w-[256px] rounded-3xl shadow-surface">
            <ListBox
              aria-label="Users"
              selectedKeys={singleSelected}
              selectionMode="single"
              onSelectionChange={setSingleSelected}
            >
              {users.map((user) => (
                <ListBox.Item key={user.id} id={user.id} textValue={user.name}>
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={user.name}
                      src={`https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/${user.image}.jpg`}
                    />
                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Label>{user.name}</Label>
                    <Description>{user.email}</Description>
                  </div>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Surface>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">Multiple selection</p>
          <Surface className="w-[256px] rounded-3xl shadow-surface">
            <ListBox
              aria-label="Users"
              selectedKeys={multiSelected}
              selectionMode="multiple"
              onSelectionChange={setMultiSelected}
            >
              {users.map((user) => (
                <ListBox.Item key={user.id} id={user.id} textValue={user.name}>
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={user.name}
                      src={`https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/${user.image}.jpg`}
                    />
                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Label>{user.name}</Label>
                    <Description>{user.email}</Description>
                  </div>
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Surface>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-muted">With sections</p>
          <Surface className="w-[256px] rounded-3xl shadow-surface">
            <ListBox
              aria-label="File actions"
              className="w-full p-2"
              selectionMode="none"
              onAction={(key) => console.log(`Selected: ${key}`)}
            >
              <ListBox.Section>
                <Header>Actions</Header>
                <ListBox.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </ListBox.Item>
                <ListBox.Item id="edit-file" textValue="Edit file">
                  <Label>Edit file</Label>
                </ListBox.Item>
              </ListBox.Section>
              <Separator />
              <ListBox.Section>
                <Header>Danger zone</Header>
                <ListBox.Item id="delete-file" textValue="Delete file" variant="danger">
                  <Label>Delete file</Label>
                </ListBox.Item>
              </ListBox.Section>
            </ListBox>
          </Surface>
        </div>
      </div>
    )
  },
}

export const States: Story = {
  render: () => (
    <Surface className="w-[256px] rounded-3xl shadow-surface">
      <ListBox aria-label="File actions" className="w-full p-2" disabledKeys={['delete-file']} selectionMode="none">
        <ListBox.Item id="new-file" textValue="New file">
          <Label>New file</Label>
        </ListBox.Item>
        <ListBox.Item id="edit-file" textValue="Edit file">
          <Label>Edit file</Label>
        </ListBox.Item>
        <ListBox.Item id="delete-file" textValue="Delete file" variant="danger">
          <Label>Delete file (disabled)</Label>
        </ListBox.Item>
      </ListBox>
    </Surface>
  ),
}
