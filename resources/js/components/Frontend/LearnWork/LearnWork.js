import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class LearnWork extends Component {
    render() {
        return (
            <Fragment>
                <section className={"learnWorkContainer"}>
                    <div className="learnWorkOverlay">
                <Container  className=" containerMargin p-0">


                            <Row className="p-0">
                                <Col>
                                    <div className="learnWorkTeam text-center">
                                        <h3>400</h3>
                                        <h2>Total Course</h2>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="learnWorkTeam text-center">
                                        <h3>400</h3>
                                        <h2>Total Student</h2>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="learnWorkTeam text-center">
                                        <h3>400</h3>
                                        <h2>Total Project</h2>
                                    </div>

                                </Col>

                            </Row>
                </Container>


                    </div>


                </section>
            </Fragment>
        );
    }
}

export default LearnWork;
