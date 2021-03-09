import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditLogo extends Component {
    constructor(props) {
        super(props);
        this.state={
            datalist:[],
            position:'',
            img:'',
            imgvalue:false,
            editRedirect:false,
        }

        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }


    componentDidMount() {
        let cthis=this;
        Axios.post('/editLogo', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({position:cthis.state.datalist[0].position});
                cthis.setState({img:cthis.state.datalist[0].image});
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }


    handleChange(event){
        let cid=event.target.value;
        this.setState({position:cid})

    }


    handleForm(event) {
        event.preventDefault();

        if(this.state.imgvalue){
            let logo_id=this.props.match.params.id;
            let position = this.state.position;
            let img = this.state.img;

            let url='/updateLogo'

            let data = new FormData();
            data.append('logo_id', logo_id);
            data.append('position', position);
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
    }




    render() {
        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to='/logo'/>
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




                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="file" onChange={this.files}  />
                                                </Form.Group>


                                        <Form.Group controlId="formBasicEmail">

                                            <Form.Label>Position</Form.Label>

                                            <Form.Control defaultValue={this.state.position} as="select"  onChange={this.handleChange}>


                                                        <option value="0" selected={this.state.position == 0}>Header Logo</option>
                                                         <option value="1" selected={this.state.position == 1}>Footer Logo</option>



                                            </Form.Control>


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

export default EditLogo;
