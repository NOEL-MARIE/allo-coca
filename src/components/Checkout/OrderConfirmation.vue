<!-- OrderConfirmation.vue -->
<template>
  <NavBar/>
  <div class="flex flex-col items-center justify-center min-h-screen text-black bg-white font-inter">

    <main class="flex flex-col items-center w-full mt-10">
      <div class="w-[360px] bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
        <img
          src="@/assets/img_success-coca.png"
          alt="Coca Cola"
          class="h-24 mx-auto mb-2"
        />
        <h2 class="mb-1 text-lg font-semibold">🎉 Commande validée avec succès !</h2>
        <p class="mb-4 text-sm text-gray-600">
          Ton casier est en route. Tu recevras un SMS dans quelques instants pour confirmer la livraison.
        </p>
        <div class="w-full p-4 mb-4 rounded bg-gray-50">
          <div class="flex justify-between text-sm">
            <span class="font-medium text-gray-800">Numéro de commande</span>
            <span class="font-bold text-gray-700">#AC-2030</span>
          </div>
          <div class="flex justify-between mt-2 text-sm">
            <span class="font-medium text-gray-800">Contenu résumé</span>
            <span class="font-bold text-gray-700">1 casier / 2 packs</span>
          </div>
          <div class="flex justify-between mt-2 text-sm">
            <span class="font-medium text-gray-800">Montant total</span>
            <span class="font-bold text-gray-700">9 600 FCFA</span>
          </div>
          <div class="mt-3 text-xs text-left text-gray-400">Paiement à la livraison</div>
        </div>
        <button class="w-full mt-2 bg-[#EF2D34] text-white rounded-full py-3 font-semibold hover:bg-red-600">
          Commander à nouveau
        </button>
        <button class="w-full mt-2 text-sm text-gray-700 underline hover:text-red-500">
          Voir mon historique
        </button>
      </div>
      <p class="mt-4 text-xs text-gray-600">
        Tu n’as pas reçu ton SMS ? 
        <a href="#" class="underline text-[#000000] ml-1">Clique ici pour recevoir un nouveau récapitulatif.</a>
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/configurator/ConfigNavbar.vue"
// Script logic can be filled here (redirection logic, etc.)
</script>
