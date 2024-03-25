import Image from "../../components/Image/Image"
import Spot from "../../components/spot/Spot"
import ImagesGrid, { imageLocation } from "./ImagesGrid/ImagesGrid"
import "./home.scss"
const Home = () => {
  return (
    <div className="home" >
      Home

      <ImagesGrid gridElement={[
        { product: { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }, spotsLocations: [{ x: 15, y: 70 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: imageLocation.BIGIMAGE },
        {  product: { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }, spotsLocations: [{ x: 45, y: 30 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: imageLocation.LEFTBOTTOM },
        {  product: { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }, spotsLocations: [{ x: 25, y: 50 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: imageLocation.LEFTTOP },
        {  product: { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }, spotsLocations: [{ x: 75, y: 40 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: imageLocation.RIGHTBOTTOM },
        { product: { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }, spotsLocations: [{ x: 60, y: 60 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: imageLocation.RIGHTTOP }
      ]} />
    </div>
  )
}

export default Home


// { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }