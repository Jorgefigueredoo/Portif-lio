import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Tokens do portfólio */
        page: "rgb(var(--bg) / <alpha-value>)",
        "page-2": "rgb(var(--bg-2) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        "panel-2": "rgb(var(--panel-2) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        ink: "rgb(var(--txt) / <alpha-value>)",
        "ink-soft": "rgb(var(--txt-soft) / <alpha-value>)",
        "ink-dim": "rgb(var(--txt-dim) / <alpha-value>)",

        /* Rampa de tons — os valores mudam com o tema (ver globals.css).
           Dois tons de acento e quatro de grafite. */
        tone: {
          accent: "rgb(var(--tone-accent) / <alpha-value>)",
          "accent-soft": "rgb(var(--tone-accent-soft) / <alpha-value>)",
          slate: "rgb(var(--tone-slate) / <alpha-value>)",
          graphite: "rgb(var(--tone-graphite) / <alpha-value>)",
          "graphite-deep": "rgb(var(--tone-graphite-deep) / <alpha-value>)",
          "graphite-soft": "rgb(var(--tone-graphite-soft) / <alpha-value>)",
        },

        /* Tokens shadcn/ui */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        /* Um único gradiente de acento, em duas direções. Os antigos
           `grad-red` e `grad-violet` saíram: apontavam ambos para vermelho
           e eram resto de uma paleta que não existe mais. */
        "grad-accent": "linear-gradient(135deg, rgb(var(--tone-accent)) 0%, rgb(var(--tone-accent-soft)) 100%)",
        "grad-accent-rev": "linear-gradient(135deg, rgb(var(--tone-accent-soft)) 0%, rgb(var(--tone-accent)) 100%)",
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
        drift: {
          from: { transform: "translate3d(0, 0, 0) scale(1)" },
          to: { transform: "translate3d(6vw, 8vh, 0) scale(1.25)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scroll-x": {
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        drift: "drift 24s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate",
        bob: "bob 6s ease-in-out infinite",
        "scroll-x": "scroll-x 34s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        shimmer: "shimmer 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
