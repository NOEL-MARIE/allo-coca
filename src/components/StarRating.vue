<template>
  <div class="flex space-x-1 text-yellow-400 text-xl">
    <span v-for="i in count" :key="i">★</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>
