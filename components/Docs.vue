<template>
  <div class="p-4 flex flex-col w-[500px] space-y-3 border rounded-lg">
    <h1 class="font-bold text-xl">
      Обязательные параметры
    </h1>

    <div class="flex items-center space-x-2 text-sm">
      <span>Параметр 1:</span>
      <span class="font-semibold">track_id</span>
    </div>
    <div class="flex items-center space-x-2 text-sm">
      <span>Параметр 2:</span>
      <span class="font-semibold">weight</span>
    </div>

    <div class="text-sm font-semibold">
      {{ locationHost }}/?<el-tag type="info">track_id</el-tag>=abc218421ewqe&<el-tag type="info">weight</el-tag>=1.01
    </div>
  </div>
</template>

<script setup>
const locationHost = computed(() => location.host)
</script>