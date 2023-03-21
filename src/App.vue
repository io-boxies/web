<script setup lang="ts">
import { koKR, dateKoKR } from 'naive-ui'
// layout
const DefaultLayout = defineAsyncComponent(() => import('./views/layouts/DefaultLayout.vue'))
const OtherLayout = defineAsyncComponent(() => import('./views/layouts/OtherLayout.vue'))
const currentComponent = ref<'DefaultLayout' | 'OtherLayout'>('DefaultLayout')
const layoutComponent = computed(() =>
  currentComponent.value === 'DefaultLayout' ? DefaultLayout : OtherLayout
)
</script>

<template>
  <n-config-provider :locale="koKR" :date-locale="dateKoKR">
    <component :is="layoutComponent">
      <RouterView />
    </component>
  </n-config-provider>
</template>
