import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useWaterStore = defineStore('water', () => {
  const waters = ref(
    JSON.parse(localStorage.getItem('waterProducts') || 'null') || [
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
    ]
  )

  const selectedWaters = computed(() => waters.value.filter(w => w.qty > 0))

  const subtotal = computed(() => waters.value.reduce((sum, w) => sum + w.qty * w.price, 0))

  const countWaters = computed(() => waters.value.reduce((sum, w) => sum + w.qty, 0))

  function increment(water: { qty: number }) {
    water.qty++
    save()
  }

  function decrement(water: { qty: number }) {
    if (water.qty > 0) {
      water.qty--
      save()
    }
  }

  function save() {
    localStorage.setItem('waterProducts', JSON.stringify(waters.value))
  }

  function reset() {
    waters.value.forEach(w => (w.qty = 0))
    save()
  }

  // Synchroniser waters avec stockage local automatiquement
  watch(
    waters,
    () => save(),
    { deep: true }
  )

  return {
    waters,
    selectedWaters,
    subtotal,
    countWaters,
    increment,
    decrement,
    save,
    reset,
  }
})
