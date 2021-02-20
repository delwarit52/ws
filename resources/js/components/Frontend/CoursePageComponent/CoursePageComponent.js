import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import CourseList from "./CourseList";
import {Col, Container, Image, Row} from "react-bootstrap";
import web from '../../../../images/programming.png'
import {Link} from "react-router-dom";

class CoursePageComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Graphics</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Web</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Degital Marketing</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Programming</h3>
                                </div>
                            </Link>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Graphics</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Web</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Degital Marketing</h3>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Link to="/courselist">
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>Programming</h3>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CoursePageComponent;
