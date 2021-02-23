import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Axios from "axios";

class AboutPageContent extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }


    componentDidMount() {
        let cthis=this;

        Axios.get('/aboutContent')
            .then(function(respose){
                cthis.setState({datalist:respose.data})

            })
            .catch(function(error){
            });
    }


    render() {
        return (
            <Fragment>
                <Container>
                    <Row>

                        {
                            this.state.datalist.map((d)=>

                                <Col>
                                    <div className={"aboutPageContent m-5"}>
                                        {d.detail}
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

export default AboutPageContent;
