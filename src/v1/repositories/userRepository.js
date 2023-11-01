const { User } = require('../models');

const getAll = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

const getBy = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw error;
    }
}

const create = async (newUser) => {
    try {
        const user = await User.create(newUser);
        return user;
    } catch (error) {
        throw error;
    }
}

const update = async (id, newUser) => {
    try {
        const user = await User.findByPk(id);
        await user.update(newUser);
        return user;
    } catch (error) {
        throw error;
    }
}

const remove = async (id) => {
    try {
        const user = await User.findByPk(id);
        await user.destroy();
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    getBy,
    create,
    update,
    remove
};