import React from 'react'

const Carousel =()=>{
    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="/media/img3.jpg" className="d-block w-100" alt="Image of the word play" />
            <div className="carousel-caption d-none d-md-block">
            <h1></h1>
            <p className="float-end">Image by: Clem Onojeghuo.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="/media/img2.jpg" className="d-block w-100" alt="Image of the Playstation 5" />
            <div className="carousel-caption d-none d-md-block">
            <h1></h1>
            <p className="float-end">Image by: Triyansh Gill.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src="/media/img1.jpg" className="d-block w-100" alt="Image of retro collectables" />
            <div className="carousel-caption d-none d-md-block">
            <h1></h1>
            <p className="float-end">Image by: Lorenzo Herrera.</p>
            </div>
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
    )
}

export default Carousel