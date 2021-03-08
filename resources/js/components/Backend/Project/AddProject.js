import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class AddProject extends Component {
    constructor() {
        super();
        this.state={
            projectTitle:'',
            projectUrl:'',
            detail:'',
            img:'',
            projectCatId:'',
            projectCatList:[],
            addRedirect:false

        }

        this.handleChange=this.handleChange.bind(this);
        this.title=this.title.bind(this);
        this.projectUrl=this.projectUrl.bind(this);
        this.detail=this.detail.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }


    componentDidMount() {
        let cthis=this;

        Axios.get('/adminProjectCat')
            .then(function (response) {
                cthis.setState({projectCatList:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    title(event){

        let title=event.target.value;
        this.setState({projectTitle:title})
    }

    projectUrl(event){

        let purl=event.target.value;
        this.setState({projectUrl:purl})
    }

    detail(event){
        let detail=event.target.value;
        this.setState({detail})
    }

    files(event){

        let image=event.target.files[0];
        this.setState({img:image})
    }


    handleChange(event){
        let cid=event.target.value;
        this.setState({projectCatId:cid})
        alert(cid);
    }


    handleForm(event) {
        event.preventDefault();

            let title = this.state.projectTitle;
            let projectUrl = this.state.projectUrl;
            let detail = this.state.detail;
            let img = this.state.img;
            let projectCatId = this.state.projectCatId;

            let url='/addProject'

            let data = new FormData();
            data.append('project_cat_id', projectCatId);
            data.append('title', title);
            data.append('url', projectUrl);
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
            return <Redirect to='/adminProject'/>
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
                                <Card.Header><h4>Project</h4></Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" onChange={this.title} />

                                                </Form.Group>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Url</Form.Label>
                                                    <Form.Control type="text" onChange={this.projectUrl} />

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

                                                <Form.Group controlId="formBasicEmail">

                                                    <Form.Label>Project Category</Form.Label>

                                                    <Form.Control defaultValue={this.state.projectCatId} as="select"  onChange={this.handleChange}>

                                                        {
                                                            this.state.projectCatList.map((d)=>

                                                                <option value={d.project_cat_id} >{d.title}</option>

                                                            )
                                                        }

                                                    </Form.Control>


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

export default AddProject;
