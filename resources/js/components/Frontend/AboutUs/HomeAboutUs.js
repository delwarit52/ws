import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import AboutImg from '../../../../images/slider2.jpg'

import Axios from "axios";
import {Link} from "react-router-dom";

class HomeAboutUs extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            aboutTitle:'',
            aboutDetail:''
        }
    }

    componentDidMount() {
        let cthis=this;

        Axios.get('/home_about')
            .then(function(respose){
                cthis.setState({datalist:respose.data})
                cthis.setState({aboutTitle:cthis.state.datalist[0].title})
                cthis.setState({aboutDetail:cthis.state.datalist[0].detail})

            })
            .catch(function(error){
            });
}


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
                            <h2 className="mt-5 aboutTitle">{this.state.aboutTitle}</h2>
                            <p className="mt-3 text-justify aboutDes"> {this.state.aboutDetail}</p>
                            <Link to="/about"><Button className="btn btn-primary mt-1 aboutBtn">More Info</Button></Link>
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
