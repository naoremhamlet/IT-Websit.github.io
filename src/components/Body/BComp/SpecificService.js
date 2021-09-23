import React, { Component } from 'react';

import Quote from './Quote';
import "../../../css/SpecificService.css"

import { SubData } from '../SubData'



class SpecificService extends Component {
    constructor(props) {
        super(props);
        
    }

    LeftContent({ image }){
        return(
            <div class="about-left">
                <div class="about-left-content">
                    <div>
                        <div class="shadow">
                            <div class="about-img">
                                <img src={image} alt="about image" style={{ height: 300, width: 300 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    RightContent({ heading, para1, para2 }){
        return(
            <div class="about-right">
                <h1>{heading}<span>!</span></h1>
                
                <div class="about-para">
                    <p>{para1}</p>
                    <p>{para2}</p>
                </div>
            </div>
        )
    }


    render() {
        const { active, changeActive } = this.props;
        const data = SubData[active.split(' ').join('').split('/').join('')];
        return (
            <>
                <div class="about-wrapper">
                    <this.LeftContent image={data.image} />
                    <this.RightContent 
                        heading={active}
                        para1={data.para1}
                        para2={data.para2}
                    />
                </div>
                <Quote changeActive={changeActive} />
            </>
        );
    }
}

export default SpecificService;