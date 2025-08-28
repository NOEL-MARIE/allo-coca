<template>
  <section
    class="py-16 flex flex-col items-center maxContainer justify-center px-4 mx-auto min-h-[665px] max-w-[1300px]"
  >
    <div class="w-full">
      <!-- Titre + bouton -->
      <div
        class="flex flex-col gap-4 mb-8 rounded-lg lg:flex-row lg:items-center lg:justify-between lg:gap-0 "
      >
        <h2
          class="text-3xl font-bold text-black font-TCCCUnityHeadline md:text-4xl"
        >
          Ce qu'en disent nos clients
        </h2>
        <button
          class="px-6 py-2 text-white transition bg-red-500 rounded-full hover:bg-red-600 whitespace-nowrap font-inter"
        >
          Je passe ma commande
        </button>
      </div>

      <!-- Liste dynamique des témoignages -->
      <div class="flex justify-center">
        <div
          class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="flex flex-col items-center p-6 bg-[#F6F6F6] rounded-lg text-center shadow-sm"
          >
            <div class="flex justify-center mb-2">
              <StarRating :count="5" />
            </div>
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="object-cover w-16 h-16 mb-4 border border-gray-200 rounded-full"
              loading="lazy"
            />
            <p
              class="mb-2 text-sm leading-relaxed text-gray-700 whitespace-pre-line font-inter"
            >
              {{ testimonial.message }}
            </p>
            <p class="text-sm font-bold text-black md:text-base font-inter">
              {{ testimonial.name }}, {{ testimonial.city }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StarRating from '../../components/StarRating.vue';

interface Testimonial {
  name: string;
  city: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Fatou B.',
    city: 'Yopougon',
    message: `J’ai reçu mon casier en moins de 2h !\nTrès pratique pour mes soirées entre amis.`,
    image: new URL('@/assets/TESTIMONIAL_IMAGE_1 (1).png', import.meta.url).href,
  },
  {
    name: 'Kouassi M.',
    city: 'Cocody',
    message: `C’est trop cool de pouvoir mélanger Coca, Fanta\net Sprite dans le même casier !`,
    image: new URL('@/assets/TESTIMONIAL_IMAGE_1 (2).png', import.meta.url).href,
  },
  {
    name: 'Aya K.',
    city: 'Marcory',
    message: `Service client au top sur WhatsApp. Ils ont\nremplacé une bouteille abîmée le jour même !`,
    image: new URL('@/assets/TESTIMONIAL_IMAGE_1 (3).png', import.meta.url).href,
  },
];
</script>

<style scoped>
/* Aucun style personnalisé nécessaire, tout est géré par Tailwind CSS */
</style>
