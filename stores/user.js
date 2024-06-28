/* eslint-disable no-undef */
const STATE = {
  apiKey: null
}
export const { state, getter, mutation, ...store } = createStore('user', STATE)

export const apiKey = getter('getApiKey', state => state.apiKey)

export const setApiKey = mutation('setApiKey', (state, payload) => {
  state.apiKey = payload
  if (localStorage) {
    localStorage.setItem('apiKey', payload)
  }
})