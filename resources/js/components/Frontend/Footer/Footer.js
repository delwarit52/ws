import React, {Component,Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import Logo from '../../../../images/logo.png'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <section className="footerTop">
                    <Fragment>
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="footerPart1">
                                        <Image src={Logo}></Image>
                                        <h5>Be frelancer for Success</h5>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <div className="footerPart2 footerTittle">
                                       <h3>Our Course</h3>
                                        <p><a href={"#"}>Web Design</a></p>
                                        <p><a href={"#"}>Web Development</a></p>
                                        <p><a href={"#"}>Web Development</a></p>
                                        <p><a href={"#"}>Web Development</a></p>

                                    </div>
                                </Col>

                                <Col lg={3} md={6} sm={12}>
                                    <div className="footerPart4 footerTittle">
                                        <h3>Service</h3>
                                        <p><a href={"#"}>Graphics</a></p>
                                        <p><a href={"#"}>Web Development</a></p>
                                        <p><a href={"#"}>Web Development</a></p>
                                        <p><a href={"#"}>Web Development</a></p>

                                    </div>
                                </Col>

                                <Col lg={3} md={6} sm={12}>
                                    <div className="footerPart3 footerTittle">
                                        <h3>Contact us</h3>
                                        <p>
                                            11 Bir Uttam AK Khandakar Road, 31 Mohakhali Commercial Area, Colombia Super Market, 4th Floor, Wireless Gate, 1213
                                        </p>
                                        <p>
                                            Mobile.: 01783-838382
                                        </p>
                                        <p>
                                           Email: contact@uylab.org
                                        </p>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Fragment>
                </section>
                <section className="copyRight">
                    <Container>
                        <Row>
                            <Col>
                                <div className="copyRightContent text-center">
                                    <h3>&copy; Copyright DelwarIT- 2021</h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </footer>

        );
    }
}

export default Footer;
