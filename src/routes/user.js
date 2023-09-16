const { Router } = require('express')
const router = Router()
const User = require('../models/user')

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({}).exec()
        res.json({ users })
    } catch (err) {
        next(err)
    }
})

module.exports = router
