import { productsStatusList } from "./constants"

export type ProductType = {
    id: string | number
    name: string
    status: Status | string
}
export type ShopType = {
    id: number
    name: string
    address: string
    status: string
}

type Status =  typeof productsStatusList[number]