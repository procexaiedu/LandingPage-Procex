# SOP: Updating CTA Buttons

**Related docs**: [README.md](../README.md), [adding-landing-page-sections.md](adding-landing-page-sections.md)

## Overview
This document describes how CTA (Call-to-Action) buttons are managed and updated across the ProceX landing page.

## Current CTA Standard

**Primary CTA Text**: "Entrar em contato"
- Changed from: "Entrar na lista de espera" (as of 2025-11-13)
- Usage: All primary buttons across the landing page
- Action: Scrolls to the "waitlist" section (currently repurposed for contact form)

## CTA Button Types

### 1. Primary Button (bg-white/primary color)
**Class**: `btn-primary`

```typescript
<button
  onClick={() => scrollToSection('target-section')}
  className="btn-primary"
>
  Entrar em contato
  <ArrowRight className="w-5 h-5" />
</button>
```

**Usage**: Main conversion actions
- Header navigation
- Hero section
- Bottom of each major section

### 2. Secondary Button (outline/transparent)
**Class**: `btn-secondary`

```typescript
<button
  onClick={() => scrollToSection('target-section')}
  className="btn-secondary"
>
  Text
</button>
```

**Usage**: Alternative actions
- "See how it works" alongside primary CTA
- Optional exploration paths

### 3. Link Buttons
For external links (WhatsApp, email, social):

```typescript
<a
  href="https://wa.me/5511999999999?text=Message"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary inline-flex"
>
  <MessageCircle className="w-5 h-5" />
  Falar pelo WhatsApp
</a>
```

## Where CTAs Appear

### Header (Fixed Navigation)
- Desktop: Small button on the right
- Mobile: Button in menu drawer
- Current text: "Entrar em contato"
- Target: Scrolls to contact section

### Hero Section
- Primary button: "Entrar em contato" + "Explore" or "Ver como funciona"
- Microcopy: "Reserve sua vaga como early adopter..."
- Placement: Below benefits list

### Section CTAs (Bottom of each section)
- Pattern: One primary button per section
- Text: Always "Entrar em contato" (consistency)
- Icon: Arrow pointing right for primary
- Microcopy: Explanatory text below button

### Footer
- Links: Privacy, Terms, Contact, Social
- No primary CTA (footer is terminal section)

## How to Update CTA Text

### Search for All CTAs
```bash
grep -r "Entrar" app/page.tsx
grep -r "onClick={() => scrollToSection" app/page.tsx
```

### Replace All Instances

If changing the primary CTA across the entire site:

1. Open `app/page.tsx`
2. Use Find & Replace (Ctrl+H / Cmd+H)
3. Search: Old CTA text
4. Replace: New CTA text
5. Review each match before replacing
6. Run linting: `npm run lint`

### Example: Previous Update (2025-11-13)
Changed "Entrar na lista de espera" → "Entrar em contato"

**Files modified**: `app/page.tsx`
**Instances changed**: 8 buttons across multiple sections
**Result**: All primary CTAs now consistently say "Entrar em contato"

## CTA Placement Rules

1. **Every section should have a CTA** (except Footer)
   - Primary section CTA at the bottom
   - Encourages progression through the page

2. **Consistent messaging**
   - All primary CTAs: "Entrar em contato"
   - Secondary CTAs: "Explore", "Learn more", "Ver detalhes"
   - Keep messaging brief (2-4 words max)

3. **Visual hierarchy**
   - Primary buttons: Bold, high contrast
   - Secondary: Outline or muted colors
   - Link buttons: Smallest, less prominent

4. **Mobile considerations**
   - Make buttons full-width on mobile
   - Ensure 48px minimum touch target
   - Adequate spacing between buttons

## CTA Content Guidelines

### Microcopy (Text below button)
Short, actionable phrases that encourage clicks:
- "Garanta acesso antecipado à plataforma"
- "Converse sem compromisso com nossos especialistas"
- "Reserve sua vaga como early adopter"
- "Tire suas dúvidas em poucos minutos"

### Button Text Standards
- **Avoid**: Generic terms ("Submit", "Click here", "OK")
- **Use**: Action-oriented, specific terms
  - "Entrar em contato" (contact us)
  - "Ver demonstração" (see demo)
  - "Começar agora" (start now)
  - "Saber mais" (learn more)

## Scroll Navigation

All internal CTAs use the `scrollToSection()` function:

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setMobileMenuOpen(false);
  }
};
```

**Section IDs in use**:
- `waitlist` - Contact/Waitlist section (Final CTA)
- `como-funciona` - How It Works section
- `casos-reais` - Case Studies section
- `planos` - Entry Models / Pricing section

## Testing Checklist

After updating CTAs:
- [ ] All buttons display correct text
- [ ] Buttons are clickable (no console errors)
- [ ] Smooth scroll works to target section
- [ ] Mobile menu closes after clicking
- [ ] Button styling is consistent
- [ ] Microcopy displays below buttons
- [ ] No orphaned or broken links
- [ ] Linting passes (`npm run lint`)
- [ ] Responsive design intact (test on mobile)

## Future Considerations

### Form Integration
When adding a form to the contact section:
1. Create a contact form component
2. Replace `scrollToSection('waitlist')` with form submission
3. Or: Keep scroll + add form at that section
4. Consider: Email service integration (Mailchimp, Supabase, etc.)

### Analytics Tracking
Could add click tracking to CTAs:
```typescript
const handleCTAClick = (buttonName: string) => {
  // Send to analytics
  analytics.track('cta_clicked', { button: buttonName });
  scrollToSection(targetId);
};
```

### A/B Testing
If implementing testing:
1. Create variant CTA text
2. Track which performs better
3. Update primary text based on results
4. Document winning variation in this SOP

---

**Last Updated**: 2025-11-13
**Most Recent Change**: "Entrar na lista de espera" → "Entrar em contato" (8 instances)
**Status**: Current - CTA approach stable, ready for form integration




