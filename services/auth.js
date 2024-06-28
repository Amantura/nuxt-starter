import { setApiKey } from '@/stores/user'
import { useRouter } from '#imports'

export function auth() {
  return new Promise((resolve) => {
    const key = localStorage.getItem('apiKey')
    if (key) {
      setApiKey(key)
    }
    resolve(key)
  })
}

export function logOut() {
  setApiKey(null)
  localStorage.removeItem('apiKey')
  useRouter().push('/login')
}