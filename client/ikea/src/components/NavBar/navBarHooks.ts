import { useState } from 'react';
import categoriesArr from '../../utils/categories';


export const useGetSearch = () => {
    const [search, setSearch] = useState('')
    const getSearch = (text: string) => {
        setSearch(text)
    }
    return { search, getSearch }
}


export const useRenderNav = () => {
    const [arrToRender, setArrToRender] = useState<any[]>([])
    const showCategories = (linkName: string) => {
        switch (linkName) {
            case "מוצרים":
                setArrToRender(categoriesArr)
                break;
            case "חדרים":
                setArrToRender([])
                break;
        }
    }
    return { arrToRender, showCategories }
}

export const useScrollBar = () => {
    const [scroll, setScroll] = useState(0)

    const backward = () => {
        if (scroll > 0) {
            setScroll(scroll - 141)
        }
    }
    const forward = () => {
        if (scroll < 1540) {
            setScroll(scroll + 141)
        }
    }
    return { backward, forward, scroll }
}
