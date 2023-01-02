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
import {useStore} from '@/store/store'
type DataShape = {
    products: import("@/types/types").ProductType[]
}
const store = useStore()
export default defineComponent({    
    data: (): DataShape => {
        return {
            products: []
        };
    },
    components: { Products, Shops, Count },
    created() {        
        this.products = store.$state.list
    },
})
</script>

<style  scoped>

</style>