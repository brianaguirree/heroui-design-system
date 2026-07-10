import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    backgrounds: {
      options: {
        light: { name: 'light', value: 'oklch(97.02% 0.0015 253.83)' },
        dark: { name: 'dark', value: 'oklch(12.00% 0.0015 253.83)' },
      },
    },

    options: {
      storySort: (a, b) => {
        const componentOrder = a.title.localeCompare(b.title, undefined, { numeric: true })
        if (componentOrder !== 0) return componentOrder

        const storyRank = (name) => {
          if (name === 'Playground') return 0
          if (name === 'AllVariants') return 1
          if (name === 'States') return 2
          return 3
        }
        return storyRank(a.name) - storyRank(b.name)
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme

      React.useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }, [theme])

      return <Story />
    },
  ],
};

export default preview;
