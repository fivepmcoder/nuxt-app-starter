<template>
    <main class="w-full overflow-auto">
        <!-- 全局加载组件 -->
        <Loading />
        <!-- 全局提示组件 -->
        <Toast />
        <!-- 页面内容插槽 -->
        <slot />
    </main>
</template>

<script setup lang="ts"></script>
