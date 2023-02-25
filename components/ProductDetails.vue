<script setup>
    const { product } = defineProps(['product'])
</script>

<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-8">
            <div class="p-5">
                <img :src="product.image" alt="" class="max-h-96 m-auto">
            </div>
            <div class="p-5">
                <h1 class="text-xl font-bold pb-5">{{ product.title }}</h1>
                <hr />
                <p class="py-4 mb-4">{{ product.description }}</p>
                <p class="font-bold">Price - ${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>