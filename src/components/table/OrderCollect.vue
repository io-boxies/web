<!-- <n-space>
        <n-icon class="button" size="25">
          <HomeOutline />
        </n-icon>
        <n-h4>주문 수집 테이블</n-h4>
      </n-space> -->
<template>
  <n-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="{
      showSizePicker: true,
      pageSizes: [5, 10, 25, 50, 100]
    }"
  />
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

type RowData = {
  name: string
  age: number
  address: string
  key: number
  shipAble: boolean
}

const data = new Array(20).fill(10).map<RowData>((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
  key: index,
  shipAble: index % 2 == 0
}))
const checkedRowKeys = ref<Array<string | number>>([])
const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
      {
        label: 'Select first 2 rows',
        key: 'f2',
        onSelect: (pageData) => {
          checkedRowKeys.value = pageData.map((row) => row.key).slice(0, 2)
        }
      }
    ],
    disabled(row) {
      return row.name === 'Edward King 3'
    }
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Tags',
    key: 'tags',
    render(row) {
      return h(
        NButton,
        {
          secondary: true,
          type: row.shipAble ? 'info' : 'error'
        },
        {
          default: () => (row.shipAble ? '배송가능' : '배송불가')
        }
      )
    }
  },
  {
    title: 'Address',
    key: 'address'
  }
]

// const data = new Array(10).fill(10).map((x) => {
//   return {
//     idx: x,
//     name: fk.commerce.productName(),
//     calories: fk.datatype.number({ max: 1000 }),
//     fat: fk.datatype.number({ max: 1000 }),
//     carbs: fk.datatype.number({ max: 1000 }),
//     protein: fk.datatype.number({ max: 1000 }),
//     iron: fk.datatype.number({ max: 1000 })
//   }
// })
</script>
