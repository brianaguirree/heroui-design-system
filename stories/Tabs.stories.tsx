import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Tabs } from '@heroui/react'

const meta = {
  title: 'HeroUI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    variant: 'primary',
    orientation: 'horizontal',
    children: null,
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args} className="w-full max-w-md" defaultSelectedKey="overview">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Sections">
          <Tabs.Tab id="overview">
            Overview
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="analytics">
            Analytics
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="reports">
            Reports
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4" id="overview">
        <p className="text-sm text-muted">View your project overview and recent activity.</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="analytics">
        <p className="text-sm text-muted">Track your metrics and analyze performance data.</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="reports">
        <p className="text-sm text-muted">Generate and download detailed reports.</p>
      </Tabs.Panel>
    </Tabs>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Primary variant</p>
        <Tabs className="w-full max-w-md" defaultSelectedKey="daily">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Frequency">
              <Tabs.Tab id="daily">
                Daily
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="weekly">
                Weekly
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="monthly">
                Monthly
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="daily">
            <p className="text-sm text-muted">Manage your daily tasks and goals.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="weekly">
            <p className="text-sm text-muted">Manage your weekly tasks and goals.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="monthly">
            <p className="text-sm text-muted">Manage your monthly tasks and goals.</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Secondary variant</p>
        <Tabs className="w-full max-w-md" defaultSelectedKey="daily" variant="secondary">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Frequency">
              <Tabs.Tab id="daily">
                Daily
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="weekly">
                Weekly
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="monthly">
                Monthly
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="daily">
            <p className="text-sm text-muted">Manage your daily tasks and goals.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="weekly">
            <p className="text-sm text-muted">Manage your weekly tasks and goals.</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="monthly">
            <p className="text-sm text-muted">Manage your monthly tasks and goals.</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">With separators</p>
        <Tabs className="w-full max-w-md" defaultSelectedKey="daily">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Frequency">
              <Tabs.Tab id="daily">
                Daily
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="weekly">
                <Tabs.Separator />
                Weekly
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="monthly">
                <Tabs.Separator />
                Monthly
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="daily">
            <p className="text-sm text-muted">Daily content</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="weekly">
            <p className="text-sm text-muted">Weekly content</p>
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="monthly">
            <p className="text-sm text-muted">Monthly content</p>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-muted">Vertical orientation</p>
        <Tabs className="w-full max-w-md" defaultSelectedKey="overview" orientation="vertical">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Sections">
              <Tabs.Tab id="overview">
                Overview
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="analytics">
                Analytics
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pl-4" id="overview">
            <p className="text-sm text-muted">Overview content</p>
          </Tabs.Panel>
          <Tabs.Panel className="pl-4" id="analytics">
            <p className="text-sm text-muted">Analytics content</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <Tabs className="w-full max-w-md" defaultSelectedKey="overview">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Sections">
          <Tabs.Tab id="overview">
            Overview
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="analytics" isDisabled>
            Analytics
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="reports">
            Reports
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4" id="overview">
        <p className="text-sm text-muted">Overview content</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="analytics">
        <p className="text-sm text-muted">Analytics content</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="reports">
        <p className="text-sm text-muted">Reports content</p>
      </Tabs.Panel>
    </Tabs>
  ),
}
