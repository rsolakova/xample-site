import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.setShowOpen = this.setShowOpen.bind(this);
    }
    setShowOpen(value) {
        this.setState({ showMenu: value });
    }
    render() {
        return (
            <div className="App">
                <Header setShowMenu={this.setShowOpen} />
                <div className="main-container">
                    <Nav />
                    <Main />
                    {this.state.showMenu ? <div className="nav-overlay" /> : null}
                    <div className={this.state.showMenu ? "hamburger-menu-container animation" : "hamburger-menu-container"}>
                        <nav className="navigation-menu menu">
                            <div className="nav-wrapper opened-menu">
                                <div className="title">Navigation</div>
                                <ul>
                                    <li className="active hamburger-open">
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Webinars</a>
                                    </li>
                                    <li>
                                        <a href="#">Ambassadors</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-wrapper opened-menu second">
                                <div className="title">Navigation</div>
                                <ul>
                                    <li className="hamburger-open">
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Webinars</a>
                                    </li>
                                    <li>
                                        <a href="#">Ambassadors</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="hamburger-social-icons">
                                <div className="social-icon">
                                    <div className="circle fb">
                                        <div className="fa fa-facebook" />
                                    </div>
                                </div>
                                <div className="social-icon">
                                    <div className="circle pinterest">
                                        <div className="fa fa-pinterest" />
                                    </div>
                                </div>
                                <div className="social-icon">
                                    <div className="circle twitter">
                                        <div className="fa fa-twitter" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
library.add(faStroopwafel);
