import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByItemNumber } from './productPageHooks'

const ProductPage = () => {

  const { itemNumber } = useParams()

  const { product, handleGetProduct } = useGetProductByItemNumber()

  const handleDeleteProduct = async () => {
    try {
      if (product) {
       const productID = product._id
        const { data } = await axios.delete(`api/products/?id=${productID}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (itemNumber)
      handleGetProduct(itemNumber)
  }, [product])
  return (


    <div style={{ width: "90%", marginRight: "10%", marginTop: "5%" }}>
      <div style={{ display: "flex" }}>
        <div className="images" style={{ display: "flex", width: "66%", gap: "3%" }}>
          <div style={{ width: "45%", height: "400px", backgroundImage: `url(${product?.imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
          <div style={{ width: "45%", height: "400px", backgroundImage: `url(${product?.imgUrlView})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
        </div>
        <div className="details">
          <h4>{product?.series}</h4>
          <p>{product?.name}</p>
          <h2>&#8362;{product?.price}</h2>
          <button onClick={() => {
handleDeleteProduct()
          }}>מחק מוצר</button>
        </div>
      </div>
      <div style={{ width: "60%" }}>
        <p style={{ fontSize: "1.3em" }}>{product?.description}</p>
        <p style={{ fontSize: "0.7em" }}>מספר פריט</p>
        <p style={{ backgroundColor: "black", color: "white", fontSize: "0.7em", fontWeight: "bold", width: "fit-content", padding: "3px 10px" }}>{product?.itemNumber}</p>
      </div>
    </div>
  )
}

export default ProductPage