const products = require("../products.json");

const getProducts = (req, res) => {
    if (!req.query.price) {
        return res.status(200).send(products);
    }
    else {
        return res.status(200).send(
            products.filter(p => p.price >= (+req.query.price))
        )
    }
};

module.exports = getProducts;
