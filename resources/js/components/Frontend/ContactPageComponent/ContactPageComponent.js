import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import address from '../../../../images/address.png'
import Axios from "axios";

class ContactPageComponent extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            addressShort:'',
            openingTime:'',
            mobile:'',
            email:'',
        }
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/contactInfo')
            .then(function(respose){
                cthis.setState({datalist:respose.data})
                cthis.setState({addressShort:cthis.state.datalist[0].address_short});
                cthis.setState({openingTime:cthis.state.datalist[0].opening_time});
                cthis.setState({mobile:cthis.state.datalist[0].mobile});
                cthis.setState({email:cthis.state.datalist[0].email});


            })
            .catch(function(error){
            });

    }


    render() {
        return (
            <Fragment>
               <Container className="contactContainer mt-5">
                   <Row>







                       <Col>
                           <div className="contactItem">
                               <Image src={address}></Image>
                               <h2>Address</h2>
                               <p>Blue Water Shopping City,</p>
                               <p>5th Floor , Left - 5 ,Mosjid Floor</p>
                           </div>
                       </Col>

                       <Col>
                           <div className="contactItem">
                               <Image src={address}></Image>
                               <h2>Contact</h2>
                               <p>Mobile: {this.state.mobile}</p>
                               <p>Email: {this.state.email}</p>
                           </div>
                       </Col>
                       <Col>
                           <div className="contactItem">
                               <Image src={address}></Image>
                               <h2>Office Time</h2>
                               <p>{this.state.openingTime}</p>

                           </div>
                       </Col>


                   </Row>

                   <Row className="contactForm mt-5">

                       <Col>
                           <Form>
                               <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                                   <Form.Text className="text-muted">
                                       We'll never share your email with anyone else.
                                   </Form.Text>
                               </Form.Group>

                               <Form.Group controlId="formBasicPassword">
                                   <Form.Label>Full Name</Form.Label>
                                   <Form.Control type="password" placeholder="Password" />
                               </Form.Group>

                               <Form.Group controlId="exampleForm.ControlTextarea1">
                                   <Form.Label>Example textarea</Form.Label>
                                   <Form.Control as="textarea" rows={3} />
                               </Form.Group>

                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </Form>
                       </Col>

                       <Col>
                        <div className="contactMap">

                        </div>
                       </Col>

                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default ContactPageComponent;
