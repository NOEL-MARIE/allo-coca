<script setup lang="ts">
import cocaImage from '../../assets/BoissonGazeuses/coca.png'
import spriteImage from '../../assets/BoissonGazeuses/sprite.png'
import fantaImage from '../../assets/BoissonGazeuses/fanta.png'
import schweppesImage from '../../assets/BoissonGazeuses/schweppes agrume.png'
import celesteImage from '../../assets/EauMinerales/cel 0.5L.png'
import celestegrandImage from '../../assets/EauMinerales/cel 1L.png'
import celeste5lImage from '../../assets/EauMinerales/cel 17L.png'
import christalineImage from '../../assets/EauMinerales/cris 1.5L.png'
import { ref } from 'vue'

type Product = {
  id: number
  name: string
  image: string
  price: number
  isNew: boolean
}

const tabs = [
  { name: 'Boissons gazeuse', key: 'gazeuse' },
  { name: 'Eaux minérales', key: 'eaux' },
]
const activeTab = ref('gazeuse')

const productsGazeuses: Product[] = [
  { id: 1, name: 'Coca-Cola Classique', image: cocaImage, price: 250, isNew: true },
  { id: 2, name: 'Sprite', image: spriteImage, price: 250, isNew: true },
  { id: 3, name: 'Fanta Orange', image: fantaImage, price: 250, isNew: false },
  { id: 4, name: 'Schweppes Tonique', image: schweppesImage, price: 250, isNew: false },
]

const EauxMinerales: Product[] = [
  { id: 1, name: 'Eau Minérale Cristaline 50cl', image: celesteImage, price: 200, isNew: true },
  { id: 2, name: 'Eau Minérale Evian 1L', image: celestegrandImage, price: 300, isNew: true },
  { id: 3, name: 'Eau Minérale Volvic 1,5L', image: celeste5lImage, price: 350, isNew: false },
  { id: 4, name: 'Eau Minérale Perrier 75cl', image: christalineImage, price: 400, isNew: false },
]

const casier = ref<Product[]>([])

function addToCasier(product: Product) {
  casier.value.push(product)
}

function getProducts() {
  return activeTab.value === 'gazeuse' ? productsGazeuses : EauxMinerales
}

// 🔑 fonction pour définir la bonne tab de destination
function getTabDestination() {
  return activeTab.value === 'gazeuse' ? 'Casiers à composer' : 'Eau Minérale'
}
</script>

<template>
  <section class="w-full px-4 py-16 bg-white">
    <div class="flex flex-col h-full maxContainer">
      <!-- Header + Description -->
      <div class="flex flex-col items-start justify-between pt-12 md:flex-row">
        <h1
          class="w-full mb-6 text-2xl font-bold text-black font-TCCCUnityHeadline md:text-4xl md:mb-0 md:w-2/5"
        >
          Nos produits disponibles
        </h1>
        <div class="w-full text-base text-black md:w-2/4 md:ml-auto md:text-xl">
          <span class="font-inter">
            Compose ton casier comme tu veux ou choisis directement <br />
            un pack prêt à livrer. Des bouteilles fraîches, des prix fixes, <br />
            et la livraison offerte chez toi en 24h&nbsp;!
          </span>
          <div class="font-inter mt-2 flex gap-2.5 items-center">
            <a href="#" class="font-semibold text-black underline transition hover:text-gray-800">
              Configurer mon casier
            </a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16675 9.99105H15.8334M15.8334 9.99105L10.0001 4.15771M15.8334 9.99105L10.0001 15.8244"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Onglets -->
      <div
        class="flex mt-12 space-x-6 overflow-x-auto md:space-x-10 no-scrollbar whitespace-nowrap"
      >
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="activeTab = tab.key"
          :class="[
            'pb-2 text-lg font-medium font-inter duration-200 outline-none whitespace-nowrap',
            activeTab === tab.key ? 'border-b-2 border-black text-black' : 'text-gray-500',
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Grille produits -->
      <div class="flex-1 mt-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="product in getProducts()"
            :key="product.id"
            class="relative flex flex-col p-6 rounded-lg shadow-sm bg-gray-50"
          >
            <span
              v-if="product.isNew"
              class="absolute px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full font-inter top-4 left-4"
            >
              Nouveauté
            </span>
            <img
              :src="product.image"
              :alt="product.name"
              class="object-contain h-48 mb-5 sm:h-72"
            />
            <div class="w-full text-left font-inter">
              <div class="mb-1 text-xl text-gray-500">Casier de 24 bouteilles</div>
              <div class="mb-1 font-bold text-left text-black">{{ product.name }}</div>
              <span class="block mb-1 text-xl text-gray-600">30cl | {{ product.price }} FCFA</span>
            </div>

            <!-- Bouton Ajouter -->
            <button
              class="mt-4 w-[100px] group flex items-center text-black justify-center py-2 px-4 bg-white border border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
              @click="addToCasier(product)"
            >
              <span class="mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5001 9.15755L11.6667 16.6576M15.8334 9.15755L12.5001 3.32422M1.66675 9.15755H18.3334M2.91675 9.15755L4.25008 15.3242C4.328 15.7063 4.53745 16.049 4.84199 16.2927C5.14652 16.5363 5.52684 16.6654 5.91675 16.6576H14.0834C14.4733 16.6654 14.8536 16.5363 15.1582 16.2927C15.4627 16.049 15.6722 15.7063 15.7501 15.3242L17.1667 9.15755M3.75008 12.9076H16.2501M4.16675 9.15755L7.50008 3.32422M7.50008 9.15755L8.33342 16.6576"
                    class="transition duration-300 stroke-black group-hover:stroke-white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Casier
            </button>

            <!-- Lien Voir plus -->
            <RouterLink
              :to="{
                path: '/configurator',
                query: { tab: getTabDestination(), productId: product.id },
              }"
              class="absolute p-2 transition border border-black rounded-full bottom-6 right-6 hover:bg-gray-200 hover:cursor-pointer"
              aria-label="Voir plus"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 9.99105H15.8334M15.8334 9.99105L10.0001 4.15771M15.8334 9.99105L10.0001 15.8244"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
