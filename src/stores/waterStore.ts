// src/stores/waterStore.ts
import { defineStore } from 'pinia'
import { watch } from 'vue'

export const useWaterStore = defineStore('water', {
  state: () => ({
    waters: JSON.parse(localStorage.getItem('waterProducts') || 'null') || [
      {
        id: 'celeste-15',
        label: 'Céleste Naturelle 1.5L',
        img: new URL('../assets/EauMinerales/cel 1.5L.png', import.meta.url).href,
        volume: '1.5L',
        price: 275,
        qty: 0,
        type: 'water',
      },
      {
        id: 'celeste-1',
        label: 'Céleste Naturelle 1L',
        img: new URL('../assets/EauMinerales/cel 1L.png', import.meta.url).href,
        volume: '1L',
        price: 175,
        qty: 0,
        type: 'water',
      },
      {
        id: 'celeste-05',
        label: 'Céleste Naturelle 0.5L',
        img: new URL('../assets/EauMinerales/cel 0.5L.png', import.meta.url).href,
        volume: '0.5L',
        price: 110,
        qty: 0,
        type: 'water',
      },
      {
        id: 'celeste-17',
        label: 'Céleste 17L',
        img: new URL('../assets/EauMinerales/cel 17L.png', import.meta.url).href,
        volume: '17L',
        price: 1750,
        qty: 0,
        type: 'water',
      },
      {
        id: 'cristaline-15',
        label: 'Cristaline 1.5L',
        img: new URL('../assets/EauMinerales/cel 1.5L.png', import.meta.url).href,
        volume: '1.5L',
        price: 250,
        qty: 0,
        type: 'water',
      },
    ],
  }),

  getters: {
    selectedWaters: (state) => state.waters.filter((w: { qty: number; }) => w.qty > 0),

    subtotal: (state) => state.waters.reduce((s: number, w: { qty: number; price: number }) => s + w.qty * w.price, 0),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    countWaters: (state) => state.waters.reduce((s: any, w: { qty: any; }) => s + w.qty, 0),
  },

  actions: {
    increment(water: { qty: number }) {
      water.qty++
      this.save()
    },
    decrement(water: { qty: number }) {
      if (water.qty > 0) {
        water.qty--
        this.save()
      }
    },
    save() {
      localStorage.setItem('waterProducts', JSON.stringify(this.waters))
    },
    reset() {
      this.waters.forEach((w: { qty: number; }) => (w.qty = 0))
      this.save()
    },
  },
})

export function initWaterStoreWatcher(store: ReturnType<typeof useWaterStore>) {
  watch(
    () => store.waters,
    () => store.save(),
    { deep: true }
  )
}
