const { ProductService } = require('../../services');

const createProduct = async (req, res) => {
    try {
        const product = await ProductService.create(req.body);
        res.status(201).json(product);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await ProductService.get(req.params.id);
        res.status(200).json(product);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const query = {};
        if (req.query.id) query.id = req.query.id;
        if (req.query.name) query.name = req.query.name;
        if (req.query.price) query.price = req.query.price;
        if (req.query.stockCount) query.stockCount = req.query.stockCount;
        
        const products = await ProductService.list(query);
        res.status(200).json(products);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await ProductService.update(req.params.id, req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await ProductService.remove(req.params.id);
        res.status(200).json({product, message: 'Successfully deleted product!'})
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
};