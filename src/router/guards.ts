// src/router/authGuard.ts
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

function isAuthenticated() {
  return !!localStorage.getItem('auth_token')
}

const protectedRoutes = ['configurator', 'myorders', 'CasierComplet', 'OrderConfirmation', 'DeliveryInformation']

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (to.name && protectedRoutes.includes(to.name.toString())) {
    if (!isAuthenticated()) {
      next({ name: 'Authentification' })
      return
    }
  }
  if (to.name === 'Authentification' && isAuthenticated()) {
    next({ name: 'myorders' })
    return
  }
  next()
}
