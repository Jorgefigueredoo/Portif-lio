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

        /* Paleta — os valores mudam com o tema (ver globals.css) */
        neon: {
          green: "rgb(var(--neon-green) / <alpha-value>)",
          emerald: "rgb(var(--neon-emerald) / <alpha-value>)",
          lime: "rgb(var(--neon-lime) / <alpha-value>)",
          red: "rgb(var(--neon-red) / <alpha-value>)",
          crimson: "rgb(var(--neon-crimson) / <alpha-value>)",
          steel: "rgb(var(--neon-steel) / <alpha-value>)",
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
        /* Verde = ação principal; vermelho = ênfase */
        "grad-hot": "linear-gradient(135deg, rgb(var(--neon-green)) 0%, rgb(var(--neon-emerald)) 100%)",
        "grad-cool": "linear-gradient(135deg, rgb(var(--neon-lime)) 0%, rgb(var(--neon-green)) 100%)",
        "grad-red": "linear-gradient(135deg, rgb(var(--neon-red)) 0%, rgb(var(--neon-crimson)) 100%)",
        "grad-violet": "linear-gradient(135deg, rgb(var(--neon-red)) 0%, rgb(var(--neon-crimson)) 100%)",
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
