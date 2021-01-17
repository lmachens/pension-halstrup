module.exports = {
  plugins: [
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          "html",
          "active",
          "carousel-item-prev",
          "carousel-item-next",
          "carousel-item-start",
          "carousel-item-end",
        ],
      },
    ],
  ],
};
