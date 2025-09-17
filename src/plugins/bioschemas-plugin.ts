module.exports = function(context, options) {
  return {
    name: 'bioschemas-plugin',
    injectHtmlTags({ content }) {
      // Check if content exists and has a frontMatter property
      if (content && content.frontMatter && content.frontMatter.bioschemas) {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                type: 'application/ld+json',
              },
              innerHTML: JSON.stringify(content.frontMatter.bioschemas),
            },
          ],
        };
      }
      return {}; // Return an empty object if no Bioschemas data is found
    },
  };
};