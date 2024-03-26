import './bottomBar.scss'
import facebookIcon from './images/facebook.png'
import instegramIcon from './images/instegram.png'
import youtubeIcon from './images/youtube.png'
import languageIcon from './images/language.png'
import { useNavigate } from 'react-router-dom'


const BottomBar = () => {

    const navigate = useNavigate()
    return (
        <div style={{ backgroundColor: "#f5f5f5", paddingTop: "50px", paddingRight: "10%" }}>

            <div style={{ display: "flex", gap: "100px" }} >
                <div>
                    <h4>אודות איקאה</h4>
                    <p>זו איקאה</p>
                    <p>מי אנחנו</p>
                    <p>חנויות איקאה</p>
                    <p>ממלכת הילדים</p>
                    <p>קיימות</p>
                    <p>החיים בבית</p>
                    <p>הסבים והסבתות של היום</p>
                    <p>דרושים</p>
                </div>
                <div>
                    <h4>שירות לקוחות</h4>
                    <p>השירותים שלנו</p>
                    <p>מדריכי קנייה</p>
                    <p>זמינות מוצרים</p>
                    <p>מידע נוסף על המוצרים</p>
                    <p>החזרות ותעודת אחריות</p>
                    <p>כרטיס מתנה</p>
                    <p>צרו קשר</p>
                </div>
                <div>
                    <h4>איקאה לעסקים</h4>
                    <p>פתרונות איקאה לעסקים</p>
                    <p>גלריית רעיונות לעסקים</p>
                </div>
            </div>
            <div style={{ display: "flex", width: "97%", justifyContent: "space-between", paddingTop: "50px", paddingBottom: "40px", borderBottom: "1px solid #dbd9d9" }}>
                <div style={{ display: "flex", gap: "25px" }}>
                    <a href='https://www.facebook.com/IKEAIL' target='_blank' style={{ cursor: "pointer", borderRadius: "50%", border: "1px #dbd9d9 solid", width: "33px", height: "33px", alignItems: "center", justifyItems: "center", backgroundImage: `url(${facebookIcon})`, backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat", opacity: "0.7" }}></a>
                    <a href='https://www.ikea.com/il/he/' target='_blank' style={{ cursor: "pointer", borderRadius: "50%", border: "1px #dbd9d9 solid", width: "33px", height: "33px", alignItems: "center", justifyItems: "center", backgroundImage: `url(${instegramIcon})`, backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat", opacity: "0.7" }}></a>
                    <a href='https://www.youtube.com/channel/UC2Pg3Uj9OGAfuOsKbyyo_Uw' target='_blank' style={{ cursor: "pointer", borderRadius: "50%", border: "1px #dbd9d9 solid", width: "33px", height: "33px", alignItems: "center", justifyItems: "center", backgroundImage: `url(${youtubeIcon})`, backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat", opacity: "0.7" }}></a>
                </div>
                <div>
                    <button style={{ width: "160px", height: "40px", borderRadius: "20px", cursor: "pointer", border: "1px solid black" }}>
                      <a href='https://www.ikea.com/'  target='_blank' style={{textDecorationLine:"none", color:"black"}} >
                          <span style={{ display: "flex", alignItems: "center", gap: "5px", justifyContent: "center" }}><img style={{ width: "25px" }} src={languageIcon} /> שינוי מדינה/אזור</span>
                        </a>
                    </button>
                </div>
            </div>
            <div style={{ fontSize: "small", display: "flex", width: "97%", justifyContent: "space-between", paddingTop: "20px", paddingBottom: "15px" }}>
                <p>Inter IKEA Systems B.V. 1999-2024 ©</p>
                <div style={{ display: "flex", gap: "20px" }}>
                    <p>מדיניות פרטיות</p>
                    <p>תנאי שימוש</p>
                    <p>נגישות</p>
                </div>
            </div>
        </div>
    )
}

export default BottomBar