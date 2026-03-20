/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // tailwind.config.ts
  theme: {
    extend: {
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

