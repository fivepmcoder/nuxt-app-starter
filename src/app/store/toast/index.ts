import type { Toast } from "@/store/schema";
import { defineStore } from "pinia";

export const toastStore = defineStore("toast", {
    state: () => ({
        toasts: [] as Toast[]
    }),

    actions: {
        // 普通信息
        info(message: string, duration: number = 3000, title?: string): string {
            return this.showToast({
                type: "info",
                title: title,
                message,
                duration
            });
        },

        // 警告信息
        warning(message: string, duration: number = 3000, title?: string): string {
            return this.showToast({
                type: "warning",
                title: title,
                message,
                duration
            });
        },

        // 成功信息
        success(message: string, duration: number = 3000, title?: string): string {
            return this.showToast({
                type: "success",
                title: title,
                message,
                duration
            });
        },

        // 错误信息
        error(message: string, duration: number = 3000, title?: string): string {
            return this.showToast({
                type: "error",
                title: title,
                message,
                duration
            });
        },

        // 展示提示信息
        showToast(toast: Omit<Toast, "id"> & { id?: string }): string {
            const id = `toast-${new Date().getTime().toString()}-${Math.random()
                .toString(36)
                .slice(2)}`;
            const completeToast: Toast = {
                ...toast,
                id,
                duration: toast.duration
            };
            this.toasts.push(completeToast);
            if (completeToast.duration && completeToast.duration > 0) {
                setTimeout(() => {
                    if (completeToast.id) {
                        this.removeToast(completeToast.id);
                    }
                }, completeToast.duration);
            }

            return id;
        },

        // 移除提示信息
        removeToast(id: string) {
            const index = this.toasts.findIndex((toast) => toast.id === id);
            if (index > -1) {
                this.toasts.splice(index, 1);
            }
        },

        // 移除所有提示信息
        remoteAllToast() {
            this.toasts = [];
        }
    }
});
