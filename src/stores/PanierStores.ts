import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

// Importer le type CasierProduct si besoin
import type { CasierProduct } from './casierStore'

export type CasierProduit = {
  id: string
  products: CasierProduct[]
  qty: number
  label: string
}

export const usePanierStore = defineStore('panier', () => {
  const casiers = ref<CasierProduit[]>([])

  const totalCasiers = computed(() =>
    casiers.value.reduce((sum, casier) => sum + casier.qty, 0)
  )

  const totalBouteilles = computed(() =>
    casiers.value.reduce(
      (sum, casier) =>
        sum +
        casier.products.reduce((sumP, p) => sumP + p.qty * casier.qty, 0),
      0
    )
  )

  function ajouterCasier(products: CasierProduct[], qty: number, label: string) {
    if (qty <= 0) return
    casiers.value.push({
      id: uuidv4(),
      products: products.map((p) => ({ ...p })), // copie des produits
      qty,
      label,
    })
  }

  function supprimerCasier(id: string) {
    casiers.value = casiers.value.filter((c) => c.id !== id)
  }

  function viderPanier() {
    casiers.value = []
  }

  return {
    casiers,
    totalCasiers,
    totalBouteilles,
    ajouterCasier,
    supprimerCasier,
    viderPanier,
  }
})
