module.exports = function( eleventyConfig ) {

  // Liquid options.
  let liquidJs = require( "liquidjs" );
  let options = {
    extname:         ".html",
    dynamicPartials: true
  };
  eleventyConfig.setLibrary( "liquid", liquidJs( options ) );

  // Eleventy options.
  return {
    dir: {
      output:   "build",
      includes: "_includes",
      layouts:  "_layouts"
    }
  };
};
