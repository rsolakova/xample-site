import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='footer'>
                <footer className="flex-rw">
                    <div className='footer-container'>
                        <ul className="footer-list-top ourProducts">
                            <h4 className="footer-list-header products">Our Products</h4>
                            <div className="col-container">
                                <div className='col-first'>
                                    <li><a className="generic-anchor footer-list-anchor">Photo prints</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Photo books</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Fine art books</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Metal prints</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Photo calendars</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Collages</a></li>
                                </div>
                                <div className="col-second">
                                    <li><a className="generic-anchor footer-list-anchor">Greeting cards</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Canvas prints</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Framed photos</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Photo mounting</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Gift cards</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Mobile apps</a></li>
                                </div>
                            </div>
                        </ul>
                        <ul className="footer-list-top photo-books">
                            <h4 className="footer-list-header books">Photo books</h4>
                            <div className="col-container">
                                <div className='col-first'>
                                    <li><a className="generic-anchor footer-list-anchor">Education</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Family</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Travel</a></li>
                                </div>
                                <div className="col-second">
                                    <li><a className="generic-anchor footer-list-anchor">Food</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Children</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Seasonal</a></li>
                                </div>
                            </div>
                        </ul>
                        <ul className="footer-list-top card">
                            <h4 className="footer-list-header cards">Greeting cards</h4>
                            <div className="col-container">
                                <div className='col-first'>
                                    <li><a className="generic-anchor footer-list-anchor">Halloween</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Thanksgiving</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Classic</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Vintage Photo Cards</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Invitations</a></li>
                                </div>
                                <div className="col-second">
                                    <li><a className="generic-anchor footer-list-anchor">Stationery</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Baby Shower</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Thanks You</a></li>
                                    <li><a className="generic-anchor footer-list-anchor">Save the Datey</a></li>
                                </div>
                            </div>
                        </ul>
                        <ul className="footer-list-top sign">
                            <h4 className="footer-list-header sign">Sign up for special deals</h4>
                            <div className='text'>Be first in line for special offers, photo contests and VIP secrets!</div>
                            <div className='input-social'>
                                <input type='text' />
                                <div className='small-text'>We value your privacy </div>
                                <div className='social-media'>
                                    <div className='social-icon fb'>
                                        <div className="circle fb"><div className="fa fa-facebook"></div></div>
                                    </div>
                                    <div className='social-icon twitter'>
                                        <div className="circle fb"><div className="fa fa-twitter"></div></div>
                                    </div>
                                    <div className='social-icon pinterest'>
                                        <div className="circle fb"><div className="fa fa-pinterest"></div></div>
                                    </div>
                                    <div className='social-icon google'>
                                        <div className="circle fb"><div className="fa fa-google"></div></div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <section className="footer-bottom-section flex-rw">
                        <div className='footer-last'>
                            <div>Pricing</div>
                            <div>About us</div>
                            <div>Invite friends</div>
                            <div>Blog</div>
                            <div>FAQS</div>
                            <div>Forums</div>
                            <div>Testimonials</div>
                            <div>Public gallery</div>
                            <div>Terms and conditions</div>
                            <div>Return policy</div>
                            <div>Affiliate program</div>
                        </div>
                    </section>
                    <section className="footer-bottom-section flex-rw">
                    </section>
                </footer>
            </div>
        )
    }
}