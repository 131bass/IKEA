import { FC } from "react";
import "./spot.scss"



interface SpotProps {
    // product:Product
    product: any;
}


const Spot: FC<SpotProps> = ({ product }) => {


    return (
        <div className="spot">
            <div className="outer">
                <div className="inner"></div>
            </div>
            <div className="tag" style={{}}>
                <div className="details">
                    {product.isNew ? <p className="new">חדש</p> : null}
                    <p className="series">{product.series}</p>
                    <p className="name">{product.name}</p>
                    <p className="price">&#8362;<span className="priceAsNumber">{product.price}</span></p>
                    
                </div>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default Spot