import React from 'react'
import "../../../css/Timeline.css"

function Timeline() {
    return (
        <div>
            <main>
                <h1>Get Started</h1>
                <div class="wrapperti">
                    <div className="container">
                        <h2 className="title">Contact Us</h2>
                        <p className="description">Fill the contact form, book a calender and schedule a Zoom meeting with our experts.</p>
                    </div>

                    <div className="container">
                        <h2 className="title">Get a consultation</h2>
                        <p className="description">Based on the project requirements, we share plenty of project proposal with budget and timeline.</p>
                    </div>

                    <div className="container">
                        <h2 className="title">Project Kickoff</h2>
                        <p className="description">Once the project is signed, we bring personalized team experts to kick start your project.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Timeline
