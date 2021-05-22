import React from 'react'
import '../Styles/Home.css'
import my_img from '../img/a.jpg'

// import {Button}  from 'react-router-dom'

function Home() {
    return (
        <div className="Hero_serction">
            <div className="bg_img">
                <img src={my_img} alt="Backgroud-Image" />
            </div>
            <div className="bg_text">
                <div className="heading">
                    <h2>For a Nice Cretivity</h2>
                    <p>All are The Beautyfull Movment</p>
                </div>
                <div className="button">
                    <button className="button_1" >
                        Download C.V
                    </button>
                    <button className="button_2">
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
