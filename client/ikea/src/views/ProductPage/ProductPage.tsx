import { useParams } from 'react-router-dom'

const ProductPage = () => {

  const {itemNumber} = useParams()
  
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage