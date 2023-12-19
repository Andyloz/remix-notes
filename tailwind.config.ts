import tailwindForms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [ './app/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter var', ...defaultTheme.fontFamily.sans ],
      },
    },
  },
  plugins: [
    tailwindForms,
  ],
} satisfies Config

