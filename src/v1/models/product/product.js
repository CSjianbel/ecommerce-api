

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Product name cannot be null" },
                notEmpty: { msg: "Product name cannot be empty" }
            }
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: { msg: "Price name cannot be null" },
                notEmpty: { msg: "Price name cannot be empty" }
            }
        },
        stockCount: {
            type: DataTypes.INTEGER,
            default: 0,
            min: 0
        },
        
    }, {
        timestamps: true,
    });

    return Product;
};