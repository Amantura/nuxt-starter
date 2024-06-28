<template>
  <div class="border border-black text-sm">
    <div class="flex justify-between px-4 border-b border-black">
      <div class="flex-1 py-3">
        <div class="bg-gray-200 h-[60px] w-[100px]"></div>
      </div>
      <div class="flex-1 py-3 flex justify-end space-x-2">
        <div class="uppercase text-right text-sm flex flex-col" >
          <span>www.caps.kg</span>
          <span>+996 312 532222</span>
          <span>office@caps.kg</span>
        </div>

        <div class="w-[60px] h-[60px] bg-gray-200">

        </div>
      </div>
    </div>

    <div class="flex border-b px-2 uppercase border-black">
      <div class="w-1/2 py-1">
        № {{ props.parcel.id }}
      </div>
      <div class="w-1/2"></div>
    </div>
    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        СТРАНА:
      </div>
      <div class="w-1/2 px-2 py-1">
        {{ props.parcel.client.country.title }}
      </div>
    </div>

    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        ПОЛУЧАТЕЛЬ:
      </div>
      <div class="w-1/2 px-2 py-1">
        {{ props.parcel.client.name }}
      </div>
    </div>

    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        АДРЕС:
      </div>
      <div class="w-1/2 px-2 py-1">
        {{ props.parcel.logisticCompany.address }}
      </div>
    </div>

    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        ТЕЛЕФОН:
      </div>
      <div class="w-1/2 px-2 py-1">
        {{ props.parcel.client.phone }}
      </div>
    </div>

    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        СТОИМОСТЬ:
      </div>
      <div class="w-1/2 px-2 py-1">
        0
      </div>
    </div>

    <div class="flex uppercase border-b border-black">
      <div class="w-1/2 border-r border-black px-2 py-1">
        ТОВАР, ШТ.:
      </div>
      <div class="w-1/2 px-2 py-1">
        РАЗНОЕ - 1 ШТ.
      </div>
    </div>

    <div class="flex uppercase">
      <div class="w-1/2 border-r border-black px-2 py-1">
        ДОСТАВКА:
      </div>
      <div class="w-1/2">
        <div class="px-2 py-1 border-b border-black space-x-2 flex items-center">
          <PhCheckSquareBold />
          <span>САМОВЫВОЗ</span>
        </div>
        <div class="px-2 py-1 space-x-2 flex items-center">
          <PhSquareBold />
          <span> ДО ДВЕРИ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PhCheckSquareBold from '~icons/ph/check-square-bold'
import PhSquareBold from '~icons/ph/square-bold'

const props = defineProps({
  parcel: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  setTimeout(() => {
    window.print()
  })
})
</script>