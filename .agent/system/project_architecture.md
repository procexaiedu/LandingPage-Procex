# Project Architecture

**Related docs**: [README.md](../README.md)

## Project Overview

### Project Goal
Create a high-converting marketing landing page for **ProceX**, an AI agent platform that makes artificial intelligence accessible to Brazilian small and medium-sized businesses (SMBs) without technical expertise. The landing page positions AI agents as "digital employees" that automate business processes 24/7.

### Target Audience
- **Primary**: Brazilian SMB owners and managers
- **Pain points**: Overwhelmed by manual tasks, limited technical resources, skeptical about AI complexity
- **Desired outcome**: Understand how AI can solve real business problems without coding or hiring a tech team

### Business Context
- **Stage**: Pre-launch / Early adopter phase
- **Primary CTA**: "Entrar em contato" (Contact us / Get in touch)
- **Value proposition**: Accessible AI automation that starts small (pilot projects) and scales with the business

## Current State

**Status**: Active Development - Initial implementation phase with Next.js project initialized and core sections being built.

### What Exists
- ✅ Next.js 14+ project fully initialized
- ✅ React + TypeScript fully configured
- ✅ Tailwind CSS + shadcn/ui setup complete
- ✅ Complete Portuguese content specification (TEXTO.txt) - 12 landing page sections
- ✅ Hero image asset (public/images/hero.png)
- ✅ Shadow/elevation system and animation utilities
- ✅ Partial landing page implementation with 2 sections complete:
  - Header Global section with headline
  - Hero section with benefits and CTA
- ✅ Global styles and CSS variables configured
- ✅ All primary CTAs updated to "Entrar em contato"

### What is Being Developed
- Remaining 10 landing page sections (Social Proof onwards)
- Component modularization and reusability
- Advanced animations and scroll effects
- Form integration for lead capture
- SEO optimization and metadata

## Tech Stack

### Frontend Framework
- **Next.js 14+** (App Router) - Inferred from shadcn config with rsc: true
- **React 18+** - Server and client components
- **TypeScript** - Full type safety (tsx: true in components.json)

### Styling & UI
- **Tailwind CSS 3.4+** - Utility-first CSS framework
  - Base color: slate
  - CSS variables enabled for theming
  - No prefix configured
- **shadcn/ui** - Component system (default style)
- **Lucide Icons** - Icon library

### Component Registries
Multiple shadcn registries configured for extended components:
- @alpine - https://alpine-registry.vercel.app
- @tailark - https://tailark.com
- @magicui - https://magicui.dev
- @shadcn-form - https://www.shadcn-form.com
- @animateui - https://animate-ui.com
- @fancycomponents - https://fancycomponents.dev
- @plateui - https://platejs.org

### Build & Development Tools
- **Vite** - Fast development server and build tool
- **ESLint** - Code linting (auto-fix on edit via hooks)
- **TypeScript Compiler** - Type checking

### Path Aliases
Configured in components.json:
- @/components → ./components
- @/lib → ./lib
- @/utils → ./lib/utils
- @/ui → ./components/ui
- @/hooks → ./hooks

## Project Structure

### Expected Directory Layout
```
PROCEX-AI-LANDING-PAGE/
├── app/                      # Next.js App Router
│   ├── globals.css          # Tailwind base, components, utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Landing page (main entry)
│
├── components/              # React components
│   ├── ui/                 # shadcn/ui components (auto-generated)
│   ├── sections/           # Landing page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── UseCases.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── shared/             # Reusable components
│       ├── CTAButton.tsx
│       └── SectionWrapper.tsx
│
├── lib/                     # Utilities and helpers
│   └── utils.ts            # cn() helper and other utilities
│
├── hooks/                   # Custom React hooks
│   └── use-scroll-animation.ts
│
├── public/                  # Static assets
│   └── hero.png            # Hero image (moved from root)
│
├── .claude/                # Claude Code configuration
│   ├── agents/             # Specialized AI agents
│   ├── commands/           # Custom slash commands
│   ├── scripts/            # Utility scripts
│   ├── skills/             # Project skills
│   └── settings.local.json # Local settings
│
├── .agent/                 # Project documentation
│   ├── system/             # Architecture and system docs
│   ├── tasks/              # Feature PRDs and plans
│   ├── sop/                # Standard operating procedures
│   └── README.md           # Documentation index
│
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind configuration (to be created)
├── tsconfig.json           # TypeScript configuration (to be created)
├── next.config.js          # Next.js configuration (to be created)
├── package.json            # Dependencies (to be created)
├── CLAUDE.md               # Claude Code project guide
└── TEXTO.txt               # Content specification (Portuguese)
```

## Integration Points

### MCP Servers
- **shadcn MCP** - Configured in .mcp.json
  - Command: cmd /c npx shadcn@latest mcp
  - Purpose: Component installation and management

### Claude Code Hooks
Post-edit linting configured:
- JavaScript/TypeScript files → npx eslint --fix
- Python files → pylint
- Ruby files → rubocop --auto-correct

### Status Line
Custom context monitor via Python script:
- Script: .claude/scripts/context-monitor.py
- Displays: Model, directory, context usage, session cost, duration, lines changed

## Landing Page Content Architecture

Based on TEXTO.txt, the landing page consists of **12 major sections**:

1. **Header Global** - Navigation with persistent CTA
2. **Hero Section** - Main value proposition with primary CTA
3. **Social Proof** - Early results and metrics
4. **Problem & Barriers** - Pain points and AI barriers
5. **Solution (ProceX Hub)** - Platform explanation
6. **How It Works** - 5-step implementation process
7. **Case Studies** - 4 before/after examples
8. **Use Cases** - By business area and industry
9. **Pricing/Entry Models** - Pilot project approach
10. **FAQ** - 6 common questions
11. **Final CTA** - Reinforced waitlist signup
12. **Footer** - Legal, contact, social links

### Key Messaging Themes
- **IA acessível** - Accessible AI without technical knowledge
- **Funcionários digitais 24/7** - AI agents as digital employees
- **Comece pequeno** - Start with pilot projects
- **Business outcomes** - Revenue, efficiency, cost reduction

### Content Placeholders
[AJUSTAR] markers for:
- Company legal information
- Contact details
- Client testimonial names
- Case study metrics

## Design Philosophy

### Critical Aesthetic Requirements

#### Must Avoid (AI Slop)
- Generic fonts: Inter, Roboto, Arial
- Purple gradients on white
- Centered layouts everywhere
- Cookie-cutter patterns
- Uniform rounded corners

#### Must Include
- Distinctive typography - Beautiful, unique fonts
- Cohesive color theme - Dominant colors with sharp accents
- Motion & animations - CSS-first, staggered reveals
- Depth & atmosphere - Gradients, patterns, textures
- Unexpected layouts - Asymmetry, overlap, creative composition
- Context-specific character - Reflects ProceX brand

## Database Schema

**Not applicable** - This is a static marketing landing page.

Forms will integrate with:
- Email marketing platform (waitlist)
- CRM system (lead capture)
- Analytics (conversion tracking)

## Claude Code Customization

### Custom Commands
- **/ui-design** - Frontend design workflow with Tailwind/Lucide
- **/update-doc** - Documentation maintenance for .agent/ folder

### Specialized Agents
- **mobile-developer** - React Native/Flutter expertise
- **typescript-pro** - Advanced TypeScript features
- **ui-ux-designer** - User-centered design

### Skills
- **artifacts-builder** - Complex HTML artifacts with React/Tailwind/shadcn
- **frontend-design** - Production-grade distinctive interfaces

### Scripts
- **context-monitor.py** - Real-time token usage monitoring

## Implementation Priorities

### Phase 1: Project Setup
1. Initialize Next.js with TypeScript and Tailwind
2. Configure path aliases
3. Set up ESLint and prettier
4. Move HERO.png to public/
5. Install base shadcn/ui components

### Phase 2: Content Implementation
1. Create section components from TEXTO.txt
2. Build reusable components
3. Implement responsive layouts
4. Add animations

### Phase 3: Design & Polish
1. Select distinctive fonts
2. Define color palette with CSS variables
3. Create custom backgrounds
4. Implement scroll animations
5. Mobile optimization

### Phase 4: Integration & Launch
1. Waitlist form integration
2. Analytics tracking
3. SEO metadata
4. Performance optimization
5. Accessibility audit

## Notes

- **Language**: All content is Portuguese (Brazilian)
- **No backend**: Static site - deploy to Vercel/Netlify
- **Forms**: Waitlist needs email service/CRM integration
- **SEO**: Critical for organic discovery
