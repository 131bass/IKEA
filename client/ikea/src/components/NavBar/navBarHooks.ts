import { useState } from 'react';
import { CategoriesTypeArr } from '../../types/category';
import categoriesArr from '../../utils/categories';
import { Product } from '../../types/product';
import axios from 'axios';


export const useShowSideBar = () => {
    const [sideBarVisiable, setSideBarVisiable] = useState(false)
    const changeSideBarVisiable = () => {
        setSideBarVisiable(!sideBarVisiable)
    }

    return { sideBarVisiable,setSideBarVisiable,changeSideBarVisiable }
}

export const useGetSearch = () => {
    const [search, setSearch] = useState('')
    return { search, setSearch }
}


export const useRenderNav = () => {
    const [arrToRender, setArrToRender] = useState<CategoriesTypeArr>(categoriesArr[0])
    const showCategories = (linkName: string) => {
        const categoriesArrToRender = (categoriesArr.find((element) => element.name == linkName))

        if (categoriesArrToRender) {
            setArrToRender(categoriesArrToRender)
        }
    }
    return { arrToRender, showCategories }
}

export const useRenderSubCategories = () => {
    const [subCatArr, setSubCatArr] = useState<string[]>()
    const [subCatVisiable, setSubCatVisiable] = useState<boolean>(false)

    const showSubCategories = (subCategoriArr: string[]) => {
        setSubCatArr(subCategoriArr)
        // setSubCatVisiable(!subCatVisiable)
    }

    return {subCatArr,subCatVisiable,setSubCatVisiable,showSubCategories}
}


export const useScrollBar = () => {
    const [scroll, setScroll] = useState(0)

    const backward = (numOfPx:number) => {
        if (scroll > 0) {
            setScroll(scroll - numOfPx)
        }
    }
    const forward = (numOfPx:number) => {
        if (scroll < 1540) {
            setScroll(scroll + numOfPx)
        }
    }
    return { backward, forward, scroll }
}


export const useGetProductsByName = () => {

    const [productsOfSearch, setProductsOfSearch] = useState<Product[]>()

    const handleGetProductsByName = async (searchText: string) => {
        try {
            console.log(searchText)
            const { data } = await axios.get(`/api/products/getProductsByName?name=${searchText}`)
            console.log(data.products)
            setProductsOfSearch(data.products)
        } catch (error) {
            console.error(error)
        }
    }
    return { productsOfSearch, handleGetProductsByName }
}