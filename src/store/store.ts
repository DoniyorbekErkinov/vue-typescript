import { defineStore } from 'pinia'
import data from '@/data/data.json'
type StateShape = {
    list: import("@/types/types").ProductType[]
}
export const useStore = defineStore('Store', {
    state: (): StateShape => ({
        list: data
    }),
    getters: {},
    actions: {}
})