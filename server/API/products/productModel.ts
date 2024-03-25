import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:true
  },
  imgUrl: String,
  imgUrlView: String,
  series: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceComments:String,
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  isNew: {
    type: Boolean,
    default: true
  },
  itemNumber:{
    type:String,
    required:true,
    unique:true
  }
});


const ProductModel = model("products", ProductSchema)

export default ProductModel;

