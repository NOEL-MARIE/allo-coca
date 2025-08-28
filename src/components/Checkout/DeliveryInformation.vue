<!-- DeliveryInfo.vue -->
<template>
  <div class="h-screen text-black bg-white">
    <div>
      <NavBar />
    </div>
    <main class="flex flex-col items-center mt-24 font-inter">
      <h1 class="flex mb-6 text-3xl font-bold text-left pr-9 font-TCCCUnityHeadline mr-96">
        Mes informations de livraison
      </h1>
      <div class="flex flex-col w-full max-w-4xl gap-8 md:flex-row">
        <!-- Formulaire d'informations -->
        <form class="flex-1 space-y-4 bg-white rounded-md">
          <div>
            <label class="text-xs font-medium">Prénom & Nom</label>
            <div class="relative mt-1">
              <!-- Icône -->
              <svg
                class="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1666 7.33333V5.66667C12.1666 3.36548 10.3011 1.5 7.99992 1.5C5.69873 1.5 3.83325 3.36548 3.83325 5.66667V7.33333M7.99992 11.0833V12.75M5.33325 16.5H10.6666C12.0667 16.5 12.7668 16.5 13.3016 16.2275C13.772 15.9878 14.1544 15.6054 14.3941 15.135C14.6666 14.6002 14.6666 13.9001 14.6666 12.5V11.3333C14.6666 9.9332 14.6666 9.23314 14.3941 8.69836C14.1544 8.22795 13.772 7.8455 13.3016 7.60582C12.7668 7.33333 12.0667 7.33333 10.6666 7.33333H5.33325C3.93312 7.33333 3.23306 7.33333 2.69828 7.60582C2.22787 7.8455 1.84542 8.22795 1.60574 8.69836C1.33325 9.23314 1.33325 9.9332 1.33325 11.3333V12.5C1.33325 13.9001 1.33325 14.6002 1.60574 15.135C1.84542 15.6054 2.22787 15.9878 2.69828 16.2275C3.23306 16.5 3.93312 16.5 5.33325 16.5Z"
                  stroke="#888888"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <!-- Input -->
              <input
                type="text"
                disabled
                value="Ben Youssef Ali"
                class="w-full py-2 pl-10 pr-3 font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label class="text-xs font-medium">Numéro de téléphone</label>
            <input
              type="text"
              value="+225 07 87 995 058"
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label class="text-xs font-medium">Commune</label>
            <select class="w-full px-3 py-2 mt-1 border border-gray-300 rounded">
              <option>-Sélectionnez-</option>
              <!-- Ajouter d'autres options ici -->
            </select>
          </div>
          <div>
            <label class="text-xs font-medium">Adresse de livraison</label>
            <input
              type="text"
              placeholder="Ex: Cocody angré"
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label class="text-xs font-medium">Instructions de livraison (optionnel)</label>
            <textarea
              rows="4"
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded resize-none"
            ></textarea>
          </div>
        </form>
        <!-- Résumé de la commande -->
        <div
          class="flex flex-col gap-3 px-6 py-6 rounded-md bg-gray-50 md:w-96 w-[400px] h-[308px]"
        >
          <h2 class="mb-2 text-lg font-semibold">Résumé de la commande</h2>
          <ul class="mb-2 text-sm">
            <li>
              <span class="font-bold text-[#EF2D34]"> 🥤 Casier</span>
              <span class="pl-2 text-gray-600">Coca x12, Fanta x6, Sprite x6</span>
            </li>
            <li>
              <span class="font-bold text-blue-600">💧 Packs</span>
              <span class="pl-2 text-gray-600">Eau naturelle x1, Citron x1</span>
            </li>
          </ul>
          <div class="flex items-center justify-between pt-3 mt-3 border-t">
            <span class="font-medium text-gray-700">Total à payer</span>
            <span class="text-lg font-bold text-black">28 200 FCFA</span>
          </div>
          <RouterLink to="OrderConfirmation">
            
              <button
                class="w-full mt-4 bg-[#F11123] text-white rounded-full py-3  hover:bg-red-600"
              >
                Valiser ma commande
              </button>
          </RouterLink>
          <button class="w-full pb-0 mt-2 text-sm text-gray-700 underline hover:text-red-500">
            Retourner au panier
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/configurator/ConfigNavbar.vue'
import { RouterLink } from 'vue-router';

// Script logic can be filled here (form handling, etc.)
</script>
