import React, { Component } from 'react';

import reliance from '../../../assets/img/client_logo/reliance.svg'
import tata from '../../../assets/img/client_logo/tata.svg'

const client = [reliance, tata, reliance, tata, reliance, tata, reliance, tata, reliance]

class Client extends Component {
    constructor(props) {
        super(props);
        
    }
    


    render() {
        return (
            <div style={{ maxWidth: 1000, margin: 'auto', marginTop: '3rem', marginBottom: '3rem', height: 'fit-content' }}>
                <h1 style={{marginBottom: '4rem', fontSize: 'xx-large', color: 'green' }}>Valuable Clients</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }} >
                    {client.map(img => (
                        <img src={img} height={150} width={150} style={{ display: 'flex', height: 150, width: 150 }} />
                    ))}

                </div>
            </div>
        );
    }
}

export default Client;