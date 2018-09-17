import React, { Component, Fragment } from 'react';

import MainPicture from './Main-Picture';
import MainMiddle from './Main-Middle';
import MainTopics from "./Main-Topics";
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