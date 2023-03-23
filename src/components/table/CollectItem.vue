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
import type { CollectItem } from '@/utils'
import type { DataTableColumns } from 'naive-ui'

const data = new Array(3).fill(10).map<CollectItem>(() => mockCollectItem())
const checkedRowKeys = ref<Array<string | number>>([])
const columns: DataTableColumns<CollectItem> = [
  { type: 'selection' },
  {
    title: 'Name',
    key: 'name',
    render: (row) => row.product.sProd.prodName
  }
]
</script>
