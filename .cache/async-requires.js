// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
<<<<<<< HEAD
  "component---src-templates-blog-js": () => import("/Users/harrymenen/Desktop/dipesh/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/harrymenen/Desktop/dipesh/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/harrymenen/Desktop/dipesh/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
=======
  "component---cache-dev-404-page-js": () => import("/Users/dipeshwagle/Personal/Freelancing/boltech-up/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/dipeshwagle/Personal/Freelancing/boltech-up/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
>>>>>>> 5fe04c6d53fd85ff66686f2568fd973a9d1b84da
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/dipeshwagle/Personal/Freelancing/boltech-up/.cache/data.json")

