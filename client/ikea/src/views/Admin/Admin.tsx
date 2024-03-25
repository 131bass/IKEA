import categoriesArr from "../../utils/categories"
import "./admin.scss"
import { useAddProduct, useGetAllProducts } from "./adminHooks"


const Admin = () => {
  const { product, setProduct, handleAddProduct } = useAddProduct()
  const { handleGetAllProducts } = useGetAllProducts()
  return (
    <div>
      <button onClick={handleGetAllProducts}>allProduct</button>

      <form onSubmit={handleAddProduct}>
        <label htmlFor="name">שם המוצר</label>
        <input type="text" name="name" id="name" value={product.name} required
          onInput={(ev) => {
            setProduct({ ...product, name: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="description">תאור</label>
        <input type="text" name="description" id="description" value={product.description} required
          onInput={(ev) => {
            setProduct({ ...product, description: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="imgUrl">כתובת תמונה</label>
        <input type="text" name="imgUrl" id="imgUrl" value={product.imgUrl}
          onInput={(ev) => {
            setProduct({ ...product, imgUrl: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="imgUrlView">כתובת תמונת המחשה</label>
        <input type="text" name="imgUrlView" id="imgUrlView" value={product.imgUrlView}
          onInput={(ev) => {
            setProduct({ ...product, imgUrlView: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="series">סדרה</label>
        <input type="text" name="series" id="series" value={product.series} required
          onInput={(ev) => {
            setProduct({ ...product, series: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="price">מחיר</label>
        <input type="number" name="price" id="price" value={product.price} required
          onInput={(ev) => {
            setProduct({ ...product, price: Number((ev.target as HTMLInputElement).value) })
          }} />
          <label htmlFor="priceComments">הערות למחיר</label>
        <input type="text" name="priceComments" id="priceComments" value={product.priceComments}
          onInput={(ev) => {
            setProduct({ ...product, priceComments: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="category">בחר קטגוריה</label>
        <select name="category" id="category" onChange={(ev) => {
          setProduct({ ...product, category: (ev.target as HTMLSelectElement).options[ev.target.selectedIndex].text })
        }}>
          <option value=""> </option>
          {categoriesArr[0].categories.map((category) => {
            return (
              <option value="">{category.name}</option>
              )
            })}
        </select>
            <label htmlFor="subCategory">בחר תת-קטגוריה</label>
        <input type="text" name="subCategory" id="subCategory" value={product.subCategory} required
          onInput={(ev) => {
            setProduct({ ...product, subCategory: (ev.target as HTMLInputElement).value })
          }} />
          <label htmlFor="itemNumber">הכנס מספר פריט</label>
          <input type="text" name="itemNumber" id="itemNumber" value={product.itemNumber}
            onInput={(ev) => {
              setProduct({ ...product, itemNumber: (ev.target as HTMLInputElement).value })
            }} />
        <button type="submit">צור מוצר</button>

      </form>
    </div>
  )
}

export default Admin