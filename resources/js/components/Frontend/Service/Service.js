import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import graphics from '../../../../images/design.png'

class Service extends Component {
    render() {
        return (
            <Fragment>
                <section className={"homeService sectionMarginPadding"}>
                <Container className={"containerMargin homeService"}>
                    <Row>
                        <Col>
                            <div className={"headingTitle text-center"}>
                                <h2>Our Service</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className={"serviceRow"}>
                        <Col lg={3} md={6} sm={12}>
                            <div className="serviceItem text-center">
                                <img src={graphics}/>
                                <h3>Graphics</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                <Button className="btn btn-primary">See More</Button>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="serviceItem text-center">
                                <img src={graphics}/>
                                <h3>Graphics</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                <Button className="btn btn-primary">See More</Button>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="serviceItem text-center">
                                <img src={graphics}/>
                                <h3>Graphics</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                <Button className="btn btn-primary">See More</Button>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="serviceItem text-center">
                                <img src={graphics}/>
                                <h3>Graphics</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                <Button className="btn btn-primary">See More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Service;
