<template>
  <section class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-md p-8 rounded-xl">
      <!-- Titre -->
      <h2 class="text-2xl font-bold text-center text-gray-900">Créer un compte</h2>
      <p class="mb-6 text-center text-black">
        Remplissez les informations ci-dessous pour finaliser votre commande.
      </p>

      <!-- Formulaire -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Nom et prénom -->
        <div>
          <label class="block mb-1 text-sm font-medium text-black">Votre nom et prénom</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Entrez votre nom" 
            class="w-full px-3 py-2 placeholder-black border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <!-- Téléphone -->
        <div class="w-full max-w-md">
          <!-- Label -->
          <label for="phone" class="block mb-1 text-sm font-medium text-gray-700">
            Numéro de téléphone
          </label>

          <!-- Input group -->
          <div
            class="flex items-stretch overflow-hidden border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500"
          >
            <!-- Prefix +225 -->
            <span
              class="flex items-center px-3 font-medium text-gray-800 bg-white border-r border-gray-300 select-none sm:px-4"
            >
              +225
            </span>

            <!-- Digits input -->
            <input
              id="phone"
              :value="displayValue"
              @input="onInput"
              inputmode="numeric"
              autocomplete="tel"
              placeholder="00 00 00 00 00"
              class="w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white outline-none sm:px-4"
            />
          </div>

          <!-- Helper text -->
          <p class="mt-1 text-sm text-gray-500">Un code de vérification vous sera envoyé</p>
        </div>

        <!-- Confirmation Téléphone
        <div>
          <label class="block mb-1 text-sm font-medium text-black">Confirmez votre numéro</label>
          <input
            v-model="form.confirmPhone"
            type="tel"
            placeholder="+225 00 00 00 00"
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <span v-if="errors.confirmPhone" class="text-sm text-red-500">{{ errors.confirmPhone }}</span>
        </div> -->

        <!-- Email -->
        <div>
          <label class="block mb-1 text-sm font-medium text-black">Adresse email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="exemple@email.com"
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <span v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</span>
        </div>

        <!-- Confirmation Email -->
        <div>
          <label class="block mb-1 text-sm font-medium text-black">Confirmez votre email</label>
          <input
            v-model="form.confirmEmail"
            type="email"
            placeholder="Confirmez votre email"
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <span v-if="errors.confirmEmail" class="text-sm text-red-500">{{
            errors.confirmEmail
          }}</span>
        </div>

        <!-- Boutons -->
        <button
          type="submit"
          class="w-full py-2 font-semibold text-white transition bg-red-600 rounded-full hover:bg-red-700"
        >
          Rejoindre la famille
        </button>

        <button
          type="button"
          class="w-full py-2 font-semibold text-gray-700 transition border border-gray-500 rounded-full hover:bg-gray-100"
        >
          J’ai déjà un compte
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

/**
 * v-model support (digits only, without +225)
 */
const modelValue = defineModel<string>({ default: '' }) // requires Vue 3.4+. If <3.4, replace with props/emit.

const rawDigits = ref(modelValue.value) // keep only the 10 digits after +225

watch(modelValue, (v) => {
  // external changes
  rawDigits.value = (v || '').replace(/\D/g, '').slice(0, 10)
})

const displayValue = computed(() => {
  // format as 00 00 00 00 00
  const d = rawDigits.value.padEnd(10, ' ')
  return `${d.slice(0, 2)} ${d.slice(2, 4)} ${d.slice(4, 6)} ${d.slice(6, 8)} ${d.slice(8, 10)}`.trimEnd()
})

function onInput(e: Event) {
  const t = e.target as HTMLInputElement
  // keep only digits and limit to 10
  const digits = t.value.replace(/\D/g, '').slice(0, 10)
  rawDigits.value = digits
  modelValue.value = digits
}

const form = reactive({
  name: '',
  phone: '',
  confirmPhone: '',
  email: '',
  confirmEmail: '',
})

const errors = reactive({
  phone: '',
  confirmPhone: '',
  email: '',
  confirmEmail: '',
})

const validatePhone = (phone: string) => {
  const regex = /^\+225\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/
  return regex.test(phone)
}

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleSubmit = () => {
  // Reset erreurs
  errors.phone = ''
  errors.confirmPhone = ''
  errors.email = ''
  errors.confirmEmail = ''

  let valid = true

  // Validation téléphone
  if (!validatePhone(form.phone)) {
    errors.phone = 'Le numéro doit être au format +225 xx xx xx xx'
    valid = false
  }
  if (form.phone !== form.confirmPhone) {
    errors.confirmPhone = 'Les numéros ne correspondent pas'
    valid = false
  }

  // Validation email
  if (!validateEmail(form.email)) {
    errors.email = "L'adresse email est invalide"
    valid = false
  }
  if (form.email !== form.confirmEmail) {
    errors.confirmEmail = 'Les emails ne correspondent pas'
    valid = false
  }

  if (valid) {
    alert('Formulaire valide ✅')
    // Ici vous pouvez envoyer les données vers votre backend
  }
}
</script>
