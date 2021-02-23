import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import web from '../../../../images/design.png';
import {Link} from "react-router-dom";
import Axios from "axios";


class ServicePageList extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            sId:5,
        }
    }


    componentDidMount() {
        let cthis=this;

        Axios.get('/serviceList')
            .then(function(respose){
                cthis.setState({datalist:respose.data})

            })
            .catch(function(error){
            });
    }



   deleteRow(d){
        alert(d)
    }





    render() {



        return (
            <Fragment>
                <Container className={"servicePageCont mt-5"}>
                    <Row>
                        {
                            this.state.datalist.map((d)=>

                        <Col lg={4} md={6} sm={12}>
                            <div className={"servicePageList text-center"}>
                                <Image src={web}></Image>
                                <h2>{d.title}</h2>
                                <p>{d.detail}... </p>
                                <Button className="mb-2" onClick={this.deleteRow.bind(this,`${d.service_id}`)}>Edit</Button>
                            </div>
                        </Col>
                            )
                        }

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ServicePageList;
