<script setup lang="ts">
import Cta_Image from '../../assets/Cta_Image.png';

function startOrderWithoutAccount() {
  // Logique démarrage commande sans compte
  alert('Commencer la commande sans compte');
}

function findOrder() {
  // Logique de recherche de commande
  alert('Retrouver une commande');
}
</script>

<template>
  <section
    class="w-full min-h-[700px] md:min-h-[800px] bg-black flex items-center justify-center px-4 py-12 md:py-24"
  >
    <div
      class="grid items-center w-full grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2"
    >
      <!-- Texte gauche -->
      <div class="max-w-xl mx-auto text-white md:mx-0">
        <h2 class="mb-8 text-4xl font-bold leading-snug font-TCCCUnityHeadline md:text-6xl md:mb-9 md:leading-tight">
          Pas besoin de<br />créer un compte !
        </h2>
        <p class="mb-10 text-base font-light leading-relaxed text-gray-300 md:mb-12 md:text-2xl md:leading-relaxed font-inter">
          Pas envie de perdre du temps ? Commence ta commande en 1 clic, on prendra tes infos plus tard.
        </p>

        <div class="flex flex-col space-y-8 text-base font-inter md:text-xl">
          <button
            @click="startOrderWithoutAccount"
            class="inline-flex items-center font-semibold text-white underline transition hover:text-gray-300 focus:outline-none"
          >
            Commence sans Compte
            <svg
              class="w-6 h- ml-2 stroke-current"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <button
            @click="findOrder"
            class="inline-flex items-center font-semibold text-white underline transition hover:text-gray-300 focus:outline-none"
          >
            Retrouvez une commande
            <svg
              class="w-5 h-5 ml-2 stroke-current"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Image droite -->
      <div class="w-full max-w-md mx-auto md:max-w-none">
        <img
          :src="Cta_Image"
          alt="Personnes partageant un repas"
          class="rounded-lg shadow-lg object-cover w-full h-auto max-h-[600px] md:max-h-[800px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Si besoin, vous pouvez ajouter ici des styles spécifiques */
/* Mais la plupart des styles sont gérés via Tailwind */
</style>
