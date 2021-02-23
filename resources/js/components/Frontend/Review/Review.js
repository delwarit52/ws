import React, {Component,Fragment} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../../../images/banner.jpg'
import slider2 from '../../../../images/slider2.jpg'
import student1 from '../../../../images/arnob.jpg'
import {Col, Container, Image, Row} from "react-bootstrap";
import Axios from "axios";




class Review extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }


    componentDidMount() {
        let cthis = this;
        Axios.get('/home_review')

            .then(function (response) {
                cthis.setState({datalist: response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }




    render() {
        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <section class={"sectionMarginPadding"}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={"headingTitle text-center"}>
                                    <h2>Student Review</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Slider {...settings}>
                                    <div className={"review text-center mt-1"}>
                                        <Image src={student1} roundedCircle />
                                        <h2>Salam</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library.</p>
                                        <h5> - Web Developer</h5>
                                    </div>
                                    <div className={"review text-center mt-1"}>
                                        <Image src={student1} roundedCircle />
                                        <h2>Salam</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library.</p>
                                        <h5> - Web Developer</h5>
                                    </div>
                                    <div className={"review text-center mt-1"}>
                                        <Image src={student1} roundedCircle />
                                        <h2>Salam</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library.</p>
                                        <h5> - Web Developer</h5>
                                    </div>
                                    <div className={"review text-center mt-1"}>
                                        <Image src={student1} roundedCircle />
                                        <h2>Salam</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library.</p>
                                        <h5> - Web Developer</h5>
                                    </div>
                                    <div className={"review text-center mt-1"}>
                                        <Image src={student1} roundedCircle />
                                        <h2>Salam</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library.</p>
                                        <h5> - Web Developer</h5>
                                    </div>


                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default Review;
