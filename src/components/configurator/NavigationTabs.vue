<template>
  <div class="flex-col navtabs font-inter ">
    <div class="flex items-center w-full gap-2 mt-5 ">
      <span class="font-light text-gray-500">Livraison:</span
      ><span class=" text-brand-500">En 24H et gratuite </span
      ><span
        ><svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z"
            fill="#6D6D6D"
          />
          <path
            d="M4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z"
            fill="#6D6D6D"
          />
          <path
            d="M4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2Z"
            fill="#6D6D6D"
          />
        </svg> </span
      ><span class="font-light text-gray-500">Sur-mesure:</span
      ><span class="font-bold text-red-500">100%</span>
    </div>
    <div class="flex gap-4 text-black">
      <span
      class="font-inter"
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: tab === active }"
        @click="$emit('change', tab)"
      >
        {{ tab }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  active: { type: String, required: true },
})
const tabs = ['Casiers à composer', 'Casiers complets', 'Eau Minérale']
</script>

<style scoped>
.navtabs {
  display: flex;
  padding-left: 42px;
}

span {
  padding: 11px 0;
  cursor: pointer;
  position: relative;
}
.active {
  color: #020101;
  font-weight: 600;

}
.active::after {
  content: '';
  height: 3px;
  background: #000000;
  display: block;
  border-radius: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
}
</style>
