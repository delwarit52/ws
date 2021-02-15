import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import graphics from "../../../../images/design.png";
import web from "../../../../images/slider2.jpg"
import web2 from "../../../../images/web2.jpg"

class RecentProject extends Component {

    render() {
        return (
            <Fragment>
                <section className="sectionMarginPadding">
                    <Container className={"containerMargin"}>
                        <Row>
                            <Col>
                                <div className={"headingTitle text-center"}>
                                    <h2>Recent Project</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"recentProjectRow"}>
                            <Col lg={6} md={6} sm={12} className="p-0">
                                <a href={"#"}>
                                    <div className="recentProjectImg">
                                        <img src={web}/>
                                    </div>

                                    <div className={'recentProjectContent'}>
                                        <h3>Moder Realestate</h3>
                                        <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                            website – aimed towards designers,</p>
                                    </div>
                                </a>


                            </Col>
                            <Col lg={6} md={6} sm={12} className="p-0">
                                <a href={"#"}>
                                    <div className="recentProjectImg">
                                        <img src={web2}/>
                                    </div>

                                    <div className={'recentProjectContent'}>
                                        <h3>Moder Realestate</h3>
                                        <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                            website – aimed towards designers,</p>
                                    </div>
                                </a>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="p-0">
                                <a href={"#"}>
                                    <div className="recentProjectImg">
                                        <img src={web2}/>
                                    </div>

                                    <div className={'recentProjectContent'}>
                                        <h3>Moder Realestate</h3>
                                        <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                            website – aimed towards designers,</p>
                                    </div>
                                </a>

                            </Col>

                            <Col lg={6} md={6} sm={12} className="p-0">
                                <a href={"#"}>
                                    <div className="recentProjectImg">
                                        <img src={web}/>
                                    </div>

                                    <div className={'recentProjectContent'}>
                                        <h3>Moder Realestate</h3>
                                        <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                            website – aimed towards designers,</p>
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

export default RecentProject;
