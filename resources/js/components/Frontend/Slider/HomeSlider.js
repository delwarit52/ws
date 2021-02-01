import React, {Component,Fragment} from 'react';
import {Carousel} from "react-bootstrap";
import slider1 from '../../../../images/banner.jpg'
import slider2 from '../../../../images/slider2.jpg'

class HomeSlider extends Component {
    render() {
        return (
            <Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fragment>
        );
    }
}

export default HomeSlider;
