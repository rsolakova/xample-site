
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    render() {
        return (
            <div className='header-wrapper'>
                <header className="site-header blue">
                    <nav className="header-container">
                        <ul>
                            <li><div className="fa fa-ban"></div>No sales tax outside NY state</li>
                            <li><div className="fa fa-truck"></div>FREE shiping on all +49$</li>
                        </ul>
                    </nav>
                    <div className="actions">
                        <div>service@example.com</div>
                        <div>888.216.6400</div>
                        <div>Support</div>
                        <div>Order status</div>
                        <div className="user-account"><div className="fa fa-shopping-cart"></div>Your account</div>
                        <button className='button-shopping'><div className="fa fa-shopping-cart"></div>Cart</button>
                    </div>
                </header>
                <div className="site-header white">
                    <div className="header-container logo">
                        <div className='logo-wrapper'>
                            <div className="fa fa-globe"></div><div className='site-name'>xample site</div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-book"></div><div className='text'>Photo books</div>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-print"></div><div className='text'>Photo prints</div>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-image"></div><div className='text'>Wall Decor</div>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-file"></div><div className='text'>Cards</div>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-calendar"></div><div className='text'>Calendars</div>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-star"></div><div className='text'>Occasions</div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-wrapper">
                        <div className="fa-icons nohover" onClick={this.showMenu}>
                            <div className="fa fa-bars"></div>
                        </div>
                    </div>
                    <div className='button-hamburger' onClick={this.showMenu}>
                        <button className='fa-icons nohover button-shopping small'>
                            <div className="fa fa-shopping-cart"></div><div className='cart'>Cart</div>
                        </button>
                        <div className="fa-icons nohover">
                            <div className="fa fa-bars"></div>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    {
                        this.state.showMenu
                            ? (
                                <Fragment>
                                    <div className="nav-overlay" />
                                    <nav className="navigation-menu menu">
                                        <div className="nav-wrapper opened-menu">
                                            <div className='title'>Navigation</div>
                                            <ul>
                                                <li className='active right'><div>About us</div></li>
                                                <li><div>Webinars</div></li>
                                                <li><div>Ambassadors</div></li>
                                                <li><div>Testimonials</div></li>
                                                <li><div>Blog</div></li>
                                                <li><div>Forum</div></li>
                                                <li><div>Public galerry</div></li>
                                                <li><div>FAQ</div></li>
                                            </ul>
                                        </div>
                                        <div className='hamburger-social-icons'>
                                            <div className='social-icon fb'>
                                                <div className="circle fb"><div className="fa fa-facebook"></div></div>
                                            </div>
                                            <div className='social-icon twitter'>
                                                <div className="circle fb"><div className="fa fa-twitter"></div></div>
                                            </div>
                                            <div className='social-icon pinterest'>
                                                <div className="circle fb"><div className="fa fa-pinterest"></div></div>
                                            </div>
                                        </div>
                                    </nav>
                                </Fragment>
                            )
                            : (
                                null
                            )
                    }
                </div>
            </div>
        )
    }
}
