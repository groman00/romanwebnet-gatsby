/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

/*
  getHeadComponents: [Function: getHeadComponents],
  replaceHeadComponents: [Function: replaceHeadComponents],
  getPreBodyComponents: [Function: getPreBodyComponents],
  replacePreBodyComponents: [Function: replacePreBodyComponents],
  getPostBodyComponents: [Function: getPostBodyComponents],
  replacePostBodyComponents: [Function: replacePostBodyComponents],
  pathname: '/404.html',
  pathPrefix: ''
*/
exports.onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  replacePostBodyComponents,
}) => {
  /* Remove added tags */
  const headComponents = getHeadComponents().filter((component) => {
    if (/^gatsby-plugin-manifest-apple-touch-icon/.test(component.key)) {
      return true;
    }
    if (component.key === 'commons.css') {
      return true;
    }
    if (['meta', 'style', 'title', 'link'].indexOf(component.type) > -1) {
      return true;
    }
    return false;
  });

  replaceHeadComponents(headComponents);
  replacePostBodyComponents([]);
};
