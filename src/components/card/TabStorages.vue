<template>
  <n-card title="인아웃박스 창고" style="margin-bottom: 16px">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab-pane v-for="(s, idx) in [one, two, three]" :key="idx" :name="s.name" :tab="s.name">
        <n-space v-if="s.items">
          <n-h4>Products:</n-h4> {{ s.items.map((x) => x.prodName) }}</n-space
        >
        <n-result
          v-else
          status="404"
          title="상품이 보관되고 있지 않습니다."
          :description="`${s.name}지점 은 ${s.managerName}가 잘관리해줄게, 맡겨보지그래?`"
        >
          <template #footer>
            <n-button type="success">맡겨볼까..?</n-button>
          </template>
        </n-result>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup lang="ts">
const one = mockIoStorage()
one.name = '구로'
const two = mockIoStorage()
two.name = '광명'
const three = mockIoStorage()
three.name = '강남'
three.managerName = '송준회'
delete three.items
</script>
