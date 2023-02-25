<script setup>
    const { product } = defineProps(['product'])
</script>

<template>
    <div class="card text-center">
        <img :src="product.image" alt="" class="max-w-[70%] max-h-32 m-auto">
        <p class="truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View details</p>
        </NuxtLink>
    </div>
</template>

<style scoped></style>