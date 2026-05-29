import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flora: {
          // Core greens
          leaf: "#4F8F46",
          leafLight: "#79B866",
          leafDark: "#2F6B37",

          // Premium deep tones
          forest: "#273b26",
          pine: "#0D2418",
          deep: "#07140D",
          night: "#030805",

          // Soft natural backgrounds
          ivory: "#F7F3EA",
          cream: "#EFE5D3",
          creamDark: "#DED0B9",
          linen: "#FAF7EF",

          // Organic muted greens
          sage: "#A8B89A",
          moss: "#6F805F",
          olive: "#7A8052",

          // Luxury accents
          champagne: "#C8AD7F",
          gold: "#BFA46A",
          bronze: "#94733F",

          // Text / borders
          charcoal: "#1E241F",
          muted: "#7D8678",
          border: "#D8CBB7",
        },

        admin: {
          sidebar: "#07140D",
          sidebarHover: "#123321",
          sidebarActive: "#C8AD7F",
          content: "#F7F3EA",
          card: "#FFFFFF",
          border: "#D8CBB7",
        },

        status: {
          active: "#22C55E",
          inactive: "#EF4444",
          warning: "#F59E0B",
          info: "#3B82F6",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        soft: "0 20px 60px rgba(18, 51, 33, 0.12)",
        premium: "0 30px 90px rgba(7, 20, 13, 0.22)",
        card: "0 12px 40px rgba(30, 36, 31, 0.08)",
        cardHover: "0 24px 70px rgba(30, 36, 31, 0.14)",
        glow: "0 18px 50px rgba(79, 143, 70, 0.22)",
        gold: "0 14px 40px rgba(200, 173, 127, 0.28)",
        admin: "0 1px 4px rgba(0, 0, 0, 0.10)",
      },

      borderRadius: {
        organic: "3rem",
        premium: "2rem",
        soft: "1.5rem",
      },

      letterSpacing: {
        luxury: "0.22em",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        fadeIn: "fadeIn 0.7s ease forwards",
        slowZoom: "slowZoom 12s ease-in-out infinite alternate",
        floatSoft: "floatSoft 5s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
