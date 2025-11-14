# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ProceX AI Landing Page** - A marketing landing page for ProceX, an accessible AI agent platform designed for Brazilian businesses. The landing page presents AI agents as "digital employees" that automate business processes without requiring technical knowledge.

### Content Strategy
The landing page content is fully specified in `TEXTO.txt` (Portuguese). The copy emphasizes:
- Accessibility of AI for non-technical users
- AI agents as "digital employees" working 24/7
- Practical business results (sales, efficiency, cost reduction)
- Low barrier to entry with pilot projects
- Focus on SMBs without technical teams

## Tech Stack

The project is configured to use:
- **shadcn/ui** with default styling (components.json indicates RSC, TypeScript, Tailwind)
- **Tailwind CSS** with slate base color and CSS variables
- **TypeScript** for type safety
- **Lucide** icons
- Path aliases: `@/components`, `@/lib/utils`, `@/ui`, `@/hooks`

Expected framework: **Next.js** (based on shadcn config with `rsc: true` and `app/globals.css` path)

## Design Principles

This project has specific aesthetic requirements defined in `CLAUDE.md.backup/prompt.txt`:

### Critical Design Requirements
- **Avoid generic AI aesthetics** - no Inter/Roboto fonts, no purple gradients on white, no cookie-cutter layouts
- **Typography** - Use distinctive, beautiful fonts that elevate the design
- **Color & Theme** - Commit to cohesive aesthetics with dominant colors and sharp accents
- **Motion** - Use animations for page load reveals and micro-interactions (CSS-first, Motion library for React)
- **Backgrounds** - Create depth with layered gradients, geometric patterns, contextual effects
- **Creative interpretation** - Make unexpected choices that feel genuinely designed for the context

### MCP Integration
The project has shadcn MCP server configured (.mcp.json) for component installation.

## Development Commands

**Note**: This project is in early setup phase. Standard commands when development begins:

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check  # or tsc --noEmit

# Linting
npm run lint
```

### Installing shadcn/ui Components
The MCP server is configured for shadcn component installation. When adding components, use the shadcn registry or MCP server.

Multiple component registries are configured:
- @alpine, @tailark, @magicui, @shadcn-form, @animateui, @fancycomponents, @plateui, @animate-ui

## Project Structure

Expected structure (not yet created):
```
app/                    # Next.js app directory
  ├── globals.css      # Tailwind base styles
  └── page.tsx         # Landing page
components/            # React components
  └── ui/             # shadcn/ui components
lib/                   # Utilities
  └── utils.ts        # cn() and other helpers
hooks/                # Custom React hooks
public/               # Static assets (HERO.png should move here)
```

## Claude Code Configuration

This repository has extensive Claude Code customization:

### Custom Commands (.claude/commands/)
- `/ui-design` - Specialized frontend design workflow
- `/update-doc` - Documentation update workflow

### Specialized Agents (.claude/agents/)
- `mobile-developer` - Cross-platform mobile development
- `typescript-pro` - Advanced TypeScript patterns
- `ui-ux-designer` - User-centered design and interface systems

### Skills (.claude/skills/)
- `artifacts-builder` - Multi-component HTML artifacts with React/Tailwind/shadcn
- `frontend-design` - Production-grade frontend interfaces with high design quality

### Scripts (.claude/scripts/)
- `context-monitor.py` - Token usage monitoring

## Content Implementation Notes

When implementing the landing page from TEXTO.txt:

1. **Sections**: The content defines 12 major sections from Header through Footer
2. **CTAs**: Multiple calls-to-action focused on "Entrar na lista de espera" (waitlist)
3. **Social Proof**: Includes specific metrics (+32% sales, 15min→1min response time)
4. **Use Cases**: Organized by business area (Sales, Support, Finance, Operations) and business type (Clinics, Retail, Services, B2B)
5. **Placeholders**: Content includes [AJUSTAR] markers for client-specific information

### Key Messaging
- "IA acessível" (accessible AI) - no technical knowledge required
- "Funcionários digitais 24/7" (24/7 digital employees)
- "Comece pequeno" (start small) - pilot projects before full automation
- Business outcomes over technology features

## Notes for Future Development

- This is a pre-development repository - no source files exist yet
- The HERO.png image should be moved to public/ directory when project is initialized
- TEXTO.txt contains complete Portuguese copy for all page sections
- Design must avoid generic "AI slop" aesthetics per the project's design principles
- Target audience is Brazilian SMBs without technical teams
