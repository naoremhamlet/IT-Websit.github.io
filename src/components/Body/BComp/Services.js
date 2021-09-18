import React, { Component } from 'react'
import "../../../css/Services.css"


class Services extends Component {

    constructor(props) {
        super(props);
        
        this.Header = this.Header.bind(this)
        this.SingleContent = this.SingleContent.bind(this)
        this.Content = this.Content.bind(this)
    }
    
    Header(){
        const { active, data } = this.props;
        return(
            <header>
                <h1>{active.toUpperCase()}</h1>
                <p>{data.heading}</p>
            </header>
        )
    }

    SingleContent({ name, type, content, image }){
        return(
            <div className="singleBlog">
                <img src={image} alt="" />
                <div className="blogContent">
                    <h3>{name}<span>{type}</span></h3>
                    <p>{content}</p>
                    <a href="#" className="btn">Get Deal</a>
                </div>
            </div>
        )
    }

    Content(){
        console.log(this.props.data.data)
        const { data } = this.props;
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
        console.log(this.Content)
        return (
            <div className="container">
                <this.Header />

                <main>
                    <this.Content />
                </main>
            </div> 
        );
    }
}


export default Services
