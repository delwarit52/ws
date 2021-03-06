import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditCourseCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            img:'',
            imgvalue:false,
            courseCatRedirect:false,
        }

        this.title=this.title.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }



    componentDidMount() {
        let cthis=this;
        Axios.post('/editCourseCat', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});
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


    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }

    handleForm(event) {

        event.preventDefault();


        if(this.state.imgvalue){

            let course_cat_id=this.props.match.params.id;
            let title = this.state.title;
            let img = this.state.img;

            let url='/updateCourseCatWithImg'

            let data = new FormData();
            data.append('course_cat_id', course_cat_id);
            data.append('title', title);
            data.append('img', img);




            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.setState({courseCatRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let course_cat_id=this.props.match.params.id;
            let title = this.state.title;

            let url='/updateCourseCat'

            let data = new FormData();
            data.append('course_cat_id', course_cat_id);
            data.append('title', title);

            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({courseCatRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }







    render() {

        let rthis=this;
        if(rthis.state.courseCatRedirect){

            return <Redirect to='/adminCourseCat'/>
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




                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="file" onChange={this.files}  />
                                                </Form.Group>

>

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

export default EditCourseCat;
