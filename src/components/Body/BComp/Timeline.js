import React from 'react'
import "../../../css/Timeline.css"

function Timeline() {
    return (
        <div>
            <main>
                <h1>Get Started</h1>
                <div class="wrapperti">
                    <div className="container">
                        <h2 className="title">Pick a Template</h2>
                        <p className="description">Choose from a selection of over 300 templates. Perfect for Birthdays, Graduation, Anniversaries and more!</p>
                    </div>

                    <div className="container">
                        <h2 className="title">Make it your own</h2>
                        <p className="description">Customize your card by uploading images, videos and writing a personal message!</p>
                    </div>

                    <div className="container">
                        <h2 className="title">Share it out</h2>
                        <p className="description">Send your card out by email or text. You can send your card out immediately or schedule it for the perfect time and date. </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Timeline
