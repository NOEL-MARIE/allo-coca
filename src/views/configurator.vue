<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="app">
    <Navbar />
    <NavigationTabs :active="activeTab" @change="activeTab = $event" />
    <div class="container">
      <component :is="tabComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '../components/configurator/ConfigNavbar.vue'
import NavigationTabs from '../components/configurator/NavigationTabs.vue'
import ComposeCrate from '../components/configurator/ComposeCrate.vue'
import FullCrates from '../components/configurator/FullCrates.vue'
import WaterCatalog from '../components/configurator/WaterCatalog.vue'

const activeTab = ref('Casiers à composer')
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
