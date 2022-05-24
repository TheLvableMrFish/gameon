const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const customer_gameDao = {
    ...daoCommon,
    // pre existing conditions from daoCommon.js

    table: 'customer_game',

    allAccountGames: (res, req) =>{
        con.query(
            `SELECT customer_game_id, game_id, customer_id, first_name, last_name, img, title FROM customer_game AS cs
                JOIN customer ON cs.account_id = customer.customer_id
                JOIN game ON cs.game_owned = game.game_id
                ORDER BY customer.customer_id`,
            (error, rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR`, error)
                }
            })
        },

    allAccountGamesById: (res, req, id) =>{
        con.query(
            `SELECT cs.customer_game_id, game.game_id, customer.customer_id, customer.first_name, customer.last_name, game.img, title FROM customer_game AS cs JOIN customer ON cs.account_id = customer.customer_id JOIN game ON cs.game_owned = game.game_id WHERE customer.customer_id = ${id} ORDER BY customer.customer_id`,
            (error, rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR`, error)
                }
            })
        },

    create: (req, res)=>{
        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if(!req.body.account_id){
            res.json({
                "error": true,
                "message": "Must include an account"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(
                `INSERT INTO customer_game SET ${fields.join(' = ?, ')} = ? `,
                values,
                (error, dbres)=>{
                    if(!error){
                        res.json({Last_id: dbres.insertId})
                    } else {
                        console.log('DAO ERROR', error)
                    }
                }

            )
        }
    },

    update: (req, res)=>{
        const fields = Object.keys(req.body)
        const values = Object.values(req.body)
        con.query(`UPDATE customer_game SET ${fields.join(' = ?, ')} = ? `,
        values,
        (error, dbres)=>{
            if(!error){
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log('DAO ERROR', error)
                res.send('Error updating record')
            }
        })
    },

    findById: (res, table, id) =>{
        con.query(
            `SELECT * FROM ${table} WHERE game_owned=${id}`,
            (error, rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO ERROR`, error)
            }
        })
    }

}

module.exports = customer_gameDao