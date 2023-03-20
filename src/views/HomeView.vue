<template>
  <v-container fluid>
    <h2>home view</h2>
    <v-btn @click="addName">add name</v-btn>
    Data: {{ clientData }}
  </v-container>
</template>

<script setup lang="ts">
import { collection } from '@firebase/firestore'
import { v4 } from 'uuid'
const clientData = ref<any[]>([])
onMounted(async () => {
  const namesRef = collection(IoFireApp.getInst().store, `names`)
  onSnapshot(namesRef, (snap) => {
    clientData.value = []
    snap.docs.forEach((docRef) => {
      const newData = docRef.data()
      if (newData) {
        clientData.value.push(newData)
      }
    })
  })
})

const addName = async () => {
  const docRef = doc(IoFireApp.getInst().store, `names`, v4())
  await setDoc(docRef, {
    name: fk.name.fullName()
  })
}
</script>
