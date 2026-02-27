import dotenv from "dotenv";

dotenv.config();

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("slugToPermalink", (slug) => {
    if (!slug) {
      return "/";
    }
    return `/${slug}/`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
