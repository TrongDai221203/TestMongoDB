const Product = require('../models/product')

const asyncHandler = require('express-async-handler')

const product = asyncHandler(async (req, res) => {
    const response = await Product.create(req.body)
    return res.status(200).json({
        sucess: response ? true : false,
        response
    })

})
module.exports = {
    product
}