import ImagesGrid, { UseFor, ImageLocation } from "./ImagesGrid/ImagesGrid"
import "./home.scss"
const Home = () => {

  
  return (
    <div className="home" >
      Home

      <ImagesGrid gridElement={[
        { itemNumbers:["304.917.18","203.411.35"], spotsLocations: [{ x: 15, y: 70 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: ImageLocation.BIGIMAGELEFT },
        {itemNumbers:["304.917.18","203.411.35"], spotsLocations: [{ x: 45, y: 30 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: ImageLocation.LEFTBOTTOM },
        {itemNumbers:["304.917.18","203.411.35"], spotsLocations: [{ x: 25, y: 50 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: ImageLocation.LEFTTOP },
        {itemNumbers:["304.917.18","203.411.35"], spotsLocations: [{ x: 75, y: 40 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: ImageLocation.RIGHTBOTTOM },
        {itemNumbers:["304.917.18","203.411.35"], spotsLocations: [{ x: 60, y: 60 }, { x: 80, y: 70 }], imgUrl: "https://www.ikea.com/ext/ingkadam/m/18730e1cc8ea6b3/original/PH196448.JPG?f=xs", imageLocation: ImageLocation.RIGHTTOP }
      ]} useFor={UseFor.HOME} />
    </div>
  )
}

export default Home


// { name: "משהו", price: 56, isNew: true, series: "DAKSJUS", priceOf: "3 יח'" }