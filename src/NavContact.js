import React, { Component } from 'react';

export default class NavContact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="testimonials-contact">
                <div className="testimonials">
                    <div className='title-wrapper'>
                        <div className="title">Customer Testimonials</div>
                    </div>
                    <div className='text-wrapper'>
                        <div className="opinion">“I was referred to this site by a friend and wow what a wonderful experience.”</div>
                    </div>
                    <div className='customer'>- David Arteaga</div>
                </div>
                <div className='contact'>
                    <div className="title-wrapper">
                        <div className='title'>Contact us</div>
                    </div>
                    <div className="contacts-wrapper">
                        <div className='text'>phone:</div>
                        <div className='phone'>888.216.6400</div>
                    </div>
                    <div className="contacts-wrapper">
                        <div className='text'>fax:</div>
                        <div className='fax'>917.606.2000</div>
                    </div>
                    <div className="contacts-wrapper">
                        <div className='text'>e-mail:</div>
                        <div className='e-mail'>service@adoramapix.com</div>
                    </div>
                </div>
            </div>
        )
    }
}
