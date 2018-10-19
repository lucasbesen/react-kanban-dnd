export const imports = {
  'docs/ReactKanban.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-react-kanban" */ 'docs/ReactKanban.mdx'),
}
