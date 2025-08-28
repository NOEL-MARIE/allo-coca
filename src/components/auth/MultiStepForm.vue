<template>
  <div class="fixed w-screen h-screen">
    <NavBar />
    <div class="flex flex-col items-center justify-center h-screen bg-white">
      <!-- Progression -->
      <div
        class="fixed left-0 right-0 flex items-center justify-center mb-8 space-x-4 text-black top-40"
      >
        <template v-for="(stepLabel, index) in steps" :key="index">
          <div class="flex flex-col items-center">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full"
              :class="currentStep === index ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'"
            >
              {{ index + 1 }}
            </div>
            <p class="mt-1 text-sm">{{ stepLabel }}</p>
          </div>
          <div v-if="index < steps.length - 1" class="w-12 h-1 bg-gray-300"></div>
        </template>
      </div>

      <!-- Étapes -->
      <transition name="fade" mode="out-in">
        <component :is="stepsComponent[currentStep]" @nextStep="goNext" @prevStep="goPrev" />
      </transition>

      <!-- Dev next step button -->
      <button
        @click="goNext"
        class="px-4 py-2 mt-8 text-sm text-white bg-black rounded hover:bg-gray-800"
      >
        Passer à l'étape suivante (Dev)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './NavAuth.vue'
import StepOneRegister from './stepOneRegister.vue'
import StepTwoLogin from './stepTwoLogin.vue'
// import StepThreeOtp from './StepThreeOtp.vue'

// const steps = ['Créer un compte', 'Connexion', 'Vérification']
const steps = ['Créer un compte', 'Connexion']
// const stepsComponent = [StepOneRegister, StepTwoLogin, StepThreeOtp]
const stepsComponent = [StepOneRegister, StepTwoLogin]

const currentStep = ref(0)

const goNext = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++
}
const goPrev = () => {
  if (currentStep.value > 0) currentStep.value--
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
