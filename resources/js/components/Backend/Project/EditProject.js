import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";

class EditProject extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            projectTitle:'',
            detail:'',
            projectUrl:'',
            projectCatId:'',
            image:'',
            editRedirect:false,
        }
    }


    componentDidMount() {
        let cthis=this;
        Axios.post('/editProject', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({projectTitle:cthis.state.datalist[0].projectTitle});
                cthis.setState({projectUrl:cthis.state.datalist[0].projectUrl});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({projectCatId:cthis.state.datalist[0].project_cat_id});
                cthis.setState({img:cthis.state.datalist[0].image});
            })
            .catch(function (error) {
                console.log(error);
            });

    }







    render() {
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

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Sub Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.subtitle} onChange={this.subTitle} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Link</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.sliderlink} onChange={this.sliderLink} />

                                                </Form.Group>

                                            </Col>

                                            <Col lg={6} md={6}>


                                                    <Form.Group controlId="formBasicEmail">

                                                        <Form.Label>Project Category</Form.Label>

                                                        <Form.Control as="select" >
                                                            <option   value="0">Select Course Department</option>

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
