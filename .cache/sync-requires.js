const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/.cache/dev-404-page.js"))),
  "component---src-pages-allblogs-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/allblogs.js"))),
  "component---src-pages-claims-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/claims.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/contact.js"))),
  "component---src-pages-faqs-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/FAQS.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/index.js"))),
  "component---src-templates-aux-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/templates/aux.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/templates/blog.js")))
}

