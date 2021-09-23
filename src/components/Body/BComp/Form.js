import React, { Component } from 'react';
import Axios from 'axios';
import { withAlert } from "react-alert";


var serviceOption = () => {
    let value = ["IT Services", "Web Services", "Crypto Services"];
    return(
        <>
            <option value="" selected disabled hidden></option>
            {value.map(el => {
                return <option value={el}>{el}</option>
            })}
        </>
    )
}

var positionOption = () => {
    let value = ["CEO", "Manager", "Other"];
    return(
        <>
            <option value="" selected disabled hidden></option>
            {value.map(el => {
                return <option value={el}>{el}</option>
            })}
        </>
    )
}


class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            company: '',
            email: '',
            about: '',
            nda: false,
        }


        this.Details = this.Details.bind(this)
        this.SubmitButton = this.SubmitButton.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.changeInput = this.changeInput.bind(this)    
    }

    Details(){
        const { name, phone, company, email } = this.state;
        return(
            <div className="form_details">
                <p style={{width: '48%', float: 'left', padding: '1%'}}>
                    <label>Full Name </label>
                    <input id="name" type="text" value={name}
                        onChange={(e) => this.changeInput(e)} />
                    <label>Phone </label>
                    <input id="phone" type="number" max="50" value={phone}
                        onChange={(e) => this.changeInput(e)} />
                    <label>Service Type</label>
                    <select>
                        {serviceOption()}
                    </select>
                </p>
                <p style={{width: '48%', float: 'right', padding: '1%'}}>
                    <label>Company </label>
                    <input id="company" type="text" max="50" value={company}
                        onChange={(e) => this.changeInput(e)} />
                    <label>Email </label>
                    <input id="email" type="email" value={email}
                        onChange={(e) => this.changeInput(e)} />
                    <label>Your Position</label>
                    <select>
                        {positionOption()}
                    </select>
                </p>
                <p style={{padding: '1%', width: '100%'}}>
                    <label>Describe what you need</label>
                    <textarea id="about" value={this.state.about}
                        onChange={(e) => this.changeInput(e)} /> 
                </p>
            </div>
        )
    }

    SubmitButton(){
        return(
            <div className="form_button">
                <p>
                    <input id="nda" type="checkbox" checked={this.state.nda}
                    onChange={(e) => this.changeInput(e)}/> I want a Non Disclosure Agreement (NDA).
                </p>
                <input type="button" value="Start Conversation" className="submit_button"
                        onClick={() => this.submitForm()}
                />
            </div>
        )
    }

    changeInput(e){
        document.getElementById(e.target.id).style.borderBottom = 'solid 1px #8a8989';
        switch(e.target.id){
            case 'name':
                this.setState({ name: e.target.value });
                return;
            case 'phone':
                this.setState({ phone: e.target.value });
                return;
            case 'company':
                this.setState({ company: e.target.value });
                return;
            case 'email':
                this.setState({ email: e.target.value });
                return;
            case 'about':
                this.setState({ about: e.target.value });
                return;
            case 'nda':
                this.setState({ nda: e.target.checked });
                return;
        }
    }

    submitForm(){
        const alert = this.props.alert;
        const state = this.state;

        let isValid = true;
        const data = new Object();

        for(let field in state){
            if(field!=='nda'){
                if(state[field]===''){
                    document.getElementById(field).style.borderBottom = 'solid 2px red';
                    alert.show(`${field} cannot be blank.`)
                    isValid=false;
                }  
            }
            data[field] = state[field];
        }

        if(isValid){
            Axios.post('/push_customer', { data }).then(response => {
                if(!response.data.success){
                    document.getElementById('email').style.borderBottom = 'solid 2px red';
                    alert.show("Email already used.")
                }else{
                    this.setState({
                        name: '', phone: '', company: '', email: '', about: '', nda: false
                    })
                }
            })
        }
    }
    
    render() {
        return (
            <div className="form">
                <this.Details />
                <this.SubmitButton />
            </div>
        );
    }
}

export default withAlert()(Form);