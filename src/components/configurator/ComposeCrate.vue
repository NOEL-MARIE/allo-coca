<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable prefer-const -->
<template>
  <div class="fixed">
    <div class="flex items-start w-screen h-screen gap-10 pt-8 2xl:justify-evenly">
      <!-- Visuel du casier -->
      <div
        class="w-[690px] mr-[800px] md:mr-[800px] 2xl:w-[1090px] 2x:h-[990px] sticky top-0 pt-24 flex flex-col justify-center items-center"
      >
        <div
          class="grid grid-cols-6 grid-rows-4 2xl:w-[1500px] 2xl:h-[1000px] gap-1.5 2xl:gap-5 bg-[#e62c2d] p-6 2xl:p-10 rounded-lg shadow-md relative"
        >
          <div
            v-for="n in 24"
            :key="n"
            class="w-[98px] h-[98px] 2xl:w-[190px] 2xl:h-[190px] rounded-[7px] flex items-center justify-center bg-white/25"
          >
            <img
              v-if="crateBottles[n - 1]"
              :src="crateBottles[n - 1]?.cap"
              alt="bouteille"
              class="w-[99px] rounded-full shadow 2xl:w-[150px] 2xl:h-[150px]"
            />
          </div>
        </div>
        <div
          class="text-white font-cursive font-bold text-[34px] mt-4 drop-shadow-[1px_2px_6px_rgba(177,21,21,0.75)]"
        >
          Mon Casier Plein
        </div>
      </div>

      <!-- Bloc scrollable de configuration -->
      <div class="fixed top-[110px] bottom-0 right-[100px]">
        <aside class="w-[492px] md:ml-96 rounded-xl shadow-lg bg-white px-5 flex flex-col">
          <h2 class="mb-4 text-lg font-bold text-gray-900">Je configure mon casier</h2>
          <div
            class="overflow-auto justify-between grow h-[560px] gap-6 grid grid-cols-2 hide-scrollbar"
          >
            <div
              v-for="product in  store.products"
              :key="product.id"
              class="z-0 flex flex-col items-center p-4 m-0 bg-white border border-gray-100 rounded-lg shadow-sm select-none w-[200px] h-[236px]"
            >
              <!-- Titre -->
              <h3 class="w-full mb-3 text-sm font-bold text-black">{{ product.label }}</h3>

              <div class="relative flex justify-center w-full">
                <!-- Image bouteille -->
                <img
                  :src="product.img"
                  alt="product label"
                  class="object-contain w-20 ml-7 h-[186px]"
                  loading="lazy"
                />

                <!-- Volume + Prix -->
                <div class="flex flex-col items-end w-full gap-1 p-1 text-xs text-gray-500 mt-14">
                  <span>{{ product.volume }}</span>
                  <span class="text-sm font-bold text-gray-900">
                    {{ product.price.toLocaleString() }} FCFA
                  </span>
                </div>

                <!-- Contrôle quantité -->
                <div
                  class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center bg-gray-100 rounded-full px-1 py-1.5 w-[176px] h-[40px] shadow"
                >
                  <!-- Bouton - -->
                  <button
                    @click=" store.decrement(product)"
                    :disabled="product.qty <= 0"
                    class="flex items-center justify-center w-8 h-8 text-xl font-bold text-gray-400 bg-white rounded-full disabled:cursor-not-allowed disabled:text-gray-300"
                    aria-label="Décrémenter quantité"
                  >
                    −
                  </button>

                  <div class="px-3 text-lg font-semibold text-center text-gray-900 select-text">
                    {{ product.qty }}
                  </div>

                  <!-- Bouton + désactivé si casier plein -->
                  <button
                    @click=" store.increment(product)"
                    :disabled="
                       store.countBottles >= 24 || product.qty + 1 + ( store.countBottles - product.qty) > 24
                    "
                    class="flex items-center justify-center w-8 h-8 text-xl font-bold text-white bg-red-600 rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Incrémenter quantité"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Résumé -->
          <div class="flex flex-col gap-1 pt-4 mb-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Nombre de bouteilles</span>
              <span class="font-semibold text-black">{{  store.countBottles }} / 24</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Nombre de casiers</span>
              <span class="font-semibold text-black">{{  store.countCasier }} / 10</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Sous-total</span>
              <span class="font-semibold text-black">{{  store.subtotal.toLocaleString() }} FCFA</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-between">
            <button
             @click="ajouterAuPanier"
              :disabled=" store.countBottles === 0 ||  store.subtotal === 5000"
              class="flex justify-between gap-2 px-4 py-2 transition-colors rounded-full h-fit disabled:opacity-50"
              :class="{
                'text-gray-500 bg-gray-100':  store.countBottles === 0 ||  store.subtotal < 5000,
                'text-black bg-white hover:text-[#b0b0b0] hover:cursor-pointer hover:bg-gray-700':
                  !( store.countBottles === 0 ||  store.subtotal < 5000),
              }"
            >
              Ajouter au panier
              <span>
                <!-- Icône panier -->
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.7085 1.70801H3.37516L5.59183 12.058C5.67314 12.4371 5.88405 12.7759 6.18826 13.0162C6.49246 13.2565 6.87092 13.3833 7.2585 13.3747H15.4085C15.7878 13.3741 16.1556 13.2441 16.451 13.0062C16.7465 12.7683 16.9519 12.4368 17.0335 12.0663L18.4085 5.87467H4.26683"
                    stroke="#b0b0b0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="6.67" cy="17.5" r="0.83" fill="#b0b0b0" />
                  <circle cx="15.83" cy="17.5" r="0.83" fill="#b0b0b0" />
                </svg>
              </span>
            </button>

            <button
              @click=" store.reset"
              class="flex justify-center px-4 py-2 mb-4 text-white bg-red-500 rounded-full hover:bg-red-600"
            >
              Réinitialiser le casier
            </button>
          </div>

          <!-- Notes -->
          <div class="">
            <div
              class="relative flex items-center mt-2 text-xs text-red-500 cursor-default p- group"
            >
              *
              <span class="ml-1 text-black"
                >Constituer au moins un casier ou minimum 5 000 FCFA</span
              >
              <div
                class="absolute z-50 px-2 py-1 mb-1 text-xs text-white transform -translate-x-1/2 bg-red-500 rounded opacity-0 pointer-events-none bottom-full left-1/2 group-hover:opacity-100 whitespace-nowrap"
              >
                Minimum requis pour valider la commande
              </div>
            </div>
            <div
              class="relative flex items-center pb-2 mt-2 text-xs text-red-500 cursor-default group"
            >
              * <span class="ml-1 text-black">1 <sup>ère</sup> CONSIGNATION à 3.600 FCFA</span>
              <div
                class="absolute z-50 px-2 py-1 mb-1 text-xs text-white transform -translate-x-1/2 bg-red-500 rounded opacity-0 pointer-events-none bottom-full left-1/2 group-hover:opacity-100 whitespace-nowrap"
              >
                C’est le prix de la première consignation
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useCasierStore } from '../../stores/casierStore'
import { usePanierStore } from '../../stores/PanierStores'


const store = useCasierStore()
const route = useRoute()
const panierStore = usePanierStore()




onMounted(() => {
  const casierId = route.query.casierId
  if (casierId && typeof casierId === 'string') {
    const casierToEdit = panierStore.casiers.find(c => c.id === casierId)
    if (casierToEdit) {
      // Réinitialiser les quantités dans casierStore
      store.products.forEach(p => p.qty = 0)
      // Remplir avec les produits du casier à modifier
      casierToEdit.products.forEach(p => {
        const productInStore = store.products.find(sp => sp.id === p.id)
        if (productInStore) productInStore.qty = p.qty
      })
    }
  }
})


function ajouterAuPanier() {
  const produitsSelectionnes = store.products.filter(p => p.qty > 0)
  if (produitsSelectionnes.length === 0) {
    alert('Sélectionnez au moins un produit avant d\'ajouter au panier.')
    return
  }

  const casierId = route.query.casierId
  if (casierId && typeof casierId === 'string') {
    // Mise à jour du casier existant
    const index = panierStore.casiers.findIndex(c => c.id === casierId)
    if (index !== -1) {
      panierStore.casiers[index].products = produitsSelectionnes.map(p => ({ ...p }))
      panierStore.casiers[index].qty = 1 // ou autre quantité si gérée
    }
  } else {
    // Ajout d'un nouveau casier
    panierStore.ajouterCasier(produitsSelectionnes, 1)
  }

  store.reset()
}

// function ajouterAuPanier() {
//   const produitsSelectionnes = store.products.filter(p => p.qty > 0)
//   if (produitsSelectionnes.length === 0) {
//     alert('Sélectionnez au moins un produit avant d\'ajouter au panier.')
//     return
//   }
//   panierStore.ajouterCasier(produitsSelectionnes, 1) // ici qty=1 par exemple
//   store.reset() // réinitialiser la sélection après ajout
// }


interface Product {
  id: string
  label: string
  img: string
  cap: string
  price: number
  volume?: string
  qty: number
  type?: 'casier' | 'water' | string
}



// Casier visuel rempli en fonction des quantités
const crateBottles = computed<(Product | null)[]>(() => {
  // eslint-disable-next-line prefer-const
  let flat: (Product | null)[] = []
   store.products.forEach((p) => {
    for (let i = 0; i < p.qty; ++i) flat.push(p)
  })
  while (flat.length < 24) flat.push(null)
  return flat.slice(0, 24)
})
</script>

<style scoped>
.font-cursive {
  font-family: 'Oswald', cursive, sans-serif;
}
/* Masquer scrollbar mais garder le scroll */
.overflow-auto::-webkit-scrollbar {
  display: none;
}
.overflow-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
