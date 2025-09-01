import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingPage.vue'
import myorders from '../components/configurator/MyOrders.vue'
import OrderConfirmation from '../components/Checkout/OrderConfirmation.vue'
import DeliveryInformation from '../components/Checkout/DeliveryInformation.vue'
import Authentification from '../components/auth/MultiStepForm.vue'
import configurator from '../components/configurator/DrinksStore.vue'
import CasierComplet from '../components/configurator/FullCrates.vue'
import { authGuard } from './guards' // Import du guard

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/Authentification', name: 'Authentification', component: Authentification },
  { path: '/configurator', name: 'configurator', component: configurator },
  { path: '/my-orders', name: 'myorders', component: myorders },
  {
    path: '/casier',
    name: 'CasierComplet',
    component: CasierComplet,
  },
  { path: '/OrderConfirmation', name: 'OrderConfirmation', component: OrderConfirmation },
  { path: '/DeliveryInformation', name: 'DeliveryInformation', component: DeliveryInformation },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(authGuard)

export default router
