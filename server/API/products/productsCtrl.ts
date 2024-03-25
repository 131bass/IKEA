import ProductModel from "./productModel";

export async function addProduct(req, res) {
    try {
        const { name,description, imgUrl,imgUrlView, series, price, priceComments, category, subCategory, itemNumber } = req.body;
        if (!name || !description ||!series || !price || !category || !subCategory || !itemNumber) throw new Error("Couldn't get all fields of product from req.body");

        const productDB = new ProductModel({ name, description, imgUrl,imgUrlView, series, price, priceComments, category, subCategory, itemNumber });
        await productDB.save();

    } catch (error) {
        res.send({ error: error.message });
        console.error(error)
    }
}



export async function deleteProduct(req, res) {
    try {

        const { productId } = req.body;
        if (!productId) throw new Error("Couldn't get all fields from req.body");
        const productsDB = await ProductModel.findByIdAndDelete({ productId });
        res.send({ productsDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}


export async function getAllProducts(req, res) {
    try {
        const productsDB = await ProductModel.find({})
        res.send({ products: productsDB });

    } catch (error) {
        res.send({ error: error.message });

    }
}

export async function getProductsByCategory(req,res){
    try {
        const {subcat} = req.query
        const categoryProducts = await ProductModel.find({subCategory:subcat})
        res.send({products:categoryProducts})
    } catch (error) {
        res.send({ error: error.message });
        
    }
}