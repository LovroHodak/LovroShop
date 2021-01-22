require("dotenv").config();
require('../config/db.config')
const mongoose = require('mongoose')
const productData = require('../data/products')
const ProductModel = require('../models/ProductModel')

ProductModel.insertMany(productData).then(() => {
    console.log('Data LH inserted')
    mongoose.connection.close()
}).catch((err) => {
    console.log('Smt LH went wrong', err)
})



