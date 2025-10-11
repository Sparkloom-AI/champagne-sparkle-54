# Typography System Documentation

This document defines the typography hierarchy for the SparkloomAI project to ensure consistency across all components.

## Typography Scale

| Category | Desktop Size | Mobile Size | Weight | Line Height | Usage |
|----------|-------------|-------------|---------|-------------|-------|
| **Display** | 3.75rem (60px) | 3rem (48px) | 700 (Bold) | 1.1 | Hero headlines, landing page main titles |
| **H1** | 3rem (48px) | 2.25rem (36px) | 700 (Bold) | 1.2 | Page titles, section heroes |
| **H2** | 2.25rem (36px) | 1.875rem (30px) | 700 (Bold) | 1.2 | Major section headings |
| **H3 (Card Titles)** | 1.5rem (24px) | 1.25rem (20px) | 600 (Semibold) | 1.3 | Card titles, subsection headings |
| **H4** | 1.25rem (20px) | 1.125rem (18px) | 600 (Semibold) | 1.4 | Minor headings |
| **Lead Text** | 1.5rem (24px) | 1.25rem (20px) | 400 (Regular) | 1.6 | Section introductions, featured descriptions |
| **Body Large** | 1.125rem (18px) | 1rem (16px) | 400 (Regular) | 1.6 | Section descriptions |
| **Body** | 1rem (16px) | 0.875rem (14px) | 400 (Regular) | 1.6 | Card descriptions, paragraphs |
| **Body Small** | 0.875rem (14px) | 0.875rem (14px) | 400 (Regular) | 1.5 | Small text, captions |
| **Label/Meta** | 0.75rem (12px) | 0.75rem (12px) | 500 (Medium) | 1.3 | Labels, metadata, tags |
| **Button** | 0.875rem (14px) | 0.875rem (14px) | 500 (Medium) | 1 | Button text |
| **Stat Number** | 2.25rem (36px) | 1.875rem (30px) | 700 (Bold) | 1.2 | Large statistics, metrics |
| **Dialog Title** | 1.875rem (30px) | 1.5rem (24px) | 600 (Semibold) | 1.3 | Dialog/modal titles |

## Responsive Patterns

### Hero Titles
```tsx
<h1 className="text-5xl md:text-6xl font-bold leading-tight">
```

### Section Headings (H2)
```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
```

### Card Titles (H3)
```tsx
<h3 className="text-xl md:text-2xl font-semibold leading-snug">
```

### Section Descriptions
```tsx
<p className="text-lg md:text-xl leading-relaxed">
```

### Card Descriptions
```tsx
<p className="text-sm md:text-base leading-relaxed">
```

### Navigation Links
```tsx
<a className="text-base font-semibold">
```

### Dialog Titles
```tsx
<DialogTitle className="text-2xl md:text-3xl font-semibold leading-tight">
```

### Statistics Numbers
```tsx
<div className="text-3xl md:text-4xl font-bold">
```

## Custom Typography Utilities (Tailwind Config)

The following custom font size utilities are available in `tailwind.config.ts`:

- `text-display-mobile` / `text-display-desktop`
- `text-h1-mobile` / `text-h1-desktop`
- `text-h2-mobile` / `text-h2-desktop`
- `text-h3-mobile` / `text-h3-desktop`
- `text-body-lg-mobile` / `text-body-lg-desktop`
- `text-lead-mobile` / `text-lead-desktop`

## Implementation Guidelines

1. **Always use responsive text sizes** for better mobile experience
2. **Use semantic HTML** (h1, h2, h3, etc.) for proper document structure
3. **Maintain consistent line-height** using `leading-tight`, `leading-snug`, `leading-normal`, or `leading-relaxed`
4. **Apply appropriate font weights** - Bold (700) for headings, Semibold (600) for subheadings, Regular (400) for body
5. **Consider reading comfort** - Body text should use `leading-relaxed` (1.6 line-height)

## Component-Specific Standards

### ServicesSection
- Section H2: `text-3xl md:text-4xl lg:text-5xl`
- Card H3: `text-xl md:text-2xl font-semibold`
- Descriptions: `text-sm md:text-base leading-relaxed`

### ProcessSection
- Section H2: `text-3xl md:text-4xl lg:text-5xl`
- Card H3: `text-xl md:text-2xl font-semibold`
- Descriptions: `text-sm leading-normal`

### ResultsSection
- Section H2: `text-3xl md:text-4xl lg:text-5xl`
- Card H3: `text-xl md:text-2xl font-semibold`
- Descriptions: `text-sm md:text-base leading-relaxed`
- Dialog H3: `text-xl md:text-2xl font-semibold`

### StatisticsSection
- Section H2: `text-3xl md:text-4xl lg:text-5xl`
- Stat Numbers: `text-3xl md:text-4xl`
- Chart Titles: `text-xl md:text-2xl font-semibold`

### Navigation
- Nav Links: `text-base font-semibold`

### ContactSection
- H1: `text-3xl md:text-4xl lg:text-5xl`
- Body: `text-base md:text-lg`

## Color System

Always use semantic color tokens from the design system:
- Primary text: `text-foreground`
- Secondary text: `text-muted-foreground` or `text-text-muted`
- Accent text: `text-accent` or `text-accent-neon`
- Subtle text: `text-text-subtle`

## Accessibility Notes

- Ensure sufficient color contrast (WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text)
- Large text is defined as 18px+ regular or 14px+ bold
- Use proper heading hierarchy (don't skip levels)
- Maintain readable line lengths (50-75 characters optimal)
