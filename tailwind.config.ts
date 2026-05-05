import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        navyLight: "#1E3A5F",
        navyDeep: "#061428",
        sky: "#4A90C2",
        skyLight: "#D6E7F2",
        coral: "#E85A4F",
        coralLight: "#FBE1DD",
        gold: "#F2A65A",
        ink: "#1A1A1A",
        ink2: "#3D3D3D",
        muted: "#6B7280",
        line: "#D1D5DB",
        bg: "#FFFFFF",
        bgAlt: "#F7F9FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
