import { FC, useEffect } from "react";
import "./spot.scss"
import { useGetProductByItemNumber } from "../../views/ProductPage/productPageHooks";
import { useNavigate } from "react-router-dom";



interface SpotProps {
    itemNumber: string;
}


const Spot: FC<SpotProps> = ({ itemNumber }) => {

    const navigate = useNavigate()
    const { product, handleGetProduct } = useGetProductByItemNumber()
    useEffect(() => {
        handleGetProduct(itemNumber)
    }, [])
    return (

        <div className="spot">
            <div className="outer">
                <div className="inner"></div>
            </div>
            <div className="tag" onClick={() => {
                    navigate(`/product/${itemNumber}`)
                    console.log("first")
                }}>
                {product ?
                    <div className="details">
                        {product.isNew ? <p className="new">חדש</p> : null}
                        <p className="series">{product.series}</p>
                        <p className="name">{product.name}</p>
                        <p className="price">&#8362;<span className="priceAsNumber">{product.price}</span></p>

                    </div>
                    : null}
                <button >&gt;</button>
            </div>
        </div>
    )
}

export default Spot