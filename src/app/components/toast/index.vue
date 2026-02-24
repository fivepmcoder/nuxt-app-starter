<template>
    <Teleport to="body">
        <div class="fixed top-16 right-0 z-40 flex flex-col gap-2">
            <TransitionGroup name="toast">
                <div
                    v-for="value in toasts"
                    :key="value.id"
                    :class="[
                        toastClasses[value.type],
                        'flex min-w-48 items-center gap-3 rounded-lg border px-4 py-3 shadow-lg'
                    ]"
                >
                    <!-- 消息图标 -->
                    <div class="shrink-0" :class="iconClasses[value.type]">
                        <component :is="toastIcons[value.type]" class="h-5 w-5" />
                    </div>
                    <!-- 内容区域 -->
                    <div class="min-w-0 flex-1">
                        <!-- 消息标题 -->
                        <p v-if="value.title" class="mb-1 text-sm font-bold">
                            {{ value.title }}
                        </p>
                        <!-- 消息内容 -->
                        <p class="text-sm" :class="{ 'font-medium': !value.title }">
                            {{ value.message }}
                        </p>
                    </div>

                    <!-- 删除按钮 -->
                    <button
                        @click="removeToast(value.id)"
                        class="shrink-0 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
                    >
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { toastStore } from "@/store/toast";
import { storeToRefs } from "pinia";
import { h } from "vue";

const store = toastStore();
const { toasts } = storeToRefs(store);

const removeToast = (id: string) => {
    store.removeToast(id);
};

const toastClasses = {
    info: "backdrop-blur bg-info/10 text-info border-info/30",
    warning: "backdrop-blur bg-warning/10 text-warning border-warning/30",
    success: "backdrop-blur bg-success/10 text-success border-success/30",
    error: "backdrop-blur bg-error/10 text-error border-error/30"
};

const iconClasses = {
    success: "text-success",
    error: "text-error",
    warning: "text-warning",
    info: "text-info"
};

const toastIcons = {
    info: () =>
        h(
            "svg",
            { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
            h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        ),
    warning: () =>
        h(
            "svg",
            { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
            h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            })
        ),
    success: () =>
        h(
            "svg",
            { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
            h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        ),
    error: () =>
        h(
            "svg",
            { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
            h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
        )
};
</script>

<style lang="css" scoped>
/* 图标颜色 */
.toast-icon-info {
    color: var(--color-info);
}
.toast-icon-success {
    color: var(--color-success);
}
.toast-icon-warning {
    color: var(--color-warning);
}
.toast-icon-error {
    color: var(--color-error);
}
/* 进入动画 */
.toast-enter-active {
    transition: all 300ms ease-out;
}
/* 离开动画 */
.toast-leave-active {
    transition: all 200ms ease-in;
}
/* 进入起始状态和离开结束状态 */
.toast-enter-from,
.toast-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
/* 移动动画 */
.toast-move {
    transition: transform 300ms ease;
}
</style>
