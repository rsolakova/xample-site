import React, { Component } from 'react';

export default class MainTopics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='topics-container'>
                <div className='topic-wrapper'>
                    <div className='title'>Quality doesn’t need to be costly</div>
                    <div className='text'>Our mission is to provide high quality products and excellent service at an affordable price. At our company we use the most technologically advanced printers, top quality papers, and state-of-the-art software to provide you with the best product possible. Our expert technicians will even inspect your order to make sure it meets our exacting standards. Despite this white glove treatment, we manage to keep our prices competitive - making us one of the best deals in the industry.
                    </div>    
                </div>
                <div className='topic-wrapper'>
                <div className='title'>A focus on the customer</div>
                    <div className='text'>We believe that our continued success lies in exceeding customer expectations not only through our quality, but through our responsive and personalized customer service. If you aren’t completely satisfied with our products or services, just let us know and we’ll do what we can to make things right. At our company, your satisfaction is our goal.
                    </div>   
                </div>
                <div className="ads-mobile grey-box">
                    <div>Ads area (if any)</div>
                </div>
                <div className='topic-wrapper'>
                <div className='title'>Looking to the Future</div>
                    <div className='text'>We have a vision, and we want to share it. To nurture the next generation of photographers, we support educational programs for students in photography and visual arts, as well as initiatives to attract talented young people to the field. We also embrace new technologies and innovative ideas to continually improve our products and services.
                    </div>   
                </div>
                <div className='topic-wrapper'>
                <div className='title'>Our promise to you</div>
                    <div className='text'>Together with our business and community partners, we work diligently to be the first choice for discerning photographers everywhere. We will always work hard to provide you with high quality printing and exceptional service at a reasonable price. 
                    </div>   
                </div>
            </div>
        )
    }
}