import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductByItemNumber } from './productPageHooks'
import editIcon from './images/edit.png'
import saveEditIcon from './images/saveEdit.png'
import cancelIcon from './images/cancel.png'

const ProductPage = () => {

  const { itemNumber } = useParams()

  const { product, handleGetProduct } = useGetProductByItemNumber()

  const navigate = useNavigate()


  const handleDeleteProduct = async () => {
    try {
      if (product) {
        const productID = product._id
        const { data } = await axios.delete(`/api/products/${productID}`)
        navigate(`/subcategory/${product.subCategory}`)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const [editPrice, setEditPrice] = useState(false)
  const [price, setPrice] = useState<number>()

  const handleUpdatePrice = async (newPrice: number) => {
    try {
      if (product && newPrice) {
        const productID = product._id
        const { data } = await axios.patch(`/api/products/${productID}`, { newPrice })
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

          {editPrice ? <>
            <textarea name="" id="" cols="10" rows="1" onInput={(ev) => {
              setPrice(Number((ev.target as HTMLInputElement).value))
            }}
            >{product?.price}</textarea>
            <span onClick={() => {
              if (price)
                handleUpdatePrice(price)
              setEditPrice(false)
            }} ><img style={{marginRight:"20px", border:"1px solid gray", borderRadius:"5px", cursor:"pointer"}} src={saveEditIcon} /></span>
          </>
            :
            <>
            <h2>&#8362;{product?.price}<span onClick={() => { setEditPrice(true) }} ><img style={{marginRight:"20px", border:"1px solid gray", borderRadius:"5px", cursor:"pointer"}} src={editIcon} /></span></h2>
          <button style={{backgroundColor:"red",width:"40px",height:"40px",border:"1px solid black", borderRadius:"50%", backgroundImage:`url(${cancelIcon})`, backgroundSize:"contain", backgroundPosition:"center"}} onClick={handleDeleteProduct}></button>
            </>
          }
          
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