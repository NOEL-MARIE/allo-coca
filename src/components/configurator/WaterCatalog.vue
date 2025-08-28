<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="flex justify-center w-screen items-cente font-inter">
    <div class="flex WaterCatalogueContainer">
      <div class="grid items-center justify-center grid-cols-4 text-black gap-x-5">
        <div
          v-for="(product, index) in waterStore.waters"
          :key="product.id"
          class="relative flex flex-col items-center p-2 text-center bg-[#F6F6F6] rounded-lg"
        >
          <div
            v-if="product.badge"
            class="absolute px-2 text-xs font-semibold text-white bg-red-600 rounded-full select-none font-inter top-4 left-4"
          >
            {{ product.badge }}
          </div>

          <img :src="product.img" :alt="product.label" class="h-[220px] mb-2 object-contain" />

          <div class="w-full text-xs text-start">
            <p class="m-0 text-[#888888]">Pack de {{ product.volume }}</p>
            <p class="font-semibold mb-1 min-h-[38px] break-words">
              {{ product.label }}
            </p>
            <p class="m-0">
              <span class="text-[#888888]">{{ product.volume }}</span>
              | {{ product.price.toLocaleString() }} FCFA
            </p>
            <div class="mt-4">
              <div
                class="flex items-center justify-between gap-2 w-[278px] px-1.5 h-[40px] bg-gray-100 rounded-4xl"
              >
                <!-- bouton - -->
                <button
                  @click="waterStore.decrement(product)"
                  class="flex items-center justify-center w-8 h-8 font-bold border border-black rounded-full select-none hover:cursor-pointer"
                  :disabled="product.qty === 0"
                  :class="{
                    'bg-gray-200 border-none text-gray-100 cursor-not-allowed': product.qty === 0,
                    'bg-white border border-black hover:bg-red-700': product.qty > 0,
                  }"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.1665 9.99121H15.8332"
                      stroke="#888888"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <!-- compteur -->
                <span class="min-w-[20px] font-bold text-sm">
                  {{ product.qty }}
                </span>

                <!-- bouton + -->
                <button
                  @click="waterStore.increment(product)"
                  class="flex items-center justify-center w-8 h-8 text-white bg-red-600 rounded-full select-none Wfont-bold hover:bg-red-700 hover:cursor-pointer"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.6665 9.99154H16.3332M10.4998 4.1582V15.8249"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWaterStore } from '@/stores/waterStore'

const waterStore = useWaterStore()
</script>
