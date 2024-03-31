import { FC } from "react"
import Image from "../../../components/Image/Image"
import "./imagesGrid.scss"

export enum ImageLocation {
  RIGHTTOP = "rightTop",
  RIGHTBOTTOM = "rightBottom",
  LEFTTOP = "leftTop",
  LEFTBOTTOM = "leftBottom",
  BIGIMAGELEFT = "bigImageLeft",
  BIGIMAGERIGHT = "bigImageRight"
}

export enum UseFor {
  HOME = "home",
  CATEGORY = "category"
}

export interface ImagesGridProps {
  gridElement: { itemNumbers: string[], spotsLocations: { x: number, y: number }[], imgUrl: string, imageLocation: ImageLocation }[],
  useFor: UseFor
}

const ImagesGrid: FC<ImagesGridProps> = ({ gridElement, useFor }) => {

  return (
    <div className={useFor == UseFor.HOME ? "grid" : "grid big"}>
      {gridElement ?
        gridElement.map((element) => {

          return (
            <div className={element.imageLocation}>
              <Image itemNumbers={element.itemNumbers} spotLocation={element.spotsLocations} url={element.imgUrl} />
            </div>
          )
        })
        : null}

    </div>
  )
}

export default ImagesGrid