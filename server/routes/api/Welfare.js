const express = require('express')
const Welfare = require('../../models/Welfare')
const router = express.Router()

router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const welfare = await Welfare.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: welfare._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error : error.message     
        })

    }


})

module.exports = router