<template>
  <div class="w-full max-w-md text-black">
    <h1 class="mb-2 text-2xl font-bold text-center font-TCCCUnityHeadline">Vérifie ton numéro</h1>
    <p class="mb-6 text-center text-gray-500">Un code à 6 chiffres vient d’être <br> envoyé par SMS.</p>

    <!-- Champs OTP avec SVG placeholder -->
    <div class="flex justify-center mb-4 space-x-3">
      <div
        v-for="(digit, index) in otp"
        :key="index"
        class="relative flex "
      >
        <!-- SVG placeholder -->
         
        <svg
          v-if="!otp[index]"
          class="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2"
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          color="#D1D1D1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0193 27.468C9.64327 27.468 7.56727 26.916 5.79127 25.812C4.03927 24.708 2.68327 23.148 1.72327 21.132C0.787266 19.092 0.319266 16.728 0.319266 14.04C0.319266 11.352 0.787266 9 1.72327 6.984C2.68327 4.944 4.03927 3.372 5.79127 2.268C7.56727 1.164 9.64327 0.611999 12.0193 0.611999C14.3953 0.611999 16.4593 1.164 18.2113 2.268C19.9633 3.372 21.3073 4.944 22.2433 6.984C23.2033 9 23.6833 11.352 23.6833 14.04C23.6833 16.728 23.2033 19.092 22.2433 21.132C21.3073 23.148 19.9633 24.708 18.2113 25.812C16.4593 26.916 14.3953 27.468 12.0193 27.468ZM12.0193 23.184C14.1073 23.184 15.7633 22.368 16.9873 20.736C18.2353 19.08 18.8593 16.848 18.8593 14.04C18.8593 11.232 18.2353 9.012 16.9873 7.38C15.7633 5.724 14.1073 4.896 12.0193 4.896C9.90727 4.896 8.22727 5.724 6.97927 7.38C5.75527 9.012 5.14327 11.232 5.14327 14.04C5.14327 16.848 5.75527 19.08 6.97927 20.736C8.22727 22.368 9.90727 23.184 12.0193 23.184Z"
            fill="#D1D1D1"
          />
        </svg>

        <!-- Champ OTP -->
        <input
          v-model="otp[index]"
          maxlength="1"
          inputmode="numeric"
          class="text-xl text-center border rounded-md w-18 h-18 focus:outline-none focus:ring-2 focus:ring-red-500"
          @input="focusNext(index)"
        />
      </div>

    </div>

    <!-- Resend -->
    <div class="flex flex-col justify-center mb-4 text-center">
      <span class="mb-5 mr-2 text-gray-500">Code reçu par SMS</span>
      <button
        class="w-full py-2 text-black border rounded-full hover:cursor-pointer hover:bg-gray-200 disabled:opacity-50"
        :disabled="timer > 0"
        @click="resendCode"
      >
        {{ timer > 0 ? `Renvoyer le code dans  ${timer}s` : 'Renvoyer le code' }}
      </button>
    </div>

    <!-- Valider -->
    <button
      @click="validateOtp"
      :disabled="loading || otp.join('').length < 6"
      class="w-full py-2 text-white bg-red-600 rounded-full hover:cursor-pointer hover:bg-red-700 disabled:opacity-50"
    >
      {{ loading ? 'Vérification...' : 'Valider' }}
    </button>

    <p class="text-sm text-center mt-11">
      Tu as déjà commandé ?
      <span class="font-bold text-black underline cursor-pointer">Clique ici pour ton historique</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const otp = ref<string[]>(['','','','','',''])
const loading = ref(false)
const timer = ref(0)
let interval: number | null = null


const focusNext = (index: number) => {
  if (otp.value[index].length === 1 && index < otp.value.length - 1) {
    const nextInput = document.querySelectorAll<HTMLInputElement>('input')[index + 1]
    nextInput?.focus()
  }
}

const resendCode = () => {
  timer.value = 45
  if (interval) clearInterval(interval)
  interval = setInterval(() => {
    if (timer.value > 0) timer.value--
    else if (interval) clearInterval(interval)
  }, 1000)
}

const validateOtp = () => {
  if (otp.value.join('').length < 6) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
    alert('Code validé !')
  }, 2000)
}
</script>
