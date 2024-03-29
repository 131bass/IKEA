import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import editIcon from '../../assets/icons/edit.png'
import garbageIcon from '../../assets/icons/garbage.png'
import saveEditIcon from '../../assets/icons/saveEdit.png'
import { userLoggedInSelector } from '../../features/loggedInUser/userSlice'
import { useGetProductByItemNumber } from './productPageHooks'

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

  const userRedux = useAppSelector(userLoggedInSelector)


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

          {editPrice ? <div style={{display:"flex", alignItems:"center"}}>
            <textarea name="editPrice" id="editPrice" cols={10} rows={1} onInput={(ev) => {
              setPrice(Number((ev.target as HTMLInputElement).value))
            }}
            >{product?.price}</textarea>
            <p style={{ display: "flex", width: "80px", height: "25px", justifyContent: "center", gap: "10px", alignItems: "center", padding: "10px 20px", border: "1.5px solid gray", borderRadius: "20px", cursor: "pointer", fontSize: "small", marginRight: "10px", fontWeight: "bold" }} onClick={() => {
              if (price)
                handleUpdatePrice(price)
              setEditPrice(false)
            }}  ><img style={{ width: "25px" }} src={saveEditIcon} />  שמירה</p>
          </div>
            : userRedux.isAdmin ?
              <>
                <h2 style={{ display: "flex", alignItems: "center" }}>&#8362;{product?.price}{product?.priceComments ? <span style={{ fontSize: "small", paddingTop: "8px", paddingRight: "5px" }}> {`/ ${product.priceComments}`}</span> : null}<p style={{ display: "flex", width: "80px", height: "25px", justifyContent: "center", gap: "10px", alignItems: "center", padding: "10px 20px", border: "1.5px solid gray", borderRadius: "20px", cursor: "pointer", fontSize: "small", marginRight: "10px", fontWeight: "bold" }} onClick={() => { setEditPrice(true) }} ><img style={{ width: "25px" }} src={editIcon} />  עריכה</p></h2>
                <button style={{ backgroundColor: "red", width: "40px", height: "40px", border: "1px solid black", borderRadius: "50%", backgroundImage: `url(${garbageIcon})` ,backgroundSize: "60%", backgroundPosition: "center", backgroundRepeat: "no-repeat", cursor:"pointer" }} onClick={handleDeleteProduct}></button>
              </> :
              <h2>&#8362;{product?.price}{product?.priceComments ? <span style={{ fontSize: "small" }}> {`/ ${product.priceComments}`}</span> : null}</h2>
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