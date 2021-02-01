import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faPhone, faPlayCircle} from '@fortawesome/free-solid-svg-icons'

class TopBar extends Component {
    render() {
        return (
            <Fragment>
                <section className={"topBarSection"}>
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={4}>
                                <div className={"topBarMobile"}>
                                    <span className={"topBarMobileIcon"}><FontAwesomeIcon  icon={faPhone} /></span><span>01315807050</span>
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
