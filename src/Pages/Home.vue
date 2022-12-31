<template>
    <div>
        <h1>Home</h1>
        <Products :products="products"></Products>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import Products from "./Products/Products.vue";
import data from '@/data/data.json'

export default defineComponent({
    data() {
        return {
            products: data.products
        };
    },
    components: { Products }
})
</script>

<style  scoped>

</style>