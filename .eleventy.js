// Markdown
let markdownIt = require('markdown-it');

module.exports = eleventyConfig => {
  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }));

  eleventyConfig.addPassthroughCopy('_redirects');

  return {
    dir: {
      input: './src'
    }
  };
};
