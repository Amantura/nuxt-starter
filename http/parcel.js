import api from '@/libs/axios'

export async function createParcel({ trackCode, weight, clientId }) {
  const body = {
    trackCode,
    weight,
    clientId
  }

  return await api.post('/api/v1/intagrations/warehouse-company/parcel/create', body)
}

export async function getParcel(id) {
  return await api.get(`/api/v1/intagrations/warehouse-company/parcel/${id}`)
}