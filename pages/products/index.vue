<script setup>
    const { data } = await useFetch('https://fakestoreapi.com/products')
    console.log(data);
</script>

<template>
    <div>
        <h1 class="text-2xl font-extrabold text-center pb-4">OUR STORE</h1>

        <div class="grid grid-cols-3 gap-4">
            <div v-for="item in data">
                <product-card :product="item" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>