import React from 'react'
import "../../../css/Banner.css"

function Banner(props) {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1 style={{ fontSize: "50px" }}>AkamTech</h1>
                <p>We do what you need</p>
                <br />
                <button onClick={() => props.changeActive('contact us')}>Get in Touch</button>
            </div>
        </div>

    )
}

export default Banner
