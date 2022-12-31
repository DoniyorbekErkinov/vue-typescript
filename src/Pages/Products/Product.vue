<template>
    <div>
        <h1>{{ product.name }}</h1>
        <h6>{{ product.status }}</h6>
    </div>
</template>

<script lang="ts">
import {  defineComponent } from "vue";
import type { PropType } from "vue";
import type { ProductType } from "@/types/types";
export default defineComponent({
    props: {
        product: Object as PropType<ProductType>
    }
})
</script>

<style lang="scss" scoped>

</style>