import React, { Component } from 'react';
import WhatsAppWidget from 'react-whatsapp-widget'
import { withAlert } from "react-alert";

import 'react-whatsapp-widget/dist/index.css'


import Phone from '../../../assets/icons/phone.png';
import Message from '../../../assets/icons/message.png';
import Cross from '../../../assets/icons/Cross.svg';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.rotateParent = this.rotateParent.bind(this)
    }

    rotateParent(){
        let { active } = this.state;
        console.log(active)
        let img = document.getElementById('parent_img');
        if(active){
            let turnAngle = 180;
            img.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
            document.querySelector('#parent_img').src = Cross;
        }
        else{
            let turnAngle = 0;
            img.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
            document.querySelector('#parent_img').src = Message;
        }
    }

    
    render() {
        const { active } = this.state;
        const alert = this.props.alert;
        return (
            <div className="chat_widget">
                {active?
                    <>
                        <div className="child_whatsapp">
                        <WhatsAppWidget
                            phoneNumber={'919366309563'} 
                            companyName={'Amkamtech'} 
                            message={'Hello!  \n\nWhat can we do for you?'}
                            textReplyTime={'Reply within 12 hours.'} />
                        </div>   
                        <div className="child_phone" onClick={() => alert.show("you can call on 6565656565")}>
                            <a href="tel:+919366309563"><img src={Phone} width={30} height={30} style={{ display: 'flex' }} /></a>
                        </div>
                    </> : null
                }
                <div className="parent" onClick={() => this.setState({ active: !active }, () => this.rotateParent())}>
                    <img id="parent_img" src={Message} width={30} height={30} />
                </div>
            </div>
        );
    }
}

export default withAlert()(Chat);