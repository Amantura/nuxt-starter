<template>
  <div class="flex min-h-screen flex-col space-y-3">
    <AppHeader />

    <div class="flex justify-center flex-1">
      <div v-if="!allParamsAvailable" >
        <Docs />
      </div>

      <div>
        <ParcelForm
          :track-id="trackId"
          :weight="weight" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const route = useRoute()

const trackId = computed(() => route.query.track_id)
const weight = computed(() => Number(route.query.weight))

const allParamsAvailable = computed(() => trackId.value && weight.value)
</script>