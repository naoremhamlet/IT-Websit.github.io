import React, { Component } from 'react';

import Banner from './BComp/Banner';
import Services from './BComp/Services';
import Features from './BComp/Features';
import Testimonials from './BComp/Testimonials';
import Timeline from './BComp/Timeline';
import Chat from './BComp/Chat';
import Form from './BComp/Form';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';
import ContactUs from './BComp/ContactUs';
import { ITData, WebData, CryptoData } from './Data';

{/*  image */}


class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'home'
        }
        
    }
    
    render() {
        const { active } = this.state;
        return (
            <>
                <Nav active={active}
                    changeActive={(active)=> this.setState({ active })} />

                {active==='home'? <Banner changeActive={(active)=> this.setState({ active })} />: null}

                {
                    (active==='it services')?
                        <Services active={active} data={ITData} />
                    :   (active==='web services')?
                            <Services active={active} data={WebData} />
                        :   (active==='crypto services')?
                                <Services active={active} data={CryptoData} />
                            : null
                }

                {active==='contact us'? <ContactUs />: null}

                
                
                {active==='home' || active=='about'? <Features/>: null}

                <Testimonials/>
                {active==='home' || active=='about'? <Timeline />: null}
                
                <Chat />
                <Footer />
            </>
        );
    }
}

export default Body;