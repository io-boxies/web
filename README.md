# web

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.\

## Refs

- [vue](https://vuejs.org/guide/quick-start.html "vue")
- [vuetify](https://vuetifyjs.com/en/components/bottom-navigation/)
- [vitest](https://vitest.dev/api/#rejects)
- [vite test](https://vitest.dev/guide/#configuring-vitest)
- [https://github.com/antfu/unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [vue use](https://vueuse.org/core/usetitle/)
- [vue use starter](https://github.com/vueuse/vueuse-vite-starter/blob/main/src/App.vue)
- [vite](https://vitejs-kr.github.io/guide/env-and-mode.html)
- 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


# Process

### Order

1. collect OrderCollect, CollectItem
2. create Order from CollectItem's
3. progress order process
4. pickup to ShopUser(IoStorage or Locate)

### Shipment

1. make Shipment OrderCollect or ShopProduct
2. check stock count
3. progress shipment process
