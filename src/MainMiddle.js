import React, { Component } from "react";
import Maps from "./Maps";
import MainTopics from "./MainTopics";

export default class MainMiddle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-wrapper">
                <div className="col-one">
                    <div className="text-container">
                        <div className="text">Site has been serving the needs of the photographic community for over a decade. Well known for the superior quality of our prints and our excellent customer service, we have become the lab of choice for professional photographers and savvy consumers all over the country.</div>
                    </div>
                    <div className="picture">
                        <img alt="hand and butterfly" src="https://images.unsplash.com/photo-1530009078773-9bf8a2f270c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5292194cf06d92164852079c06129c02&auto=format&fit=crop&w=1050&q=80" />
                    </div>
                    <MainTopics />
                    <Maps />
                </div>
                <div className="box-wrapper">
                    <div className="links grey-box">
                        <div>Helper links area</div>
                    </div>
                    <div className="ads grey-box">
                        <div>Ads area (if any)</div>
                    </div>
                </div>
            </div>
        );
    }
}
