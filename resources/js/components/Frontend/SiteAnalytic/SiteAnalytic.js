import React, {Component,Fragment} from 'react';
import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import user from '../../../../images/priest.png'

class SiteAnalytic extends Component {
    render() {
        return (
            <Fragment>
                <section className={"siteAnalytic"}>
                    <Container>
                        <Row className="justify-content-md-center">

                            <Col className={"siteAnalyticCol p-0"}>
                                <div className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                     <h4>Trained Student</h4>
                                </div>
                            </Col>
                            <Col className={"siteAnalyticCol p-0"}>
                                <div className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                    <h4>Success Student</h4>
                                </div>
                            </Col>
                            <Col className={"siteAnalyticCol p-0"}>
                                  <div className="text-center siteAnalyticItem">
                                      <img src={user}/>
                                      <h3>500+</h3>
                                      <h4>Job Replacement</h4>
                                  </div>
                            </Col>

                            <Col className={"siteAnalyticCol p-0"}>
                                <div className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                    <h4>Expart Mentor</h4>
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default SiteAnalytic;
