import { useNavigate } from 'react-router-dom'
import './notExist.scss'


const NotExist = () => {

    const navigate = useNavigate()

    return (
        <div style={{width:"85%", marginRight:"10%", padding:"100px 0px 100px 0px", display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"35%"}}>
                <h1 style={{marginTop:"0px"}}>מצטערים, הדף הזה לא קיים.</h1>
                <p style={{fontSize:"0.8em"}}>אנחנו לא מוצאים את הדף שאתם מחפשים. ייתכן שהוא הוסר או שהוא לא זמין באופן זמני. למה לא לחזור להתחברות?</p>
                <button  style={{backgroundColor:"black", cursor:"pointer", border:"none", color:"white", borderRadius:"30px", padding:"20px 30px", marginTop:"20px"}} onClick={()=>{navigate('/login')}}>חזרה לכניסה</button>           
            </div>
            <img style={{width:"50%"}} src="https://www.ikea.com/il/he/profile//static/media/error-not-found.610933f98bcbc8aed37b.jpg" />
        </div>
    )
}

export default NotExist