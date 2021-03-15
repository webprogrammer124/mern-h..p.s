const express = require('express')
const Register = require('../../models/Register')
const router = express.Router()
router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const register = await Register.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: register._id
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