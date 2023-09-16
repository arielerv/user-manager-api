const { Router } = require('express')
const pkg = require('../../package.json')
const router = Router()

//Ping
router.get('/ping', (req, res) => {
    res.send({ version: pkg.version })
})

module.exports = router
