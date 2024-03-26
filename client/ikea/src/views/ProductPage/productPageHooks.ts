import { useState } from "react"
import { Product } from "../../types/product"
import axios from "axios"





export const useGetProductByItemNumber = () => {

    const [product, setProduct] = useState<Product>()

    const handleGetProduct = async (itemNumber: string) => {
        try {
            const { data } = await axios.get(`/api/products/getProduct?itemNumber=${itemNumber}`)
            setProduct(data.product)
        } catch (error) {
            console.error(error)
        }
    }
    return { product, handleGetProduct }
}
