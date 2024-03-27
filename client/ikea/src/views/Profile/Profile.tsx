import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setlogOut, userLoggedInSelector } from '../../features/loggedInUser/userSlice'
import './profile.scss'


const Profile = () => {
const user = useAppSelector(userLoggedInSelector)
const dispatch = useAppDispatch()

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={()=>{dispatch(setlogOut())}}>logOut</button>
    </div>
  )
}

export default Profile