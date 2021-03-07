import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Redirect} from "react-router";
import Axios from "axios";

class AddProjectCat extends Component {
    constructor() {
        super();
        this.state={
            title:'',
            addRedirect:false
        }

        this.title=this.title.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }



    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    handleForm(event){
        event.preventDefault();

        let title=this.state.title;

        let url='/addProjectCat'

        let data = new FormData();
        data.append('title', title);

        let athis=this;


        let config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        Axios.post(url, data,config).then(function (response) {
            if(response.data){
                athis.setState({addRedirect:true})
            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }







    render() {

        let rthis=this;
        if(rthis.state.addRedirect){
            return <Redirect to='/adminProjectCat'/>
        }



        return (
            <Fragment>
                <TopMenu/>
                <Container fluid={true}>
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Project Cat</h4></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" onChange={this.title} />

                                        </Form.Group>

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

export default AddProjectCat;
