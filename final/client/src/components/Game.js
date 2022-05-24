import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Game =(props)=>{

    
    let arr = []

    const [userGames, setUserGames] = useState('')
    const [gamePrice, setGamePrice] = useState(`$${props.unit_price}`)
    const [isClicked, setIsClicked] = useState(false)

    let id = localStorage.getItem('userId') || 0;

    if(gamePrice == `$0.00`){
        setGamePrice('Free')
    }


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/customer_game/account/${id}`)
        .then(res=>{
            setUserGames(res.data)
        })
    },[isClicked])
    
    const handleClick =()=>{  
        if(id != 0){
            setIsClicked(prev => !prev)
            if(!arr.includes(props.game_id)){
                axios.post(`http://localhost:8000/api/customer_game/create`,{
                account_id: id,
                game_owned: props.game_id
                })
                .then(res => console.log('Posting data', res)).catch(err => console.log(err))
                    arr = userGames.map(el =>{
                        return el.game_id
                    })
            } else{
                alert('you own this game')
            }
        } else {
            alert('You have to sign in to buy games')
        }
    }

    if(userGames.length > 0){
    arr = userGames.map(el =>{
        return el.game_id
    })
    } else if(userGames != ''){
        arr.push(userGames.game_id)
    }

    return(
        <>
            <div className='col-sm-6 col-md-4 col-xl-3'>
                <div className='game-div'>
                    <div className='div-img'>
                        <Link to={`/shop/${props.game_id}`}><img src={`/dbImages/${props.img}`} alt="game image" className='img-fluid game-img' width="350px" height="200"/></Link>
                        {isClicked || arr.includes(props.game_id)? <div className='library text-center'>Library</div>: <div className='price text-center' onClick={handleClick}>{gamePrice}</div>}
                    </div>
                    <h2 className='title'>{props.title}</h2>
                    <div className='user-rating'>{props.user_rating}/5</div>
                </div>
            </div>
        </>
    )
}

export default Game