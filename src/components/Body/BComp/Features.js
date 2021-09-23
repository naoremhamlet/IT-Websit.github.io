import React, { Component } from 'react'
import '../../../css/Features.css'
import Crypto from '../../../assets/img/crypto_services/crypto-service4.jpg' ;
import It1 from '../../../assets/img/it_services/it-services2.jpg' ;
import Web from '../../../assets/img/web_services/web-service1.jpg' ;

let cards = [
    {
        image: Crypto,
        header: "IT Services",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        image: Web,
        header: "Web Services",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        image: It1,
        header: "Crypto Services",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
]

class Features extends Component {
    constructor(props) {
        super(props);
        
        this.Card = this.Card.bind(this)
    }

    CreateCard({ image, header, content }){
        return(
            <div className="features_card">
                <div className="features_card_banner">
                    <img className="features_banner_img" src={image} alt="code" />
                </div>
                <div className="features_card_body">
                    <h2 className="features_blog_title">{header}</h2>
                    <p className="features_description">{content}</p>
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
            <div className="features">
                <h1>What We Provide</h1>
                <div className="features_wrapperf">

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