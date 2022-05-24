import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Modal =(props)=>{

    let userId = parseInt(localStorage.getItem('userId')) || 0;

    const [allUsers, setAllUsers] = useState()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [cookies, setCookies, removeCookie] = useCookies(['user'])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/customer`)
        .then(res =>{
            setAllUsers(res.data)
        })
    }, [])

    const signIn=()=>{
        allUsers.filter(el =>{
            console.log(el.password)
            console.log(el.email)
            if(email.toLowerCase() === el.email){
                if(password === el.password){
                    props.logIn(true)
                    localStorage.setItem('userId', el.customer_id)
                    console.log(localStorage.getItem('userId'))
                }
            }
        })
    }

    return(
        <>
        <div className='modal-container '>

        <div className='close-modal' onClick={props.onClick}>X</div>

            <div className='modal-div container'>
                <h2 className='modal-title-text'>Welcome to GameOn</h2>
                <p className='modal-text'>Sign in your GameOn account</p>

                    <form action='#'>                        
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} className='modal-form-edits' id="email" placeholder="Email" required />
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} className='modal-form-edits' id="password" placeholder="Password" required />
                        <button className='modal-btn sign-in-btn' onClick={signIn}>Sign In</button>
                    </form>

                <p className='modal-text'>OR</p>
                <Link to="/signup" ><button className='modal-btn create-account-btn'>Create Account</button></Link>
            </div>
        </div>
        </>
    )
}

export default Modal