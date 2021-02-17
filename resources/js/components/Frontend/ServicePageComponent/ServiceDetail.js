import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class ServiceDetail extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className={"serviceDetail"}>
                                <h2>Web Design and development Details</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServiceDetail;
