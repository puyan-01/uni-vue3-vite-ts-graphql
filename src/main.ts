import { createSSRApp } from 'vue'
import App from './App.vue'

import { apolloClient } from './graphql/gql'

export function createApp() {
  const app = createSSRApp(App)

  app.use(apolloClient)

  return {
    app,
  }
}
