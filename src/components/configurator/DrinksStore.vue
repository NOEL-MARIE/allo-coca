<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class=" app">
    <Navbar />
    <NavigationTabs :active="activeTab" @change="activeTab = $event" />
    <div class="container">
      <component :is="tabComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Navbar from './ConfigNavbar.vue'
import NavigationTabs from '../configurator/NavigationTabs.vue'
import ComposeCrate from '../configurator/ComposeCrate.vue'
import FullCrates from '../configurator/FullCrates.vue'
import WaterCatalog from '../configurator/WaterCatalog.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// onglet actif (par défaut "Casiers à composer")
const activeTab = ref<string>(
  (route.query.tab as string) || 'Casiers complets'
)

// garde la query synchro si on change d’onglet depuis la nav
watch(activeTab, (newTab) => {
  router.replace({ query: { ...route.query, tab: newTab } })
})

const tabComponent = computed(() => {
  switch (activeTab.value) {
    case 'Casiers complets':
      return FullCrates
    case 'Eau Minérale':
      return WaterCatalog
    default:
      return ComposeCrate
  }
})
</script>

<style>
body {
  background: #fafafa;
  font-family: 'Inter', sans-serif;
}
.app {
  min-height: 100vh;
}
.container {
  margin-top: 24px;
  padding: 24px;
}
</style>
