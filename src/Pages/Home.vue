<template>
    <div>
        <h4>Home</h4>
        <Products :products="products"></Products>
        <Shops></Shops>
        <Count></Count>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Products from "./Products/Products.vue";
import data from '../data/data.json'
import Shops from "./shops/Shops.vue";
import Count from "./Count/Count.vue";
type DataShape = {
    products: import("@/types/types").ProductType[]
}
export default defineComponent({
    data: (): DataShape => {
        return {
            products: data
        };
    },
    components: { Products, Shops, Count }
})
</script>

<style  scoped>

</style>