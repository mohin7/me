# Portfolio Customization Guide

## How to Customize Each Section

### 1. Hero Section (HeroSection.vue)
**Purpose**: Main landing section with intro and CTA

**Customize**:
- Change headline text in `<h1>`
- Update subtitle in `<p>`
- Replace emoji with actual hero image using `<img>`
- Modify CTA buttons text

```vue
<!-- Replace this -->
<div class="bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl p-8">
  <div class="text-6xl">👤</div>
</div>

<!-- With your image -->
<img src="/hero-image.jpg" alt="Hero" class="rounded-2xl w-full h-full object-cover" />
```

### 2. Specialties Section (SpecialtiesSection.vue)
**Purpose**: Show what you specialize in

**Customize**: Update the `specialties` array:
```typescript
const specialties: Specialty[] = [
  {
    icon: '🎨',                    // Change to relevant emoji or icon
    title: 'Your Specialty',        // What you do
    description: 'Your description' // Brief explanation
  },
  // ... add more
]
```

### 3. Selected Works (SelectedWorksSection.vue)
**Purpose**: Show your best 6 projects in a grid

**Customize**: Update the `projects` array:
```typescript
const projects: Project[] = [
  { 
    icon: '📱',              // Project category emoji
    name: 'Project Name',    // Official project name
    category: 'UI/UX Design' // Type of work
  },
  // ... add 6 total
]
```

**With Images**:
```vue
<!-- Replace emoji with image -->
<img src="/projects/project1.jpg" alt="Project" class="rounded-xl w-full h-full object-cover" />
```

### 4. More Works (MoreWorksSection.vue)
**Purpose**: Showcase featured projects with details

**Customize**: Update the `features` array:
```typescript
const features: Feature[] = [
  {
    icon: '🏢',
    title: 'Project Title',
    description: 'Full project description explaining what you did...',
    tags: ['Tag1', 'Tag2', 'Tag3'] // Skills/tools used
  },
  // ... add 3 featured projects
]
```

### 5. Packages Section (PackagesSection.vue)
**Purpose**: Show your pricing tiers

**Customize**: Update the `packages` array:
```typescript
const packages: Package[] = [
  {
    name: 'Starter',
    price: 2500,           // Your pricing
    description: 'For small projects',
    features: [
      'Feature 1',
      'Feature 2',
      // ... add your offerings
    ],
    featured: false        // Set one to true for highlight
  }
]
```

### 6. MVP Sprint (MVPSprintSection.vue)
**Purpose**: Explain your quick project process

**Customize**: Update the `steps` array:
```typescript
const steps: Step[] = [
  {
    title: 'Step Name',
    description: 'What happens in this step'
  },
  // ... 4 steps total
]
```

### 7. FAQ Section (FAQSection.vue)
**Purpose**: Answer common questions

**Customize**: Update the `faqs` array:
```typescript
const faqs: FAQ[] = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer...'
  },
  // ... add 6 FAQs
]
```

### 8. CTA Section (CTASection.vue)
**Purpose**: Final call to action

**Customize**:
- Change headline
- Modify button text
- Update button links

### 9. Header (Header.vue)
**Purpose**: Navigation

**Customize**:
- Change logo (replace gradient div with real logo)
- Update nav links (hrefs match section IDs)
- Modify "Get Started" button

### 10. Footer (Footer.vue)
**Purpose**: Bottom navigation and contact

**Customize**:
- Update social links
- Change email address
- Add/modify footer links
- Update copyright year

## Color Customization

Edit `tailwind.config.js` to change the orange/pink gradient:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',    // Orange
      secondary: '#F7436B'   // Pink
    }
  }
}
```

Replace all `from-orange-500 to-pink-500` with your custom colors.

## Adding Real Images

### Portfolio Grid Images
Place images in `public/projects/` and update SelectedWorksSection:
```vue
<img src="/projects/project-1.jpg" alt="Project name" />
```

### Featured Project Images
Update MoreWorksSection to replace emojis with actual screenshots

### Hero Image
Add your professional photo to replace the emoji placeholder

## Running the Website

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tips for Customization
- Keep the component structure intact
- Use consistent spacing (Tailwind classes)
- Maintain the dark theme (bg-black)
- Keep the orange/pink accent colors
- All components are responsive by default
- Icons/emojis can be replaced with real images in `<img>` tags
