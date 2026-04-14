type Theme = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<Theme>('portal-theme', () => 'dark')
  const initialized = useState('portal-theme-initialized', () => false)

  const applyTheme = (nextTheme: Theme) => {
    theme.value = nextTheme
    if (import.meta.client) {
      localStorage.setItem('portal-theme', nextTheme)
      document.documentElement.classList.remove('theme-light', 'theme-dark'); document.documentElement.classList.add(`theme-${nextTheme}`)
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  if (import.meta.client) {
    const init = () => {
      const storedTheme = localStorage.getItem('portal-theme') as Theme | null
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const getPreferred = () => mediaQuery.matches ? 'dark' : 'light'
      
      if (!initialized.value) {
        applyTheme(storedTheme ?? getPreferred())
        initialized.value = true
      }

      // Listen for system changes
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('portal-theme')) {
          applyTheme(e.matches ? 'dark' : 'light')
        }
      })
    }
    
    init()
  }

  return { theme, toggleTheme, applyTheme }
}
