import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from 'axios';

class Info extends Component {

    constructor() {
        super();
        this.state={
            datalist:[],
            infoId:'',
            addressShort:'',
            openingTime:'',
            email:'',
            addressLong:'',
            mobile:'',
            fbPage:'',
        }
    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getInfo')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({infoId:cthis.state.datalist[0].info_id});
                cthis.setState({addressShort:cthis.state.datalist[0].address_short});
                cthis.setState({openingTime:cthis.state.datalist[0].opening_time});
                cthis.setState({email:cthis.state.datalist[0].email});
                cthis.setState({addressLong:cthis.state.datalist[0].address_long});
                cthis.setState({mobile:cthis.state.datalist[0].mobile});
                cthis.setState({fbPage:cthis.state.datalist[0].fb_page});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            {this.state.infoId}
                            {this.state.addressShort}
                            {this.state.mobile}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Info;
