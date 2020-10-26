module.exports = {
  eleventyComputed: {
    page_title: function (data) {
      const { pagination } = data;
      if (pagination && pagination.pageNumber > 0) {
        return `Documentation Index - Page ${pagination.pageNumber}`;
      }
      return 'Documentation Index';
    }
  }
};
