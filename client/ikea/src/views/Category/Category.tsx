import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './category.scss'
import { useSetSubCategoryContent } from './categoryHooks'


const Category = () => {

  const { name } = useParams()
  const { content, subCategory } = useSetSubCategoryContent()
  useEffect(() => {
    if (name)
      subCategory(name)
  }, [name])
  return (
    <div style={{ marginRight: "10%", width: "90%", overflow: "hidden" }}>
      <h1>{name}</h1>
      <div style={{width: "105%" }}>
        {content}

      </div>
    </div>
  )
}

export default Category