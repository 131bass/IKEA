import { useState } from 'react';
import { CategoriesTypeArr } from '../../types/category';
import categoriesArr from '../../utils/categories';


export const useShowSideBar = () => {
    const [sideBarVisiable, setSsideBarVisiable] = useState(false)
    const changeSideBarVisiable = () => {
        setSsideBarVisiable(!sideBarVisiable)
    }

    return { sideBarVisiable, changeSideBarVisiable }
}

export const useGetSearch = () => {
    const [search, setSearch] = useState('')
    const getSearch = (text: string) => {
        setSearch(text)
    }
    return { search, getSearch }
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
        setSubCatVisiable(!subCatVisiable)
    }

    return {subCatArr,subCatVisiable,setSubCatVisiable,showSubCategories}
}


export const useScrollBar = () => {
    const [scroll, setScroll] = useState(0)

    const backward = () => {
        if (scroll > 0) {
            setScroll(scroll - 140)
        }
    }
    const forward = () => {
        if (scroll < 1540) {
            setScroll(scroll + 140)
        }
    }
    return { backward, forward, scroll }
}
