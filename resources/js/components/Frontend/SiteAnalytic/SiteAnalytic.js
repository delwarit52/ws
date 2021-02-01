import React, {Component,Fragment} from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";

class SiteAnalytic extends Component {
    render() {
        return (
            <Fragment>
                <section className={"siteAnalytic"}>
                    <Container>
                        <Row className="justify-content-md-center">

                            <Col md="auto"><ListGroup horizontal>
                                <ListGroup.Item>This</ListGroup.Item>
                                <ListGroup.Item>ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders</ListGroup.Item>
                                <ListGroup.Item>horizontally!</ListGroup.Item>
                            </ListGroup></Col>

                        </Row>

                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default SiteAnalytic;
