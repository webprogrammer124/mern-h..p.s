const express = require('express')
const Service = require('../../models/Service')
const router = express.Router()

router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const service = await Service.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: service._id
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