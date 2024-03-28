import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setUserLoggedIn, setlogOut, userLoggedInSelector } from '../../features/loggedInUser/userSlice'
import './profile.scss'
import profileIcon from './../../components/NavBar/images/profile.png'
import lockIcon from './../../components/NavBar/images/lock.png'
import garbageIcon from './../../components/NavBar/images/garbage.png'
import leftArrowIcon from './../../components/NavBar/images/leftArrow.png'
import editIcon from './../ProductPage/images/edit.png'
import saveEditIcon from './../ProductPage/images/saveEdit.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '../../types/user'

const Profile = () => {
  let user = useAppSelector(userLoggedInSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showOptions, setShowOptions] = useState("")
  const [editDetails, setEditDetails] = useState(false)
  const [profileDetails, setProfileDetails] = useState(user)
  const [passwordToCheck, setPasswordToCheck] = useState("")
  const [errorMassage, setErrorMassage] = useState("")
  const [deleteUser, setDeleteUser] = useState(false)

  const handleUpdateDetails = async (details: User) => {
    try {
      if (user && details) {
        const userID = user._id
        const { data } = await axios.patch(`/api/users/${userID}`, { details })
        dispatch(setUserLoggedIn(profileDetails))

      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteUser = async () => {
    try {
      if (user && passwordToCheck) {
        const userID = user._id
        const { data } = await axios.post(`/api/users/checkPassword`, { userID, passwordToCheck })
        if (data.matched) {
          setProfileDetails({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            isAdmin: false
          })
          const { data } = await axios.delete(`/api/users/${userID}`)
          navigate(`/`)
        } else {
          setErrorMassage("הסיסמה לא תואמת. יש להזין את הסיסמה הנכונה ולנסות שוב")
        }
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div style={{ width: "75%", marginRight: "10%", marginBottom: "100px" }}>
      {!showOptions ?
        <div >
          <h1>{`היי ${user.firstName}!`}</h1>
          <p>רוצה לעבור לחשבון אחר? <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={() => {
            dispatch(setlogOut())
            navigate("/login")
          }}>יציאה</span></p>
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ flex: 1 }}>
              <img style={{ width: "100%" }} src="https://www.ikea.com/il/he/profile//static/media/main-page-image.6d3edc639c833633e718.jpg" />
              <div style={{ backgroundColor: "#58453b", color: "white", padding: "15px 20px", marginTop: "-10px" }}>
                <h2 >ברוכים הבאים לחשבון איקאה שלכם</h2>
                <h4 style={{ fontWeight: "normal" }}>פינה נעימה משלכם באיקאה בה תוכלו לעדכן את המידע.</h4>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ width: "100%", borderBottom: "1px solid gray", paddingBottom: "35px", marginBottom: "0px" }}>הפרופיל שלכם</h4>
              <div onClick={() => { setShowOptions("profileDetails") }} style={{ cursor: "pointer", display: "flex", borderBottom: "1px solid gray", width: "100%", height: "90px", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", width: "80%", alignContent: "center", alignItems: "center", margin: "15px" }}>
                  <img style={{ width: "25px", marginLeft: "15px" }} src={profileIcon} />
                  <div style={{}}>
                    <h4 style={{ marginBottom: "-12px" }}>פרטי פרופיל</h4>
                    <p>צפו במידע שלכם וערכו אותו</p>
                  </div>
                </div>
                <img style={{ width: "25px", marginLeft: "15px" }} src={leftArrowIcon} />
              </div>
              <div onClick={() => { setShowOptions("changePassword") }} style={{ cursor: "pointer", display: "flex", borderBottom: "1px solid gray", width: "100%", height: "90px", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", width: "80%", alignContent: "center", alignItems: "center", margin: "15px" }}>
                  <img style={{ width: "25px", marginLeft: "15px" }} src={lockIcon} />
                  <div style={{}}>
                    <h4 style={{ marginBottom: "-12px" }}>החלפת סיסמה</h4>
                    <p>על מנת לעדכן נדרשת סיסמה נוכחית</p>
                  </div>
                </div>
                <img style={{ width: "25px", marginLeft: "15px" }} src={leftArrowIcon} />
              </div>
              <div onClick={() => { setShowOptions("deleteAccount") }} style={{ cursor: "pointer", display: "flex", borderBottom: "1px solid gray", width: "100%", height: "90px", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", width: "80%", alignContent: "center", alignItems: "center", margin: "15px" }}>
                  <img style={{ width: "25px", marginLeft: "15px" }} src={garbageIcon} />
                  <div style={{}}>
                    <h4 style={{ marginBottom: "-12px" }}>מחיקת חשבון</h4>
                    <p>תוכלו לעזוב בכל עת</p>
                  </div>
                </div>
                <img style={{ width: "25px", marginLeft: "15px" }} src={leftArrowIcon} />
              </div>
            </div>
          </div>
        </div>
        :
        showOptions == 'profileDetails' ?
          <div>
            <p><span style={{ cursor: "pointer" }} onClick={() => { setShowOptions("") }}>הפרופיל שלי</span>{` > פרטי הפרופיל`}</p>
            <div style={{ width: "60%", display: "flex", justifyContent: "space-between", padding: "30px 35px", border: "1px solid gray", borderRadius: "5px" }}>
              {!editDetails ?
                <>
                  <div>
                    <h4>מידע אישי</h4>
                    <h5>שם מלא</h5>
                    <p>{user.firstName} {user.lastName}</p>
                    <h5>כתובת דוא"ל</h5>
                    <p>{user.email}</p>
                    {user.phoneNumber ?
                      <>
                        <h5>מספר טלפון</h5>
                        <p>{user.phoneNumber}</p>
                      </>
                      : null}
                  </div>
                  <button onClick={() => { setEditDetails(true) }} style={{ display: "flex", gap: "5px", backgroundColor: "white", border: "1.5px solid black", borderRadius: "20px", height: "40px", width: "110px", padding: "5px", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><img style={{ width: "25px" }} src={editIcon} /> עריכה</button>
                </>
                :
                <>
                  <div>
                    <h5>שם פרטי</h5>
                    <textarea name="editFirstName" id="editFirstName" cols={10} rows={1} onInput={(ev) => {
                      setProfileDetails({ ...profileDetails, firstName: (ev.target as HTMLTextAreaElement).value })
                    }}
                    >{user.firstName}</textarea>
                    <h5>שם משפחה</h5>
                    <textarea name="editLastName" id="editLastName" cols={10} rows={1} onInput={(ev) => {
                      setProfileDetails({ ...profileDetails, lastName: (ev.target as HTMLTextAreaElement).value })
                    }}
                    >{user.lastName}</textarea>
                    <h5>מספר טלפון</h5>
                    <textarea name="editPhoneNumber" id="editPhoneNumber" cols={10} rows={1} onInput={(ev) => {
                      setProfileDetails({ ...profileDetails, phoneNumber: (ev.target as HTMLTextAreaElement).value })
                    }}
                    >{user.phoneNumber}</textarea>
                  </div>
                  <div>
                    <button onClick={() => {
                      console.log("3")
                      console.log(profileDetails)
                      handleUpdateDetails(profileDetails)
                      setEditDetails(false)
                    }} style={{ marginBottom: "10px", display: "flex", gap: "5px", backgroundColor: "white", border: "1.5px solid black", borderRadius: "20px", height: "40px", width: "110px", padding: "5px", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><img style={{ width: "25px" }} src={saveEditIcon} /> שמירה</button>
                    <button onClick={() => { setEditDetails(false) }} style={{ backgroundColor: "black", color: "white", border: "1.5px solid black", borderRadius: "20px", height: "40px", width: "110px", padding: "5px", cursor: "pointer" }}> ביטול</button>
                  </div>
                </>
              }
            </div>
          </div>
          :
          showOptions == 'changePassword' ?
            <div></div>
            :
            <div style={{ width: "65%" }}>
              <p><span style={{ cursor: "pointer" }} onClick={() => { setShowOptions("") }}>הפרופיל שלי</span>{` > מחיקת חשבון`}</p>
              <h2 style={{ margin: "50px 0px" }}>מחיקת חשבון</h2>
              <p style={{ fontSize: "0.8em" }}>הגיע הזמן להיפרד? אנחנו כבר מתגעגעים! הנה מה שקורה כשאתם מוחקים את חשבונכם:</p>
              <p style={{ fontSize: "0.8em", marginRight: "20px" }}><span style={{ fontSize: "1.5em" }}> &#x2022; </span>  אתה מוחק את כל המידע האישי ורשימות הקניות שלך.</p>
              <p style={{ fontSize: "0.8em", marginRight: "20px" }}><span style={{ fontSize: "1.5em" }}> &#x2022; </span>  לא תהיה לך יותר גישה לחשבון שלך ולא תהיה לך אפשרות ליהנות מהטבות לחברים.</p>
              <p style={{ fontSize: "0.8em", marginRight: "20px" }}><span style={{ fontSize: "1.5em" }}> &#x2022; </span>  מסיבות מס ומשפטיות אחרות, אנחנו נשמור את היסטוריית הרכישות שלך.</p>
              <p style={{ fontSize: "0.8em" }}>אתם תמיד מוזמנים לחזור!</p>
              <h4>יש לכם שאלות?</h4>
              <p style={{ fontSize: "0.8em", borderBottom: "1px solid gray", paddingBottom: "40px" }}>צרו קשר עם <span style={{ textDecorationLine: "underline", cursor: "pointer" }}>שירות לקוחות</span></p>
              <h4>סיסמה</h4>
              <p style={{ fontSize: "0.8em" }}>כדי למחוק את החשבון, אשרו את הפעולה באמצעות הסיסמא.</p>
              <p style={{ fontSize: "0.8em" }}>סיסמה</p>
              <input onInput={(ev) => {
                setPasswordToCheck((ev.target as HTMLInputElement).value)
                setErrorMassage("")
              }} style={{ width: "95%", height: "35px", borderRadius: "5px", border: "1px solid gray", marginBottom: "20px", marginTop: "-10px" }} type="password" name="password" id="password" />
              {errorMassage ? <p>{errorMassage}</p> : null}
              <button onClick={() => {
                setDeleteUser(false)
                handleDeleteUser()
                dispatch(setlogOut())
              }} style={{ cursor: "pointer", width: "95%", height: "40px", backgroundColor: "black", color: "white", border: "none", borderRadius: "20px" }}>מחיקת חשבון</button>
            </div>
      }
    </div>
  )
}

export default Profile