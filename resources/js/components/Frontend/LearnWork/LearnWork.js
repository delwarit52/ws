import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faHandPointRight, faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import Axios from "axios";

class LearnWork extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }



    componentDidMount() {
        let cthis = this;
        Axios.get('/home_project_summary')

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
                <section className={"learnWorkContainer"}>
                    <div className="learnWorkOverlay">
                <Container  className=" containerMargin p-0">


                            <Row className="p-0">

                                {this.state.datalist.map((d)=>
                                    <Col>
                                        <div className="learnWorkTeam text-center">
                                            <h3>{d.total}</h3>
                                            <h2>{d.title}</h2>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                </Container>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default LearnWork;
