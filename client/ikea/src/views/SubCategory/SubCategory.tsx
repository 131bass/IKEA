import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useGetProductsBySubCategory } from './subCategoryHooks'

const SubCategory = () => {

  const { name } = useParams()
  const { products, handleGetSubCategoryProducts } = useGetProductsBySubCategory()

  useEffect(() => {
    if (name)
    handleGetSubCategoryProducts(name)
  }, [products])
  
  return (
    <div style={{ marginRight:"10%"}}>
      <h1>{name}</h1>
      <p> {products?.length} פריטים  </p>
      <div className="products" style={{display:"flex", flexWrap:"wrap"}}>

      {products && products.map((product) => {
        return(
          
          <div style={{ transition:"all 0.2s"}}>
        <ProductCard product={product} />
        </div>
          )
        })}
        </div>
    </div>

  )
}

export default SubCategory