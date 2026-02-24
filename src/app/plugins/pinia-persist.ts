import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { defineNuxtPlugin } from "nuxt/app";
import type { Pinia } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = nuxtApp["$pinia"] as Pinia;
    pinia.use(piniaPluginPersistedstate);
});
