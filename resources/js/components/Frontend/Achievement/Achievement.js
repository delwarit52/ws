import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Video from "../Video/Video";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import Axios from "axios";

class Achievement extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            datalist:[]
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




    componentDidMount() {
        let cthis = this;
        Axios.get('/home_achivement')
            .then(function (response) {
                cthis.setState({datalist: response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    render() {
        return (
            <Fragment>
                <section className={"sectionMarginPadding achievementSection"}>
                    <Container>
                        <Row>
                            {
                                this.state.datalist.map((d)=>


                            <Col>
                                <div className="achievement text-center">
                                    <h2>{d.title}</h2>
                                    <p>{d.detail}
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
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default Achievement;
