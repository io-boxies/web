<template>
  <n-space vertical style="padding: 20px">
    <n-h2>Shop Home</n-h2>
    <n-card title="숍 세팅">
      <n-space vertical>
        <n-space> <n-h4>Products:</n-h4> {{ products.map((x) => x.sProd.prodName) }}</n-space>
        <n-space>
          <n-button strong secondary type="info">API 연동</n-button>
          <n-button strong secondary type="success">API/엑셀/수동 상품 등록</n-button>
          <n-button strong secondary>상품 매핑/매칭</n-button>
          <n-button strong secondary type="info">주문 수집</n-button>
        </n-space>
      </n-space>
    </n-card>
    <n-card title="주문 처리" justify="space-around">
      <n-space vertical>
        <CardTabStorages />
        <TableCollectItem />
        <n-space justify="end" item-style="min-width: 10vw">
          <n-select
            :options="['내사무실', 'IO창고'].map((x) => ({ label: x, value: x }))"
            placeholder="상품 받는곳"
          />
          <n-select
            :options="ioStorages.map((x) => ({ label: x, value: x }))"
            placeholder="IO창고선택"
          />
          <n-button type="warning">Pickup 픽업/Shipment 요청</n-button>
        </n-space>
      </n-space>
    </n-card>
    <n-card title="플랫폼 주문 수집 내역">
      <TableOrderCollect />
      <n-space justify="end">
        <n-button strong secondary type="info">고객 배송</n-button>
        <n-button strong secondary type="error">취소주문체크</n-button>
      </n-space>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
const products = mockShopVendorProd()
const ioStorages = ['강남', '구로', '광명']
// const products = shallowRef<any[]>([])
// onMounted(async () => {
//   const namesRef = collection(IoFireApp.getInst().store, `names`)
//   onSnapshot(namesRef, (snap) => {
//     products.value = []
//     snap.docs.forEach((docRef) => {
//       const newData = docRef.data()
//       if (newData) {
//         products.value.push(newData)
//       }
//     })
//   })
// })

// const addName = async () => {
//   const docRef = doc(IoFireApp.getInst().store, `names`, v4())
//   await setDoc(docRef, {
//     name: fk.name.fullName()
//   })
// }
</script>
