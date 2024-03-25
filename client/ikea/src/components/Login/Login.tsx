import { FC } from "react"
import { Link } from "react-router-dom"
import { useShowSideBar } from "../NavBar/navBarHooks"
import "./login.scss"
import { useLogin } from "./loginHooks"


export enum LoginMode {
  FULLPAGE = "fullPage",
  SIDEBAR = "sideBar"
}

interface LoginProps {
  loginMode: LoginMode
}


const Login: FC<LoginProps> = ({ loginMode }) => {
  const { user, setUser, login } = useLogin()

  const{changeSideBarVisiable} = useShowSideBar()

  return (

    <div>
      <div className={loginMode==LoginMode.FULLPAGE?"login":"login sideBar"}>
        <div className="text">
          <h2>היכנסו לחשבון איקאה שלכם</h2>
          <p>תוכלו ליהנות מחוויה אישית יותר, שבה לא תצטרכו למלא את הפרטים בכל פעם מחדש</p>
        </div>
        <div className="form">
          <form onSubmit={login}>
            {loginMode==LoginMode.FULLPAGE?
            <h4>היכנסו לחשבונכם או צרו חשבון עוד היום כדי ליהנות מחוויה אישית יותר</h4>
            :null}

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
            <button className="toRegister" ><Link to="/register">צרו חשבון</Link></button>
          </form>
        </div>
      </div >
    </div>
  )
}

export default Login