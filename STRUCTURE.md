# Portfolio Website Structure

## Directory Organization

```
mohin-website/
├── components/
│   ├── shared/
│   │   ├── Header.vue         # Navigation header with logo
│   │   ├── Button.vue         # Reusable button with variants
│   │   ├── SectionHeader.vue  # Section title component
│   │   └── Footer.vue         # Footer with links & contact
│   └── sections/
│       ├── HeroSection.vue         # Hero with intro & CTA
│       ├── SpecialtiesSection.vue  # 3 specialty cards
│       ├── SelectedWorksSection.vue    # Portfolio grid (6 items)
│       ├── MoreWorksSection.vue    # Featured projects showcase
│       ├── PackagesSection.vue     # 3 pricing tiers
│       ├── MVPSprintSection.vue    # Process + 4 steps
│       ├── FAQSection.vue          # Accordion FAQ (6 items)
│       └── CTASection.vue          # Final call to action
├── app/
│   └── app.vue                # Main page layout
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js         # Tailwind CSS config
├── postcss.config.js          # PostCSS config
└── package.json               # Dependencies
```

## Component Hierarchy

### Shared Components (Reusable)
- **Header.vue** - Sticky navigation with branding
- **Button.vue** - 3 variants (primary, secondary, outline)
- **SectionHeader.vue** - Title + description + highlight
- **Footer.vue** - Multi-column footer with links

### Section Components (Page Sections)
1. **HeroSection** - Hero with gradient background
2. **SpecialtiesSection** - What you specialize in (3 cards)
3. **SelectedWorksSection** - Portfolio grid (6 items)
4. **MoreWorksSection** - Featured projects (3 items with descriptions)
5. **PackagesSection** - Pricing tiers (3 cards, 1 featured)
6. **MVPSprintSection** - Process explanation (left text, right image)
7. **FAQSection** - Accordion with 6 FAQs
8. **CTASection** - Final call to action section

## Color Scheme
- **Primary**: Gradient from orange-500 to pink-500
- **Background**: Pure black (rgb(0,0,0))
- **Text**: White and gray-300/400
- **Borders**: white/10 opacity for subtle dividers
- **Accents**: orange-400, orange-500/pink-500

## Key Features
- ✅ Dark theme with orange/pink gradients
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Tailwind CSS for styling
- ✅ TypeScript support
- ✅ Interactive elements (buttons, accordions, navlinks)
- ✅ Reusable component architecture
- ✅ SEO-friendly semantic HTML

## Next Steps to Customize
1. Replace emoji placeholders with actual images
2. Add your real project data
3. Update personal information (email, links)
4. Customize colors in tailwind.config.js
5. Add animations/transitions as needed
6. Deploy to Vercel, Netlify, or your preferred host
