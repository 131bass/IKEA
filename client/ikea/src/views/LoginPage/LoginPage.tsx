
import { useEffect } from 'react'
import Login, { LoginMode } from '../../components/Login/Login'
import { useAppSelector } from '../../app/hooks'
import { userLoggedInSelector } from '../../features/loggedInUser/userSlice'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const userRedux = useAppSelector(userLoggedInSelector)
  // const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    userRedux.email ? navigate("/profile") : null
  }, [userRedux])
  return (
    <div>
        <Login loginMode={LoginMode.FULLPAGE}/>
    </div>
  )
}

export default LoginPage