import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faCoffee,
    faMapMarked,
    faMapMarkedAlt,
    faMapPin,
    faPhone,
    faPlayCircle
} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";

class TopBar extends Component {
    render() {
        return (
            <Fragment>
                <section className={"topBarSection"}>
                    <Container>
                        <Row>
                            <Col lg={3} md={4} sm={4}>
                                <div className={"topBarMobile"}>
                                    <span className={"topBarMobileIcon"}><FontAwesomeIcon  icon={faPhone} /></span><span>01315807050</span>

                                </div>
                            </Col>
                            <Col lg={6} md={4} sm={4}>
                                <div className={"topBarAddress"}>

                                    <span className={"topBarMobileIcon"}><FontAwesomeIcon  icon={faMapMarkerAlt} /></span><span>Blue water,5th floor</span>

                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={4}>
                                <div className={"topBarWorkTime"}>
                                    <span className={"topBarMobileIcon"}><FontAwesomeIcon  icon={faClock} /></span><span>10.00 AM - 9.00 PM</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default TopBar;
