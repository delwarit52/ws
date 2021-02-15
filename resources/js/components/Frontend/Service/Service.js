import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row, ButtonGroup, CardGroup, Card, CardImg, Image} from "react-bootstrap";
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

                      <Col lg={3} className="serviceItemCol p-0">
                          <a href="#">
                              <div className="serviceItem">
                                  <Image src={graphics}></Image>
                                  <h3>Graphics Design</h3>
                              </div>
                          </a>

                      </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} className="serviceItemCol p-0">
                            <a href="#">
                                <div className="serviceItem">
                                    <Image src={graphics}></Image>
                                    <h3>Banner/Logo/Web</h3>
                                </div>
                            </a>
                        </Col>
                    </Row>

                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Service;
