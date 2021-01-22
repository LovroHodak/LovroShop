const express = require("express");
const router = express.Router();
const productModel = require('../models/ProductModel')

router.get('/', (req, res) => {
    productModel.find().then((products) => {
        console.log('Products are:', products)
        res.status(200).json(products)
    }).catch((error) => {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    })
})

router.get('/:id', (req, res) => {
    productModel.findById(req.params._id).then((response) => {
        console.log('Product is: ', response)
        res.status(200).json(response)
    }).catch((error) => {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    })
})

module.exports = router;