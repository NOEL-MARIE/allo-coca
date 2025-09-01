<template>
  <div>
    <NavBar />

    <div class="h-screen p-10 text-black">
      <!-- Header avec titre et recherche -->
      <div class="flex items-center justify-between mb-8 w-[1740px] mx-auto">
        <h1 class="text-3xl font-bold font-TCCCUnityHeadline">Mes commandes</h1>

        <div class="flex gap-4">
          <!-- Barre de recherche -->
          <div
            class="flex items-center px-3 border rounded-md border-[#102823ec] w-[320px] h-[40px]"
          >
            <span
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#6D6D6D"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher par date, total, casier, packs..."
              class="w-full ml-2 bg-transparent outline-none font-inte"
            />
          </div>

          <!-- Bouton calendrier -->
          <div class="relative">
            <button
              @click="showDatePicker = !showDatePicker"
              class="flex items-center px-3 py-1 border font-bold font-inter border-black rounded-md h-[40px] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600"
            >
              <span class="mr-2 text-gray-500 material-icons font-inter"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 8.33366H2.5M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M6.5 18.3337H13.5C14.9001 18.3337 15.6002 18.3337 16.135 18.0612C16.6054 17.8215 16.9878 17.439 17.2275 16.9686C17.5 16.4339 17.5 15.7338 17.5 14.3337V7.33366C17.5 5.93353 17.5 5.23346 17.2275 4.69868C16.9878 4.22828 16.6054 3.84583 16.135 3.60614C15.6002 3.33366 14.9001 3.33366 13.5 3.33366H6.5C5.09987 3.33366 4.3998 3.33366 3.86502 3.60614C3.39462 3.84583 3.01217 4.22828 2.77248 4.69868C2.5 5.23346 2.5 5.93353 2.5 7.33366V14.3337C2.5 15.7338 2.5 16.4339 2.77248 16.9686C3.01217 17.439 3.39462 17.8215 3.86502 18.0612C4.3998 18.3337 5.09987 18.3337 6.5 18.3337Z"
                    stroke="black"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {{ selectedDate ? selectedDate.toLocaleDateString('fr') : 'Date' }}
            </button>

            <!-- Date Picker -->
            <div
              v-if="showDatePicker"
              class="absolute right-0 z-10 p-4 mt-2 flex flex-col justify-between bg-white rounded-md shadow-lg w-[23rem] h-[480px]"
            >
              <!-- Header -->
              <div class="flex items-center justify-between mb-2 bg-[#F6F6F6] px-2 p-1 rounded-md">
                <button
                  @click="prevMonth"
                  class="flex items-center justify-center w-8 h-8 bg-white rounded-md cursor-pointer"
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.2045 4.99956L5.917 8.71206L4.8565 9.77256L0.0834961 4.99956L4.8565 0.226562L5.917 1.28706L2.2045 4.99956Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </button>
                <span class="font-semibold">{{ months[currentMonth] }}, {{ currentYear }}</span>
                <button
                  @click="nextMonth"
                  class="flex items-center justify-center w-8 h-8 bg-white rounded-md cursor-pointer"
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.796 4.99956L0.0834961 1.28706L1.144 0.226562L5.917 4.99956L1.144 9.77256L0.0834961 8.71206L3.796 4.99956Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                </button>
              </div>

              <!-- Jours -->
              <div class="grid grid-cols-7 text-center text-gray-500">
                <span v-for="d in days" :key="d">{{ d }}</span>
              </div>

              <!-- Dates -->
              <div class="grid grid-cols-7 gap-1 mt-2 text-center">
                <span
                  v-for="day in prevMonthDays"
                  :key="'prev-' + day"
                  class="flex items-center justify-center w-10 h-10 text-sm text-gray-300 rounded-md"
                  >{{ day }}</span
                >

                <button
                  v-for="day in daysInMonth"
                  :key="'current-' + day"
                  @click="handleDateClick(day)"
                  class="flex flex-col items-center justify-center w-10 h-10 rounded-md hover:cursor-pointer"
                  :class="{
                    'bg-red-600 text-white': isSelected(day),
                    'hover:bg-gray-200': !isSelected(day),
                  }"
                >
                  <span>{{ day }}</span>
                  <span v-if="isDeliveryDay(day)" class="w-1 h-1 mt-1 bg-black rounded-full"></span>
                </button>

                <span
                  v-for="day in nextMonthDays"
                  :key="'next-' + day"
                  class="flex items-center justify-center w-10 h-10 text-sm text-gray-300 rounded-md"
                  >{{ day }}</span
                >
              </div>

              <!-- Boutons -->
              <div class="flex justify-between w-full gap-2 pt-3 border-t">
                <button
                  @click="showDatePicker = false"
                  class="flex-1 px-4 py-2 border rounded-full"
                >
                  Annuler
                </button>
                <button
                  @click="applyDate"
                  class="flex-1 px-4 py-2 text-white bg-black rounded-full"
                >
                  Appliquer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Commandes grid -->
      <div class="flex items-center justify-between w-[1740px] mx-auto">
        <div class="grid grid-cols-1 gap-26 sm:grid-cols-2 md:grid-cols-3 md:w-[1740px] md:mx-auto">
          <div
            v-for="(commande, idx) in filteredCommandes"
            :key="idx"
            class="flex flex-col justify-between p-6 rounded-lg shadow bg-[#F6F6F6] w-[512px] h-[266px]"
          >
            <div>
              <p class="flex items-center text-lg font-bold">
                <span class="mr-2 text-gray-700 material-icons">event_note</span>
                Commande du {{ commande.date }}
              </p>
              <div class="mt-2">
                <span class="font-bold text-red-600">Casier:</span>
                <span>{{ commande.casier }}</span>
              </div>
              <div v-if="commande.packs" class="mt-2">
                <span class="font-bold text-blue-600">Packs:</span>
                <span>{{ commande.packs }}</span>
              </div>
            </div>
            <div class="mt-4">
              <div class="font-bold">
                Total<br /><span class="text-xl text-gray-800">{{ commande.total }} FCFA</span>
              </div>
            </div>
            <div class="flex gap-3 mt-6">
              <button
                @click="openDrawerCommande(commande)"
                class="flex-1 px-5 py-2 text-white bg-red-600 rounded-full"
              >
                Recommander
              </button>

              <RouterLink
                class="flex items-center justify-center flex-1 px-5 py-2 text-center bg-white border border-gray-900 rounded-full"
                :to="{
                  path: '/configurator',
                  query: { tab: 'casier', casierId: commande.id },
                }"
              >
                Modifier
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Message si aucune commande -->
      <div
        v-if="filteredCommandes.length === 0"
        class="flex flex-col items-center justify-center w-full mt-20 text-center text-gray-600"
      >
        <img src="../../assets/nothing_crus.gif" alt="" class="w-20 h-20" />
        <p class="text-xl font-semibold">Aucune commande trouvée</p>
        <p class="text-sm">
          Essayez avec une autre recherche (date, total, casier, packs, année...)
        </p>
      </div>

      <!-- Drawer du panier -->
      <div v-for="(commande, idx) in filteredCommandes" :key="idx">
        <Drawer
          v-model="isDrawerOpen"
          class="fixed font-inter inset-0 w-[100%] z-30 flex justify-end bg-black/25"
        >
          <div
            class="bg-white h-full w-full sm:w-[450px] md:w-[600px] shadow-lg pt-10 px-6 flex flex-col overflow-y-auto hide-scrollbar"
          >
            <!-- header -->
            <div class="flex items-center mb-6">
              <h2 class="mb-6 text-xl font-bold">Mon panier</h2>
              <button class="mb-6 ml-auto text-2xl" @click="drawerOpen = false">&times;</button>
            </div>

            <!-- Casier -->
            <div
              v-for="(commande, idx) in filteredCommandes"
              :key="idx"
              class="flex flex-col justify-between p-6 rounded-lg shadow bg-white w-[562px] h-[266px]"
            >
              <div>
                <p class="flex items-center justify-between text-lg font-bold">
                  <span class="mr-2 text-black material-icons">Casier</span>
                  <span> {{ commande.total }} FCFA </span>
                </p>
                <div class="mt-2">
                  <div class="ml-4">
                    <div
                      v-for="item in commande.casierItems"
                      :key="item.id"
                      class="mb-1 text-gray-700"
                    >
                      {{ item.label }}: {{ item.qty }} bouteilles
                    </div>
                  </div>
                </div>
                <div v-if="commande.packs" class="mt-2">
                  <span class="font-bold text-blue-600">Packs:</span>
                  <span>{{ commande.packs }}</span>
                </div>
                <div v-if="commande.packs" class="mt-2">
                  <span class="font-bold text-blue-600">Packs:</span>
                  <span>{{ commande.packs }}</span>
                </div>
              </div>

              <div class="flex gap-3 mt-6">
                <button
                  @click="modifierCasier(commande.id)"
                  class="px-5 py-2 font-bold text-black bg-white border-2 border-black rounded-full"
                >
                  Modifier le casier
                </button>

                <button
                  @click="supprimerCasier(commande.id)"
                  class="flex items-center justify-center px-3 py-2 font-bold text-center bg-white border-2 border-black rounded-full hover:cursor-pointer"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3333 5.00033V4.33366C12.3333 3.40024 12.3333 2.93353 12.1517 2.57701C11.9919 2.2634 11.7369 2.00844 11.4233 1.84865C11.0668 1.66699 10.6001 1.66699 9.66667 1.66699H8.33333C7.39991 1.66699 6.9332 1.66699 6.57668 1.84865C6.26308 2.00844 6.00811 2.2634 5.84832 2.57701C5.66667 2.93353 5.66667 3.40024 5.66667 4.33366V5.00033M7.33333 9.58366V13.7503M10.6667 9.58366V13.7503M1.5 5.00033H16.5M14.8333 5.00033V14.3337C14.8333 15.7338 14.8333 16.4339 14.5608 16.9686C14.3212 17.439 13.9387 17.8215 13.4683 18.0612C12.9335 18.3337 12.2335 18.3337 10.8333 18.3337H7.16667C5.76654 18.3337 5.06647 18.3337 4.53169 18.0612C4.06129 17.8215 3.67883 17.439 3.43915 16.9686C3.16667 16.4339 3.16667 15.7338 3.16667 14.3337V5.00033"
                      stroke="black"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="p-4 mb-4 border rounded-lg h-[150px]"
              v-if="selectedCommande.casierItems?.length"
            >
              <div class="flex items-start justify-between mb-2">
                <div>
                  <div class="font-bold">Casier</div>
                  <div class="text-gray-700">
                    <div v-for="(item, idx) in selectedCommande.casierItems" :key="'casier-' + idx">
                      {{ item.label }}: {{ item.qty }} bouteilles
                    </div>
                  </div>
                </div>
                <div class="font-bold">{{ selectedCommande.casierTotal }} FCFA</div>
              </div>
            </div>

            <!-- Packs -->
            <div class="p-4 mb-4 border rounded-lg" v-if="selectedCommande.waterItems?.length">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <div class="font-bold">Bouteilles d'eau</div>
                  <div class="text-gray-700">
                    <div v-for="(item, idx) in selectedCommande.waterItems" :key="'water-' + idx">
                      {{ item.label }}: {{ item.qty }} packs
                    </div>
                  </div>
                </div>
                <div class="font-bold">{{ selectedCommande.waterTotal }} FCFA</div>
              </div>
            </div>

            <!-- Résumé -->
            <div class="mt-auto mb-4">
              <h3 class="mb-2 font-bold">Résumé de ma commande</h3>
              <div class="flex justify-between mb-1">
                <span>Sous-total</span>
                <span>{{ commande.total }} FCFA</span>
              </div>
              <div class="flex justify-between mb-1">
                <span>Consignation</span>
                <span>{{ selectedCommande.consignation || 2000 }} FCFA</span>
              </div>
              <div class="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  v-model="selectedCommande.hasOwnCasier"
                  id="consigne"
                  class="w-4 h-4"
                />
                <label for="consigne" class="text-sm text-gray-700"
                  >Je possède déjà mes casiers (retirer la consigne)</label
                >
              </div>
              <div class="flex justify-between mb-1">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div class="flex justify-between pt-2 text-lg font-bold">
                <span>Total</span>
                <span>{{ selectedCommande.total }} FCFA</span>
              </div>
            </div>

            <!-- Bouton Finaliser -->
            <RouterLink to="DeliveryInformation">
              <button
                :class="{
                  'bg-red-600 text-white cursor-pointer': selectedCommande.total >= 5000,
                  'bg-gray-200 text-gray-400 cursor-not-allowed': selectedCommande.total < 5000,
                }"
                class="w-full py-3 mt-4 text-lg font-bold rounded"
                :disabled="selectedCommande.total < 5000"
              >
                Finaliser ma commande
              </button>
            </RouterLink>
            <p v-if="selectedCommande.total < 5000" class="mt-2 text-sm text-red-600">
              *Votre commande doit être supérieure à 5 000 FCFA pour finaliser
            </p>
          </div>
        </Drawer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, computed, onMounted } from 'vue'
import NavBar from '../configurator/ConfigNavbar.vue'
import { usePanierStore } from '@/stores/PanierStores' // adapter le chemin selon votre projet

// Supprimer un casier du panier par id
function supprimerCasier(id: string) {
  panierStore.supprimerCasier(id)
}

// Modifier un casier => redirige vers configurateur avec query param tab=casier & casierId=id
function modifierCasier(casierId: string) {
  router.push({
    path: '/configurator',
    query: { tab: 'casier', casierId },
  })
}

const panierStore = usePanierStore()
const route = useRoute()
const isDrawerOpen = ref(false)
onMounted(() => {
  if (route.query.openDrawer === 'true') {
    isDrawerOpen.value = true
  }
})
const commandes = computed(() =>
  panierStore.casiers.map((casier) => {
    // Création d'une chaîne pour liste des produits dans le casier en "label x qty"
    const casierDesc = casier.products
      .filter((p) => p.qty > 0)
      .map((p) => `${p.label} x${p.qty}`)
      .join(', ')

    return {
      id: casier.id,
      date: new Date().toLocaleDateString('fr-FR'), // ou date réelle si disponible
      casier: casierDesc,
      label: casier.label,
      packs: null, // si vous avez packs eau, gérer ici
      total: casier.products.reduce((sum, p) => sum + p.qty * p.price, 0) * casier.qty,
      casierItems: casier.products,
      casierTotal: casier.products.reduce((sum, p) => sum + p.qty * p.price, 0),
      // ajouter d'autres champs si nécessaire
    }
  }),
)

// logique de retour sur la tabs "casier a composer"
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function getProductId(commande: any): string {
  // supposons que casierItems contiennent les produits avec un id
  if (commande.casierItems && commande.casierItems.length > 0) {
    return commande.casierItems[0].id || ''
  }
  return ''
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCasierStore } from '@/stores/casierStore'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useWaterStore } from '@/stores/waterStore'
import { RouterLink, useRoute } from 'vue-router'

// Données des commandes (exemple)
// const commandes = ref([
//   {
//     date: '15 mai 2025',
//     casier: 'Coca x12, Fanta x6, Sprite x6',
//     packs: 'Eau naturelle x1, Citron x1',
//     total: 7200,
//   },
//   { date: '2 mai 2025', casier: 'Coca x24', packs: null, total: 5500 },
//   { date: '15 mai 2025', casier: 'Coca x6, Sprite x6', packs: 'Eau naturelle x2', total: 6400 },
// ])

// Drawer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedCommande = ref<any>({})
const drawerOpen = ref(false)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function openDrawerCommande(commande: any) {
  // Ici on simule les items casier/water, à remplacer par vos vrais produits si besoin
  const casierItems = [
    { label: 'Coca', qty: 12, price: 300 },
    { label: 'Fanta', qty: 6, price: 250 },
  ]
  const waterItems = [{ label: 'Eau naturelle', qty: 1, price: 500 }]

  const casierTotal = casierItems.reduce((sum, p) => sum + p.price * p.qty, 0)
  const waterTotal = waterItems.reduce((sum, p) => sum + p.price * p.qty, 0)
  const subTotal = casierTotal + waterTotal

  selectedCommande.value = {
    ...commande,
    casierItems,
    waterItems,
    casierTotal,
    waterTotal,
    subTotal,
    hasOwnCasier: false,
    total: subTotal + 2000, // consignation par défaut
  }

  drawerOpen.value = true
}

// Recherche dynamique
const searchQuery = ref('')
const filteredCommandes = computed(() => {
  if (!searchQuery.value) return commandes.value
  const q = searchQuery.value.toLowerCase()
  return commandes.value.filter((cmd) => {
    const packsStr = typeof cmd.packs === 'string' ? cmd.packs : ''
    return (
      cmd.date.toLowerCase().includes(q) ||
      cmd.casier.toLowerCase().includes(q) ||
      packsStr.toLowerCase().includes(q) ||
      cmd.total.toString().includes(q)
    )
  })
})

// Date picker
const today = new Date()
const showDatePicker = ref(false)
const selectedDate = ref<Date | null>(today)
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())
const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firstDayOfMonth = computed(
  () => new Date(currentYear.value, currentMonth.value, 1).getDay() || 7,
)

const prevMonthDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay() || 7
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0).getDate()
  const days: number[] = []
  for (let i = firstDay - 1; i > 0; i--) days.push(prevMonthLastDay - i + 1)
  return days
})
const nextMonthDays = computed(() => {
  const totalGridCells = 42
  const totalCurrentMonth = daysInMonth.value + prevMonthDays.value.length
  const days: number[] = []
  for (let i = 1; i <= totalGridCells - totalCurrentMonth; i++) days.push(i)
  return days
})

const deliveries = ref<number[]>([2, 15, 22])
const isDeliveryDay = (day: number) => deliveries.value.includes(day)
const selectDate = (day: number) =>
  (selectedDate.value = new Date(currentYear.value, currentMonth.value, day))
const isSelected = (day: number) =>
  selectedDate.value?.getDate() === day &&
  selectedDate.value?.getMonth() === currentMonth.value &&
  selectedDate.value?.getFullYear() === currentYear.value
const handleDateClick = (day: number) => {
  selectDate(day)
  if (isDeliveryDay(day)) alert(`Livraison prévue le ${day} ${months[currentMonth.value]}`)
}
const prevMonth = () =>
  currentMonth.value === 0 ? ((currentMonth.value = 11), currentYear.value--) : currentMonth.value--
const nextMonth = () =>
  currentMonth.value === 11 ? ((currentMonth.value = 0), currentYear.value++) : currentMonth.value++
const applyDate = () => (showDatePicker.value = false)
</script>
