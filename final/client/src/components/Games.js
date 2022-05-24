import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'

import Game from './Game'

const Games =()=>{

    let gameDivs;
    const [games, setGames] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/game')
        .then(res =>{
            setGames(res.data)
        })
    }, [])

    gameDivs = games.map(el =>{
        return(
            <Game
            key={el.game_id}
            game_id={el.game_id}
            img={el.img}
            unit_price={el.unit_price}
            title={el.title}
            user_rating={el.user_rating}
            /> 
        )
    })

    return(
        <section className='games container'>
            <h1>Games:</h1>
            <div className='row'>

                {gameDivs}
                  
            </div>
        </section>
    )
}

export default Games