<template>
    <Transition name="loading">
        <div v-if="visible" class="absolute inset-0 flex flex-col items-center justify-center">
            <div class="relative flex flex-col items-center space-y-4">
                <div class="relative h-10 w-10">
                    <svg
                        class="text-primary animate-spin"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            class="opacity-20"
                            cx="16"
                            cy="16"
                            r="14"
                            stroke="currentColor"
                            stroke-width="3"
                            fill="none"
                        />
                        <path
                            class="opacity-100"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            d="M16 2 A14 14 0 0 1 30 16"
                        />
                    </svg>
                </div>

                <p class="text-textcolor animate-pulse text-sm font-medium tracking-widest">
                    {{ text || "Loading" }}
                </p>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { loadingStore } from "@/store/loading";
import { storeToRefs } from "pinia";

const { loading: visible, text } = storeToRefs(loadingStore());
</script>

<style lang="css" scoped>
.loading-enter-active,
.loading-leave-active {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.loading-enter-from,
.loading-leave-to {
    opacity: 0;
    transform: scale(1.05);
}

.animate-spin {
    animation: spin 800ms linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
