import { FC } from "react"
import "./image.scss"
import Spot from "../spot/Spot"


export interface ImageProps {
  spotLocation?: { x: number, y: number }[],
  product: any,
  url: string
}

const Image: FC<ImageProps> = ({ product, spotLocation, url }) => {
  return (
    <div className="image" style={{ backgroundImage: `url(${url})` }}>
      {spotLocation ?
        spotLocation.map((spot) => {
          return (
            <div className="spotAtImage" style={{ position: "absolute", left: `${spot.x}%`, bottom: `${spot.y}%` }}>
              <Spot product={product} />
            </div>
          )
        })
        : null}
    </div>

  )
}

export default Image