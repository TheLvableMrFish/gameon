import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const GamePagePc =(props)=>{

    const [galImg, setGalImg] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/game/${props.id}`)
        .then(res =>{
            setGalImg(res.data.img1)
        })
    },[])

    const onClick =(img)=>{
        setGalImg(img)
    }

    let arr = []

    const [userGames, setUserGames] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    let id = localStorage.getItem('userId') || 0;

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
        <main className='container d-none d-xl-block'>
                <div className='row'>
                    <div className='col-md-8 single-game-title'>{props.title}</div>
                    <div className='col-md-8'>
                        <img className="single-game-img" src={`/dbImages/${galImg}`} />
                    </div>
                    <div className='col-md-4 single-game-details'>
                        <img className="single-game-img pt-4" src={`/dbImages/${props.img}`} />
                        <div className='row'>
                            <div className='col-lg-9 single-game-user_rating'>User Rating: {props.user_rating}/5</div>
                            <div className='col-lg-5 single-game-rating'>Rated: {props.rating}</div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-7 single-game-release'>Released: {props.release_year}</div>
                            <div className='col-lg-6 single-game-price'>{props.price}</div>
                        </div>
                        {   isClicked || arr.includes(props.game_id)? 
                            <button className='add-to-cart single-game-btn'>IN LIBRARY</button> :
                            <button className='add-to-cart single-game-btn' onClick={handleClick}>BUY NOW</button>
                        }
                    </div>
                </div>
                <div className='row game-gallery'>
                    <div className='col-md-3'>
                        <img className="img-fluid" src={`/dbImages/${props.img1}`} width="350px" height="200" onClick={()=>onClick(props.img1)} />
                    </div>
                    <div className='col-md-3'>
                        <img className="img-fluid" src={`/dbImages/${props.img2}`} width="350px" height="200" onClick={()=>onClick(props.img2)} />
                    </div>
                    <div className='col-md-3'>
                        <img className="img-fluid" src={`/dbImages/${props.img3}`} width="350px" height="200" onClick={()=>onClick(props.img3)} />
                    </div>
                    <div className='col-md-3'>
                        <img className="img-fluid" src={`/dbImages/${props.img4}`} width="350px" height="200" onClick={()=>onClick(props.img4)} />
                    </div>
                </div>
            </main>

            <main className='container d-xl-none'>

                <h1 className='col-md-8 single-game-title'>{props.title}</h1>
                <div className='col-md-12 single-game-details-mobile'>
                    <img className="single-game-img" src={`/dbImages/${props.img}`} />
                    <div className='single-game-info-mobile'>
                        <div className='row'>
                            <div className='col single-game-user_rating-mobile'>User Rating: {props.user_rating}/5</div>
                            <div className='col single-game-rating-mobile'>Rated: {props.rating}</div>
                        </div>
                        <div className='row'>
                            <div className='col single-game-release-mobile'>Released: {props.release_year}</div>
                            <div className='col single-game-price-mobile'>{props.price}</div>
                        </div>
                        <div className='text-center'>
                            {   isClicked || arr.includes(props.game_id)? 
                                <button className='add-to-cart single-game-btn-mobile'>IN LIBRARY</button> :
                                <button className='add-to-cart single-game-btn-mobile' onClick={handleClick}>BUY NOW</button>
                            }
                        </div>
                    </div>
                </div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={`/dbImages/${props.img1}`} className="d-block w-100" alt="Game Image" />
                    </div>

                    <div className="carousel-item">
                        <img src={`/dbImages/${props.img2}`} className="d-block w-100" alt="Game Image" />
                    </div>

                    <div className="carousel-item">
                        <img src={`/dbImages/${props.img3}`} className="d-block w-100" alt="Game Image" />
                    </div>

                    <div className="carousel-item">
                        <img src={`/dbImages/${props.img4}`} className="d-block w-100" alt="Game Image" />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </main>
        </>
    )
}

export default GamePagePc