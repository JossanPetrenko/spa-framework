export const imports = {
  'packages/@nimbus/button/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-button-button" */ 'packages/@nimbus/button/button.mdx'),
  'packages/@nimbus/entry/entry.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-entry-entry" */ 'packages/@nimbus/entry/entry.mdx'),
  'packages/@nimbus/entry/label.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-entry-label" */ 'packages/@nimbus/entry/label.mdx'),
  'packages/@nimbus/i18n/i18n.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-i18n-i18n" */ 'packages/@nimbus/i18n/i18n.mdx'),
  'packages/@nimbus/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-styles-readme" */ 'packages/@nimbus/styles/readme.mdx'),
}
