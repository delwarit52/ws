import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
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
            officeT:'',
            successAlert:'beforeAlert',
        }

        this.officeTime=this.officeTime.bind(this);
        this.email=this.email.bind(this);
        this.mobile=this.mobile.bind(this);
        this.addressShort=this.addressShort.bind(this);
        this.addressLong=this.addressLong.bind(this);
        this.fbPage=this.fbPage.bind(this);
        this.handleForm=this.handleForm.bind(this);

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

    email(event){
        let email=event.target.value;
        this.setState({email:email})
    }

    officeTime(event){
        let officeTime=event.target.value;
        this.setState({openingTime:officeTime})
    }

    mobile(event){
        let mobile=event.target.value;
        this.setState({mobile:mobile})
    }

    fbPage(event){
        let fbPage=event.target.value;
        this.setState({fbPage:fbPage})
    }

    addressShort(event){
        let addressShort=event.target.value;
        this.setState({addressShort:addressShort})
    }

    addressLong(event){
        let addressLong=event.target.value;
        this.setState({addressLong:addressLong})
    }

    handleForm(event){
        event.preventDefault();

        let infoId=this.state.infoId;
        let email=this.state.email;
        let mobile=this.state.mobile;
        let fbPage=this.state.fbPage;
        let addressShort=this.state.addressShort;
        let addressLong=this.state.addressLong;
        let officeTime=this.state.openingTime;

        //
        // console.log(email);
        // console.log(mobile);
        // console.log(fbPage);
        // console.log(addressShort);
        // console.log(addressLong);
        console.log(officeTime);

        let cthis=this;

        Axios.post('/updateInfo', {
            id:infoId,
            email:email,
            mobile:mobile,
            fbPage:fbPage,
            addressShort:addressShort,
            addressLong:addressLong,
            officeTime:officeTime
        }).then(function (response) {
                if(response.data){

                    cthis.setState({successAlert:'afterAlert'})

                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {

        return (
            <Fragment>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Website Information</h4></Card.Header>
                                <Card.Body>

                                    <div className={this.state.successAlert}>
                                        <h5>Successfully Update</h5>
                                    </div>

                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" onChange={this.email} defaultValue={this.state.email}  />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Mobile</Form.Label>
                                                    <Form.Control type="text" onChange={this.mobile} defaultValue={this.state.mobile} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>FB Page</Form.Label>
                                                    <Form.Control type="text" onChange={this.fbPage} defaultValue={this.state.fbPage} />

                                                </Form.Group>

                                            </Col>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Address Short</Form.Label>
                                                    <Form.Control type="text" onChange={this.addressShort} defaultValue={this.state.addressShort} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Address Long</Form.Label>
                                                    <Form.Control type="text" onChange={this.addressLong} defaultValue={this.state.addressLong} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Office Time</Form.Label>
                                                    <Form.Control type="text" onChange={this.officeTime} defaultValue={this.state.openingTime} />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" type="submit">
                                            Save
                                        </Button>


                                    </Form>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Info;
