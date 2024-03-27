import ProductModel from "./productModel";

export async function addProduct(req, res) {
    try {
        const { name, description, imgUrl, imgUrlView, series, price, priceComments, category, subCategory, itemNumber } = req.body;
        if (!name || !description || !series || !price || !category || !subCategory || !itemNumber) throw new Error("Couldn't get all fields of product from req.body");

        const productDB = new ProductModel({ name, description, imgUrl, imgUrlView, series, price, priceComments, category, subCategory, itemNumber });
        await productDB.save();

    } catch (error) {
        res.send({ error: error.message });
        console.error(error)
    }
}



export async function deleteProduct(req, res) {
    try {
        console.log("start")
        const { id } = req.query;
        if (!id) throw new Error("Couldn't get all fields from req.body");
        console.log(id)
        const productsDB = await ProductModel.findByIdAndDelete(id);
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

export async function getProductsBySubCategory(req, res) {
    try {
        const { subCategory } = req.query
        const categoryProducts = await ProductModel.find({ subCategory })
        res.send({ products: categoryProducts })
    } catch (error) {
        res.send({ error: error.message });

    }
}

export async function getProduct(req, res) {
    try {
        const { itemNumber } = req.query
        const product = await ProductModel.findOne({ itemNumber })
        res.send({ product })
    } catch (error) {
        res.send({ error: error.message });

    }
}
export async function getProductsByName(req, res) {
    try {
        const { name } = req.query
        const products = await ProductModel.find({ name: { "$regex": `${name}` } })
        res.send({ products })
    } catch (error) {
        res.send({ error: error.message });

    }
}