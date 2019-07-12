const express = require("express");
const getProducts = require("./getProducts")
const getProduct = require("./getProduct")

const app = express();
const PORT = 4444;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});

app.get("/api/products", getProducts)
app.get("/api/products/:id", getProduct)