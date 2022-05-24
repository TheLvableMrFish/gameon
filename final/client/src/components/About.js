 import React from "react";

 const About =()=>{
     return(
        <>
        <main className="about-main container">

            <section className="row about-section1">
                <div className="col-xl-4 col-lg-12 aboutImg1 d-sm-none">
                    <img src="/media/aboutImg1.png" className="img-fluid" alt="controller image by madartzgraphics" />
                </div>
                <div className="col-xl-1"></div>
                <div className="col-xl-5 col-lg-12">
                    <h2 className="about-title">What is GameOn?</h2>
                    <p className="about-text">GameOn is an online site for selling games. We plan to expand to software, ebooks, and other digital content. Our goal is to keep an inventory of as many games as we can so that they are perserved for all to play. We are in our start up phase being only founded in 2022. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque qui, modi dicta ea placeat sequi sunt at, iusto error nihil ut facilis blanditiis animi tempore, illo maxime. Facilis, cumque eligendi.</p>
                </div>
                <div className="col-xl-1"></div>
                <div className="col-xl-4 col-lg-12 aboutImg1 d-none d-sm-block">
                    <img src="/media/aboutImg1.png" className="img-fluid" alt="controller image by madartzgraphics" />
                </div>
            </section>

            <section className="row about-section2">
                <div className="col-md-4">
                    <div className="about-col">
                        <img src="/media/aboutImg2.png" className="img-fluid about-bg-img" alt="background of the controller image by mycola" />
                        <img src="/media/aboutImg3.png" className="img-fluid controller-img" alt="controller by everesd_design"/>
                    </div>
                    <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab libero fugiat, possimus ipsa vero culpa magnam at animi repellendus possimus ipsa vero culpa magnam at animi repellendus.</p>
                </div>
                <div className="col-md-4">
                    <div className="about-col">
                        <img src="/media/aboutImg2.png" className="img-fluid about-bg-img" alt="background of the controller image by mycola"/>
                        <img src="/media/aboutImg5.png" className="img-fluid controller-img" alt="controller by everesd_design"/>
                    </div>
                    <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab libero fugiat, possimus ipsa vero culpa magnam at animi repellendus possimus ipsa vero culpa magnam at animi repellendus.</p>
                </div>
                <div className="col-md-4">
                    <div className="about-col">
                        <img src="/media/aboutImg2.png" className="img-fluid about-bg-img" alt="background of the controller image by mycola"/>
                        <img src="/media/aboutImg4.png" className="img-fluid controller-img" atl="controller by everesd_design"/>
                    </div>
                    <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab libero fugiat, possimus ipsa vero culpa magnam at animi repellendus possimus ipsa vero culpa magnam at animi repellendus.</p>
                </div>
            </section>
        </main>
        </>
     )
 }

 export default About