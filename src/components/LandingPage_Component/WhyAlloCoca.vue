<template>
  <section class="px-4 py-20 text-white bg-black ">
     <div class="absolute z-0 ml-[65%] mt-[10%] hidden md:block maxContainer">
      <svg
        width="428"
        height="349"
        viewBox="0 0 428 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class=""
      >
        <path
          d="M462.191 174.415L368.982 196.212L415.83 279.962L329.164 236.143L327.669 333.165L265.904 257.94L231.095 348.83L196.287 257.94L134.522 333.165L133.027 236.143L46.3612 279.962L93.2084 196.212L0 174.415L93.2084 152.618L46.3612 68.8687L133.027 112.688L134.522 15.6656L196.287 90.8903L231.095 0L265.904 90.8903L327.669 15.6656L329.164 112.688L415.83 68.8687L368.982 152.618L462.191 174.415Z"
          fill="#F11123"
        />
      </svg>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto space-y-5">

      <!-- Titre -->
      <div class="space-y-4 text-center">
        <h2 class="text-3xl font-bold md:text-4xl font-TCCCUnityHeadline">Pourquoi choisir AlloCoca ?</h2>
        <p class="text-white font-inter">La solution la plus simple pour tes boissons</p>
      </div>

      <!-- Avantages -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start p-6 space-x-4 text-black bg-white rounded-xl"
        >
          <div class="text-2xl ">
            <component :is="feature.icon" class="w-8 mb-3 text-black h-14" />
          </div>
          <div>
            <h3 class="mb-1 font-semibold font-inter">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600 font-inter">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="p-8 text-center bg-white rounded-xl">
        <h3 class="mb-2 text-xl font-bold text-black md:text-2xl font-TCCCUnityHeadline">
          Prêt à passer ta première commande ?
        </h3>
        <p class="mb-6 text-gray-600 font-inter">
          Rejoins des milliers de clients satisfaits à Abidjan
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button class="px-6 py-2 text-white transition bg-red-500 rounded-full hover:bg-red-600 font-inter ">
            Commander maintenant
          </button>
          <button class="px-6 py-2 text-black transition border border-black rounded-full hover:bg-gray-100 font-inter">
            Contacter via Whatsapp
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { Truck, ShieldCheck, RefreshCw, MessageCircle } from 'lucide-vue-next'
import Truck from '../../assets/bus.svg'
import ShieldCheck from '../../assets/shield.svg'
import RefreshCw from '../../assets/rotate-ccw.svg'
import MessageCircle from '../../assets/message-circle.svg'
interface Feature {
  title: string
  description: string
  icon: unknown
}

const features: Feature[] = [
  {
    title: 'Livraison gratuite à Abidjan',
    description: 'Aucun frais de livraison, où que tu sois dans la capitale',
    icon: Truck,
  },
  {
    title: 'Paiement simple et sécurisé',
    description: 'Mobile Money accepté, transactions 100% sécurisées',
    icon: ShieldCheck,
  },
  {
    title: 'Casiers consignés, rechargeables',
    description: 'Système écologique, tu paies la consigne une seule fois',
    icon: RefreshCw,
  },
  {
    title: 'Assistance WhatsApp en 1 clic',
    description: 'Une question ? Notre équipe répond instantanément',
    icon: MessageCircle,
  },
]
</script>
