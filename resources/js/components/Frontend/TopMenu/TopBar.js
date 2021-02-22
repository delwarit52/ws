import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios';
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
import {forEach} from "react-bootstrap/ElementChildren";

class TopBar extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            addressShort:'',
            openingTime:'',
            mobile:'',

        }
    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/home_info')
            .then(function (response) {
                cthis.setState({datalist:response.data});

                cthis.setState({addressShort:cthis.state.datalist[0].address_short});
                cthis.setState({openingTime:cthis.state.datalist[0].opening_time});
                cthis.setState({mobile:cthis.state.datalist[0].mobile});



            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    render() {
        return (
            <Fragment>
                <section className={"topBarSection"}>
                    <Container>
                        <Row>
                            <Col lg={3} md={4} sm={4}>
                                <div className={"topBarMobile topBarCommon text-center"}>
                                    <span ><FontAwesomeIcon  icon={faPhone} /></span><span className={"topBarMobileIcon ml-1"}>{this.state.mobile}</span>

                                </div>
                            </Col>
                            <Col lg={6} md={4} sm={4}>
                                <div className={"topBarAddress topBarCommon text-center"}>

                                    <span ><FontAwesomeIcon  icon={faMapMarkerAlt} /></span><span className={"topBarAddressIcon ml-1"}>{this.state.addressShort}</span>

                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={4}>
                                <div className={"topBarWorkTime topBarCommon text-center"}>
                                    <span ><FontAwesomeIcon  icon={faClock} /></span><span className={"topBarClockIcon ml-1"}>{this.state.openingTime}</span>
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
