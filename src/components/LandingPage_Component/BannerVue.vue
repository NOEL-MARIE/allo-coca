<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Default_NavBar from '../DefaultNavBar.vue'
const slides = [
  {
    image: new URL('/assets/LandingPage_FirstImage.jpg', import.meta.url).href,
    title: 'Ton casier <br> Coca livré chez <br> toi, sans bouger.',
    button: 'Je commence ma commande',
    buttonLink: '#',
  },
  {
    image: new URL('/assets/LandingPage_SecondImage.png', import.meta.url).href,
    title: 'Ton pack d’eau <br> livré chez toi, <br> sans bouger.',
    button: 'Je commence ma commande',
    buttonLink: '#',
  },
]


const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 5000)
})
</script>

<template>
  <div class="absolute top-0 left-0 z-30 w-full">
    <Default_NavBar />
  </div>

  <section class="relative w-full h-screen overflow-hidden">
    <!-- Slides -->
    <div
      class="flex h-full transition-transform duration-1000 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}vw)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex-shrink-0 w-screen h-full"
      >
        <img :src="slide.image" class="object-cover w-full h-full" alt="Slide image" />
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Text content -->
        <div
          class="absolute inset-0 z-10 flex flex-col items-start justify-center gap-6 px-4 text-white sm:px-8 md:px-20"
        >
          <h1
            v-html="slide.title"
            class="text-2xl sm:text-4xl font-TCCCUnityHeadline text-left md:text-[70px] 2xl:text-[90px] md:mt-96 font-bold max-w-full sm:max-w-[600px] md:max-w-[950px] "
          ></h1>
          <a
            :href="slide.buttonLink"
            class="mt-4 sm:mt-6 gap-2.5 flex bg-red-600 hover:bg-red-700 text-white text-xs items-center  sm:text-xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow"
          >
            <span v-html="slide.button"></span>
            <svg
              width="30"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="md:mt-1 "
            >
              <path
                d="M12.5001 9.16671L11.6667 16.6667M15.8334 9.16671L12.5001 3.33337M1.66675 9.16671H18.3334M2.91675 9.16671L4.25008 15.3334C4.328 15.7155 4.53745 16.0582 4.84199 16.3018C5.14652 16.5455 5.52684 16.6746 5.91675 16.6667H14.0834C14.4733 16.6746 14.8536 16.5455 15.1582 16.3018C15.4627 16.0582 15.6722 15.7155 15.7501 15.3334L17.1667 9.16671M3.75008 12.9167H16.2501M4.16675 9.16671L7.50008 3.33337M7.50008 9.16671L8.33342 16.6667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Overlay Default_NavBar space -->
    <div class="absolute top-0 left-0 z-20 w-full h-20"></div>
  </section>
</template>

<style scoped>
/* Aucun style CSS custom indispensable */
</style>
