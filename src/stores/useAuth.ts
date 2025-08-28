/* eslint-disable @typescript-eslint/no-explicit-any */
// src/composables/useAuth.ts
import { ref } from 'vue'

interface User {
  name: string
  phone?: string
  orders: any[]
}

const user = ref<User | null>(null)

export function useAuth() {
  function login(name: string, phone?: string) {
    user.value = { name, phone, orders: [] }
    sessionStorage.setItem('user', JSON.stringify(user.value))
  }

  function logout() {
    user.value = null
    sessionStorage.removeItem('user')
  }

  function loadUser() {
    const saved = sessionStorage.getItem('user')
    if (saved) user.value = JSON.parse(saved)
  }

  function addOrder(order: any) {
    if (!user.value) return
    user.value.orders.push(order)
    sessionStorage.setItem('user', JSON.stringify(user.value))
  }

  const isAuthenticated = () => user.value !== null

  return { user, login, logout, loadUser, isAuthenticated, addOrder }
}
