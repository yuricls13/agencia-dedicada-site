import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#EEEDF9",
          100: "#D4D2F0",
          300: "#7D78D3",
          400: "#524BC4",
          500: "#2A2490",
          600: "#1A1565",
          700: "#0D0B50",
          800: "#080638",
          900: "#040320",
        },
        cta: {
          400: "#FF8A50",
          500: "#FF6535",
          600: "#E84E1B",
        },
        electric: {
          500: "#3557FF",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          700: "#334155",
          900: "#0F172A",
        },
        success: "#10B981",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
