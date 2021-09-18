import React, { Component } from 'react'
import '../../../css/Features.css'
import Crypto from '../../../assets/img/crypto_services/crypto-service4.jpg' ;
import It1 from '../../../assets/img/it_services/it-services2.jpg' ;
import It2 from '../../../assets/img/it_services/it.jpeg'
import Web from '../../../assets/img/web_services/web-service1.jpg' ;

let cards = [
    {
        image: Crypto,
        header: "Crypto Currency",
        content: "aCrypto Currencing in interesting "
    },
    {
        image: Web,
        header: "Web Design",
        content: "Crypto Currencing in interesting"
    },
    {
        image: It1,
        header: "It Services",
        content: "aCrypto Currencing in interesting "
    }
]

class Features extends Component {
    constructor(props) {
        super(props);
        
        this.Card = this.Card.bind(this)
    }

    CreateCard({ image, header, content }){
        return(
            <div className="card">
                <div className="card-banner">
                    <img className="banner-img" src={image} alt="code" />
                </div>
                <div className="card-body">
                    <h2 className="blog-title">{header}</h2>
                    <p className="description">{content}</p>
                </div>
            </div>
        )
    }

    Card(){
        return(
            cards.map(el => (
                <this.CreateCard
                    image={el.image}
                    header={el.header}
                    content={el.content}
                />
            ))
        )
    }
    
    render() {
        return (
            <div classNameName="features">
                <h1>What We Provide</h1>
                <div className="wrapperf">

                    <this.Card />
                </div>
            </div>
        );
    }
}

export default Features;

/*
function Features() {
    return (
        <div classNameName="features">
            <h1>What We Provide</h1>
            <div className="wrapperf">

                <div className="card">
                    <div className="card-banner">
                        <img className="banner-img" src={web} alt="code" />
                    </div>
                    <div className="card-body">
                        <h2 className="blog-title">some header</h2>
                        <p className="description">explanatory paragraph .  . . . . . . .</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-banner">
                        <img className="banner-img" src={crypto} alt="code" />
                    </div>
                    <div className="card-body">
                        <h2 className="blog-title">some header</h2>
                        <p className="description">explanatory paragraph .  . . . . . . .</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-banner">
                        <img className="banner-img" src={connection} alt="code" />
                    </div>
                    <div className="card-body">
                        <h2 className="blog-title">some header</h2>
                        <p className="description">explanatory paragraph .  . . . . . . .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
*/