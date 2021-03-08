import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditCourse extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            courseCatList:[],
            courseTitle:'',
            detail:'',
            duration:'',
            topic:'',
            amount:'',
            courseCatId:'',
            img:'',
            imgvalue:false,
            editRedirect:false,
        }

        this.handleChange=this.handleChange.bind(this);
        this.title=this.title.bind(this);
        this.duration=this.duration.bind(this);
        this.topic=this.topic.bind(this);
        this.amount=this.amount.bind(this);
        this.detail=this.detail.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

    componentDidMount() {
        let cthis=this;
        Axios.post('/editCourse', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({courseTitle:cthis.state.datalist[0].course_title});
                cthis.setState({duration:cthis.state.datalist[0].duration});
                cthis.setState({topic:cthis.state.datalist[0].topic});
                cthis.setState({amount:cthis.state.datalist[0].amount});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({courseCatId:cthis.state.datalist[0].course_cat_id});
                cthis.setState({img:cthis.state.datalist[0].image});
            })
            .catch(function (error) {
                console.log(error);
            });


        Axios.get('/adminCourseCat')
            .then(function (response) {
                cthis.setState({courseCatList:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }



    title(event){

        let title=event.target.value;
        this.setState({courseTitle:title})
    }

    duration(event){

        let purl=event.target.value;
        this.setState({duration:purl})
    }

    topic(event){

        let topic=event.target.value;
        this.setState({topic:topic})
    }

    amount(event){

        let amount=event.target.value;
        this.setState({amount:amount})
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
        this.setState({courseCatId:cid})

    }


    handleForm(event) {
        event.preventDefault();

        if(this.state.imgvalue){
            let course_id=this.props.match.params.id;
            let title = this.state.courseTitle;
            let duration = this.state.duration;
            let topic = this.state.topic;
            let amount = this.state.amount;
            let detail = this.state.detail;
            let img = this.state.img;
            let courseCatId = this.state.courseCatId;

            let url='/updateCourseWithImg'

            let data = new FormData();
            data.append('course_list_id', course_id);
            data.append('course_cat_id', courseCatId);
            data.append('title', title);
            data.append('duration', duration);
            data.append('topic', topic);
            data.append('amount', amount);
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

            let course_id=this.props.match.params.id;
            let title = this.state.courseTitle;
            let duration = this.state.duration;
            let topic = this.state.topic;
            let detail = this.state.detail;
            let amount = this.state.amount;
            let courseCatId = this.state.courseCatId;

            let url='/updateCourse'

            let data = new FormData();

            data.append('course_list_id', course_id);
            data.append('course_cat_id', courseCatId);
            data.append('title', title);
            data.append('duration', duration);
            data.append('topic', topic);
            data.append('amount', amount);
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
            return <Redirect to='/adminCourse'/>
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
                                                    <Form.Control type="text" defaultValue={this.state.courseTitle} onChange={this.title} />

                                                </Form.Group>



                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Duration</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.duration} onChange={this.duration} />

                                                </Form.Group>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Duration</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.amount} onChange={this.amount} />

                                                </Form.Group>


                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Topic</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.topic} onChange={this.topic} />

                                                </Form.Group>

                                            </Col>

                                            <Col lg={6} md={6}>


                                                <Form.Group controlId="formBasicEmail">

                                                    <Form.Label>Project Category</Form.Label>

                                                    <Form.Control defaultValue={this.state.courseCatId} as="select"  onChange={this.handleChange}>

                                                        {
                                                            this.state.courseCatList.map((d)=>

                                                                <option value={d.course_cat_id} selected={this.state.courseCatId == d.course_cat_id}>{d.title}</option>

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

export default EditCourse;
