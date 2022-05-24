const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/customer_gameDao')

router.get('/', (req, res)=>{
    dao.findAll(res, 'customer_game')
})

router.get('/account', (req, res)=>{
    dao.allAccountGames(res, 'customer_game')
})

router.get('/account/:id', (req, res)=>{
    dao.allAccountGamesById(res, 'customer_game', req.params.id)
})

router.get('/:id', (req, res)=>{
    dao.findById(res, 'customer_game', req.params.id)
})

router.post('/create', (req, res)=>{
    dao.create(req, res)
})

router.patch('/update', (req, res)=>{
    dao.update(req, res)
})

module.exports = router