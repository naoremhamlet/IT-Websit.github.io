import React, { Component } from 'react';


import "../../../css/OurTeam.css"
import profile from "../../../assets/img/profile.jpg"

class OurTeam extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="team">

                <h1>Our Team</h1>
            <div class="wrapper-grid">

                <div class="container">
                    <div class="banner-img"></div>
                    <img src={profile} alt="profile img" class="profile-img" />
                    <h2 class ="name">Team member name</h2>
                    <p class ="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    <button class ="btn"></button>
                </div>
                <div class="container">
                    <div class="banner-img"></div>
                    <img src={profile} alt="profile img" class="profile-img" />
                    <h2 class ="name">Team member name</h2>
                    <p class ="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    <button class ="btn"></button>
                </div>
                <div class="container">
                    <div class="banner-img"></div>
                    <img src={profile} alt="profile img" class="profile-img" />
                    <h2 class ="name">Team member name</h2>
                    <p class ="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    <button class ="btn"></button>
                </div>
                

            </div>
        </div>

        );
    }
}

export default OurTeam;


// import React from 'react'
// import "../../../css/OurTeam.css"
// import profile from "../../../assets/img/profile.jpg"
// function OurTeam() {
//     return (
        
//     )
// }

// export default OurTeam