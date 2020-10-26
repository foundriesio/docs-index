const htmlMinifier = require('html-minifier');
const nunjucks = require('nunjucks');

function releaseDate(date) {
  const dateFormat = new Intl.DateTimeFormat(['en-US'], {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return dateFormat.format(new Date(date));
}

function dateISOString(date) {
  return (new Date(date)).toISOString();
}

module.exports = function (config) {
  config.setDataDeepMerge(true);
  config.addLayoutAlias('docs', 'layouts/docs.njk');

  const nunjucksLib = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('./src/site/_includes', {
      watch: process.env.ELEVENTY_ENV === 'production' ? false : true,
    })
  );
  config.setLibrary('njk', nunjucksLib);

  config.addFilter('releaseDate', releaseDate);
  config.addFilter('dateISOString', dateISOString);

  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return htmlMinifier.minify(content, {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  config.addPassthroughCopy('src/site/media');

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: '_data/',
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
