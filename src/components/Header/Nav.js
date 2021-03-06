import React, { Component }  from 'react'
import '../../css/Nav.css'
//import DehazeIcon from '@material-ui/icons/Dehaze';
import logo from "../../assets/img/logo.svg"
import menu from "../../assets/img/menu.png"

class Nav extends Component {
    constructor(props) {
        super(props);

        this.CryptoServices = this.CryptoServices.bind(this)
        this.ITServices = this.ITServices.bind(this)
        this.WebServices = this.WebServices.bind(this)
    }

    componentDidUpdate(){
        const { active } = this.props;
        if(active!=='web services' && active!=='it services' && active!='crypto services'){

            let box = document.getElementsByTagName('input')
            for(let i of box){
                i.checked = false;
            }
        }
        //console.log(box)
    }

    WebServices(){
        let { active, changeActive } = this.props;
        let menu = ['Digital Marketing', 'Social Media Presence', 'Adword']
        let val = "Web Services"
        return(
            <li>
                <span href="#" class="desktop-link" style={{backgroundColor: val.toLowerCase()===active? '#52ab98': null, cursor:'pointer'  }}
                    onClick={() => changeActive(val.toLowerCase())} >{val}</span>
                <input type="checkbox" id="show-services" />
                <label for="show-services" onClick={()=> changeActive(val.toLowerCase())} >{val}</label>
                <ul>
                    <li>
                        <span href="#" class="desktop-link">Digital Services</span>
                        <input type="checkbox" id="show-items" />
                        <label for="show-items" >Digital Services</label>
                        <ul>
                            {menu.map(el => (
                                <li onClick={() => changeActive(el.toLowerCase())} ><span>{el}</span></li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </li>
        )
    }

    ITServices(){
        let { active, changeActive } = this.props;
        let val = "IT Services"
        let menu = ['Cloud Services','MicroSoft Office', 'Google G Support', 'Video Conferencing System',
                         'Report Software Solution', 'Hardware/Software Procurement', 'System Upgrade']
        
        return(
            <li>
                <span class="desktop-link" style={{backgroundColor: val.toLowerCase()===active? '#52ab98': null, cursor:'pointer'  }}
                    onClick={() => changeActive(val.toLowerCase())}>{val}</span>
                <input type="checkbox" id="show-features" />
                <label for="show-features" onClick={()=> changeActive(val.toLowerCase())} >{val}</label>
                <ul>
                    {menu.map(el => (
                            <li onClick={() => changeActive(el.toLowerCase())} ><span>{el}</span></li>
                        ))}
                </ul>
            </li>
        )
    }

    CryptoServices(){
        let { active, changeActive } = this.props;
        let val = "Crypto Services"
        let menu = ['NFTs Setup'];
        return(
            <li>
                <span href="#" class="desktop-link" style={{backgroundColor: val.toLowerCase()===active? '#52ab98': null, cursor:'pointer'  }}
                    onClick={() => changeActive(val.toLowerCase())}>{val}</span>
                <input type="checkbox" id="show-crypto" />
                <label for="show-crypto" onClick={()=> changeActive(val.toLowerCase())} >{val}</label>
                <ul>
                    {menu.map(el => (
                        <li onClick={() => changeActive(el.toLowerCase())} ><span>{el}</span></li>
                    ))}
                </ul>
            </li>
        )
    }
    
    render() {
        let { active, changeActive } = this.props;
        return (
            <div class="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" class="menu-icon" style={{ display: 'flex', alignItems: 'center', width: 'fit-content', paddingRight: '1ch'}}><img src={menu} height={30} width={20} style={{ width: 30 }} /></label>
                        <div class="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    <div class="content">
                        <ul class="links">
                            <li>
                                <span style={{backgroundColor: active==='home'? '#52ab98': null, cursor:'pointer'  }}
                                    onClick={() => changeActive('home')}>Home</span>
                            </li>
                            <this.ITServices />
                            <this.WebServices />
                            <this.CryptoServices />
                            <li>
                                <span style={{backgroundColor: active==='about us'? '#52ab98': null, cursor:'pointer' }}
                                    onClick={() => changeActive('about us')}>About Us</span>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Nav;