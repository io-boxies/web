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
  address: string
  key: number
  shipAble: boolean
}

const data = new Array(3).fill(10).map<RowData>((_, index) => ({
  name: fk.name.fullName(),
  address: fk.address.cityName() + fk.address.streetAddress(),
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
    title: '배송가능여부',
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
</script>
