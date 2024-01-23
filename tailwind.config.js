/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          100: "#444a58",
          200: "#2e3f53",
        },
        gray: {
          100: "#fffdff",
          200: "#1d2530",
          300: "#182733",
          400: "#0b1319",
          500: "#100e11",
          600: "#050505",
        },
        darkslateblue: "#5f294a",
        tan: "#bfab86",
        seagreen: "#538f49",
        burlywood: "#d6ae68",
        sienna: "#986535",
        brown: "#9c012a",
        deepskyblue: "#04cef8",
        palevioletred: "#c46a84",
        dimgray: "#565658",
        ghostwhite: "#f5f4f9",
        snow: "#fef9fa",
        darkgray: "#9799a6",
        gainsboro: {
          100: "#e6e6e6",
          200: "#dbdbe0",
        },
        indianred: {
          100: "#ed5f78",
          200: "#d4455e",
        },
        silver: "#b8b9bd",
        lavenderblush: "#faeff1",
        lightslategray: "#838591",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      rubik: "Rubik",
      poppins: "Poppins",
    },
    borderRadius: {
      "6xs-7": "6.7px",
      "3xs": "10px",
      mini: "15px",
      "11xl": "30px",
    },
  },
  fontSize: {
    "4xs-1": "8.1px",
    "smi-1": "12.1px",
    xl: "20px",
    base: "16px",
    "24xl": "43px",
    "7xl": "26px",
    "15xl": "34px",
    sm: "14px",
    "3xs": "10px",
    lg: "18px",
    "5xl": "24px",
    lgi: "19px",
    inherit: "inherit",
  },
  screens: {
    mq1225: {
      raw: "screen and (max-width: 1225px)",
    },
    mq1050: {
      raw: "screen and (max-width: 1050px)",
    },
    mq750: {
      raw: "screen and (max-width: 750px)",
    },
    mq450: {
      raw: "screen and (max-width: 450px)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
