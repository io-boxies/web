<template>
  <n-layout>
    <n-layout-header><ToolbarBasic /></n-layout-header>
    <n-layout-content content-style="padding: 12px;"> <slot /> </n-layout-content>
    <n-layout-footer>footer</n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
const ToolbarBasic = defineAsyncComponent(() => import('./ToolbarBasic.vue'))
</script>
