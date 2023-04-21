const TokenKey = 'Abp-Token'
const TenantIdKey = 'Abp-TenantId'

export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}
export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function getTenantId() {
  return uni.getStorageSync(TenantIdKey)
}

export function setTenantId(tenantId) {
  return uni.setStorageSync(TenantIdKey, tenantId)
}

export function removeTenantId() {
  return uni.removeStorageSync(TenantIdKey)
}
