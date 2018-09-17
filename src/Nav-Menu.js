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
                            <li className='active'><div>About us</div></li>
                            <li><div>Webinars</div></li>
                            <li><div>Ambassadors</div></li>
                            <li><div>Testimonials</div></li>
                            <li><div>Blog</div></li>
                            <li><div>Forum</div></li>
                            <li><div>Public galerry</div></li>
                            <li><div>FAQ</div></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
