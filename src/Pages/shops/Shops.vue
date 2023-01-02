<template>
    <div class="main">
        <h1>Shops</h1>
        <p>Number of shops {{ numberOfShops }}</p>
        <ul>
            <li  v-for="(item, i) in array" :key="i">
                {{ item.name }}
            </li>
        </ul>
        <label>{{ inputData }}</label>
        <input
            :value="inputData"
            @input="updateData"
            placeholder="Data"
            ref="elInputData"
            type="text"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineComponent,onMounted, ref, computed, PropType } from 'vue';
import {ShopType} from '@/types/types'
import { useRoute } from 'vue-router';
type PropTypes = {
    shopType?: ShopType
}
defineProps({
    shops: {
        type: Object as PropType<ShopType>,
            default: {}
        }
    })
    const array = ref<ShopType[]>([
        {
            id: 1,
            name: "shop 1",
            address: "Address 1",
            status: "open"
        },
        {
            id: 2,
            name: "shop 2",
            address: "Address 2",
            status: "open"
        },
        {
            id: 3,
            name: "shop 3",
            address: "Address 3",
        status: "open"
    }
])
const numberOfShops = computed((): number => {
    return array.value.length
})
const inputData = ref("")
const elInputData = ref<HTMLInputElement | null>(null)
onMounted(() => {
    elInputData.value?.focus()
})
const updateData = (event) => {
    if(event.data === ' ') {
        inputData.value = (event.target as HTMLInputElement).value
        // console.log(event.target.value);
    }
    
}
</script>

<style scoped>
.main {
    margin-top: 60px;
    border: 2px solid #e9e8e8;
    box-shadow: 1px 1px 5px rgba(1, 1, 1, 0.2);
    display: flex;
    flex-direction: column;
    padding: 10px;
}
ul {
    margin-top: 25px;
}
</style>