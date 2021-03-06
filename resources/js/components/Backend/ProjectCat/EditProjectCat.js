import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditProjectCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            editRedirect:false,
        }

        this.title=this.title.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.post('/editProjectCat', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});

            })
            .catch(function (error) {
                console.log(error);
            });

    }



    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }


    handleForm(event) {
        event.preventDefault();


        let project_cat_id=this.props.match.params.id;
        let title = this.state.title;

        let url='/updateProjectCat'

        let data = new FormData();
        data.append('project_cat_id', project_cat_id);
        data.append('title', title);

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














    render() {

        let rthis=this;
        if(rthis.state.editRedirect){

            return <Redirect to='/adminProjectCat'/>
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

export default EditProjectCat;
