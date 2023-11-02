const { UserRepository } = require('../../repositories');

const register = async (user) => {
    try {
        const newUser = await UserRepository.create(user);
        return newUser;
    } catch (error) {
        throw error;
    }
}

const profile = async (email) => {
    try {
        const user = await UserRepository.get({ filter: { email } });
        return user;
    } catch (error) {
        throw error;
    }
}

const list = async (filter) => {
    try {
        const users = await UserRepository.list({ filter });
        return users;
    } catch (error) {
        throw error;
    }
}

const update = async (id, user) => {
    try {
        const newUser = await UserRepository.update(id, user);
        return newUser;
    } catch (error) {
        throw error;
    }
}

const remove = async (id) => {
    try {
        const user = await UserRepository.drop(id);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    register,
    profile,
    list,
    update,
    remove
};
