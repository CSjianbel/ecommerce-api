const { UserService } = require('../../services');

const register = async (req, res) => {
    try {
        const user = await UserService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.profile(email);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Password is incorrect');
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