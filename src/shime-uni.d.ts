export {}

declare module 'vue' {
  // eslint-disable-next-line no-undef
  type Hooks = App.AppInstance & Page.PageInstance
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-empty-interface
  interface ComponentCustomOptions extends Hooks {}
}
