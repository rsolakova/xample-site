
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        // this.state = {
        //     showMenu: false
        // }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();
        this.props.setShowMenu(true);
        document.addEventListener('click', this.closeMenu);
        // this.setState({ showMenu: true }, () => {
        //     document.addEventListener('click', this.closeMenu);
        // });
        // document.getElementsByClassName('navigation-menu.menu').addClass('animation');
    }
    closeMenu() {
        this.props.setShowMenu(false);
        document.removeEventListener('click', this.closeMenu);
        // this.setState({ showMenu: false }, () => {
        //     document.removeEventListener('click', this.closeMenu);
        // });
    }
    render() {
        return (
            <div className='header-wrapper'>
                <header className="site-header blue">
                    <nav className="header-container">
                        <ul>
                            <li>
                                <div className="fa fa-ban"></div>No sales tax outside NY state
                            </li>
                            <li>
                                <div className="fa fa-truck"></div>FREE shiping on all +49$
                            </li>
                        </ul>
                    </nav>
                    <div className="actions">
                        <a>service@example.com</a>
                        <a>888.216.6400</a>
                        <a>Support</a>
                        <a>Order status</a>
                        <div className="user-account">
                            <div className="fa fa-shopping-cart"></div>
                            <a>Your account</a>
                        </div>
                        <button className='button-shopping'>
                            <div className="fa fa-shopping-cart"></div>Cart
                        </button>
                    </div>
                </header>
                <div className="site-header white">
                    <div className="header-container logo">
                        <div className='logo-wrapper'>
                            <div className="fa fa-globe"></div>
                            <div className='site-name'>xample site</div>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-book"></div>
                                <a className='text'>Photo books</a>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-print"></div>
                                <a className='text'>Photo prints</a>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-image"></div>
                                <a className='text'>Wall Decor</a>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-file"></div>
                                <a className='text'>Cards</a>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-calendar"></div>
                                <a className='text'>Calendars</a>
                            </div>
                        </div>
                        <div className="action-container">
                            <div className="fa-icons">
                                <div className="fa fa-star"></div>
                                <a className='text'>Occasions</a>
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
                {/* { this.state.showMenu ? (<div className="nav-overlay" />) : null } */}
            </div>
        )
    }
}
