export const imports = {
  'packages/@nimbus/button/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-button-button" */ 'packages/@nimbus/button/button.mdx'),
  'packages/@nimbus/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-styles-readme" */ 'packages/@nimbus/styles/readme.mdx'),
  'packages/@nimbus/button/node_modules/@nimbus/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbus-button-node-modules-nimbus-styles-readme" */ 'packages/@nimbus/button/node_modules/@nimbus/styles/readme.mdx'),
}
