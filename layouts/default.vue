<template>
    <div>
        <app-header></app-header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <app-footer class="fixed bottom-0"></app-footer>
    </div>
</template>

<style scoped></style>