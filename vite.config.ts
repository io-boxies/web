import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const AI_PLUGIN = AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/ // .vue
    // /\.md$/ // .md
  ],

  // global imports to register
  imports: [
    // presets
    'vue',
    'vue-router',
    {
      // '[package-name]': [
      //   '[import-names]',
      //   // alias
      //   ['[from]', '[alias]']
      // ]
      '@firebase/firestore': ['doc', 'updateDoc', 'getDoc', 'setDoc', 'getDocs', 'onSnapshot'],
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      vitest: ['describe', 'test', 'expect'],
      'naive-ui': ['NIcon', 'NButton', 'NText'],
      axios: [
        // default imports
        ['default', 'axios'] // import { default as axios } from 'axios',
      ],
      '@faker-js/faker': [['faker', 'fk']]
    }
    // example type import
    // {
    //   from: 'vue-router',
    //   imports: ['RouteLocationRaw'],
    //   type: true
    // }
  ],
  // by default it only scan one level of modules under the directory
  dirs: [
    './src/composables/**', // all nested modules
    './src/utils/**',
    './src/components/**'
    // ...
  ],

  // Filepath to generate corresponding .d.ts file.
  // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
  dts: './src/auto-imports.d.ts',
  // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
  vueTemplate: true,

  // Custom resolvers, compatible with `unplugin-vue-components`
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [NaiveUiResolver()]
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  // When using TypeScript, we recommend to disable no-undef rule directly as TypeScript already check for them and you don't need to worry about this.
  // eslintrc: {
  //   enabled: true, // Default `false`
  //   filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
  //   globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  // }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AI_PLUGIN,
    Components({
      extensions: ['vue', 'md', 'svg', 'tsx'],
      directoryAsNamespace: true,
      dts: './src/components.d.ts',
      // globalNamespaces: ["global"],
      dirs: ['src/components', 'src/views'],
      deep: true,
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
        /[\\/]\.public[\\/]/,
        /[\\/]\.vscode[\\/]/,
        /[\\/]\.plugins[\\/]/,
        /[\\/]\.assets[\\/]/,
        /[\\/]\.store[\\/]/
      ],
      include: [/\.vue$/, /\.md$/, /\.vue\?vue/, /\.tsx/],
      resolvers: [
        NaiveUiResolver()
        // (name) => {
        //   console.log("name:", name);
        //   if (name === "MyCustom")
        //     return path
        //       .resolve(__dirname, "src/CustomResolved.vue")
        //       .replaceAll("\\", "/");
        // },
        // IconsResolver({
        //   componentPrefix: "i",
        // }),
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
