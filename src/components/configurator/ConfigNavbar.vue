<template>
  <header
    class="flex items-center justify-between w-full px-6 py-4 text-black bg-white shadow-xl/10 sm:px-10 md:px-16"
  >
    <!-- Logo -->
    <router-link to="/">
      <div class="text-xl font-extrabold cursor-pointer select-none">
        <div class="flex gap-2 mt-1">
          <img src="/assets/config_Home.gif" alt="Logo" class="h-8 md:h-10 bg-noi" />
          <img src="/assets/Logo Allo Cola.png" alt="Logo" class="h-8 md:h-10 bg-noi" />
        </div>
      </div>
    </router-link>
    <!-- Menu desktop -->
    <nav class="hidden space-x-8 tracking-wide font-inter font-xssemibold text- md:flex">
      <router-link to="/" class="text-xl hover:underline">
        <p class="text-lg hover:underline">Accueil</p>
      </router-link>
      <router-link to="/my-orders" class="text-xl hover:underline">
        <p class="text-lg hover:underline">Mes commandes</p>
      </router-link>
      <router-link to="/configurator" class="text-xl hover:underline">
        <p class="text-lg hover:underline">Contactez-nous</p>
      </router-link>
    </nav>

    <!-- Icone burger mobile -->
    <router-link to="/Authentification">
      <button
        aria-label="Panier"
        class="p-2 rounded-full border cursor-pointer border-[#F11123] bg-[#F11123] hover:text-[#7C6E65] transition-colors ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.61h9.72a1 1 0 0 0 .98-.79l1.38-7.45H6"></path>
        </svg>
      </button>
    </router-link>

    <!-- Icone panier -->
  </header>

  <!-- Menu mobile déroulant -->
  <nav
    v-if="isMenuOpen"
    class="fixed left-0 right-0 z-40 flex flex-col px-6 py-6 space-y-4 text-white bg-black font-inter top-16 bg-opacity-70 backdrop-blur-md md:hidden"
  >
    <router-link to="/my-orders" class="text-xl hover:underline">
      <p class="text-lg hover:underline">Mes commandes</p>
    </router-link>
    <router-link to="/configurator" class="text-xl hover:underline">
      <p class="text-lg hover:underline">Contactez-nous</p>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
/* Rien de spécial ici, tout est géré via Tailwind */
</style>
