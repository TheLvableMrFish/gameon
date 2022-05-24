const con = require('../config/dbconfig')

const dao = {
    findAll: (res, table)=>{
        con.query(`SELECT * FROM ${table}`,
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
            `SELECT * FROM ${table} WHERE ${table}_id=${id}`,
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

module.exports = dao