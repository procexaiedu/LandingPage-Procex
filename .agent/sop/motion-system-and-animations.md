# SOP: Motion System & Advanced Animations

**Last Updated**: November 13, 2025  
**Author**: Claude (UI/UX Design)  
**Version**: 1.0  
**Status**: Active

---

## Overview

Este SOP documenta o **sistema de motion centralizado** da ProceX Landing Page, criado para garantir animações sofisticadas, consistentes e orientadas à performance. O sistema é implementado via CSS custom properties e Tailwind utilities, evitando JavaScript sempre que possível.

---

## Motion System Foundation

### Animation Timing Tokens

Definidos em `app/globals.css` como CSS custom properties:

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-instant` | 100ms | Feedback imediato (hover, click) |
| `--duration-fast` | 200ms | Transições rápidas de UI |
| `--duration-normal` | 350ms | Animações padrão de entrada/saída |
| `--duration-slow` | 500ms | Scroll reveals e transições principais |
| `--duration-slower` | 700ms | Efeitos cinematográficos lentos |

### Easing Functions

| Nome | Bezier | Características | Uso |
|------|--------|-----------------|-----|
| `--ease-smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` | Bounce suave, entrada elástica | Reveals com "pulo" elegante |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot pronunciado | CTAs e elementos especiais |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Movimento profissional | Animações corporativas |
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Saída suave e natural | Fade-ins e slide-ins |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | Suave em ambas direções | Transições de estado |

---

## Keyframe Animations

Definidas em `tailwind.config.ts` com variações otimizadas:

### Core Reveals

#### `fade-in`
```css
from { opacity: 0; }
to { opacity: 1; }
```
- **Duration**: 500ms (var(--duration-normal))
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Uso**: Elementos que entram suavemente

#### `fade-up`
```css
from { opacity: 0; transform: translateY(24px); }
to { opacity: 1; transform: translateY(0); }
```
- **Duration**: 600ms (var(--duration-slow))
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)
- **Uso**: Scroll reveals de conteúdo principal

#### `slide-in-left` / `slide-in-right`
```css
from { opacity: 0; transform: translateX(±24px); }
to { opacity: 1; transform: translateX(0); }
```
- **Duration**: 500ms
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Uso**: Seções assimétrico, conteúdo lateral

#### `scale-in`
```css
from { opacity: 0; transform: scale(0.92); }
to { opacity: 1; transform: scale(1); }
```
- **Duration**: 600ms
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)
- **Uso**: Cards, modais, elementos que "nascem"

### Looping Effects

#### `glow-pulse`
```css
0%, 100% { boxShadow: 0 0 20px hsla(174, 75%, 44%, 0.2); }
50% { boxShadow: 0 0 40px hsla(174, 75%, 44%, 0.35); }
```
- **Duration**: 3s infinite
- **Easing**: ease-in-out
- **Uso**: CTAs especiais, badges de destaque

#### `float`
```css
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-12px); }
```
- **Duration**: 6s infinite
- **Easing**: ease-in-out
- **Uso**: Elementos flutuantes (imagens hero, decorativos)

#### `shimmer`
```css
0% { backgroundPosition: -1000px 0; }
100% { backgroundPosition: 1000px 0; }
```
- **Duration**: 2s infinite
- **Uso**: Skeleton loaders, loading states

---

## Utility Classes (Scroll Reveals)

Implementadas em `@layer utilities` para reutilização simplificada:

### Base Reveal Classes

Use com `stagger-item` para efeitos em cascata:

```html
<!-- Fade suave -->
<div class="reveal-fade stagger-item">...</div>

<!-- Entrada de baixo para cima -->
<div class="reveal-up stagger-item">...</div>

<!-- Entrada lateral esquerda -->
<div class="reveal-left stagger-item">...</div>

<!-- Entrada lateral direita -->
<div class="reveal-right stagger-item">...</div>

<!-- Entrada com scale -->
<div class="reveal-scale stagger-item">...</div>
```

### Stagger Timing

Aplicado automaticamente via `:nth-child()`:

```
1º item: 0ms
2º item: 75ms
3º item: 150ms
4º item: 225ms
5º item: 300ms
6º+ items: 225ms * (n - 5)
```

### Transform Utilities

```html
<!-- Lift ao hover com sombra elevada -->
<div class="hover-lift">...</div>

<!-- Glow ao hover -->
<div class="hover-glow">...</div>
```

---

## Advanced Effects

### Hover 3D Transform

Implementado diretamente em componentes:

```jsx
// Card com hover 3D suave
<div className="
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-lifted
  hover:scale-105
">
  Card Content
</div>
```

### Gradient Animations

Classe utility para text gradients dinâmicos:

```html
<!-- Gradiente primário → secundário -->
<h1 class="text-gradient">Título</h1>

<!-- Gradiente com accent -->
<h2 class="text-gradient-accent">Destaque</h2>

<!-- Gradiente multi-cor diagonal -->
<h3 class="text-gradient-dynamic">Super destaque</h3>
```

### Glow & Shadow System

| Classe | Shadow | Uso |
|--------|--------|-----|
| `shadow-soft` | Soft elevation | Elementos base |
| `shadow-float` | Float effect | Cards ao hover |
| `shadow-lifted` | Elevado | Modais, CTAs |
| `shadow-accent` | Glow colorido | CTAs principais |
| `shadow-glow` | Ambient glow | Elementos destacados |

---

## Button Microinteractions

### Primary Button (`btn-primary`)

```html
<button class="btn-primary">
  Entrar em contato
  <ArrowRight class="w-5 h-5" />
</button>
```

**Microinterações**:
- **Hover**: Sobe `-translate-y-1` (4px), sombra intensifica
- **Shine effect**: Radial gradient de luz atravessa o botão
- **Active**: Desce `translateY(2px)` para feedback tátil
- **Duração**: 300ms com easing smooth

### Secondary Button (`btn-secondary`)

**Microinterações**:
- **Hover**: Background fades in (opacity 0 → 1)
- **Border**: Muda de `-400` para `-500` (mais escuro)
- **Duração**: 300ms com easing out

---

## Implementation Patterns

### Pattern 1: Scroll Reveal em Grid

```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item, i) => (
    <div
      key={i}
      className="reveal-up stagger-item"
      style={{ animationDelay: `${i * 75}ms` }}
    >
      {item.content}
    </div>
  ))}
</div>
```

### Pattern 2: Animação Sequencial em Cascata

```jsx
<div className="space-y-8">
  <h2 className="animate-fade-up">Título</h2>
  <p className="animate-fade-up animate-delay-100">Parágrafo 1</p>
  <p className="animate-fade-up animate-delay-200">Parágrafo 2</p>
  <p className="animate-fade-up animate-delay-300">Parágrafo 3</p>
</div>
```

### Pattern 3: Hover Effects em Cards

```jsx
<div className="
  bg-white rounded-xl p-6
  shadow-soft
  transition-all duration-300
  hover:shadow-float
  hover:-translate-y-1
  group
">
  <Icon className="
    w-6 h-6
    transition-transform duration-300
    group-hover:scale-110
  " />
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Pattern 4: Timeline / Stepped Reveal

```jsx
{steps.map((step, i) => (
  <div
    key={i}
    className={cn(
      'reveal-up stagger-item',
      index >= i && 'opacity-100', // Highlight active steps
    )}
  >
    <span className="text-primary-600 font-bold">{i + 1}</span>
    <p>{step.text}</p>
  </div>
))}
```

---

## Performance Considerations

### CSS-First Approach

✅ **Animações em CSS**:
- `transform` (translateX, translateY, scale)
- `opacity`
- `box-shadow` (com cuidado)

❌ **Evitar**:
- `width`, `height`, `left`, `top` (causam reflow)
- `position` changes
- Múltiplas animações simultâneas

### will-change

Para elementos com animações contínuas:

```css
.floating-element {
  will-change: transform;
  animation: float 6s ease-in-out infinite;
}
```

### Reduced Motion Compliance

Já implementado em `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Testes**:
- macOS: System Preferences → Accessibility → Display → Reduce motion
- Windows: Settings → Ease of Access → Display → Show animations

---

## Accessibility & Color

### Focus States

```css
*:focus-visible {
  outline: none;
  ring: 2px ring-primary;
  ring-offset: 2px;
  border-radius: 4px;
}
```

### Contrast & Readability

- Text gradient: Sempre com contraste ≥ 4.5:1
- Shadow colors: Baseadas na paleta primária (teal), não neutras
- Backgrounds: Claros o suficiente para leitura confortável

---

## Testing Checklist

- [ ] Animações fluem em 60fps (DevTools → Performance)
- [ ] Sem layout shifts (use Lighthouse)
- [ ] Todos os CTAs têm feedback visual (hover, active, focus)
- [ ] Redução de movimento respeitada
- [ ] Mobile: Animações simplificadas (sem parallax complexo)
- [ ] Hover effects desativados em touch devices (use `@media (hover: hover)`)
- [ ] Keyboard navigation funciona perfeitamente

---

## Extending the System

### Adding New Keyframe

1. Define em `tailwind.config.ts` → `theme.extend.keyframes`:

```typescript
'my-animation': {
  '0%': { /* ... */ },
  '100%': { /* ... */ },
}
```

2. Criar animation correspondente:

```typescript
animation: {
  'my-animation': 'my-animation 0.6s cubic-bezier(...)',
}
```

3. Usar em componentes:

```html
<div class="animate-my-animation">...</div>
```

### Adding New Easing Function

1. Define em `app/globals.css` → `:root`:

```css
--ease-custom: cubic-bezier(0.?, 0.?, 0.?, 0.?);
```

2. Usar em CSS customizado:

```css
.my-element {
  transition: all 0.3s var(--ease-custom);
}
```

---

## Troubleshooting

### Animação muito rápida/lenta
- Ajustar `--duration-*` em `:root`
- Verificar `animation-delay` em componentes

### Elements "flickering" ao animar
- Adicionar `will-change: transform`
- Usar `transform: translate3d()` (GPU acceleration)

### Animação não ativa ao scroll
- Verificar se elemento tem `opacity: 0` inicial
- Confirmar `animation-fill-mode: forwards`
- Testar em DevTools → Elements → Animations

### Performance ruim em mobile
- Reduzir número de elementos animados
- Usar `scale` em vez de `width`/`height`
- Desativar parallax em telas pequenas

---

## References

- [Tailwind CSS Animations](https://tailwindcss.com/docs/animation)
- [CSS Motion Path Spec](https://www.w3.org/TR/motion-1/)
- [Cubic Bezier Easing](https://cubic-bezier.com)
- [Web Animation Performance](https://web.dev/animations-guide/)

---

**Next Review**: December 13, 2025



