const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
<<<<<<< HEAD
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrymenen/Desktop/dipesh/src/pages/index.js")))
=======
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dipeshwagle/Personal/Freelancing/boltech-up/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dipeshwagle/Personal/Freelancing/boltech-up/src/pages/index.js")))
>>>>>>> 5fe04c6d53fd85ff66686f2568fd973a9d1b84da
}

