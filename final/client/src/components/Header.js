import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import Modal from './Modal'

const Header =()=>{


    let userId = parseInt(localStorage.getItem('userId')) || 0

    const [online, setOnline] = useState(false)
    const [modalView, setModalView] = useState(false)

    const modal=()=>{
        setModalView(prev => !prev)
    }
    
    const logOut =()=>{
        localStorage.clear('userId')
        window.location.reload()
    }

    // when the modal is up, this makes it so scrolling stops
    modalView ? document.body.style.overflow= "hidden": document.body.style.overflow = "visible"
    

    return(
        <>
    {modalView ? <Modal logIn={online => setOnline(online)} freeze={modalView} onClick={modal}/> : null}

    <header className="header position-fixed" id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <Link to='/' className='navbar-brand col-md-6 col-lg-3 col-xl-2 game-on-logo-nav'></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-options" id="navbarScroll">

                    <ul className="navbar-nav  my-2 my-lg-0 ">
                        <li className="nav-item">
                            <Link to='/about' className='top-nav-item'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shop' className='top-nav-item'>Shop</Link>
                        </li>
                        <li className="nav-item">
                            {userId != 0 ? <Link to='/account' className='top-nav-item'> Account</Link> : <div className='top-nav-item' onClick={modal}>Sign In</div>}
                        </li>
                        {userId != 0? <li className="nav-item"><div className='top-nav-item' onClick={logOut}>Log Out</div></li>: null}
                    </ul>
                    
                </div>
            </div>
        </nav>
    </header>

    <div className='spacer'></div> 
    </>
    )
}

export default Header