<template>
  <header class="h-[70px] w-full flex px-10 items-center space-x-3 sticky top-0 inset-x-0 bg-gray-100 border">
    <div class="flex-1">

    </div>

    <div>
      <el-button
        circle
        @click="logOut" >
        <PhSignOutBold />
      </el-button>
    </div>
  </header>
</template>

<script setup>
import PhSignOutBold from '~icons/ph/sign-out-bold'
import { logOut } from '@/services/auth'
</script>