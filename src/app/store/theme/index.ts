import { defineStore } from "pinia";

export const themeStore = defineStore("theme", {
    state: () => ({
        name: "light" as "light" | "dark"
    }),

    getters: {
        getThemeName(): string {
            return this.name || "light";
        },
        isDark(): boolean {
            return this.name === "dark";
        }
    },

    actions: {
        setThemeName(name: "light" | "dark") {
            this.name = name || "light";
            document.documentElement.setAttribute("data-theme", this.getThemeName);
        },
        toggleTheme() {
            this.setThemeName(this.name === "light" ? "dark" : "light");
        },
        initTheme() {
            const currentTheme = document.documentElement.getAttribute("data-theme") as
                | "light"
                | "dark";
            this.name = currentTheme || "light";
        }
    },

    persist: true
});
