import React, { Component } from 'react';

export default class NavMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navigation-menu nav">
                    <div className="nav-wrapper">
                        <div className='title'>Navigation</div>
                        <ul>
                            <li className='active'>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Webinars</a>
                            </li>
                            <li>
                                <a>Ambassadors</a>
                            </li>
                            <li>
                                <a>Testimonials</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Forum</a>
                            </li>
                            <li>
                                <a>Public galerry</a>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
