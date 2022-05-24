import React from 'react'

const Footer =()=>{
    return(
        <footer className="bg-dark text-center text-white">

        <section className="mb-4 pt-4 section1-footer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Title</h1>
              <ul className="list-unstyled">
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h1>Title</h1>
              <ul className="list-unstyled">
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h1>Title</h1>
              <ul className="list-unstyled">
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </div>
        </section>

    

      <div className="text-center p-4 copyright-text" >
        © 2022 Copyright: GameOn.Inc
      </div>

    </footer>
    )
}

export default Footer