import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";

export default ({ env }) => ({
  plugins: [
    autoprefixer(),
    env === "production"
      ? cssnano({
          preset: "default",
        })
      : null,
    env === "production"
    ? purgecss({
        content: [
          "./resources/views/**/*.blade.php", // Сканируем Blade-шаблоны
          "./resources/js/**/*.js", // JavaScript файлы
          "./resources/ts/**/*.ts", // TypeScript файлы (если есть папка ts)
          "./resources/**/*.vue", // Поддержка Vue, если используется
        ],
        safelist: {
          standard: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)hover):/],
        },
      })
    : null,
  ],
});
