<template>
  <div class="w-full max-w-md mb-24 text-black">
    <h1 class="mb-2 text-3xl font-bold text-center font-TCCCUnityHeadline">
      Connexion à votre espace
    </h1>
    <p class="mb-8 text-center text-gray-500">
      Accédez à votre espace pour finaliser votre commande <br /> ou
      consulter vos précédents casiers.
    </p>
    <!-- Téléphone -->
    <div>
      <label class="block mb-2 text-sm font-medium font-inter">
        Numéro de téléphone
      </label>
      <div class="flex">
        <span class="px-3 py-2 font-bold border rounded-l-md">+225</span>
        <input
          v-model="phone"
          type="text"
          maxlength="10"
          @input="limitPhone"
          placeholder="00 00 000 000"
          class="w-full px-3 py-2 border rounded-r-md focus:ring-2 focus:ring-red-500"
          :class="{ 'border-red-500': phoneError }"
        />
      </div>
      <p v-if="phoneError" class="mt-1 text-sm text-red-500">{{ phoneError }}</p>
    </div>
    <div class="mt-6 space-y-3">
      <button
        @click="handleLogin"
        :disabled="loading"
        class="w-full py-2 text-white bg-red-600 rounded-full hover:bg-red-700 disabled:opacity-50"
      >
        {{ loading ? 'Connexion...' : 'Se connecter' }}
      </button>
      <p class="text-sm text-center text-gray-500">
        Pas encore de compte ?
        <span
          @click="$emit('prevStep')"
          class="font-bold text-black underline cursor-pointer"
          >Rejoindre la famille</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const phone = ref('')
const loading = ref(false)
const phoneError = ref('')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['nextStep', 'prevStep'])
const router = useRouter()

const limitPhone = () => {
  phone.value = phone.value.replace(/\D/g, '').slice(0, 10)
}

const handleLogin = () => {
  phoneError.value = ''

  if (phone.value.length !== 10) {
    phoneError.value = 'Le numéro doit contenir exactement 10 chiffres'
    return
  }

  loading.value = true
  setTimeout(() => {
    loading.value = false

    // Stockage simple dans localStorage pour simuler "connexion"
    localStorage.setItem('auth_token', phone.value)

    router.push({ name: 'myorders' })
  }, 1500)
}
</script>
