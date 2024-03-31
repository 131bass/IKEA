import { Link } from "react-router-dom"
import "./register.scss"
import { useRegister } from "./registerHooks"
import { useState } from "react"
import hidePasswordIcon from '../../assets/icons/hidePassword.png'
import showPasswordIcon from '../../assets/icons/showPassword.png'


const Register = () => {

    const { user, setUser, handleRegister } = useRegister()
    const [showPassword, setShowPassword] = useState(false)

    const changeShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="register">
            <div className="text">
                <h1>צרו חשבון איקאה</h1>
                <p className="toLogin">כבר יש לכם חשבון? <Link to="/login">היכנסו כאן</Link></p>
            </div>
            <div className="form">
                <form onSubmit={handleRegister}>
                    <h4>צרו פינה נעימה משלכם באיקאה. <br /> כבר ציינו שההצטרפות בחינם?</h4>

                    <label htmlFor="firstName">שם פרטי</label>
                    <input type="text" name="firstName" id="firstName" value={user.firstName} required
                        onInput={(ev) => {
                            setUser({ ...user, firstName: (ev.target as HTMLInputElement).value })
                        }} />

                    <label htmlFor="lastName">שם משפחה</label>
                    <input type="text" name="lastName" id="lastName" value={user.lastName} required
                        onInput={(ev) => {
                            setUser({ ...user, lastName: (ev.target as HTMLInputElement).value })
                        }} />

                    <label htmlFor="email">כתובת דוא"ל</label>
                    <input type="email" name="email" id="email" value={user.email} required
                        onInput={(ev) => {
                            setUser({ ...user, email: (ev.target as HTMLInputElement).value })
                        }} />

                    <label htmlFor="phoneNumber">מספר טלפון (אופציונלי)</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" value={user.phoneNumber}
                        onInput={(ev) => {
                            setUser({ ...user, phoneNumber: (ev.target as HTMLInputElement).value })
                        }} />

                    <label htmlFor="password">סיסמה</label>
                    <div style={{ position: "relative" }}>
                        <input type={showPassword ? "text" : "password"} style={{width:"98%"}} name="password" id="password" value={user.password} required
                            onInput={(ev) => {
                                setUser({ ...user, password: (ev.target as HTMLInputElement).value })
                            }} />
                        <img onClick={changeShowPassword} style={{ height: "2.2em", width: "2.5em", position: "absolute", cursor: "pointer", left: "10px", top: "5px" }} src={
                            showPassword ? hidePasswordIcon
                                : showPasswordIcon} />
                    </div>
                    <div className="checkPrivate">
                        <input type="checkbox" name="checkPrivate" id="checkPrivate" required />
                        <label htmlFor="checkPrivate">ידוע לי כי המידע אודותיי ישמר במערכות החברה בכפוף ל<span><a href="">מדיניות הפרטיות</a></span></label>
                    </div>
                    <button type="submit">צרו חשבון</button>
                </form>
            </div>
        </div>
    )
}

export default Register