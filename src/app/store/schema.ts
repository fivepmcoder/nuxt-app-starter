/**
 * 提示信息
 */
export interface Toast {
    id: string;
    type: "info" | "success" | "warning" | "error";
    duration: number | undefined;
    title: string | undefined;
    message: string;
}
