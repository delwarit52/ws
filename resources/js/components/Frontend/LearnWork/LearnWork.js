import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faHandPointRight, faPlayCircle} from '@fortawesome/free-solid-svg-icons'

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
                                        <h2>Complete Project</h2>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="learnWorkTeam text-center">
                                        <h3>400</h3>
                                        <h2>Total Client</h2>
                                    </div>

                                </Col>
                                <Col>
                                    <div className="learnHowWork">
                                        <h3>How i Work</h3>
                                       <ul>
                                           <li> <FontAwesomeIcon icon={faHandPointRight} /> <span>Requirement Gathering</span></li>
                                           <li> <FontAwesomeIcon icon={faHandPointRight} /> <span>Requirement Gathering</span></li>
                                           <li> <FontAwesomeIcon icon={faHandPointRight} /> <span>Requirement Gathering</span></li>


                                       </ul>
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
