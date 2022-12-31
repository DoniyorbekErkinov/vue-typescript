<template>
    <div>
        <ul>
            <li @click="clickMe(product)" v-for="(product, i) in products" :key="i">
                <Product :product="product"></Product>
            </li>
        </ul>        
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ProductType } from "@/types/types";
import Product from "./Product.vue";

export default defineComponent({
    props: {
        products: {
            type: Array as PropType<ProductType[]>,
            required: true
        }
    }, 
    data: () => {

    },
    components: { Product },
    methods: {
        /**
         * if returns something
         */
        // clickMe(product): ProductType {
        //     console.log(product);
        //     return product
        // }
        /**
         * Checks type of payload
         */
        clickMe(product: ProductType) {
            console.log(product);
        }
    }
})
</script>

<style  scoped>
li {
    list-style: none;
}
</style>