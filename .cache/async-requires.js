// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-allblogs-js": () => import("./../../../src/pages/allblogs.js" /* webpackChunkName: "component---src-pages-allblogs-js" */),
  "component---src-pages-claims-js": () => import("./../../../src/pages/claims.js" /* webpackChunkName: "component---src-pages-claims-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-faqs-js": () => import("./../../../src/pages/FAQS.js" /* webpackChunkName: "component---src-pages-faqs-js" */),
  "component---src-pages-features-js": () => import("./../../../src/pages/features.js" /* webpackChunkName: "component---src-pages-features-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-aux-js": () => import("./../../../src/templates/aux.js" /* webpackChunkName: "component---src-templates-aux-js" */),
  "component---src-templates-blog-js": () => import("./../../../src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */)
}

