import React, { Component } from 'react';

import OurTeam from './OurTeam';

import "../../../css/AboutUs.css"

class AboutUs extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <>
                <div className="about">
                <h1>About Us</h1>
                <div class="wrapper-about">

                    <div class="container">
                        <h1>Vission</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    </div>
                    <div class="container">
                        <h1>Mission</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    </div>
                    <div class="container">
                        <h1>Goals</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
                    </div>
                </div>
            </div>
            <OurTeam />
        </>
        );
    }
}

export default AboutUs;

// import React from 'react'
// import "../../../css/AboutUs.css"

// function AboutUs() {
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             <div class="wrapper-about">

//                 <div class="container">
//                     <h1>Vission</h1>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
//                 </div>
//                 <div class="container">
//                     <h1>Mission</h1>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
//                 </div>
//                 <div class="container">
//                     <h1>Goals</h1>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptatibus, neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempora, rem.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AboutUs