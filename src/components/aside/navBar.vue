<template>
  <nav class="top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md fixe xl:hidden">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <!-- <DrawerSheet></DrawerSheet> -->
          <a @click="$router.push({ name: AppRoute.ABOUT.name })" class="flex ml-2 md:mr-24">
            <img :src="appicons" class="h-10 mr-3" alt="Likambo Logo" />
          </a>
        </div>

        <!-- DEBUT Icône User -->
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                id="dropdownUser"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  :src="`/src/assets/images/avatar/26.png`"
                  alt="user photo"
                />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
              aria-labelledby="dropdownUser"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">Admin Likambo</p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  admin@root.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    @click="$router.push({ name: AppRoute.ABOUT.name })"
                    class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    @click="$router.push({ name: AppRoute.LOGIN.name })"
                    class="block px-4 py-2 text-sm text-red-500 cursor-pointer hover:bg-red-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Se déconnecter</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- FIN Icône User -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { AppRoute } from '@/constants/app-route'
// import { storeToRefs } from 'pinia'

const appicons = new URL('/src/assets/appicons.png', import.meta.url).href
</script>

<style scoped></style>
