<script setup lang="ts">
// layout
const DefaultLayout = defineAsyncComponent(() => import('./views/layouts/DefaultLayout.vue'))
const OtherLayout = defineAsyncComponent(() => import('./views/layouts/OtherLayout.vue'))
const currentComponent = ref<'DefaultLayout' | 'OtherLayout'>('DefaultLayout')
const layoutComponent = computed(() =>
  currentComponent.value === 'DefaultLayout' ? DefaultLayout : OtherLayout
)
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
