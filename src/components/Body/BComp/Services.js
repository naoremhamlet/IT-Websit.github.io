import React, { Component } from 'react'

import WhyUs from './WhyUs'
import Client from './Client'

import "../../../css/Services.css"

import { Data } from '../Data'

class Services extends Component {

    constructor(props) {
        super(props);
        
        this.Header = this.Header.bind(this)
        this.SingleContent = this.SingleContent.bind(this)
        this.Content = this.Content.bind(this)
    }
    
    Header({ active, heading}){
        
        return(
            <header>
                <h1>{active.toUpperCase()}</h1>
                <p>{heading}</p>
            </header>
        )
    }

    SingleContent({ name, type, content, image }){
        const { changeActive } = this.props
        return(
            <div className="singleBlog" style={{ cursor: 'pointer'}}>
                <img src={image} alt="" />
                <div className="blogContent">
                    <h3>{name}<span>{type}</span></h3>
                    <p>{content}</p>
                    <a href="#" className="btn" style={{ width: 'fit-content' }} onClick={()=>changeActive('contact us')}>Get Deal</a>
                </div>
            </div>
        )
    }

    Content({ data }){
        //console.log(this.props.data.data)
        //const { data } = this.props;
        return(
            data.data.map(el => (
                <this.SingleContent 
                    name={el.name}
                    type={el.type}
                    content={el.content}
                    image={el.image}
                />
            ))
        )
    }

    render() {
        const { active } = this.props;
        console.log(active)
        const data = Data[active.split(' ').join('')]
        console.log(data)
        return (
            <>
                <div className="container">
                    <this.Header 
                        headng={data.heading}
                        active={active} />

                    <main>
                        <this.Content data={data} />
                    </main>
                </div>
                <WhyUs />
                <Client />
            </>
        );
    }
}


export default Services
