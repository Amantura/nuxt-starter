<template>
  <div class="bg-gray-50 rounded-md border flex flex-col space-y-1 p-4">
    <div class="flex space-x-2 text-sm">
      <span>ФИО:</span>
      <span class="font-semibold">{{ props.client.name }}</span>
    </div>
    <div class="flex space-x-2 text-sm">
      <span>Номер телефона:</span>
      <span class="font-semibold">{{ props.client.phone }}</span>
    </div>
    <div class="flex items-center space-x-2 pt-1">
      <el-tag type="primary">{{ props.client.country.title }}</el-tag>
      <el-tag type="success">{{ props.client.city.title }}</el-tag>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})
</script>