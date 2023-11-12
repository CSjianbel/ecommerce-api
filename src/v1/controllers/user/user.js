const { userservice } = require('../../services');

const register = async (req, res) => {
    try {
        const user = await userservice.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userservice.profile(email);

        if (!user) {
            throw new error('user not found');
        }

        if (user.password !== password) {
            throw new error('password is incorrect');
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    register,
    login
};