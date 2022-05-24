import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'

import GamePageContent from '../components/GamePageContent'

const GamePage =()=>{

    const {id} = useParams()

    const [game, setGame] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/game/${id}`)
        .then(res =>{
            setGame(res.data)       
        })
    }, [])
    
    let price = game.unit_price == 0.00 ? `Free` : `$${game.unit_price}`
    
    return(
        <>
        <Header />
            <GamePageContent
                key={id}
                id={id}
                game_id={game.game_id}
                title={game.title}
                rating={game.rating}
                user_rating={game.user_rating}
                price={price}
                release_year={game.release_year}
                img={game.img}
                img1={game.img1}
                img2={game.img2}
                img3={game.img3}
                img4={game.img4}
            />
        <Footer />
        </>
    )
}

export default GamePage