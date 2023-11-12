const { Product } = require('../../models');

const create = async (newProduct) => {
    try {
        const product = await Product.create(newProduct);
        return product;
    } catch (error) {
        throw error;
    }
}

const get = async ({ filter }) => {
    try {
        const product = await Product.findOne({ where: filter });
        return product;
    } catch (error) {
        throw error;
    }
}

const list = async ({ filter, limit }) => {
    try {
        let products;
        if (limit == -1)
            products = await Product.findAll({ where: filter});
        else 
            products = await Product.findAll({ where: filter, limit});

        return products;
    } catch (error) {
        throw error;
    }
};

const update = async (id, newProduct) => {
    try {
        const product = await Product.findByPk(id);
        await product.update(newProduct);
        return product;
    } catch (error) {
        throw error;
    }
}

const drop = async (id) => {
    try {
        const product = await Product.findByPk(id);
        await product.destroy();
        return product;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    get,
    list,
    update,
    drop
};