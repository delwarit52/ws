import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row, ButtonGroup, CardGroup, Card, CardImg, Image} from "react-bootstrap";
import graphics from '../../../../images/design.png'
import Axios from "axios";

class Service extends Component {
    constructor() {
        super();
        this.state={
            datalist:[]
        }
    }



    componentDidMount() {
        let cthis=this;
        Axios.get('/home_service')

            .then(function (response) {
                cthis.setState({datalist:response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }




    render() {
        let dthis=this;
        let datali=dthis.state.datalist;

        let listData=datali.map((d)=>
            <Col lg={3} className="serviceItemCol p-0">
                <a href="#">
                    <div className="serviceItem">
                        <Image src={graphics}></Image>
                        <h3>{d.title}</h3>
                    </div>
                </a>

            </Col>
        );




        return (
            <Fragment>
                <section className={"homeService sectionMarginPadding"}>
                <Container className={"containerMargin homeService"}>
                    <Row>
                        <Col>
                            <div className={"headingTitle text-center"}>
                                <h2>Our Service</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className={"serviceRow"}>

                        {listData}
                    </Row>

                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Service;
