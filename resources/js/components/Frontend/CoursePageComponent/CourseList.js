import React, {Component,Fragment} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class CourseList extends Component {
    render() {
        return (
            <Fragment>
                <Container >
                    <Row className="coursePageRow">
                        <Col lg={3} md={3}>
                          <div className="courseSidebar">
                              <Nav defaultActiveKey="/home" className="flex-column">
                                  <Nav.Link><Link to="/home">Web</Link></Nav.Link>
                                  <Nav.Link eventKey="link-1">Graphics</Nav.Link>
                                  <Nav.Link eventKey="link-2">Digital Marketing</Nav.Link>
                                  <Nav.Link eventKey="link-2">Basic Computer</Nav.Link>
                                  <Nav.Link eventKey="link-2">Hardware Training</Nav.Link>
                              </Nav>
                          </div>
                        </Col>
                        <Col lg={9} md={9}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="courseListItem">
                                        <h3>Web Design/Frontend Developer</h3>
                                        <p>Topics: Html , css3 ,Bootstrap ,Javascript,</p>
                                        <h4><span className="courseDuration">Duration: 4 Month</span> <span className="courseAmount">Amount: 6000 TK</span></h4>
                                        <Link to="/courseDetail" className="btn btn-primary"> See More </Link>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="courseListItem">
                                        <h3>Web Design/Frontend Developer</h3>
                                        <p>Topics: Html , css3 ,Bootstrap ,Javascript,</p>
                                        <h4><span className="courseDuration">Duration: 4 Month</span> <span className="courseAmount">Amount: 6000 TK</span></h4>
                                        <Link className="btn btn-primary"> See More </Link>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="courseListItem">
                                        <h3>Web Design/Frontend Developer</h3>
                                        <p>Topics: Html , css3 ,Bootstrap ,Javascript,</p>
                                        <h4><span className="courseDuration">Duration: 4 Month</span> <span className="courseAmount">Amount: 6000 TK</span></h4>
                                        <Link className="btn btn-primary"> See More </Link>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="courseListItem">
                                        <h3>Web Design/Frontend Developer</h3>
                                        <p>Topics: Html , css3 ,Bootstrap ,Javascript,</p>
                                        <h4><span className="courseDuration">Duration: 4 Month</span> <span className="courseAmount">Amount: 6000 TK</span></h4>
                                        <Link className="btn btn-primary"> See More </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseList;
