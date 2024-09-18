import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FFB30E",
      secondary: "#2780ED",
      warning: "#F17228",
      gray: {
        50: "#FCFCFC",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      white: "#fff",
      black: "#000",
      success: "#79B93C",
    },
    backgroundImage: {
      gradient_1: "linear-gradient(90deg, #FFEABD, #FFDDBA)",
      gradient_2: "linear-gradient(90deg, #FFD077, #FFB30E)",
      gradient_22: "linear-gradient(90deg, #FFE280, #FFAE00)",
      gradient_3: "linear-gradient(90deg, #FF9F00, #FFB800)",
      gradient_4: "linear-gradient(90deg, #FFAE00, #FFCD1E)",
    },
    fontSize: {
      headline_1: "88px",
      headline_2: "68px",
      headline_3: "54px",
      headline_4: "43px",
      headline_5: "35px",
      headline_6: "22px",
      subtitle_1: "18px",
      subtitle_2: "14px",
      body_1: "18px",
      body_2: "14px",
      button: "18px",
      caption: "12px",
      overline_1: "10px",
      overline_2: "14px",
    },
    lineHeight: {
      headline_1: "1",
      headline_2: "1.06",
      headline_3: "1.1",
      headline_4: "1.12",
      headline_5: "1.2",
      headline_6: "1.2",
      subtitle: "1.4",
      body: "1.40",
      button: "1",
      caption: "1.4",
      overline: "1.4",
    },
    fontWeight: {
      regular: "400",
      bold: "700"
    },
  },
  plugins: [],
};
export default config;
