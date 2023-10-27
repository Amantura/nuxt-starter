/* eslint-disable no-undef */
const STATE = {
  firstName: 'John',
  lastName: 'Smith',
}
export const { state, getter, mutation, ...store } = createStore('user', STATE)

export const fullName = getter('fullName', state => {
  return `${state.firstName} ${state.lastName}`
})

export const setFirstName = mutation('setFirstName', (state, payload) => {
  state.firstName = payload
})

export const setLastName = mutation('setLastName', (state, payload) => {
  state.lastName = payload
})