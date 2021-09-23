import React, { Component } from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

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
import SpecificService from './BComp/SpecificService';
import AboutUs from './BComp/AboutUs';

{/*  image */}


class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'home'
        }
        
        this.changeActive = this.changeActive.bind(this)
    }

    changeActive(active){
        this.setState({ active });
        window.scrollTo(0, 0)
    }
    
    render() {
        const { active } = this.state;
        return (
            <>
            
                <Nav active={active}
                    changeActive={this.changeActive} />

                {active==='home'? <Banner changeActive={this.changeActive} />: null}

                {active!=='home'&&active!=='contact us'&&active!=='it services'&&active!=='web services'&&active!=='crypto services'&&active!=='about us'?
                
                    <SpecificService active={active} changeActive={this.changeActive} /> : null
                }

                {(active==='it services' || active==='web services' || active==='crypto services')?
                        <Services active={active} changeActive={this.changeActive} /> : null }

                {active==='contact us'? <ContactUs />: null}

                

                
                {active==='home' || active==='about us'? <Features/>: null}

                {active==='home'? <Testimonials/>: null}
                {active!=='contact us'&&active!=='it services'&&active!=='web services'&&active!=='crypto services'&&active!=='about us'? <Timeline />: null}
                {active==='about us'? <AboutUs />: null}

                <Chat />
                <Footer />
            </>
        );
    }
}

export default Body;