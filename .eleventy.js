// Markdown
let markdownIt = require('markdown-it');

module.exports = eleventyConfig => {
  eleventyConfig.addFilter('active_class', (linkUrl, pageUrl) => {
    const linkRegExp = new RegExp('^' + linkUrl, 'i');
    return pageUrl.match(linkRegExp) !== null ? ' is-active' : '';
  });

  eleventyConfig.setLibrary('md', markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }));

  eleventyConfig.addCollection('nav', collection => {
    return collection
      .getAllSorted()
      .filter(page => {
        return page.inputPath.match(/src\/.*\/index\.md/) !== null;
      });
  });

  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('src/img');

  eleventyConfig.addWatchTarget('src/css/**/*.scss');

  return {
    dir: {
      input: './src'
    }
  };
};
