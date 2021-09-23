import React, { Component } from 'react';
import '../../css/Footer.css';
import Facebook from '../../assets/icons/facebook.svg';
import SnapChat from '../../assets/icons/snapchat.svg';
import WhatsApp from '../../assets/icons/whatsapp.svg';
import Twitter from '../../assets/icons/twitter.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Instagram from '../../assets/icons/instagram.svg';




const data = [
    {
        heading: 'Services',
        value: ['MS Office', 'Google G Support', 'Video Conferencing', 'Software Solution', 'Hardware Procurement', 'System Upgrades', 'Digital Services', 'Blockchain']
    },
    {
        heading: 'Industries',
        value: ['Consumer Electronics', 'Financial Services', 'Healthcare', 'Logistics', 'Manufacturing Software', 'Development Company', 'Startup']
    },
    {
        heading: 'Connect Us',
        value: [ 'Facebook', 'LinkedIn', 'Twitter', 'WhatsApp', 'Instagram', 'SnapChat'],
        image: {
            Facebook: Facebook,
            LinkedIn: LinkedIn,
            Twitter: Twitter,
            WhatsApp: WhatsApp,
            SnapChat: SnapChat,
            Instagram: Instagram
        }
    }
]

class Footer extends Component {
    constructor(props) {
        super(props);
        
        this.CreateRow = this.CreateRow.bind(this)
        this.CreateColumn = this.CreateColumn.bind(this)
        this.Contact = this.Contact.bind(this)
    }

    CreateColumn({ row }){
        console.log(row)
        return(
            <div className="footer_column">
                <p className="footer_column_heading">{row.heading}</p>
                {
                    row.value.map((el, i) => (
                            <a className="footer_column_link" onClick={() => window.scrollTo(0, 0)}>
                                {row.heading=="Connect Us"?
                                    <img width={30} height={30} src={row.image[el]} />
                                    :null}
                                {el}
                            </a>
                        )
                    )
                }
            </div>
        )
    }

    CreateRow(){
        return(
            data.map((el, i) => (
                <this.CreateColumn key={i} row={el} />
            ))
        )
    }

    Contact(){
        return(
            <div className="footer_column">
                <p className="footer_column_heading">Reach Us</p>
                <a className="footer_column_link" style={{ marginBottom: 10 }}>amkam@tech.com</a>
                <a className="footer_column_link" style={{ marginBottom: 10 }}>+91 6565 2020 12</a>
                <p className="footer_column_heading">Address</p>
                <a className="footer_column_link">Hauz Khas <br></br>New Delhi, India 110040</a>
            </div>
        )
    }
    
    render() {
        return (
            <div className="footer_box">
                <div className="footer_container">
                    <div className="footer_row">
                        <this.CreateRow />
                        <this.Contact />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;