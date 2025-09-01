import { defineStore } from 'pinia'
import { watch } from 'vue'

export type FullCasierProduct = {
  id: string
  prodduts: CasierProduct[]
  qty: number
}

// import { v4 as uuidv4 } from 'uuid'

// function ajouterCasier(products: CasierProduct[], qty: number) {
//   this.casiers.push({
//     id: uuidv4(),
//     products: products.map(p => ({ ...p })),
//     qty
//   })
// }

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

export const useCasierStore = defineStore('casier', {
  state: () => ({
    products: (JSON.parse(localStorage.getItem('casierProducts') || '[]') as CasierProduct[]) || [
      {
        id: 'coca',
        label: 'Coca-Cola',
        img: new URL('../../public/assets/BoissonGazeuses/coca.png', import.meta.url).href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/coca_caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
      {
        id: 'zero',
        label: 'Coca-Cola Zéro',
        img: new URL('../../public/assets/BoissonGazeuses/btlCocaZero.png', import.meta.url).href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/Coca Zéro_caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
      {
        id: 'fanta-orange',
        label: 'Fanta Orange',
        img: new URL('../../public/assets/BoissonGazeuses/fanta.png', import.meta.url).href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
      {
        id: 'sprite',
        label: 'Sprite',
        img: new URL('../../public/assets/BoissonGazeuses/sprite.png', import.meta.url).href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/sprite_Caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
      {
        id: 'fanta-pomme',
        label: 'Fanta Pomme',
        img: new URL('../../public/assets/BoissonGazeuses/fanta pomme 30cl.png', import.meta.url)
          .href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
      {
        id: 'fanta-red',
        label: 'Fanta Fruit Red',
        img: new URL('../../public/assets/BoissonGazeuses/fta fruit red 30cl.png', import.meta.url)
          .href,
        volume: '30cl',
        cap: new URL('../../public/assets/CapsBoissons/fanta_caps.png', import.meta.url).href,
        price: 250,
        qty: 0,
        type: 'casier',
      },
    ],
  }),

  getters: {
    selectedProducts: (state) => state.products.filter((p) => p.qty > 0),

    countBottles: (state) => state.products.reduce((sum, p) => sum + p.qty, 0),

    countCasier: (state) => Math.ceil(state.products.reduce((sum, p) => sum + p.qty, 0) / 24),

    subtotal: (state) => state.products.reduce((sum, p) => sum + p.qty * p.price, 0),

    isFull: (state): boolean => {
      return state.products.reduce((sum, p) => sum + p.qty, 0) === 24
    },
  },

  actions: {
    increment(product: CasierProduct) {
      if (this.countBottles < 24) {
        product.qty++
        this.save()
      }
    },
    decrement(product: CasierProduct) {
      if (product.qty > 0) {
        product.qty--
        this.save()
      }
    },
save() {
  const data = this.products.map(({ id, qty }) => ({ id, qty }))
  localStorage.setItem('casierProducts', JSON.stringify(data))
},

reset() {
  this.products.forEach(p => p.qty = 0)
  this.save()
},
  },
})

// Auto-sauvegarde
export function initCasierStoreWatcher(store: ReturnType<typeof useCasierStore>) {
  watch(
    () => store.products,
    () => store.save(),
    { deep: true },
  )
}
