import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

export default class SocialMedia extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="social-media">
               <nav className="navigation-menu social">
                        <div className="nav-wrapper">
                            <div className='title-wrapper'>
                                <div className='title'>Follow us</div>
                            </div>
                            <ul>
                                <li><div><div className="circle fb"><div className="fa fa-facebook"></div></div><div className="social-name">Facebook</div></div></li>
                                <li><div><div className="circle pinterest"><div className="fa fa-pinterest"></div></div><div className="social-name">Pinterest</div></div></li>
                                <li><div><div className="circle twitter"><div className="fa fa-twitter"></div></div><div className="social-name">Twitter</div></div></li>
                                <li><div><div className="circle instagram"><div className="fa fa-instagram"></div></div><div className="social-name">Instagram</div></div></li>
                                <li><div><div className="circle pinterest"><div className="fa fa-pinterest"></div></div><div className="social-name">Pinterest</div></div></li>
                                <li><div><div className="circle twitter"><div className="fa fa-twitter"></div></div><div className="social-name">Twitter</div></div></li>
                                <li><div><div className="circle instagram"><div className="fa fa-instagram"></div></div><div className="social-name">Instagram</div></div></li>
                            </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}