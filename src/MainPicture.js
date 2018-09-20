import React, { Component } from "react";

export default class MainPicture extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main-picture">
                <img className="main-img" alt="funny monkey" src="https://images.unsplash.com/photo-1530300256-6756c6fe1b6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ee264a7a33c067f04e9551cd9fe850c&auto=format&fit=crop&w=1192&q=80" />
                <button>
                    <span>About us </span>
                </button>
            </div>
        );
    }
}
