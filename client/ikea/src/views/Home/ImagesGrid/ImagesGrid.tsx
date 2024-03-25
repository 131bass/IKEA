import { FC } from "react"
import Image from "../../../components/Image/Image"
import "./imagesGrid.scss"

export enum imageLocation {
  RIGHTTOP = "rightTop",
  RIGHTBOTTOM = "rightBottom",
  LEFTTOP = "leftTop",
  LEFTBOTTOM = "leftBottom",
  BIGIMAGE = "bigImage"
}

interface ImagesGridProps {
  gridElement: { product: any, spotsLocations: { x: number, y: number }[],imgUrl:string, imageLocation: imageLocation}[]

}

const ImagesGrid: FC<ImagesGridProps> = ({ gridElement }) => {
  return (
    <div className="grid">
      {gridElement ?
        gridElement.map((element) => {
          return (
            <div className={element.imageLocation}>
              <Image product={element.product} spotLocation={element.spotsLocations} url={element.imgUrl} />
            </div>
          )
        })



        : null}


      {/* <div className="rightTop" ></div>
      <div className="rightBottom" ></div>
      <div className="leftTop" >
        <Image url="https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs" spotLocation={[{ x: 45, y: 30 }, { x: 80, y: 70 }]} />
      </div>
      <div className="leftBottom" >
        <Image url="https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs" spotLocation={[{ x: 45, y: 30 }, { x: 80, y: 70 }]} />

      </div>
      <div className="bigImage">
        <Image url="https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs" spotLocation={[{ x: 45, y: 30 }, { x: 80, y: 70 }]} />

      </div> */}

    </div>
  )
}

export default ImagesGrid