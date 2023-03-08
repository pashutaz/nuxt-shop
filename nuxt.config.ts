// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'NuxtShop',
            meta: [
                { name: 'description', content: 'Nuxt shop by pashutaz' },
            ],
            link: [
                {rel: 'stylesheet', href: 'assets/css/main.css'},
            ],
        },

        pageTransition: { name: 'fade', mode: 'out-in' },
        layoutTransition: { name: 'slide', mode: 'out-in' },
    },
    runtimeConfig: {
        apiKey: process.env.API_LAYER_KEY
    },
})
