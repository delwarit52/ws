import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import AboutImg from '../../../../images/slider2.jpg'

class HomeAboutUs extends Component {
    render() {
        return (
            <Fragment>
                <section className={"sectionMarginPadding"}>
            <Container className="containerMargin">
                <Row>
                    <Col>
                        <div className="aboutImage">
                            <img src={AboutImg}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="aboutContent">
                            <h2 className="mt-5">About Us</h2>
                            <p className="mt-3 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged. </p>
                            <Button className="btn btn-primary mt-1">More Info</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
                </section>
            </Fragment>
        );
    }
}

export default HomeAboutUs;
