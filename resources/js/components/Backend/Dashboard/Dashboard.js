import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={2} className="p-0">
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <h2>Content</h2>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Dashboard;
