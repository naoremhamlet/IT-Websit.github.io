import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import Axios from 'axios';
import { withAlert } from "react-alert";

import "react-datetime/css/react-datetime.css";

import Form from './Form';
import Logo_no_bg from '../../../assets/icons/Amamtech logo icon without bg.svg';
import Logo from '../../../assets/icons/Amkamtech logo.svg';

var yesterday = moment().subtract( 1, 'day' );
var valid = function( current ){
    return current.isAfter( yesterday ) && current.day() !== 0 && current.day() !== 6;
};



class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            name: '',
            email: '',
            about: '',
            guest_email: [],
        }
        
        this.FormSection = this.FormSection.bind(this)
        this.createGuestInput = this.createGuestInput.bind(this)
        this.setMeetingTime = this.setMeetingTime.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.submit = this.submit.bind(this)
    }


    FormSection(){
        const { name, email, about } = this.state;
        return(
            <div className="contact_us_row" style={{ fontSize: 'small'}}>
                <span className="contact_us_form_section">
                    <p style={{marginBottom: '5%', fontFamily: 'sans-serif', fontSize: 'medium', fontWeight: 700, color: 'orange'}}>Get in touch</p>
                    <Form />
                    <p style={{marginTop: '5%', fontFamily: 'sans-serif', fontSize: 'x-small'}}>We take your privacy seriously. And nothing will be shared unless we need to speak with our partner for solution even if you opt out of NDA.</p>
                </span>
                <span className="contact_us_meeting">
                    <p style={{fontFamily: 'sans-serif', fontWeight: 700, fontSize: 'medium'}}>Schedule a meeting</p>
                    <p style={{margin: 0, padding: 0}}><img src={Logo_no_bg} alt="" width={40}/></p>
                    <p style={{margin: 0, padding: 0, color: 'orange', fontSize: 'small', fontWeight: 600}}>Please Select a date</p>
                    <div className="meeting_details">
                        <Datetime input={false} timeFormat={false} isValidDate={ valid } onChange={(e) => this.setMeetingTime(e, "date")} />
                        <Datetime input={false} dateFormat={false} isValidDate={ valid } onChange={(e) => this.setMeetingTime(e, "time")} />

                        <input value={name} type="text" placeholder="Name" maxLength={40} onChange={(e) => this.changeInput(e, "name")} />
                        <input value={email} type="email" placeholder="Email" maxLength={40} onChange={(e) => this.changeInput(e, "email")} />
                        <textarea value={about} placeholder="About the meeting" maxLength={100} onChange={(e) => this.changeInput(e, "about")} />

                        <p style={{ textAlign: 'center' }}>Add guests: &nbsp;&nbsp;<button className="add_guest_button" onClick={this.createGuestInput}>+</button></p>

                        <input type="text" placeholder="Guest Email" className="guest_email_input" />
                    </div>
                    <input type="button" value="Confirm" onClick={this.submit}/>
                </span>
            </div>
        )
    }


    createGuestInput(){
        let parent = document.getElementsByClassName('meeting_details')[0];
        let input = document.createElement('input')
        input.setAttribute("type", "text" );
        input.setAttribute("placeholder", "Guest Email");
        input.setAttribute("class", "guest_email_input");

        parent.appendChild(input).focus();
    }

    setMeetingTime(e, type){
        let d = e._d
        let { date } = this.state;
        date = new Date(date);
 
        if(type==="date"){
            date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
            this.setState({ date })
        }else{
            date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            this.setState({ date })
        }
     }

     changeInput(e, type){
        switch(type){
            case 'name':
                this.setState({ name: e.target.value })
                return;
            case 'email':
                this.setState({ email: e.target.value })
                return;
            case 'about':
                this.setState({ about: e.target.value })
                return;
        }
     }


     submit(){
        const alert = this.props.alert;
        const { date, guest_email } = this.state;
        const state = this.state;
        let isValid = true;
        let data = new Object();
        
        if(new Date(date) < new Date()){
            alert.show('Please Select a valid datetime.')
            return;
        }
        for(let field in state){
            if(field!=='date'&&field!=='guest_email'){
                if(state[field]===''){
                    alert.show(`${field} cannot be blank.`)
                    isValid=false;
                }  
            }
            data[field] = state[field];
        }

        let guest_email_input = document.getElementsByClassName('guest_email_input');
        for(let i=0; i<guest_email_input.length; i++){
            if(guest_email_input[i].value!=''&&guest_email_input[i].value!=undefined)
                data.guest_email.push(guest_email_input[i].value)
        }
        

        if(isValid){
            Axios.post('/add_meeting', { data }).then(response => {
                if(response.data.success){
                    alert.show('meeting set successfully on '+data.date)
                    this.setState({ name: '', email: '', about: '', guest_email: [] });
                    while(guest_email_input.length>1)   guest_email_input[0].remove()
                    guest_email_input[0].value = '';
                }
            })
        }
     }
    
    render() {
        return (
                <div className="contact_us_box" style={{ marginTop: 50}}>
                    <div className="contact_us_container">
                       
                        <this.FormSection />
                        
                    </div>
                </div>

        );
    }
}

export default withAlert()(ContactUs);