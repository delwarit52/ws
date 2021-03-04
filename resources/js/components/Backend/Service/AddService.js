import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class AddService extends Component {
    constructor() {
        super();
        this.state={
            title:'',
            detail:'',
            img:'',
            addRedirect:false

        }

        this.title=this.title.bind(this);
        this.detail=this.detail.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }



    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }


    detail(event){
        let detail=event.target.value;
        this.setState({detail})
    }

    files(event){

        let image=event.target.files[0];
        this.setState({img:image})
    }

    handleForm(event){
        event.preventDefault();

        let title=this.state.title;
        let detail=this.state.detail;
        let img=this.state.img;



        let url='/addService'

        let data = new FormData();
        data.append('title', title);
        data.append('detail', detail);
        data.append('img', img);

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
            return <Redirect to='/adminService'/>
        }

        return (
            <Fragment>
                <TopMenu/>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Slider</h4></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>




                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" onChange={this.title} />

                                                </Form.Group>



                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Detail</Form.Label>
                                                    <Form.Control type="text" onChange={this.detail}  />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="file" onChange={this.files}  />
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

export default AddService;
