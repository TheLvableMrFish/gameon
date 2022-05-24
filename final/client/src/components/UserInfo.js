import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserInfo =()=>{

    let id = localStorage.getItem('userId')
    let gamesTrue = ""

    const [user, setUser] = useState([])
    const [userGames, setUserGames] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/customer/${id}`)
        .then(res=>{
            setUser([res.data.first_name, res.data.last_name, res.data.admin])
        })
    }, [])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/customer_game/account/${id}`)
        .then(res=>{
            setUserGames(res.data)
        })
        
    },[])
    
    if(userGames.length > 0){
    gamesTrue =  userGames.map(el =>{
        return (
            <div className='col-sm-6 col-md-4 col-xl-3 game-in-lib' key={el.title}>
                <div>{el.title}</div>
                <Link to={`/${el.game_id}`}><img src={`/dbImages/${el.img}`} className='img-fluid game-img' width="350px" height="200"/></Link>
            </div>
        )
    })
    } else if(userGames != '') {
        gamesTrue = <div className='col-sm-6 col-md-4 col-xl-3 game-in-lib' key={userGames.title}>
            <div>{userGames.title}</div>
            <Link to={`/${userGames.game_id}`}><img src={`/dbImages/${userGames.img}`} className='img-fluid game-img' width="350px" height="200"/></Link>
        </div>
    } else {
        gamesTrue =  <div className='game-in-lib'>You don't own any games yet</div>
    }

    // form for admin account to add games

    let currentYear= new Date().getFullYear()

    const [form, setForm] = useState({
        title: '',
        unit_price: '',
        user_rating: '1',
        rating: 'E',
        release_year: '',
        img: '',
        game_imgs: '',
        game_imgs: ''
    })
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/game/create', form)
        .then(res => console.log('Posting data', res)).catch(err => console.log(err))
        alert('You have successfully created a game!')
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        
        setForm((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }
    
    let uploadGame = 
    <>
    <h2 className='upload-game-title'>Upload Game:</h2>
    <form onSubmit={handleSubmit} className='upload-form'>
        <div className='row'>

            <div className='col-md-12 upload-div'>
                <input placeholder='Title' type="text" name='title' className='form-input-edits' id="title" value={form.title} onChange={handleChange} required />
            </div>

            <div className='col-md-12 upload-div'>
                <input placeholder='Price' type="number" name='unit_price' min={0} max={99.99} step=".01" className='form-input-edits' id="unit_price" value={form.unit_price} onChange={handleChange} required />
            </div>

            <div className='col-md-12 upload-div'>
                <input placeholder={currentYear} type="number" name='release_year' min={1900} max={currentYear} className='form-input-edits' id="release_year" value={form.release_year} onChange={handleChange} required />
            </div>

            <div className='col-md-12 upload-div'>
                <input placeholder='Game Image' type="text" name='img' className='form-input-edits' id="release_year" value={form.img} onChange={handleChange} required />
            </div>

            <div className='col-md-12 upload-div'>
                <input placeholder='Game Images' type="number" name='game_imgs' min={1} className='form-input-edits' id="game_imgs" value={form.game_imgs} onChange={handleChange} required />
            </div>

            <div className='col-md-12 upload-div'>
                <select name='rating' className=' user-info-drop' id='rating' defaultValue={`DEFAULT`} onChange={handleChange}>
                    <option className='form-input-edits' value='DEFAULT' disabled>Chose user rating</option>
                    <option className='form-input-edits' value='E'>E</option>
                    <option className='form-input-edits' value='E-10'>E-10</option>
                    <option className='form-input-edits' value='T'>T</option>
                    <option className='form-input-edits' value='M'>M</option>
                </select>
            </div>

            <div className='col-md-12 upload-div'>
                <select name='user_rating' className='form-label user-info-drop' id='user_rating' defaultValue={`DEFAULT`} onChange={handleChange}>
                    <option className='form-input-edits' value='DEFAULT' disabled>Chose a rating</option>
                    <option className='form-input-edits' value='1'>1</option>
                    <option className='form-input-edits' value='2'>2</option>
                    <option className='form-input-edits' value='3'>3</option>
                    <option className='form-input-edits' value='4'>4</option>
                    <option className='form-input-edits' value='5'>5</option>
                </select>
            </div>

            <div className='col-md-12 d-flex justify-content-end'>
                <input className="btn-primary" type="submit" />
            </div>

        </div>
    </form>
    </>

    return(
        <>
        <main className='container'>
            <div className='userName'>{user[0]} {user[1]}</div>
            <br />
            {user[2] === 'true' ? uploadGame : null}

            <h2 className='account-title'>Library:</h2>
            <div className='row'>
                {gamesTrue}
            </div>
        </main>
        </>
    )
}

export default UserInfo