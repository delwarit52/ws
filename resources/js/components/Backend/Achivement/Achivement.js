import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import BootstrapTable from 'react-bootstrap-table-next';
import Axios from "axios";

class Achivement extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            title:'',
            detail:'',
            video:'',
            img:'',
            imgvalue:false,
            achivRedirect:false,

        }

        this.title=this.title.bind(this);
        this.detail=this.detail.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/achivment')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({rowid:cthis.state.datalist[0].achivement_id});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({video:cthis.state.datalist[0].video});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }




    title(event){

        let title=event.target.value;
        this.setState({title:title})
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

    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){
            let achivment_id=this.state.rowid;
            let title = this.state.title;
            let detail = this.state.detail;
            let img = this.state.img;


            let url='/updateAchivmentWithImg'

            let data = new FormData();
            data.append('achivment_id', achivment_id);
            data.append('title', title);
            data.append('detail', detail);
            data.append('img', img);




            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.componentDidMount();
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let achivment_id=this.state.rowid;
            let title = this.state.title;
            let detail = this.state.detail;



            let url='/updateAchivment'

            let data = new FormData();
            data.append('achivment_id', achivment_id);
            data.append('title', title);
            data.append('detail', detail);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.componentDidMount();
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }





    render() {
        let vthis=this;

       let file=`storage/uploads/video/${this.state.video}`



        return (
            <Fragment>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Achivement</h4></Card.Header>
                                <Card.Body>



                                    <Form onSubmit={this.handleForm}>

                                        <Row>

                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>title</Form.Label>
                                                    <Form.Control type="text" onChange={this.title} defaultValue={this.state.title}  />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Detail</Form.Label>
                                                    <Form.Control type="text" onChange={this.detail} defaultValue={this.state.detail}  />

                                                </Form.Group>


                                                <video width="320" height="240" controls>
                                                    <source src={file} type="video/mp4"></source>
                                                    <source src={file} type="video/ogg"></source>

                                                </video>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Video</Form.Label>
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

export default Achivement;
