import { useState } from "react"
import { Product } from "../../types/product"
import axios from "axios"



export const useGetAllProducts = () => {
    const [products, setProducts] = useState<Product[]>()

    const handleGetAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/products/getAllProducts")
            setProducts(data.products)
            console.log(data.products)
        } catch (error) {
            console.error(error)
        }
    }
    return { handleGetAllProducts }

}

export const useAddProduct = () => {
    const initialState: Product = {
        name: "",
        description: "",
        imgUrl: "",
        imgUrlView:"",
        series: "",
        price: 0,
        priceComments: "",
        category: "",
        subCategory: "",
        isNew: true,
        itemNumber:"000.000.00"
    }
    const [product, setProduct] = useState<Product>(initialState)

    const handleAddProduct = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            console.log("start")
            const { data } = await axios.post("/api/products/addProduct", {
                name: product.name,
                description: product.description,
                imgUrl: product.imgUrl,
                imgUrlView:product.imgUrlView,
                series: product.series,
                price: product.price,
                priceComments: product.priceComments,
                category: product.category,
                subCategory: product.subCategory,
                itemNumber:product.itemNumber
            })
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return { product, setProduct, handleAddProduct }
}

export const useDeletProduct = () => {
    const handleDeletProduct = async (productId: string) => {
        try {
            const { data } = await axios.delete(`/api/products/deleteProduct/${productId}`)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return { handleDeletProduct }
}