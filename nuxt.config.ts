import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    // 基本配置
    srcDir: "src/app",
    serverDir: "src/server",
    dir: {
        shared: "src/common"
    },
    ssr: false,

    // 服务器配置
    devServer: {
        host: process.env["VITE_HOST"] || "localhost",
        port: Number(process.env["VITE_PORT"]) || 8000
    },

    // vite 配置
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: { "@": process.cwd() + "/src/app" }
        },
        server: {
            open: false,
            cors: true,
            strictPort: false,
            proxy: {}
        }
    },

    // nitro 配置
    nitro: {
        typescript: {
            tsConfig: {
                compilerOptions: {
                    target: "ES2017",
                    lib: ["ES2017", "WebWorker"],
                    module: "ES2020",
                    moduleResolution: "bundler",
                    esModuleInterop: true,
                    allowSyntheticDefaultImports: true,
                    resolveJsonModule: true,
                    isolatedModules: true,
                    verbatimModuleSyntax: true,
                    strict: true,
                    noImplicitReturns: true,
                    noUncheckedIndexedAccess: true,
                    noImplicitOverride: true,
                    noPropertyAccessFromIndexSignature: true,
                    exactOptionalPropertyTypes: true,
                    noUnusedLocals: true,
                    noUnusedParameters: true,
                    allowUnusedLabels: false,
                    allowUnreachableCode: false,
                    noFallthroughCasesInSwitch: true,
                    noUncheckedSideEffectImports: true,
                    forceConsistentCasingInFileNames: true,
                    skipLibCheck: true,
                    types: ["node"],
                    noEmitOnError: true,
                    declaration: true,
                    declarationMap: true,
                    sourceMap: true,
                    removeComments: false,
                    paths: {
                        "@/*": ["./src/app/*"]
                    },
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true
                },
                include: ["../src/server/**/*", "../src/common/**/*"],
                exclude: ["node_modules", "dist", "**/*.spec.ts", "**/*.test.ts", "**/*.md"]
            }
        }
    },

    // postcss 配置
    postcss: {
        plugins: {
            autoprefixer: {},
            cssnano: {}
        }
    },

    // 自动导入配置
    imports: {
        autoImport: false
    },

    // typescript 配置
    typescript: {
        typeCheck: true,
        tsConfig: {
            compilerOptions: {
                target: "ES2017",
                lib: ["ES2017", "DOM", "DOM.Iterable"],
                module: "ES2020",
                moduleResolution: "bundler",
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                resolveJsonModule: true,
                isolatedModules: true,
                verbatimModuleSyntax: true,
                strict: true,
                noImplicitReturns: true,
                noUncheckedIndexedAccess: true,
                noImplicitOverride: true,
                noPropertyAccessFromIndexSignature: true,
                exactOptionalPropertyTypes: true,
                noUnusedLocals: true,
                noUnusedParameters: true,
                allowUnusedLabels: false,
                allowUnreachableCode: false,
                noFallthroughCasesInSwitch: true,
                noUncheckedSideEffectImports: true,
                forceConsistentCasingInFileNames: true,
                skipLibCheck: true,
                noEmitOnError: true,
                declaration: true,
                declarationMap: true,
                sourceMap: true,
                removeComments: false,
                emitDecoratorMetadata: true,
                experimentalDecorators: true
            }
        }
    },

    // 组件配置
    components: [
        {
            path: "@/layouts/components",
            prefix: "Layouts"
        },
        {
            path: "@/components",
            global: true
        }
    ],

    // 模块配置
    modules: ["@pinia/nuxt"],

    // 全局 css
    css: ["@/assets/index.css"],

    app: {
        head: {
            style: [
                {
                    tagPosition: "head",
                    tagPriority: "high",
                    type: "text/css",
                    children: `
                    :root {
                        --bg-color: #ffffff;
                        --text-color: #1a1b1c;
                    }
                    [data-theme="dark"] {
                        --bg-color: #000000;
                        --text-color: #fafbfc;
                    }
                    html,
                    body,
                    #app {
                        background-color: var(--bg-color);
                        color: var(--text-color);
                        margin: 0;
                        min-height: 100vh;
                    }
                `
                }
            ],
            script: [
                {
                    tagPosition: "head",
                    tagPriority: "high",
                    type: "text/javascript",
                    children: `
                (function () {
                    var html = document.documentElement;
                    if (!html) {
                        html = document.getElementsByTagName('html')[0];
                    }
                    if (!html) {
                        return;
                    }
                    // 获取存储的主题
                    const stored = localStorage.getItem('theme');

                    let theme = 'light';

                    if (stored) {
                        const parsed = JSON.parse(stored);
                        theme = parsed.name || 'light';
                    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                            theme = 'dark';
                    }

                    html.setAttribute('data-theme', theme);

                    })();
                `
                }
            ]
        }
    },

    // 开发工具配置
    devtools: {
        enabled: false
    },
    compatibilityDate: "2025-07-18"
});
