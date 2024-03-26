import axios from "axios"
import { useState } from "react"
import { Product } from "../../types/product"



export const useGetProductsBySubCategory = () => {

    const [products, setProducts] = useState<Product[]>()

    const handleGetSubCategoryProducts = async (subcategory: string) => {
        try {
            const { data } = await axios.get(`/api/products/getProductsBySubCategory?subCategory=${subcategory}`)
            setProducts(data.products)
        } catch (error) {
            console.error(error)
        }
    }
    return { products, handleGetSubCategoryProducts }
}






