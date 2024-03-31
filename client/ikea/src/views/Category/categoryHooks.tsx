import { useState } from "react";
import ImagesGrid, { ImageLocation, UseFor } from '../Home/ImagesGrid/ImagesGrid'
import HeadHome from "../Home/Head/HeadHome";



export const useSetSubCategoryContent = () => {
  const [content, setContent] = useState<any>()

  const subCategory = (name: string) => {
    switch (name) {
      case "ריהוט לבית":
        setContent(
          <>
            <HeadHome title="אחסון מרבי - פחות בלאגן" paragraph="החלל מתחת לטלוויזיה מהווה מקום נהדר לניצול שטח אחסון. בחירת מעמד טלוויזיה רחב עם מגירות ומדפים יאפשר לכם לאחסן פריטים, כמו שלט רחוק, קונסולות משחקים וכבלים. הוספת קופסאות וארגוניות על המדפים יסייעו לכם לשמור על מראה נקי ומסודר בחדר המגורים." button="צפו בכל מעמדי הטלוויזיה" />
            <ImagesGrid gridElement={[
              { itemNumbers: ["904.098.72", "504.098.74"], spotsLocations: [{ x: 55, y: 63 }, { x: 94, y: 32 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/2f8375007bae4f5c/original/PH150565.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGERIGHT },
              { itemNumbers: ["705.209.26", "903.954.22", "905.208.69"], spotsLocations: [{ x: 71, y: 84 }, { x: 57, y: 47 }, { x: 50, y: 35 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/9b645b4a289971f/original/PH191725.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGELEFT }
            ]} useFor={UseFor.CATEGORY} />
            <HeadHome title="מוצג, מוסתר או בין לבין?" paragraph="הכירו את החבר המושלם לרגע של פרטיות. שולחן הקפה החדש IDANÄS מגיע עם 3 רובדי אחסון: החלק העליון מיועד לפריטים שתרצו להציג לראווה (שלום לכלי הפורצלן של סבתא!), החלק האמצעי משמש כמדף ספרים והמגירות התחתונות מהוות מקום מסתור חכם." button="צפו בכל שולחנות הקפה" />
            <ImagesGrid gridElement={[
              { itemNumbers: ["105.000.02", "105.119.63", "205.119.53"], spotsLocations: [{ x: 57, y: 37 }, { x: 51, y: 60 }, { x: 38, y: 64 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/7d613817c366a9f9/original/PH194131.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGERIGHT },
              { itemNumbers: ["105.000.02", "105.119.63", "205.119.53"], spotsLocations: [{ x: 45, y: 77 }, { x: 74, y: 73 }, { x: 50, y: 44 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/1c5aa4a104aeee0/original/PH194134.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGELEFT }
            ]} useFor={UseFor.CATEGORY} />
          </>
        )
        break;
      case "אחסון וארגון":
        setContent(<ImagesGrid gridElement={[
          { itemNumbers: ["105.000.02", "105.119.63", "205.119.53"], spotsLocations: [{ x: 57, y: 37 }, { x: 51, y: 60 }, { x: 38, y: 64 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/7d613817c366a9f9/original/PH194131.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGERIGHT },
          { itemNumbers: ["105.000.02", "105.119.63", "205.119.53"], spotsLocations: [{ x: 45, y: 77 }, { x: 74, y: 73 }, { x: 50, y: 44 }], imgUrl: 'https://www.ikea.com/ext/ingkadam/m/1c5aa4a104aeee0/original/PH194134.jpg?f=xl', imageLocation: ImageLocation.BIGIMAGELEFT }
        ]} useFor={UseFor.CATEGORY} />)
        break;
    }
  }
  return { content, subCategory }
}