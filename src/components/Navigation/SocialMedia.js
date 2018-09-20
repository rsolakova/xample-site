import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

export default class SocialMedia extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="social-media">
                <nav className="navigation-menu social">
                    <div className="nav-wrapper">
                        <div className="title-wrapper">
                            <div className="title">Follow us</div>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <div className="circle fb">
                                        <div className="fa fa-facebook" />
                                    </div>
                                    <a className="social-name">Facebook</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle pinterest">
                                        <div className="fa fa-pinterest" />
                                    </div>
                                    <a className="social-name">Pinterest</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle twitter">
                                        <div className="fa fa-twitter" />
                                    </div>
                                    <a className="social-name">Twitter</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle instagram">
                                        <div className="fa fa-instagram" />
                                    </div>
                                    <a className="social-name">Instagram</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle pinterest">
                                        <div className="fa fa-pinterest" />
                                    </div>
                                    <a className="social-name">Pinterest</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle twitter">
                                        <div className="fa fa-twitter" />
                                    </div>
                                    <a className="social-name">Twitter</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="circle instagram">
                                        <div className="fa fa-instagram" />
                                    </div>
                                    <a className="social-name">Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
