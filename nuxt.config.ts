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
        plugins: [],
        resolve: {
            alias: {}
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
                        "@/*": ["*"]
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
            },
            include: ["../src/app/**/*", "../src/common/**/*"],
            exclude: ["../node_modules", "../dist"]
        }
    },

    // 组件配置
    components: [],

    // 模块配置
    modules: [],

    // 全局 css
    css: [],

    // 开发工具配置
    devtools: {
        enabled: false
    },
    compatibilityDate: "2025-07-18"
});
