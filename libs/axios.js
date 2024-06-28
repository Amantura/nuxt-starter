import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_PLATFORM_API
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('apiKey')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api