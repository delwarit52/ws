import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import web from '../../../../images/design.png';
import {Link} from "react-router-dom";


class ServicePageList extends Component {
    render() {
        return (
            <Fragment>
                <Container className={"servicePageCont mt-5"}>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                <Link to="/serviceSingle" className="btn btn-primary" size="lg" block>Details</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
                                <Link to="/serviceSingle" className="btn btn-primary" size="lg" block>Details</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServicePageList;
