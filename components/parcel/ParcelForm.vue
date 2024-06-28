<template>
  <div
    class="w-[400px] border rounded-lg p-4 flex flex-col space-y-3 relative"
  >
    <UiLabel title="Трек номер">
      <el-input v-model="model.trackId" />
    </UiLabel>
    <UiLabel title="Вес">
      <el-input-number
        v-model="model.weight"
        :min="0"
        :step="0.01"
      />
    </UiLabel>

    <UiLabel title="Код получателя">
      <form
        class="flex items-center space-x-3"
        @submit.prevent="searchClient">
        <el-input
          ref="clientCodeRef"
          v-model="model.clientCode"
          placeholder="Введите код получателя" />

        <el-button
          type="primary"
          plain
          @click="searchClient">Поиск</el-button>
      </form>
    </UiLabel>

    <ClientCard
      v-if="client"
      :client="client" />

    <div
      v-if="client"
      class="flex justify-end">
      <el-button
        type="primary"
        @click="submit">Сохранить</el-button>
    </div>
    <AppInnerLoader v-if="clientPending" />
  </div>
</template>

<script setup>
import { getClient } from '@/http/client'
import { createParcel } from '@/http/parcel'
import { ElMessage } from 'element-plus'

const props = defineProps({
  trackId: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
})
const router = useRouter()
const clientCodeRef = ref(null)

const model = ref({
  trackId: props.trackId,
  weight: props.weight,
  clientCode: ''
})

const client = ref(null)
const clientPending = ref(false)

onMounted(() => {
  setTimeout(() => {
   if ( clientCodeRef.value) {
    clientCodeRef.value.focus()
   }
  }, 100)
})

async function searchClient() {
  if (!model.value.clientCode) {
    ElMessage({
      message: 'Укажите код получателя!',
      type: 'warning'
    })
    return
  }
  try {
    clientPending.value = true
    const { data } = await getClient(model.value.clientCode)
    client.value = data
  } catch (e) {
    ElMessage({
      message: 'Клиент не найден!',
      type: 'error'
    })
  } finally {
    setTimeout(() => {
      clientPending.value = false
    }, 2000)
  }
}


async function submit() {
  try {
    const { data } = await createParcel({ trackCode: model.value.trackId, weight: model.value.weight, clientId: client.value.id })
    router.push(`/parcel/${data.id}`)
  } catch (e) {
    ElMessage({
      message: 'Не удалось сохранить!',
      type: 'error'
    })
  }
}
</script>