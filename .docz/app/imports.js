export const imports = {
  'packages/@nimbus/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-styles-readme" */ 'packages/@nimbus/styles/readme.mdx'),
  'packages/@nimbus/button/docs/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-button-docs-button" */ 'packages/@nimbus/button/docs/button.mdx'),
  'packages/@nimbus/entry/docs/entry.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-entry-docs-entry" */ 'packages/@nimbus/entry/docs/entry.mdx'),
  'packages/@nimbus/entry/docs/label.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-entry-docs-label" */ 'packages/@nimbus/entry/docs/label.mdx'),
  'packages/@nimbus/i18n/docs/i18n.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-i18n-docs-i18n" */ 'packages/@nimbus/i18n/docs/i18n.mdx'),
  'packages/@nimbus/layout/docs/sidemenu.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-layout-docs-sidemenu" */ 'packages/@nimbus/layout/docs/sidemenu.mdx'),
}
