const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const gameDao = {
    ...daoCommon,
    // pre existing conditions from daoCommon.js

    table: 'game',

    findAll: (res, table)=>{
        con.query(`SELECT * FROM ${table} AS g JOIN game_gal ON g.game_imgs = game_gal.gal_id`,
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

    findById: (res, table, id) =>{
        con.query(
            `SELECT * FROM ${table} AS g JOIN game_gal ON g.game_imgs = game_gal.gal_id WHERE ${table}_id=${id}`,
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
        } else if(!req.body.title){
            console.log(Object.keys(req.body))
            console.log(Object.values(req.body))
            res.json({
                "error": true,
                "message": "Must include a title"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
        
            con.query(
                `INSERT INTO game SET ${fields.join(' = ?, ')} = ? `,
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
        con.query(`UPDATE game SET ${fields.join(' = ?, ')} = ? `,
        values,
        (error, dbres)=>{
            if(!error){
                res.send(`Changed ${dbres.changedRows} row(s)`)
            } else {
                console.log('DAO ERROR', error)
                res.send('Error updating record')
            }
        })
    }
}

module.exports = gameDao