import { AuthRouteApi } from '@/services/auth/auth-constants'

export const AppRoute = {
 LOGIN: {
    name: 'login',
    path: '/login',
    v1_object: AuthRouteApi.login, // Rempli basé sur permission-constants.ts
  },
  LOST_PASSWORD: {
    name: 'lost-password',
    path: '/lost-password',
    v1_object: null, // Rempli basé sur permission-constants.ts
  },
  ABOUT: {
    name: 'about',
    path: '/about',
    v1_object: '', // Aucune correspondance directe trouvée dans permission-constants.ts
  },
  VERIFY_EMAIL: {
    name: 'verify-email',
    path: '/verify-email',
    v1_object: null, // Rempli basé sur permission-constants.ts
  },
  
}
