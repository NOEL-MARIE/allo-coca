import { ref, computed, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

export type CasierProduct = {
  id: string
  label: string
  img: string
  volume?: string
  cap: string
  price: number
  qty: number
  type?: 'casier'
}

const DEFAULT_PRODUCTS: CasierProduct[] = [
  {
    id: 'coca',
    label: 'Coca-Cola',
    img: new URL('../assets/BoissonGazeuses/coca.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/coca_caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
  {
    id: 'zero',
    label: 'Coca-Cola Zéro',
    img: new URL('../assets/BoissonGazeuses/btlCocaZero.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/Coca Zéro_caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
  {
    id: 'fanta-orange',
    label: 'Fanta Orange',
    img: new URL('../assets/BoissonGazeuses/fanta.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
  {
    id: 'sprite',
    label: 'Sprite',
    img: new URL('../assets/BoissonGazeuses/sprite.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/sprite_Caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
  {
    id: 'fanta-pomme',
    label: 'Fanta Pomme',
    img: new URL('../assets/BoissonGazeuses/fanta pomme 30cl.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
  {
    id: 'fanta-red',
    label: 'Fanta Fruit Red',
    img: new URL('../assets/BoissonGazeuses/fta fruit red 30cl.png', import.meta.url).href,
    volume: '30cl',
    cap: new URL('../assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
    price: 250,
    qty: 0,
    type: 'casier',
  },
]

export const useCasierStore = defineStore('casier', () => {
  const products = ref<CasierProduct[]>([...DEFAULT_PRODUCTS])

  // Hydratation depuis localStorage
  onMounted(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('casierProducts')
      if (saved) {
        try {
          products.value = JSON.parse(saved)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          products.value = [...DEFAULT_PRODUCTS]
        }
      }
    }
  })

  // Persistance automatique
  watch(
    products,
    (newProducts) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('casierProducts', JSON.stringify(newProducts))
      }
    },
    { deep: true }
  )

  // Getters
  const selectedProducts = computed(() => products.value.filter(p => p.qty > 0))
  const countBottles = computed(() => products.value.reduce((sum, p) => sum + p.qty, 0))
  const countCasier = computed(() => Math.ceil(countBottles.value / 24))
  const subtotal = computed(() => products.value.reduce((sum, p) => sum + p.qty * p.price, 0))
  const isFull = computed(() => countBottles.value === 24)

  // Actions
  function increment(product: CasierProduct) {
    if (countBottles.value < 24) {
      product.qty++
      save()
    }
  }
  function decrement(product: CasierProduct) {
    if (product.qty > 0) {
      product.qty--
      save()
    }
  }
  function reset() {
    products.value.forEach(p => (p.qty = 0))
    save()
  }

  // Export method save afin de pouvoir l'appeler dans composants si besoin
  function save() {
    localStorage.setItem('casierProducts', JSON.stringify(products.value))
  }

  return {
    products,
    selectedProducts,
    countBottles,
    countCasier,
    subtotal,
    isFull,
    increment,
    decrement,
    reset,
    save
  }
})
