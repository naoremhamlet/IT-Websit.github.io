import React, { Component } from 'react';
import "../../../css/Quote.css"


class Quote extends Component {
    render() {
        return (
            <div className="get_quote">
                <h1 style={{ fontSize: "50px" }}>Lets get started</h1>
                <h2>Want to start your business online?</h2>
                <br />
                <button onClick={() => this.props.changeActive('contact us')} >Get a Quote</button>
            </div>
        );
    }
}

export default Quote;