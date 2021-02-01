import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Video from "../Video/Video";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faPlayCircle} from '@fortawesome/free-solid-svg-icons'

class Achievement extends Component {
    constructor() {
        super();
        this.state={
            show:false,
        }

        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleShow(){
        this.setState({show:true})
    }

    handleClose(){
        this.setState({show:false})
    }


    render() {
        return (
            <Fragment>
                <section className={"sectionMarginPadding achievementSection"}>
                    <Container>
                        <Row>
                            <Col>
                                <div className="achievement text-center">
                                    <h2>Our Achievement</h2>
                                    <p>First i analysis the requirement of project. According to the requirement i make a proper technical
                                        analysis, then i build a software architecture. According to the planning i start coding.
                                        Testing is also going on with coding. Final testing take place after finishing coding part.
                                        After successful implementation i provide 6 month free bug fixing service for corresponding project.
                                    </p>
                                    <Button variant="primary" onClick={this.handleShow}>
                                        <FontAwesomeIcon icon={faPlayCircle} />
                                    </Button>

                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Video/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={this.handleClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default Achievement;
