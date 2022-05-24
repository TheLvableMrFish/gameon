const con = require('../../config/dbconfig')

const daoCommon = require('../daoCommon')

const customerDao = {
    ...daoCommon,
    // pre existing conditions from daoCommon.js

    table: 'customer',

    create: (req, res)=>{
        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else if(!req.body.first_name){
            res.json({
                "error": true,
                "message": "Must include a title"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.query(
                `INSERT INTO customer SET ${fields.join(' = ?, ')} = ? `,
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
        con.query(`UPDATE customer SET ${fields.join(' = ?, ')} = ? `,
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

module.exports = customerDao