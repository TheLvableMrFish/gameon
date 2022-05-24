import React from 'react'
import ReactDOM from 'react'

import Carousel from './Carousel'
import Games from './Games'

const Main =()=>{
    return(
        <>
        <main className="main container" id="main">
            <Carousel />
            <Games />
        </main>
        </>
    )
}

export default Main