import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TopMenu from "../TopMenu/TopMenu";
import Axios from "axios";

class CourseDetail extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }



    componentDidMount() {
        let cthis=this;

        Axios.post('/courseDetail', {
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
                <Container className="courseDetailContainer mt-lg-5">
                    <Row>
                        {
                            this.state.datalist.map((d)=>

                        <Col>
                            <div className="courseDetail">
                                <h2>{d.title}</h2>
                                <p>
                                    {d.detail}
                                </p>
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

export default CourseDetail;
