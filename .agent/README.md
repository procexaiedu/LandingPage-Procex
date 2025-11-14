# .agent Documentation Index

This directory contains all critical information for engineers to get full context of the ProceX AI Landing Page project.

## Quick Start

**Project Status**: Active Development - Phase 2 (Content Implementation)

This repository is now in active development with a fully initialized Next.js project. Current progress:
- ✅ Next.js 14+ with React, TypeScript, Tailwind CSS configured
- ✅ Header Global section implemented with headline principal
- ✅ Hero section with benefits, CTA buttons implemented
- ✅ All CTAs updated from "Entrar na lista de espera" to "Entrar em contato"
- 🔄 Continuing with remaining 10 landing page sections
- 📋 Complete Portuguese content specification in TEXTO.txt

**Next Steps**: Implement Social Proof, Problem Statement, and Solution sections.

## Documentation Structure

### 📁 System Documentation

**Location**: `.agent/system/`

Core architecture and technical specifications:

- **[project_architecture.md](system/project_architecture.md)** - **START HERE**
  - Project goals and target audience
  - Complete tech stack (Next.js, React, TypeScript, Tailwind, shadcn/ui)
  - Expected project structure
  - Landing page content architecture (12 sections)
  - Design philosophy and aesthetic requirements
  - Claude Code customization overview
  - Implementation phases and priorities

### 📝 Changelog

**Location**: `CHANGELOG.md`

- **[CHANGELOG.md](CHANGELOG.md)** - Recent changes and progress
  - Completed features and implementations
  - CTA text updates (2025-11-13: "Entrar na lista de espera" → "Entrar em contato")
  - Documentation updates
  - Next steps and roadmap
  - Version history and progress tracking

### 📋 Tasks

**Location**: `.agent/tasks/`

Feature PRDs and implementation plans. *(Currently empty - to be populated as features are developed)*

### 📖 Standard Operating Procedures (SOPs)

**Location**: `.agent/sop/`

Best practices for common development tasks:

- **[adding-landing-page-sections.md](sop/adding-landing-page-sections.md)** - How to implement new landing page sections
  - Content extraction from TEXTO.txt
  - Tailwind class patterns
  - Animation standards
  - Responsive design approach
  - Pre-completion checklist

- **[updating-cta-buttons.md](sop/updating-cta-buttons.md)** - Managing CTA buttons and text
  - CTA standards ("Entrar em contato")
  - Button types and styling
  - Placement guidelines
  - Search/replace procedures
  - Testing checklist

## Project Overview

### What is ProceX?
An AI agent platform that makes artificial intelligence accessible to Brazilian SMBs. The landing page positions AI agents as "digital employees" working 24/7 to automate business processes.

### Key Files in Repository

- **TEXTO.txt** - Complete Portuguese content for all 12 landing page sections
- **CLAUDE.md** - Main guidance file for Claude Code instances
- **components.json** - shadcn/ui configuration with multiple registry integrations
- **.claude/** - Extensive Claude Code customization (agents, commands, skills, scripts)
- **HERO.png** - Hero section image asset

### Technology Stack

- **Framework**: Next.js 14+ (App Router) with React 18+ and TypeScript
- **Styling**: Tailwind CSS 3.4+ with shadcn/ui components
- **Icons**: Lucide
- **Build Tools**: Vite, ESLint, TypeScript Compiler
- **Deployment**: Static site (Vercel/Netlify recommended)

### Landing Page Sections

The landing page consists of 12 sections (see TEXTO.txt):
1. Header Global
2. Hero Section
3. Social Proof
4. Problem & Barriers
5. Solution (ProceX Hub)
6. How It Works
7. Case Studies
8. Use Cases
9. Pricing/Entry Models
10. FAQ
11. Final CTA
12. Footer

### Design Requirements

**Critical**: Avoid generic "AI slop" aesthetics
- NO Inter/Roboto fonts, purple gradients, centered layouts
- YES distinctive typography, cohesive colors, motion, depth, creative layouts

See: `CLAUDE.md.backup/prompt.txt` and `.claude/skills/frontend-design/SKILL.md`

## Claude Code Features

This project has extensive Claude Code customization:

### Custom Commands
- `/ui-design` - Specialized frontend design workflow
- `/update-doc` - Documentation maintenance (you're using it now!)

### Specialized Agents
- `mobile-developer` - React Native/Flutter (if mobile version needed)
- `typescript-pro` - Advanced TypeScript patterns
- `ui-ux-designer` - User-centered design guidance

### Skills
- `artifacts-builder` - Build complex React artifacts
- `frontend-design` - Create distinctive, production-grade interfaces

### Scripts
- `context-monitor.py` - Real-time context usage monitoring in status line

### Hooks & Automation
- Auto-linting on file edits (ESLint for JS/TS)
- Custom status line with context tracking
- Pre-approved permissions for git, testing, frontend-design skill

## Development Workflow (Future)

Once the Next.js project is initialized:

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Production build
npm run start            # Serve production build

# Quality
npm run lint             # ESLint check
npm run type-check       # TypeScript validation

# Components
npx shadcn@latest add [component]    # Add shadcn components
```

## Development Progress

### Completed
- ✅ Project initialization (Next.js, TypeScript, Tailwind, shadcn/ui)
- ✅ Global styles and CSS variables setup
- ✅ Header Global section (with headline principal from TEXTO.txt section 1)
- ✅ Hero section (with benefits and primary CTAs from TEXTO.txt section 2)
- ✅ CTA text updated: "Entrar na lista de espera" → "Entrar em contato"

### In Progress
- 🔄 Refactoring for component modularity
- 🔄 Expanding remaining sections (3-12)

### Planned
- Social Proof section (metrics cards)
- Problem & Barriers section
- Solution (Hub) section
- How It Works (5-step process)
- Case Studies (before/after cards)
- Use Cases (by area and industry)
- Entry Models / Pricing
- FAQ
- Final CTA section
- Footer with legal/contact info

## Common Tasks (SOPs)

### Implemented/Current SOPs
- **Adding new landing page sections** - Build inline in app/page.tsx (current approach until reaching component limit)
- **Updating CTAs** - All buttons use `onClick={() => scrollToSection('section-id')}` for smooth scrolling
- **Content updates** - Map content from TEXTO.txt sections directly to page sections

### Future SOPs to Create
- Installing shadcn/ui components from alternate registries
- Setting up form integration for lead capture
- Configuring analytics tracking
- Deploying to production (Vercel/Netlify)
- SEO optimization and metadata configuration
- Component extraction and modularization strategy

## Content Guidelines

- **Language**: All content is Portuguese (Brazilian Portuguese)
- **Tone**: Accessible, business-focused, anti-technical jargon
- **Key Messages**:
  - "IA acessível" (Accessible AI)
  - "Funcionários digitais 24/7" (24/7 digital employees)
  - "Comece pequeno" (Start small)
- **Placeholders**: Content has [AJUSTAR] markers for company details, metrics, testimonials

## Integration Points

- **MCP Servers**: shadcn MCP configured for component management
- **Forms**: Waitlist form needs email service/CRM integration
- **Analytics**: Conversion tracking to be added
- **SEO**: Metadata and structured data critical for organic discovery

## For New Developers

1. **Read**: [project_architecture.md](system/project_architecture.md) first
2. **Review**: TEXTO.txt for complete content specification
3. **Check**: Design requirements in CLAUDE.md.backup/prompt.txt
4. **Explore**: .claude/ directory for available tools and agents
5. **Initialize**: Set up Next.js project when ready to begin development

## Documentation Maintenance

When updating docs:
- Keep this README.md in sync with all documentation files
- Avoid overlap between files
- Link related docs in "Related docs" sections
- Update SOPs when discovering best practices or common mistakes

---

**Last Updated**: 2025-11-13
**Status**: Active Development - Phase 2 (Sections 1-2 complete, Sections 3-12 pending)
**Latest Changes**: 
- Implemented Header Global section with headline principal
- Implemented Hero section with benefits and CTAs
- Updated all CTA text from "Entrar na lista de espera" → "Entrar em contato"
- Updated documentation to reflect active development status
