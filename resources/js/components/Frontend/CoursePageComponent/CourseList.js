import React, {Component,Fragment} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={3} md={3}>
                          <div className="courseSidebar">
                              <Nav defaultActiveKey="/home" className="flex-column">
                                  <Nav.Link><Link to="/home">Active</Link></Nav.Link>
                                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                                  <Nav.Link eventKey="disabled" disabled>
                                      Disabled
                                  </Nav.Link>
                              </Nav>
                          </div>
                        </Col>
                        <Col lg={9} md={9}>
                            <div className="coursePageList">

                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseList;
