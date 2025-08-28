<template>
    <!-- <div class=""> -->
    <Transition name="slide-fade" :mode="mode">
        <slot></slot>
    </Transition>
    <!-- </div> -->
</template>

<script setup lang="ts">
import type { Prop, PropType } from 'vue';

defineProps({
    mode: {
        type: String as PropType<'in-out' | 'out-in' | 'default'>,
        default: 'out-in'
    }
})

</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    transform: translateX(30px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-30px);
    opacity: 0;
}

/* Alternative: transition avec slide vertical */
.slide-vertical-enter-active,
.slide-vertical-leave-active {
    transition: all 0.3s ease;
}

.slide-vertical-enter-from {
    transform: translateY(20px);
    opacity: 0;
}

.slide-vertical-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

/* Alternative: transition fade simple */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>