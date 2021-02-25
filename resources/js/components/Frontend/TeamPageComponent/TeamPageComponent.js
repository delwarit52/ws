import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import own from '../../../../images/own.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Axios from "axios";

class TeamPageComponent extends Component {
    constructor() {
        super();
        this.state={
            datalist:[]
        }
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/teamlist')
            .then(function(respose){
                cthis.setState({datalist:respose.data})

            })
            .catch(function(error){
            });

    }



    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        {
                            this.state.datalist.map((d)=>

                        <Col lg={3} md={6} sm={12}>
                            <div className="team">
                                <Image src={own} ></Image>
                                <h3>{d.name}</h3>
                                <p>{d.title}</p>
                                <a href="#"> <FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="mailto:mokbulhussain2@gmail.com?subject = Feedback&body = Message"> <FontAwesomeIcon icon={faEnvelope} /></a>
                            </div>
                        </Col>
                            )
                        }
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TeamPageComponent;
