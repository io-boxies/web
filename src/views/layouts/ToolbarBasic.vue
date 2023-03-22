<template>
  <n-space justify="space-between" align="center" style="padding-left: 8px; padding-right: 8px">
    <n-space justify="space-around" align="center">
      <n-text strong>Iobox</n-text>
      <NaviMenu />
    </n-space>
    <n-avatar src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
  </n-space>
</template>

<script setup lang="ts">
const NaviMenu = defineAsyncComponent(() => import('./NaviMenu.vue'))
</script>
