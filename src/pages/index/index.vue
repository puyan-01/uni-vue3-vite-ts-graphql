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
  <div>8888888888888888888</div>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
