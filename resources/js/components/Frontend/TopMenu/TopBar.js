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
                                <div className={"topBarMobile topBarCommon text-center"}>
                                    <span ><FontAwesomeIcon  icon={faPhone} /></span><span className={"topBarMobileIcon ml-1"}>01315807050</span>

                                </div>
                            </Col>
                            <Col lg={6} md={4} sm={4}>
                                <div className={"topBarAddress topBarCommon text-center"}>

                                    <span ><FontAwesomeIcon  icon={faMapMarkerAlt} /></span><span className={"topBarAddressIcon ml-1"}>Blue water,5th floor</span>

                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={4}>
                                <div className={"topBarWorkTime topBarCommon text-center"}>
                                    <span ><FontAwesomeIcon  icon={faClock} /></span><span className={"topBarClockIcon ml-1"}>10.00 AM - 9.00 PM</span>
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
