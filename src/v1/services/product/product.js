const { ProductRepository } = require('../../repositories');

const create = async (product) => {
    try {
        const newProduct = await ProductRepository.create(product);
        return newProduct;
    } catch (error) {
        throw error;
    }
}

const get = async (id) => {
    try {
        const product = await ProductRepository.get({ filter: { id } });
        return product;
    } catch (error) {
        throw error;
    }
}

const list = async (filter) => {
    try {
        const products = await ProductRepository.list({ filter });
        return products;
    } catch (error) {
        throw error;
    }
}

const update = async (id, product) => {
    try {
        const newProduct = await ProductRepository.update(id, product);
        return newProduct;
    } catch (error) {
        throw error;
    }
}

const remove = async (id) => {
    try {
        const product = await ProductRepository.drop(id);
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
    remove
};
