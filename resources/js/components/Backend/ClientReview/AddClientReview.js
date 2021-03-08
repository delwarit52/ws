import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class AddClientReview extends Component {
    constructor() {
        super();
        this.state={
            title:'',
            name:'',
            detail:'',
            img:'',
            addRedirect:false,
        }


        this.name=this.name.bind(this);
        this.title=this.title.bind(this);
        this.detail=this.detail.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }



    name(event){

        let names=event.target.value;
        this.setState({name:names})
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
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }

    handleForm(event) {

        event.preventDefault();

            let name = this.state.name;
            let title = this.state.title;
            let detail = this.state.detail;
            let img = this.state.img;


            let url='/addReview'

            let data = new FormData();

            data.append('title', title);
            data.append('name', name);
            data.append('detail', detail);
            data.append('img', img);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.setState({addRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }



    render() {
        let rthis=this;
        if(rthis.state.addRedirect){
            return <Redirect to='/adminClientReview'/>
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
                                <Card.Header><h4>Review</h4></Card.Header>
                                <Card.Body>

                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" onChange={this.name} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label> Title</Form.Label>
                                                    <Form.Control type="text" onChange={this.title} />
                                                </Form.Group>



                                            </Col>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Detail</Form.Label>
                                                    <Form.Control type="text"  onChange={this.detail}  />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="file" onChange={this.files}  />
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

export default AddClientReview;
