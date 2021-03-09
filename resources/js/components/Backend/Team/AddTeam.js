import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class AddTeam extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            name:'',
            title:'',
            facebook:'',
            twitter:'',
            linkdin:'',
            email:'',
            img:'',
            imgvalue:false,
            addRedirect:false,
        }





        this.name=this.name.bind(this);
        this.title=this.title.bind(this);
        this.facebook=this.facebook.bind(this);
        this.twitter=this.twitter.bind(this);
        this.facebook=this.facebook.bind(this);
        this.email=this.email.bind(this);
        this.linkdin=this.linkdin.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }


    name(event){

        let name=event.target.value;
        this.setState({name:name})
    }

    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    facebook(event){

        let fb=event.target.value;
        this.setState({facebook:fb})
    }

    twitter(event){

        let sl=event.target.value;
        this.setState({twitter:sl})
    }

    linkdin(event){
        let lkdin=event.target.value;
        this.setState({linkdin:lkdin})
    }

    email(event){
        let email=event.target.value;
        this.setState({email:email})
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
            let facebook = this.state.facebook;
            let linkdin = this.state.linkdin;
            let twitter = this.state.twitter;
            let email = this.state.email;
            let img = this.state.img;

            let url='/addTeam'

            let data = new FormData();
            data.append('name', name);
            data.append('title', title);
            data.append('facebook', facebook);
            data.append('linkdin', linkdin);
            data.append('twitter', twitter);
            data.append('email', email);
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
            return <Redirect to='/adminTeam'/>
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

                                    <h1>hello</h1>
                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" onChange={this.name} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text"  onChange={this.title} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Facebook</Form.Label>
                                                    <Form.Control type="text"  onChange={this.facebook} />

                                                </Form.Group>


                                            </Col>

                                            <Col lg={6} md={6}>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Twitter</Form.Label>
                                                    <Form.Control type="text"  onChange={this.twitter} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Linkdin</Form.Label>
                                                    <Form.Control type="text" onChange={this.linkdin} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text"  onChange={this.email} />

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

export default AddTeam;
