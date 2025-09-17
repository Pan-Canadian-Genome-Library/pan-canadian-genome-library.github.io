module.exports = function(context, options) {
  return {
    name: 'bioschemas-plugin',
    injectHtmlTags({content}) {
      const {frontMatter} = content;
      if (frontMatter.bioschemas) {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                type: 'application/ld+json',
              },
              innerHTML: JSON.stringify(frontMatter.bioschemas),
            },
          ],
        };
      }
      return {};
    },
  };
};