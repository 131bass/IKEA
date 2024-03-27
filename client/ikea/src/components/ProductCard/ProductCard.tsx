import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../types/product'
import fullHeartIcon from '../NavBar/images/fullHeart.png'
import heartIcon from '../NavBar/images/heart.png'
import './productCard.scss'
import { useProductCard } from './productCardHooks'

interface ProductCardProps {
    product: Product
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {

    const navigate = useNavigate()
    const { bgImg, setBgImg, isFavourite, changeFavourite } = useProductCard()

    useEffect(() => {
        setBgImg(product.imgUrl)
    }, [product])
    return (
        <div style={{ display: "block", borderBottom: "1px solid gray", width: "280px" }}>
            <div onMouseDown={() => {
                navigate(`/product/${product.itemNumber}`)
            }} style={{ width: "250px", height: "400px" }}>
                <div className='productImg' onMouseEnter={() => { setBgImg(product.imgUrlView) }} onMouseLeave={() => { setBgImg(product.imgUrl) }} style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right", width: "90%", height: "60%", transition: "all 0.4s" }}></div>
                {product.isNew ? <p style={{ marginBottom: "-20px", fontSize: "0.7em", fontWeight: "bold", color: "rgb(205, 133, 1)" }}>חדש</p> : null}
                <h4 style={{ marginBottom: "-10px" }}>{product.series}</h4>
                <p>{product.name}</p>
                <h2>&#8362;{product.price}</h2>
            </div>
            <div onClick={changeFavourite} style={isFavourite ? { backgroundImage: `url(${fullHeartIcon})`, width: "50px", height: "50px", backgroundRepeat: "no-repeat", backgroundSize:"60%" } : { backgroundImage: `url(${heartIcon})`, width: "50px", height: "50px", backgroundRepeat: "no-repeat", backgroundSize:"60%"  }}></div>
        </div>
    )
}

export default ProductCard