import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid' // pour générer un id unique (installer uuid)

// Importer le type CasierProduct si besoin
import type { CasierProduct } from './casierStore'

export type CasierProduit = {
  id: string
  products: CasierProduct[]
  qty: number
}

export const usePanierStore = defineStore('panier', {
  state: () => ({
    casiers: [] as CasierProduit[],
  }),
  getters: {
    totalCasiers: (state) =>
      state.casiers.reduce((sum, casier) => sum + casier.qty, 0),
    // Calcul du total des bouteilles dans tous les casiers
    totalBouteilles: (state) =>
      state.casiers.reduce(
        (sum, casier) =>
          sum +
          casier.products.reduce((sumP, p) => sumP + p.qty * casier.qty, 0),
        0
      ),
  },
  actions: {
    ajouterCasier(products: CasierProduct[], qty: number) {
      if (qty <= 0) return
      this.casiers.push({
        id: uuidv4(),
        products: products.map(p => ({ ...p })), // copie des produits
        qty,
      })
    },
    supprimerCasier(id: string) {
      this.casiers = this.casiers.filter(c => c.id !== id)
    },
    viderPanier() {
      this.casiers = []
    },
  },
})
