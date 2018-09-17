import React, { Component } from 'react';
import NavMenu from './Nav-Menu';
import NavContact from "./Nav-Contact";
import SocialMedia from "./Social-Media";

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='navigation'>
                <div className='navigation-wrapper'>
                    <NavMenu />
                    <NavContact />
                    <SocialMedia />
                </div>
            </div>
        )
    }
}
