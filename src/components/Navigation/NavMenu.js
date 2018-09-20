import React, { Component } from "react";

export default class NavMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navigation-menu nav">
                    <div className="nav-wrapper">
                        <div className="title">Navigation</div>
                        <ul>
                            <li className="active">
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
                            <li>
                                <a href="#">Forum</a>
                            </li>
                            <li>
                                <a href="#">Public galerry</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
