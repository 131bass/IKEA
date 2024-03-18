import { Link } from "react-router-dom"
import "./login.scss"
import { useLogin } from "./loginHooks"


const Login = () => {
 const {user, setUser,login} = useLogin()

  return (
    <div className="login">
      <div className="text">
        <h2>היכנסו לחשבון איקאה שלכם</h2>
        <p>תוכלו ליהנות מחוויה אישית יותר, שבה לא תצטרכו למלא את הפרטים בכל פעם מחדש</p>
      </div>
      <div className="form">
        <form onSubmit={login}>
          <h4>היכנסו לחשבונכם או צרו חשבון עוד היום כדי ליהנות מחוויה אישית יותר</h4>

          <label htmlFor="email">דוא"ל (שם משתמש)</label>
          <input type="email" name="email" id="email" value={user.email} required
            onInput={(ev) => {
              setUser({ ...user, email: (ev.target as HTMLInputElement).value }
              )
            }} />


          <label htmlFor="password">סיסמה</label>
          <input type="password" name="password" id="password" value={user.password} required
            onInput={(ev) => {
              setUser({ ...user, password: (ev.target as HTMLInputElement).value }
              )
            }} />
          <Link to={""} className="forgotPassword">שכחתם את הסיסמה?</Link>
          <button type="submit" className="submit">כניסה</button>
          <button className="toRegister"><Link to="/register">צרו חשבון</Link></button>
        </form>
      </div>
    </div>
  )
}

export default Login