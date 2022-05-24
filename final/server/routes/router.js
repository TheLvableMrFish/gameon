const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 8000

router.use(express.static('public'))

// ALL ROUTES
router.get('/api', (req, res)=>{
    res.json({
        'All Games': `http://localhost:${PORT}/api/game`,
        'All Customer': `http://localhost:${PORT}/api/customer`,
        'All Owned Games': `http://localhost:${PORT}/api/customer_game`
    })
})

router.use('/api/game', require('./api/gameRoute'))
router.use('/api/customer', require('./api/customerRoute'))
router.use('/api/customer_game', require('./api/customer_gameRoute'))

router.get('*', (req, res)=>{
    if(req.url == '/favicon.ico/'){
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist!</h1>')
    }
})

module.exports = router