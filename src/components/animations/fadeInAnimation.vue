<template>
    <div class="relative">
        <Transition name="fadein" :mode="mode">
            <slot></slot>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';



defineProps({
    mode: {
        type: String as PropType<'in-out' | 'out-in' | 'default'>,
        default: 'default'
    }
})

</script>

<style scoped>
.fadein-enter-active,
.fadein-leave-active {
    transition: all 0.5s ease-in-out;
}

.fadein-enter-from {
    opacity: 0;
}

.fadein-leave-to {
    opacity: 0;

}

/* test */
.fadein-leave-active {
    position: absolute;
    width: 100%;
}
</style>