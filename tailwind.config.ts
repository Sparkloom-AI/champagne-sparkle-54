import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        'display-mobile': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-desktop': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-mobile': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-desktop': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-desktop': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg-mobile': ['1rem', { lineHeight: '1.6' }],
        'body-lg-desktop': ['1.125rem', { lineHeight: '1.6' }],
        'lead-mobile': ['1.25rem', { lineHeight: '1.6' }],
        'lead-desktop': ['1.5rem', { lineHeight: '1.6' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // SparkLoom color system
        sl: {
          obsidian: "hsl(var(--sl-obsidian))",
          basalt900: "hsl(var(--sl-basalt-900))",
          slate800: "hsl(var(--sl-slate-800))",
          graphite700: "hsl(var(--sl-graphite-700))",
          iron600: "hsl(var(--sl-iron-600))",
          zinc500: "hsl(var(--sl-zinc-500))",
          ash400: "hsl(var(--sl-ash-400))",
          fog300: "hsl(var(--sl-fog-300))",
          mist200: "hsl(var(--sl-mist-200))",
          pearl100: "hsl(var(--sl-pearl-100))",
          auric500: "hsl(var(--sl-auric-500))",
          auric700: "hsl(var(--sl-auric-700))",
          auric800: "hsl(var(--sl-auric-800))",
          gold500: "hsl(var(--sl-gold-500))",
          magenta500: "hsl(var(--sl-magenta-500))",
          neonPink400: "hsl(var(--sl-neon-pink-400))",
          neonPink500: "hsl(var(--sl-neon-pink-500))",
          neonPink600: "hsl(var(--sl-neon-pink-600))",
        },

        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        text: "hsl(var(--text))",
        "text-muted": "hsl(var(--text-muted))",
        "text-subtle": "hsl(var(--text-subtle))",
        "accent-muted": "hsl(var(--accent-muted))",
        "accent-light": "hsl(var(--accent-light))",
        "accent-neon": "hsl(var(--accent-neon))",
        "accent-neon-light": "hsl(var(--accent-neon-light))",
        "accent-neon-dark": "hsl(var(--accent-neon-dark))",
        "border-accent": "hsl(var(--border-accent))",
        "border-neon": "hsl(var(--border-neon))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-orb': 'var(--gradient-orb)',
        'gradient-neon': 'var(--gradient-neon)',
        'gradient-neon-glow': 'var(--gradient-neon-glow)',
        'gradient-pink-magenta': 'var(--gradient-pink-magenta)',
        'gradient-hero-wash': 'var(--gradient-hero-wash)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
        'neon': 'var(--shadow-neon)',
        'neon-strong': 'var(--shadow-neon-strong)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
