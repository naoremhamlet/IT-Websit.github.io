import React, { Component } from 'react';


import accept from '../../../assets/img/why_us/accept.svg';
import available from '../../../assets/img/why_us/available.svg';
import expert from '../../../assets/img/why_us/expert.svg';
import obstacle from '../../../assets/img/why_us/obstacle.svg';
import support from '../../../assets/img/why_us/support.svg';
import trust from '../../../assets/img/why_us/trust.svg';



let data = [
    {
        text: 'Amkamtech services companies of all sizes with projects and manages plans of different scopes. We cross industries and provide services to almost every business vertical',
        image: accept
    },
    {
        text: 'At Amkamtech, we collaborate with you to enable your online presence so that you can focus on your organization’s mission. We leverage our talent, service, and creativity to provide you a winning formula',
        image: support
    },
    {
        text: 'No matter what time is it or what concern you have, we are there to help you whenever you need. We will find the best possible solution for your business and its growth',
        image: available
    },
    {
        text: 'Amkamtech can scale with your business, and we never say a challenge is too small. Every challenge faced to make your business a success would make us learn something new, each and everytime',
        image: obstacle
    },
    {
        text: 'We believe that honesty, integrity, and a commitment to ethical business practices is a fundamental to how we conduct ourselves in each interaction we have',
        image: trust
    },
    {
        text: 'You’re assigned an expert, if you want, you can think of him/her as your IT BFF. Based on your unique solution plan, you could have an assigned technical services manager',
        image: expert
    }
]

class WhyUs extends Component {
    constructor(props) {
        super(props);
        
        this.Container = this.Container.bind(this)
        this.CreateContainer = this.CreateContainer.bind(this)
    }

    CreateContainer({ text, image }){
        return(
            <div className="why_us_container">
                <img src={image} height={50} width={50} />
                <p className="why_us_quote">{text}</p>
            </div>
        )
    }


    Container(){
        return(
            data.map(el => (
                <this.CreateContainer 
                    text={el.text}
                    image={el.image}
                />
            ))
        )
    }
    

    render() {
        return (
            <div className="why_us">
                <h1>Why Amkamtech</h1>
                <div className="why_us_wrappert">

                    <this.Container />
                    
                </div>
            </div>
        );
    }
}

export default WhyUs;