import React, { Component, Fragment } from 'react';

import MainPicture from './MainPicture';
import MainMiddle from './MainMiddle';
import MainTopics from "./MainTopics";
import Maps from "./Maps";


export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='main-wrapper'>
                <MainPicture />
                <MainMiddle />
            </div>
        )
    }
}