/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-green": "var(--primary-green)",
        "primary-red": "var(--primary-red)",
        "primary-blue": "var(--primary-blue)",

        "secondary-blue": "var(--secondary-blue)",
        "background-blue": "var(--background-blue)",
        "white-blue": "var(--white-blue)",

        "gray-white": "var(--gray-white)",
        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",
      },

      fontFamily: {
        "pro-display": ["Pro Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        xs: [".75rem", ".75rem"],
        sm: [".875rem", ".875rem"],
        lg: ["1.125rem", "1.125rem"],
        "2xl": ["1.5rem", "1.5rem"],
        "4xl": ["2.25rem", "2.25rem"],
      },

      container: {
        center: true,
        padding: "1rem", // Optional: Customize the padding
      },
      screens: {
        lg: "992px", // Define the custom breakpoint
        xl: "1292px", // Define the custom breakpoint
        "2xl": "1408px", // Define the custom breakpoint
      },
      maxWidth: {
        lg: "992px", // Define the custom breakpoint
        xl: "1292px", // Customize the container max-width for the xl breakpoint
        "2xl": "1408px", // Customize the container max-width for the 2xl breakpoint
      },
    },
  },
  plugins: [],
};
