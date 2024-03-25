import { useState } from "react"



export const useProductCard = () => {

    const [bgImg, setBgImg] = useState<string>()
    const [isFavourite, setIsFavourite] = useState(false)
    const changeFavourite = () => {
        setIsFavourite(!isFavourite)
    }

    return { bgImg, setBgImg, isFavourite, changeFavourite }
}

