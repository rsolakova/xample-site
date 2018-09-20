import React, { Component } from "react";
import Modal from "react-modal";
import Iframe from "react-iframe";

export default class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(e) {
        var url = e.currentTarget.getAttribute("data-url");
        this.setState({ modalIsOpen: true, url: url });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <div className="maps-container">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={{
                        content: {
                            padding: 0
                        }
                    }}
                >
                    <Iframe url={this.state.url} frameborder="0" style="border:0" />
                    <button className='close' onClick={this.closeModal}></button>
                </Modal>

                <div className="maps-adress">
                    <div className="maps-img" onClick={this.openModal} data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194152504!2d-74.03927092356082!3d40.759040329429915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2z0JzQsNC90YXQsNGC0YrQvSwg0J3RjiDQmdC-0YDQuiwg0KHRitC10LTQuNC90LXQvdC4INGJ0LDRgtC4!5e0!3m2!1sbg!2sbg!4v1537192494936">
                        <img alt="Manhattan" src="https://cdn.vox-cdn.com/thumbor/52wMLCpqUS3gdBIVN_igAa8yKRU=/30x0:941x607/1200x800/filters:focal(30x0:941x607)/cdn.vox-cdn.com/assets/1349871/screenshot-20120910-085923.png" />
                    </div>
                    <div className="adress-hours">
                        <div className="city bold">Manhattan</div>
                        <div className="adress">
                            <p>Site</p>
                            <p>52 West 13th Street,</p>
                            <p>New York, NY 10011</p>
                        </div>
                        <div className="hours">
                            <p className="bold">Hours</p>
                            <p>Sun: 9:30 am - 5:30 pm</p>
                            <p>Mon-Thurs: 9:00 am - 7:00 pm</p>
                            <p>Fri: 9:00 am - 1:15 pm</p>
                        </div>
                    </div>
                </div>
                <div className="maps-adress">
                    <div className="maps-img" onClick={this.openModal} data-url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.90108443898!2d-74.08508220832141!3d40.64541987737818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2z0JHRgNGD0LrQu9C40L0sINCd0Y4g0JnQvtGA0LosINCh0YrQtdC00LjQvdC10L3QuCDRidCw0YLQuA!5e0!3m2!1sbg!2sbg!4v1537184214998">
                        <img alt="Brooklyn" src="http://www.brooklyneagle.com/sites/default/files/styles/free_style/public/pages/101-clark-st-map-google.jpg?itok=-GndDnDT&c=8a13efbe5c062ebc89ec2082d73eadd5" />
                    </div>
                    <div className="adress-hours">
                        <div className="city bold">Brooklyn</div>
                        <div className="adress">
                            <p>Site</p>
                            <p>5270 23th Street Brooklyn, </p>
                            <p>NY 11215</p>
                        </div>
                        <div className="hours">
                            <p className="bold">Hours</p>
                            <p>Mon-Thu: 10:00 am - 6:00 pm</p>
                            <p>Fri: 9:00 am - 2:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
