import React, {Component,Fragment} from 'react';
import {Button, Card, CardGroup, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import design from '../../../../images/design.png'
import Slider from "react-slick";
import student1 from "../../../../images/arnob.jpg";

class Course extends Component {
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
                <section className={"sectionMarginPadding"}>
                <Container>
                    <Row>
                        <Col>
                            <div className={"headingTitle text-center"}>
                                <h2>Our Course</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Graphics Design </h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Web Design </h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Web Development </h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Web Development </h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Web Development </h3>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="p-0">
                                    <a href="#">
                                        <div className={"courseItemList text-center"}>
                                            <Image src={design}></Image>
                                            <h3>Web Development </h3>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <div className="courseSlider">
                                <Slider {...settings}>
                                    <div className={"review text-left"}>
                                        <h2>Basic Web Design</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library...</p>
                                        <Button>See More</Button>
                                    </div>
                                    <div className={"review text-left"}>
                                        <h2>Basic Web Design</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library...</p>
                                        <Button>See More</Button>
                                    </div>
                                    <div className={"review text-left"}>
                                        <h2>Basic Web Design</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library...</p>
                                        <Button>See More</Button>
                                    </div>
                                    <div className={"review text-left"}>
                                        <h2>Basic Web Design</h2>
                                        <p>Individually import icons just once in an init module - there’s no need
                                            to import the icons into each component once they’ve been added to the library...</p>
                                        <Button>See More</Button>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>

                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Course;
