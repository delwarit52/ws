import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import {Redirect} from "react-router";

class AddSlider extends Component {
    constructor() {
        super();
        this.state={
            title:'',
            subTitle:'',
            detail:'',
            sliderlink:'',
            img:'',
            addRedirect:false

        }

        this.title=this.title.bind(this);
        this.subTitle=this.subTitle.bind(this);
        this.detail=this.detail.bind(this);
        this.sliderLink=this.sliderLink.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);



    }


    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    subTitle(event){

        let subtitle=event.target.value;
       this.setState({subtitle:subtitle})
    }

    sliderLink(event){

        let sl=event.target.value;
        this.setState({sliderlink:sl})
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
        let subtitle=this.state.subtitle;
        let sliderlink=this.state.sliderlink;
        let detail=this.state.detail;
        let img=this.state.img;



        let url='/addSlider'

        let data = new FormData();
        data.append('title', title);
        data.append('subtitle', subtitle);
        data.append('linkData', sliderlink);
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
            return <Redirect to='/slider'/>
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

                                        <Row>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" onChange={this.title} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Sub Title</Form.Label>
                                                    <Form.Control type="text" onChange={this.subTitle} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Link</Form.Label>
                                                    <Form.Control type="text" onChange={this.sliderLink} />

                                                </Form.Group>

                                            </Col>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Detail</Form.Label>
                                                    <Form.Control type="text" onChange={this.detail}  />
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

export default AddSlider;
