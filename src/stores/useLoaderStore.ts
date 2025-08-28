import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const isLoading = ref(false)
  const isLoadingSkeleton = ref(false)

  const startLoadingSkeleton = () => {
    isLoadingSkeleton.value = true
  }

  const stopLoadingSkeleton = () => {
    // setTimeout(() => {
    //   isLoadingSkeleton.value = false
    // }, 1000)
    isLoadingSkeleton.value = false
  }

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    // setTimeout(() => {
    //   isLoading.value = false
    // }, 1000)
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
    isLoadingSkeleton,
    startLoadingSkeleton,
    stopLoadingSkeleton,
  }
})
