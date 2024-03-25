import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from './categoryHooks'
import ProductCard from '../../components/ProductCard/ProductCard'

const Category = () => {

  const { name } = useParams()
  const { products, handleGetCategoryProducts } = getProductsByCategory()

  useEffect(() => {
    if (name)
      handleGetCategoryProducts(name)
  }, [products])
  
  return (
    <div style={{ marginRight:"10%"}}>
      <h1>{name}</h1>
      <p> {products?.length} פריטים  </p>
      <div className="products" style={{display:"flex", gap:"3%"}}>

      {products && products.map((product) => {
        return(
          
          <div style={{width:"22%", transition:"all 0.2s"}}>
        <ProductCard product={product} />
        </div>
          )
        })}
        </div>
    </div>

  )
}

export default Category