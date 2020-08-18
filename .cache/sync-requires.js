const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/index.js")))
}

