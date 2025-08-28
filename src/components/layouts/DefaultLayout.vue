<template>
  <div class="flex pt-[75px] xl:pt-0">
    <!-- DEBUT NAVBAR -->
    <NavBar></NavBar>
    <!-- FIN NAVBAR -->

    <!-- DEBUT BARRE DES MENUS -->
    <!-- <AsideBar class="w-[290px]" :width-aside-bar="widthAsideBar"></AsideBar> -->
    <!-- FIN BARRE DES MENUS -->

    <!-- DEBUT DES PAGES DU ROUTER -->
    <div class="p-[2px] lg:p-4  xl:ml-[290px] w-full">
      <router-view></router-view>
    </div>
    <!-- FIN DES PAGES DU ROUTER -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import NavBar from '../aside/navBar.vue';
import { storeToRefs } from 'pinia';

import { onBeforeMount, onMounted, watch } from 'vue';


let widthAsideBar = 500;



// const { isFetched, data: countriesData, isSuccess } = useCountryFiltersQuery(
//   !!user.value
// );

// watch(isFetched, (newValue) => {
//   if (newValue && countriesData.value && user.value?.country == null) {
//     setCurrentCountry(countriesData.value!.items[0]);
//   }
// }, { immediate: true });






const isOpen = ref(false);



</script>
<style scoped>
.fadeslide-enter-active,
.fadeslide-leave-active {
  transition: all 0.5s ease-in-out;
}

.fadeslide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fadeslide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>