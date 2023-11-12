
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "First name cannot be null" },
                notEmpty: { msg: "First name cannot be empty" }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Last name cannot be null" },
                notEmpty: { msg: "Last name cannot be empty" }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: "Email cannot be null" },
                notEmpty: { msg: "Email cannot be empty" },
                isEmail: { msg: "Email must be valid" }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Password cannot be null" },
                notEmpty: { msg: "Password cannot be empty" }
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
            validate: {
                notNull: { msg: "Role cannot be null" },
                notEmpty: { msg: "Role cannot be empty" },
                isIn: {
                    args: [["user", "admin"]],
                    msg: "Role must be either user or admin"
                }
            }
        }
    }, {
        timestamps: true,
    });

    return User;
};