# uni-vue3-vite-ts-graphql
uniapp + Vue3 + graphql 模板代码 实测可用  Villus
使用了 https://villus.logaretm.com/ 
# 
> 也可以单独安装 villus 
> 环境要求在 node >= 14


```npm
npm i graphql villus
```
# src路径下添加  `graphql\gql.ts` 文件
```ts
import { getToken } from '@/utils/cookie'
import { createClient, fetch } from 'villus'

type Methods =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'

// 此处重写fetch，请求采用UniAPP提供的uni.request
const fetchPlugin = fetch({
  fetch(url, options) {
    const token = getToken()

    return new Promise((resolve, reject) => {
      uni.request({
        url: url.toString(),
        method: options?.method as Methods,
        data: options?.body as any,
        header: {
          ...options?.headers,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // 响应拦截器
        success(res) {
          console.log(`res.data ====>`, res.data)

          return resolve({
            ok: true,
            status: res.statusCode,
            headers: res.header,
            text: async () => JSON.stringify(res.data),
            json: async () => res.data,
          } as Response)
        },
        fail(e) {
          console.log(`e ====>`, e)

          return reject(e)
        },
      })
    })
  },
})

export const apolloClient = createClient({
  use: [fetchPlugin],
  url: 'https://----------/graphql-api/graphql', // 基地址
})

```

# main.ts 文件下 导入graphql
```ts
import { apolloClient } from './graphql/gql'

export function createApp() {
  const app = createSSRApp(App)

  app.use(apolloClient)

  return {
    app,
  }
}
```

# 使用 graphql

```ts

import { useQuery } from 'villus'

const textApi = () => {
  return useQuery({
    query: `query TheQuery($skip: Int, $take: Int, $name: String) {
       data: m_list_electricBox(
         skip: $skip 
         take: $take 
         where: { 
          name: {
            contains: $name
          }
        }){ 
            items { 
              id 
              name
            } 
            totalCount 
          }}`,
  })
}

export { textApi }

```
# 页面使用
```vue
<script lang="ts" setup name="index">
import { textApi } from '@/graphql/api/text'

const { data, onData, error, isFetching } = textApi()

onData((data) => {
  console.log('data', data)
})
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">oh no ...{{ error }}</div>
  <div v-else>
    {{ data }}
  </div>
</template>

```


