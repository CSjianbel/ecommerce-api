const { UserRepository } = require('../repositories');

const getAll = async () => {
    return await UserRepository.getAll();
}

const getById = async (id) => {
    return await UserRepository.getBy(id);
}

const create = async (user) => {
    return await UserRepository.create(user);
}

const update = async (id, user) => {
    return await UserRepository.update(id, user);
}

const remove = async (id) => {
    return await UserRepository.remove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};