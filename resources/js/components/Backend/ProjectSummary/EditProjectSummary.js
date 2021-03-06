import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditProjectSummary extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            total:'',
            editRedirect:false,
        }

        this.title=this.title.bind(this);
        this.total=this.total.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

    componentDidMount() {
        let cthis=this;
        Axios.post('/editProjectSummaryCat', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({total:cthis.state.datalist[0].total});
            })
            .catch(function (error) {
                console.log(error);
            });

    }




    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    total(event){

        let total=event.target.value;
        this.setState({total:total})
    }

    handleForm(event) {
        event.preventDefault();


            let project_summary_id=this.props.match.params.id;
            let title = this.state.title;
            let total = this.state.total;

            let url='/updateProjectSummary'

            let data = new FormData();
            data.append('project_summary_id', project_summary_id);
            data.append('title', title);
            data.append('total', total);

            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({editRedirect:true})
                    alert("data is ");
                }

            })
                .catch(function (error) {
                    console.log(error);
                });
        }








    render() {

        let rthis=this;
        if(rthis.state.editRedirect){

            return <Redirect to='/projectSummary'/>

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
                                                    <Form.Label>Total</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.total} onChange={this.total} />
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

export default EditProjectSummary;
