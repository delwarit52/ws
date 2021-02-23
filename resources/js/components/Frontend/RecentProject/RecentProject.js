import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import graphics from "../../../../images/design.png";
import web from "../../../../images/slider2.jpg"
import web2 from "../../../../images/web2.jpg"
import Axios from "axios";

class RecentProject extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }



    componentDidMount() {
        let cthis = this;
        Axios.get('/home_project')

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
                <section className="sectionMarginPadding">
                    <Container className={"containerMargin"}>
                        <Row>
                            <Col>
                                <div className={"headingTitle text-center"}>
                                    <h2>Recent Project</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"recentProjectRow"}>

                            {

                                this.state.datalist.map((d)=>
                                    <Col lg={6} md={6} sm={12} className="recentProjectCol p-0">
                                        <a href={"#"}>
                                            <div className="recentProjectImg">
                                                <img src={web}/>
                                            </div>

                                            <div className={'recentProjectContent'}>
                                                <h3>{d.title}</h3>
                                                <p>{d.detail}</p>
                                            </div>
                                        </a>

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

export default RecentProject;
