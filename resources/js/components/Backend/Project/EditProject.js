import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditProject extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            projectCatList:[],
            projectTitle:'',
            detail:'',
            projectUrl:'',
            projectCatId:'',
            img:'',
            imgvalue:false,
            editRedirect:false,
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
        Axios.post('/editProject', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({projectTitle:cthis.state.datalist[0].project_title});
                cthis.setState({projectUrl:cthis.state.datalist[0].url});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({projectCatId:cthis.state.datalist[0].project_cat_id});
                cthis.setState({img:cthis.state.datalist[0].image});
            })
            .catch(function (error) {
                console.log(error);
            });


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
        this.setState({imgvalue:true})
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

        if(this.state.imgvalue){
            let project_id=this.props.match.params.id;
            let title = this.state.title;
            let projectUrl = this.state.projectUrl;
            let detail = this.state.detail;
            let img = this.state.img;
            let projectCatId = this.state.projectCatId;

            let url='/updateProjectWithImg'

            let data = new FormData();
            data.append('project_id', project_id);
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

                    rethis.setState({editRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let project_id=this.props.match.params.id;
            let title = this.state.projectTitle;
            let projectUrl = this.state.projectUrl;
            let detail = this.state.detail;
            let projectCatId = this.state.projectCatId;

            let url='/updateProject'

            let data = new FormData();

            data.append('project_id', project_id);
            data.append('project_cat_id', projectCatId);
            data.append('title', title);
            data.append('url', projectUrl);
            data.append('detail', detail);


            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({editRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }







    render() {

        let rthis=this;
        if(rthis.state.editRedirect){
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
                                <Card.Header><h4>Slider</h4></Card.Header>
                                <Card.Body>
                                    {this.props.match.params.id}
                                    <h1>hello</h1>
                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.projectTitle} onChange={this.title} />

                                                </Form.Group>



                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Link</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.projectUrl} onChange={this.projectUrl} />

                                                </Form.Group>

                                            </Col>

                                            <Col lg={6} md={6}>


                                                    <Form.Group controlId="formBasicEmail">

                                                        <Form.Label>Project Category</Form.Label>

                                                        <Form.Control defaultValue={this.state.projectCatId} as="select"  onChange={this.handleChange}>

                                                            {
                                                                this.state.projectCatList.map((d)=>

                                                                <option value={d.project_cat_id} selected={this.state.projectCatId == d.project_cat_id}>{d.title}</option>

                                                                )
                                                            }

                                                        </Form.Control>


                                                    </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Detail</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.detail} onChange={this.detail}  />
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

export default EditProject;
