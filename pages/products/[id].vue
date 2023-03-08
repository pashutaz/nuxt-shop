<script setup>
const { id } = useRoute().params

const { data: item } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id })

if (! item.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>

<template>
    <div>
        <product-details :product="item" />
    </div>
</template>

<style scoped></style>