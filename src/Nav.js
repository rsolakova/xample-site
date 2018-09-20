import React, { Component } from "react";
import NavMenu from "./NavMenu";
import NavContact from "./NavContact";
import SocialMedia from "./SocialMedia";

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation">
                <div className="navigation-wrapper">
                    <NavMenu />
                    <NavContact />
                    <SocialMedia />
                </div>
            </div>
        );
    }
}
