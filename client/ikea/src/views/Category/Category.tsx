import { useParams } from 'react-router-dom'
import './category.scss'


const Category = () => {

  const { name } = useParams()


  return (
    <div>{name}</div>
  )
}

export default Category