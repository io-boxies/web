<template>
  <n-popover trigger="click" :show-arrow="false" raw>
    <template #trigger>
      <n-button quaternary circle>
        <template #icon>
          <n-icon><AppsOutline /></n-icon>
        </template>
      </n-button>
    </template>
    <n-card content-style="width: 20vw; padding: 0">
      <n-menu :indent="18" :options="menuOptions" />
    </n-card>
  </n-popover>
</template>

<script setup lang="ts">
import { NSpace, type MenuOption } from 'naive-ui'
import { LogOutOutline as HomeIcon, AppsOutline } from '@vicons/ionicons5'
import { UserAstronaut } from '@vicons/fa'
import { RouterLink } from 'vue-router'
import type { VNodeChild } from 'vue'

const renderIcon = (icon: Component) => () =>
  h(
    NIcon,
    {
      size: 28
    },
    { default: () => h(icon) }
  )
const renderMenu = (routeName: string, icon: Component, label: VNodeChild) => ({
  label: () => h(RouterLink, { to: { name: routeName } }, { default: () => label }),
  key: routeName,
  icon: renderIcon(icon)
})
const twoLineText = (one: string, two: string) =>
  h(
    NSpace,
    {
      vertical: true,
      size: 'small',
      itemStyle: 'gap: 0',
      style: 'gap: 0'
    },
    {
      default: () => [
        h(NText, {}, { default: () => one }),
        h(NText, { depth: 3 }, { default: () => two })
      ]
    }
  )
const menuOptions: MenuOption[] = [
  renderMenu('home', UserAstronaut, twoLineText('Anony mouse', 'for anonymous')),
  renderMenu('shopHome', HomeIcon, 'Shop home')
]
</script>
