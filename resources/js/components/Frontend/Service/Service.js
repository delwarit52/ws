import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row,ButtonGroup,CardGroup,Card,CardImg} from "react-bootstrap";
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

                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={graphics} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>


                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Service;
