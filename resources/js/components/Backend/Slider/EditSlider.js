import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Redirect} from "react-router";

class EditSlider extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            subtitle:'',
            detail:'',
            sliderlink:'',
            img:'',
            imgvalue:false,
            hiddenImg:'',
            sliderRedirect:false,
        }


        this.title=this.title.bind(this);
        this.subTitle=this.subTitle.bind(this);
        this.detail=this.detail.bind(this);
        this.sliderLink=this.sliderLink.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.post('/editSlider', {
            id: this.props.match.params.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({subtitle:cthis.state.datalist[0].subtitle});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({sliderlink:cthis.state.datalist[0].link});
                cthis.setState({img:cthis.state.datalist[0].img});
                cthis.setState({hiddenImg:cthis.state.datalist[0].img});
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    subTitle(event){

        let subtitle=event.target.value;
        this.setState({subtitle:subtitle})
    }

    sliderLink(event){

        let sl=event.target.value;
        this.setState({sliderlink:sl})
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
            let slider_id=this.props.match.params.id;
            let title = this.state.title;
            let subtitle = this.state.subtitle;
            let sliderlink = this.state.sliderlink;
            let detail = this.state.detail;
            let img = this.state.img;
            let hiddenImg=this.state.hiddenImg;


            let url='/updateSliderWithImg'

            let data = new FormData();
            data.append('slider_id', slider_id);
            data.append('title', title);
            data.append('subtitle', subtitle);
            data.append('linkData', sliderlink);
            data.append('detail', detail);
            data.append('img', img);



            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){

                    rethis.setState({sliderRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let slider_id=this.props.match.params.id;
            let title = this.state.title;
            let subtitle = this.state.subtitle;
            let sliderlink = this.state.sliderlink;
            let detail = this.state.detail;

            let url='/updateSlider'

            let data = new FormData();
            data.append('slider_id', slider_id);
            data.append('title', title);
            data.append('subtitle', subtitle);
            data.append('linkData', sliderlink);
            data.append('detail', detail);


            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.setState({sliderRedirect:true})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }





    render() {

        let rthis=this;
        if(rthis.state.sliderRedirect){

            return <Redirect to='/slider'/>
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
                                                    <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} />

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

export default EditSlider;
