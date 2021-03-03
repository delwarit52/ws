import React, {Component,Fragment} from 'react';
import Axios from "axios";
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Redirect} from "react-router";

class EditAbout extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            detail:'',
            img:'',
            imgvalue:false,
            aboutRedirect:false,
        }
    }



    componentDidMount() {
        let cthis=this;
        Axios.post('/editAbout', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({img:cthis.state.datalist[0].img});
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    detail(event){

        let detail=event.target.value;
        this.setState({detail:detail})
    }

    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }




    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){
            let about_id=this.props.match.params.id;
            let title = this.state.title;
            let detail = this.state.detail;
            let img = this.state.img;

            let url='/updateAboutWithImg'

            let data = new FormData();
            data.append('about_id', about_id);
            data.append('title', title);
            data.append('detail', detail);
            data.append('img', img);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.setState({aboutRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let about_id=this.props.match.params.id;
            let title = this.state.title;
            let detail = this.state.detail;

            let url='/updateAbout'

            let data = new FormData();
            data.append('about_id', about_id);
            data.append('title', title);
            data.append('detail', detail);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({aboutRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }



    render() {

        let rthis=this;
        if(rthis.state.aboutRedirect){

            return <Redirect to='/adminAbout'/>
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
                                <Card.Header><h4>Edit Analytic</h4></Card.Header>
                                <Card.Body>
                                    {this.props.match.params.id}

                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Sub Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.detail} onChange={this.detail} />
                                                </Form.Group>


                                            </Col>

                                            <Col lg={6} md={6}>


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

export default EditAbout;
