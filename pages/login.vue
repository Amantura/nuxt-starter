<template>
  <div class="h-screen w-screen flex-center">
    <form
      class="border rounded-lg w-[400px] flex flex-col space-y-3 p-4"
      @submit.prevent="submit">
      <h1 class="font-semibold text-xl">Вход</h1>

      <el-input
        v-model="apiKey"
        size="large"
        placeholder="Введите api-ключ" />

      <div class="pt-1">
        <el-button
          type="primary"
          @click="submit">Войти</el-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { setApiKey } from '@/stores/user'
import { ElMessage } from 'element-plus'

definePageMeta({
  middleware: ['no-auth']
})

const router = useRouter()

const apiKey = ref('')

function submit() {
  if (!apiKey.value.trim()) {
    ElMessage({
      message: 'Введите api-ключ',
      type: 'warning'
    })
    return
  }

  setApiKey(apiKey.value.trim())
  router.push('/')
}
</script>