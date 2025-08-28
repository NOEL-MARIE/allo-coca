<script setup lang="ts">
import { ref } from 'vue'
import ImageCeleste from '../../assets/EauMinerales/pack celeste.png'
import ImageCoca_Casier from '../../assets/BoissonGazeuses/ImageCoca_Casier.png'
import ImageBouteille_Gazeuse from '../../assets/BoissonGazeuses/ImageBouteille_Gazeuse.png'

type OrderType = {
  id: number
  title: string
  description: string
  callToAction: string
  imgSrc: string
  ctaLink: string
}

const orders = ref<OrderType[]>([
  {
    id: 1,
    title: 'Casiers complets',
    description:
      'Choisis directement un casier pré-rempli (24 bouteilles) : Coca-Cola, Fanta, Sprite...',
    callToAction: 'Voir les casiers',
    imgSrc: ImageCoca_Casier,
    ctaLink: '#',
  },
  {
    id: 2,
    title: 'Casiers à composer',
    description:
      'Compose ton casier bouteille par bouteille. Tu choisis ce que tu veux, comme tu veux.',
    callToAction: 'Composer mon casier',
    imgSrc: ImageBouteille_Gazeuse,
    ctaLink: '#',
  },
  {
    id: 3,
    title: "Packs d'eau",
    description: "Commandes en pack d'eaux (Céleste, Cristalline, Awa)",
    callToAction: "Voir les pack d'eau",
    imgSrc: ImageCeleste,
    ctaLink: '#',
  },
])
</script>

<template>
  <div class="flex min-h-[825px] w-screen items-center justify-center bg-white p-4 md:p-0">
    <section class="w-full px-4 py-8 mx-auto maxContainer sm:px-6 md:py-12">
      <h2
        class="mb-3 text-3xl font-bold tracking-tight text-center text-black font-TCCCUnityHeadline sm:text-4xl md:text-5xl"
      >
        Vos types de commande
      </h2>
      <p
        class="max-w-3xl mx-auto mb-12 text-base leading-relaxed text-center text-black sm:text-xl md:text-2xl font-inter"
      >
        Trois façons simples de commander tes boissons préférées
      </p>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <article
          v-for="order in orders"
          :key="order.id"
          class="flex flex-col overflow-hidden shadow-lg rounded-3xl"
        >
          <img
            :src="order.imgSrc"
            :alt="order.title"
            class="w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] object-cover"
            loading="lazy"
          />
          <div class="flex flex-col justify-between flex-1 p-5 text-white bg-red-600 font-inter">
            <h3 class="mb-3 text-lg font-bold leading-snug sm:text-xl ">
              {{ order.title }}
            </h3>
            <p class="mb-5 text-sm leading-relaxed sm:text-base">
              {{ order.description }}
            </p>
            <a
              :href="order.ctaLink"
              class="flex items-center font-semibold text-white underline transition inline-bloc hover:text-red-300"
            >
              {{ order.callToAction }}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 9.99105H15.8334M15.8334 9.99105L10.0001 4.15771M15.8334 9.99105L10.0001 15.8244"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
