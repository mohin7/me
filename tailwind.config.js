export default {
  darkMode: ['class', '.theme-dark'],
  content: [],
  // tailwind.config.ts
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Inconsolata',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      textColor: {
        main: "var(--text-main)",
        soft: "var(--text-soft)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
      },
      backgroundColor: {
        page: "var(--bg-page)",
        panel: "var(--bg-panel)",
        soft: "var(--bg-soft)",
        glass: "var(--bg-glass)",
      },
      borderColor: {
        accent: "var(--accent)",

        glass: "var(--border-glass)",
        subtle: "var(--border-subtle)",
        accent: "var(--accent)",
      },

      colors: {
        brand: {
          DEFAULT: '#FF5C00', // Your main orange
          light: '#FF8A4D',
          dark: '#CC4A00',
        },
        surface: {
          900: '#0A0A0A', // Deep black-grey for background
          800: '#171717', // Card background
          700: '#262626', // Borders/Dividers
        },
        accent: {
          purple: '#8B5CF6', // For that gradient in your banner
          blue: '#3B82F6',   // For secondary links or info tags
        }
      }
    }
  },
  plugins: [],
}

