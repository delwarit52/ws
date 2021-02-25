import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Axios from "axios";

class ServiceDetail extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }


    componentDidMount() {
        let cthis=this;

        Axios.post('/serviceDetail', {
            id: this.props.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data})
            })
            .catch(function (error) {
                console.log(error);
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
                            <div className={"serviceDetail"}>
                                <h2>{d.title}</h2>
                               <p>{d.detail}</p>

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

export default ServiceDetail;
