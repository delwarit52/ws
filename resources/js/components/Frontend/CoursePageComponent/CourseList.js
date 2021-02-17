import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={3} md={3}>
                           <h3>Sidebar buy</h3>
                        </Col>
                        <Col lg={9} md={9}>
                            <h3>Content Body</h3>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseList;
