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

                            <Col md="auto"><ListGroup horizontal>
                                <ListGroup.Item className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                     <h4>Trained Student</h4>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                    <h4>Success Student</h4>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                    <h4>Job Replacement</h4>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center siteAnalyticItem">
                                    <img src={user}/>
                                    <h3>500+</h3>
                                    <h4>Expart Mentor</h4>
                                </ListGroup.Item>
                            </ListGroup></Col>

                        </Row>

                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default SiteAnalytic;
