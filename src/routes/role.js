const { Router } = require('express')
const router = Router()
const Role = require('../models/role')

router.get('/', async (req, res, next) => {
    try {
        const roles = await Role.find({}).exec()
        res.json({ roles })
    } catch (err) {
        next(err)
    }
})

module.exports = router
