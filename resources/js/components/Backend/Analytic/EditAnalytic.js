import React, {Component,Fragment} from 'react';
import Axios from "axios";
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Redirect} from "react-router";

class EditAnalytic extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            total:'',
            img:'',
            imgvalue:false,
            analyticRedirect:false,
        }

        this.title=this.title.bind(this);
        this.total=this.total.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

    componentDidMount() {
        let cthis=this;
        Axios.post('/editAnalytic', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({total:cthis.state.datalist[0].total});
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

    total(event){

        let total=event.target.value;
        this.setState({total:total})
    }

    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }




    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){
            let analytic_id=this.props.match.params.id;
            let title = this.state.title;
            let total = this.state.total;
            let img = this.state.img;

            let url='/updateAnalyticWithImg'

            let data = new FormData();
            data.append('analytic_id', analytic_id);
            data.append('title', title);
            data.append('total', total);
            data.append('img', img);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.setState({analyticRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let analytic_id=this.props.match.params.id;
            let title = this.state.title;
            let total = this.state.total;

            let url='/updateAnalytic'

            let data = new FormData();
            data.append('analytic_id', analytic_id);
            data.append('title', title);
            data.append('total', total);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({analyticRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }






    render() {

        let rthis=this;
        if(rthis.state.analyticRedirect){

            return <Redirect to='/analytic'/>
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
                                                    <Form.Control type="text" defaultValue={this.state.total} onChange={this.total} />
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

export default EditAnalytic;
