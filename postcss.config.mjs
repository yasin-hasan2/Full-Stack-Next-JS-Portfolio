/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

module.exports = {
  darkMode: "class", // Ensures Tailwind handles dark mode correctly
};

export default config;
