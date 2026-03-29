export type BrandScheme = 'futuristic' | 'premium' | 'energetic' | 'editorial' | 'neutral'

export interface BrandSchemeOption {
  value: BrandScheme
  label: string
  accent: string
  pairing: string
}

const schemeOptions: BrandSchemeOption[] = [
  { value: 'futuristic', label: 'Futuristic', accent: 'Electric Lime', pairing: 'Dark Mode' },
  { value: 'premium', label: 'Premium', accent: 'Vivid Violet', pairing: 'Navy / Slate' },
  { value: 'energetic', label: 'Energetic', accent: 'Hyper Orange', pairing: 'White / Black' },
  { value: 'editorial', label: 'Editorial', accent: 'Raspberry', pairing: 'Off-black' },
  { value: 'neutral', label: 'Neutral', accent: 'Cool Slate', pairing: 'Minimal' }
]

export const useBrandScheme = () => {
  const scheme = useState<BrandScheme>('site-brand-scheme', () => 'premium')
  const initialized = useState('site-brand-scheme-initialized', () => false)

  const applyScheme = (nextScheme: BrandScheme) => {
    scheme.value = nextScheme

    if (import.meta.client) {
      localStorage.setItem('site-brand-scheme', nextScheme)
      document.documentElement.setAttribute('data-brand-scheme', nextScheme)
      // Also re-apply theme to ensure both are always in sync
      const theme = localStorage.getItem('site-theme')
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme)
      }
    }
  }

  if (import.meta.client && !initialized.value) {
    const storedScheme = localStorage.getItem('site-brand-scheme') as BrandScheme | null
    applyScheme(storedScheme ?? 'premium')
    initialized.value = true
  }

  return {
    scheme,
    schemeOptions,
    applyScheme
  }
}
