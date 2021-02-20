import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import {Col, Container, Row, Image, Button, Nav} from "react-bootstrap";
import service from '../../../../images/banner.jpg';
import {Link} from "react-router-dom";
import web from "../../../../images/slider2.jpg";
import web2 from "../../../../images/web2.jpg";

class PortfolioPageComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container className="portfolioPageContainer mt-5">
                    <Row>
                        <Col lg={3}>
                            <div className="portfolioItemSidebar">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link><Link to="/home">Web</Link></Nav.Link>
                                    <Nav.Link eventKey="link-1">Graphics</Nav.Link>
                                    <Nav.Link eventKey="link-2">Digital Marketing</Nav.Link>
                                    <Nav.Link eventKey="link-2">Basic Computer</Nav.Link>
                                    <Nav.Link eventKey="link-2">Hardware Training</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <a href={"#"}>
                                        <div className="portfoliItem">
                                            <div className="portfoliItemImg">
                                                <img src={web2}/>
                                            </div>
                                            <div className={'portfoliItemContent'}>
                                                <h3>Moder Realestate</h3>
                                                <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                                    website – aimed towards designers,</p>
                                                <Button>Detail Show</Button>
                                            </div>
                                        </div>
                                    </a>
                                    <h4>Point Of Sale - Management Site</h4>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <a href={"#"}>
                                        <div className="portfoliItem">
                                            <div className="portfoliItemImg">
                                                <img src={web2}/>
                                            </div>
                                            <div className={'portfoliItemContent'}>
                                                <h3>Moder Realestate</h3>
                                                <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                                    website – aimed towards designers,</p>
                                                <Button>Detail Show</Button>
                                            </div>
                                        </div>
                                    </a>
                                    <h4>Point Of Sale - Management Site</h4>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <a href={"#"}>
                                        <div className="portfoliItem">
                                            <div className="portfoliItemImg">
                                                <img src={web2}/>
                                            </div>
                                            <div className={'portfoliItemContent'}>
                                                <h3>Moder Realestate</h3>
                                                <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                                    website – aimed towards designers,</p>
                                                <Button>Detail Show</Button>
                                            </div>
                                        </div>
                                    </a>
                                    <h4>Point Of Sale - Management Site</h4>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <a href={"#"}>
                                        <div className="portfoliItem">
                                            <div className="portfoliItemImg">
                                                <img src={web2}/>
                                            </div>
                                            <div className={'portfoliItemContent'}>
                                                <h3>Moder Realestate</h3>
                                                <p>SilverSlide is a modern, sleek theme best suitable for personal portfolio
                                                    website – aimed towards designers,</p>
                                                <Button>Detail Show</Button>
                                            </div>
                                        </div>
                                    </a>
                                    <h4>Point Of Sale - Management Site</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default PortfolioPageComponent;
