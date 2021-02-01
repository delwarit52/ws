import React, {Component,Fragment} from 'react';
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";

class Course extends Component {
    render() {
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
                        <Col lg={3} md={6} sm={12}>
                            <div className="courseItem text-center">
                                <h3>Web Design & Development</h3>
                                <h4><span>Time : 4 Month</span>  <span>Fee : 10000 Tk</span></h4>
                                <h5>Course Topic</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>


                                <Button className="btn btn-primary">See More</Button>

                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="courseItem text-center">
                                <h3>Web Design & Development</h3>
                                <h4><span>Time : 4 Month</span>  <span>Fee : 10000 Tk</span></h4>
                                <h5>Course Topic</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>

                                <Button className="btn btn-primary">See More</Button>

                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="courseItem text-center">
                                <h3>Web Design & Development</h3>
                                <h4><span>Time : 4 Month</span>  <span>Fee : 10000 Tk</span></h4>
                                <h5>Course Topic</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                                <Button className="btn btn-primary">See More</Button>

                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="courseItem text-center">
                                <h3>Web Design & Development</h3>
                                <h4><span>Time : 4 Month</span>  <span>Fee : 10000 Tk</span></h4>
                                <h5>Course Topic</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>

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

export default Course;
