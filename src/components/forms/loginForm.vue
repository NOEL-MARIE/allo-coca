<!-- src/components/HelloWorld.vue -->
<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-purple-600">Hello Vue 3 🚀</h1>
    <p class="mt-2 text-gray-700">Message : {{ message }}</p>

    <button
      @click="changeMessage"
      class="px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
    >
      Changer le message
    </button>
  </div>
</template>

<script setup lang="ts">
// état réactif
import { ref } from 'vue'

const message = ref('Bienvenue dans Vue.js !')

// méthode
const changeMessage = () => {
  message.value = 'Le message a changé 🎉'
}
</script>

<style scoped>
/* Styles locaux uniquement à ce composant */
</style>
