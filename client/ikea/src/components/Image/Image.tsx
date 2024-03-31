import { FC } from "react"
import "./image.scss"
import Spot from "../spot/Spot"


export interface ImageProps {
  spotLocation?: { x: number, y: number }[],
  itemNumbers?: string[],
  url: string
}

const Image: FC<ImageProps> = ({ itemNumbers, spotLocation, url }) => {
  return (
    <div className="image" style={{ backgroundImage: `url(${url})` }}>
      {spotLocation&&itemNumbers ?
        spotLocation.map((spot, index) => {
          return (
            <div className="spotAtImage" style={{ position: "absolute", left: `${spot.x}%`, bottom: `${spot.y}%` }}>
              <Spot itemNumber={itemNumbers[index]} />
            </div>
          )
        })
        : null}
    </div>

  )
}

export default Image