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
                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, </p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>

                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,</p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, </p>
                                <Link><Button className="btn btn-primary" size="lg" block>Details</Button></Link>
                            </div>
                        </Col>
                        <Col>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>Website Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,</p>
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
