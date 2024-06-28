<template>
  <div class="p-1">
    <ParcelPrint
      v-if="parcel"
      :parcel="parcel" />
  </div>
</template>

<script setup>
import { ElLoading, ElMessage } from 'element-plus'
import { getParcel } from '@/http/parcel'

const route = useRoute()
let loading

const parcel = ref(null)

definePageMeta({
  middleware: ['auth']
})

onMounted(() => {
  getParcelHandler()
})

async function getParcelHandler() {
  try {
    loading = ElLoading.service({
      lock: true,
      text: 'Загрузка...',
      background: 'rgba(0, 0, 0, 0.7)',
    })

    const { data } = await getParcel(route.params.id)
    parcel.value = data
  } catch (e) {
    ElMessage({
      message: 'Не удалось загрузить данные!',
      type: 'error'
    })
  } finally {
    setTimeout(() => {
      if (loading) {
      loading.close()
      }
    }, 3000)
  }
}

</script>