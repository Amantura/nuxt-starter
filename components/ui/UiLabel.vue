<template>
  <div class="flex flex-col space-y-1">
    <span class="text-sm">{{ props.title }}</span>
    <slot ></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>