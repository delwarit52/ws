import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import address from '../../../../images/address.png'

class ContactPageComponent extends Component {
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
                               <p>Mobile: 01318520054</p>
                               <p>Email: info.delwarit@gmail.com</p>
                           </div>
                       </Col>
                       <Col>
                           <div className="contactItem">
                               <Image src={address}></Image>
                               <h2>Openning Time</h2>
                               <p>10.00 Am -9.pm</p>

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
