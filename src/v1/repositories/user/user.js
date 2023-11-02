const { User } = require('../../models');

const create = async (newUser) => {
    try {
        const user = await User.create(newUser);
        return user;
    } catch (error) {
        throw error;
    }
}

const get = async ({ filter }) => {
    try {
        const user = await User.findOne({ where: filter });
        return user;
    } catch (error) {
        throw error;
    }
}

const list = async ({ filter, limit = 0}) => {
    try {
        const users = await User.findAll({ where: filter, limit });
        return users;
    } catch (error) {
        throw error;
    }
};

const update = async (id, newUser) => {
    try {
        const user = await User.findByPk(id);
        await user.update(newUser);
        return user;
    } catch (error) {
        throw error;
    }
}

const drop = async (id) => {
    try {
        const user = await User.findByPk(id);
        await user.destroy();
        return user;
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