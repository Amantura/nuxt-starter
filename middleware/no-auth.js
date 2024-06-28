/* eslint-disable no-undef */
import { auth } from '@/services/auth'
import { apiKey } from '@/stores/user'

export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return

  await auth()

  if (!apiKey.value) return

  if (apiKey.value) {
    return navigateTo('/')
  }
})