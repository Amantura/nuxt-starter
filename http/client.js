import api from '@/libs/axios'

export async function getClient(id) {
  return await api.get(`/api/v1/intagrations/client/${id}`)
}