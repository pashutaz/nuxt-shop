<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li class="btn"><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="fixed bottom-0 pr-2 w-full text-right text-emerald-500 shadow-sm bg-white">
            made by @pashutaz
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-emerald-400;
}
</style>