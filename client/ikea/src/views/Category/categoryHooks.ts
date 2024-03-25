import axios from "axios"
import { useState } from "react"
import { Product } from "../../types/product"



export const getProductsByCategory = () => {

    const [products, setProducts] = useState<Product[]>()

    const handleGetCategoryProducts = async (subcategory: string) => {
        try {
            const { data } = await axios.get(`/api/products/getProductsByCategory?subcat=${subcategory}`)
            setProducts(data.products)
        } catch (error) {
            console.error(error)
        }
    }
    return { products, handleGetCategoryProducts }
}






