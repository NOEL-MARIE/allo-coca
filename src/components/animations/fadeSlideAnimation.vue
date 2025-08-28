<template>
    <div class="">
        <Transition name="fadeslide" :mode="mode">
            <slot></slot>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { Prop, PropType } from 'vue';

defineProps({
    mode: {
        type: String as PropType<'in-out' | 'out-in' | 'default'>,
        default: 'default'
    }
})

</script>

<style scoped>
.fadeslide-enter-active,
.fadeslide-leave-active {
    transition: all .5s ease-in-out;
}

.fadeslide-enter-from {
    opacity: 0;
    transform: translateX(10px);
}

.fadeslide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}

/* test */
/* .fadeslide-leave-active {
    position: absolute;
    width: 100%;
} */
</style>