# SOP: Adding New Landing Page Sections

**Related docs**: [README.md](../README.md), [project_architecture.md](../system/project_architecture.md)

## Overview
This guide covers how to add new landing page sections to the ProceX landing page. Currently, all sections are built inline in `app/page.tsx`, but this document outlines the standard approach and best practices.

## Current Implementation Status
- **Sections complete**: 2 out of 12
  - Section 1: Header Global
  - Section 2: Hero Section
- **Remaining sections**: Social Proof (3) through Footer (12)

## Step-by-Step Guide

### 1. Prepare the Content
1. Reference `TEXTO.txt` for the section content
2. Identify the section number and corresponding content
3. Extract:
   - Headline principal
   - Subheadline
   - Body text
   - Bullets/features
   - CTA buttons with microcopy

### 2. Choose the Right Tailwind Classes

**Section Container**:
```typescript
<section id="section-id" className="section-spacing bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

**Available utilities**:
- `section-spacing` - Standard vertical padding (defined in globals.css)
- `section-spacing-xl` - Extra large spacing (for CTA sections)
- `bg-background` - Base background
- `bg-muted/30` - Subtle background accent
- `bg-gradient-to-b` - Gradient backgrounds
- `container mx-auto` - Max-width constraint

**Text sizing**:
- Heading: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`
- Subheading: `text-xl text-neutral-600`
- Body: `text-neutral-700`

### 3. Add Smooth Scroll Navigation
All section links should use the smooth scroll function:

```typescript
<button
  onClick={() => scrollToSection('section-id')}
  className="btn-primary"
>
  Button Text
</button>
```

The section must have a matching `id`:
```typescript
<section id="section-id" className="section-spacing bg-background">
```

### 4. Animation Best Practices

**Fade-in animations**:
```typescript
<div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
  Content
</div>
```

**Staggered reveals**:
```typescript
{items.map((item, i) => (
  <div
    key={i}
    className="animate-fade-up"
    style={{ animationDelay: `${i * 100}ms` }}
  >
    {item}
  </div>
))}
```

### 5. Cards and Components

**Standard card styling**:
```typescript
<div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
  {/* Card content */}
</div>
```

**Card with icon**:
```typescript
<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
  <IconComponent className="w-6 h-6 text-primary-600" />
</div>
```

### 6. Grid Layouts

**Responsive grids**:
```typescript
// 4 columns on desktop, 2 on tablet, 1 on mobile
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

**2-column layouts**:
```typescript
<div className="grid md:grid-cols-2 gap-8">
```

### 7. CTA Buttons

**Primary button**:
```typescript
<button className="btn-primary">
  Text
  <ArrowRight className="w-5 h-5" />
</button>
```

**Secondary button**:
```typescript
<button className="btn-secondary">
  Text
</button>
```

**Button text standards**:
- Always use "Entrar em contato" for primary CTA
- Pair with relevant secondary action
- Include microcopy below buttons explaining the action

### 8. Color and Styling Reference

**Gradient backgrounds**:
- `bg-gradient-hero` - Hero section gradient
- `bg-gradient-dark` - Dark section gradient
- `bg-gradient-cta` - CTA button gradient
- `bg-gradient-to-b from-primary-50 to-background` - Subtle fade

**Text colors**:
- Headings: `text-primary-900`
- Subheadings: `text-neutral-600`
- Body: `text-neutral-700`
- Muted: `text-neutral-500`
- Error/warning: `text-error`, `text-warning`

**Shadows**:
- `shadow-soft` - Subtle shadow for cards
- `shadow-float` - Hover shadow (more pronounced)
- `shadow-lifted` - Large shadow for depth

### 9. Implementation Pattern

```typescript
{/* N. SECTION NAME */}
<section id="section-id" className="section-spacing bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Intro text */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="mb-6">Headline Principal</h2>
      <p className="text-xl text-neutral-600">
        Subheadline text
      </p>
    </div>

    {/* Main content */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Grid items */}
    </div>

    {/* CTA */}
    <div className="text-center">
      <button onClick={() => scrollToSection('target')} className="btn-primary">
        Entrar em contato
      </button>
      <p className="text-sm text-neutral-500 mt-4">
        Microcopy
      </p>
    </div>
  </div>
</section>
```

## Common Patterns

### Section with intro + cards
- 3 intro paragraphs (headline + subheading + body)
- Grid of cards (usually 3-4 columns)
- Bottom CTA button

### Section with before/after
- Split layout with two columns
- Before section (left, neutral background)
- After section (right, colored background)
- Result badge (usually with gradient background)

### Section with testimonials
- Quote block with italic text
- Author attribution below
- Optional: profile image or colored left border

## Checklist Before Completing a Section

- [ ] Section has unique `id` attribute for navigation
- [ ] Content matches TEXTO.txt exactly
- [ ] All CTAs use "Entrar em contato" or link to relevant scroll target
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Animations include staggered delays (if multiple items)
- [ ] Cards/components use consistent shadow and hover effects
- [ ] No color values are hardcoded (use CSS variables)
- [ ] Typography follows pattern (h2 for section title, p for body)
- [ ] All text is Portuguese (Brazilian)
- [ ] Icons from lucide-react are properly imported
- [ ] No linting errors in the final code

## Performance Notes

- Avoid inline styles - use className strings
- Use CSS variables for repeated values (already defined in globals.css)
- Keep animation delays under 800ms total
- Test on mobile devices (may have reduced motion preferences)
- Use `map()` for dynamic lists rather than hardcoding DOM

## Styling Maintenance

All CSS is defined in `app/globals.css`:
- Custom utilities: `@layer components`
- Animation keyframes: `@keyframes`
- CSS variables: `:root` and theme colors

When adding new utility classes, add them to globals.css in the components layer.

## Current File Size Consideration

**Note**: `app/page.tsx` is currently ~1050 lines. After implementing all 12 sections, it will likely exceed 2000+ lines. At that point, consider refactoring into separate component files:

```
components/sections/
├── Header.tsx
├── Hero.tsx
├── SocialProof.tsx
├── Problem.tsx
├── Solution.tsx
├── HowItWorks.tsx
├── CaseStudies.tsx
├── UseCases.tsx
├── Pricing.tsx
├── FAQ.tsx
├── FinalCTA.tsx
└── Footer.tsx
```

Then in `app/page.tsx`:
```typescript
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
// ... etc
```

---

**Last Updated**: 2025-11-13
**Status**: Current - Document as sections are being developed




