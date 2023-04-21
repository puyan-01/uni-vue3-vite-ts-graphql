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
  url: 'https://----------/graphql-api/graphql',
})
