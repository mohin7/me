type Theme = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<Theme>('site-theme', () => 'light')
  const initialized = useState('site-theme-initialized', () => false)

  const applyTheme = (nextTheme: Theme) => {
    theme.value = nextTheme
    if (import.meta.client) {
      localStorage.setItem('site-theme', nextTheme)
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  if (import.meta.client && !initialized.value) {
    const storedTheme = localStorage.getItem('site-theme') as Theme | null
    const preferredTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    applyTheme(storedTheme ?? preferredTheme)
    initialized.value = true
  }

  return { theme, toggleTheme, applyTheme }
}
