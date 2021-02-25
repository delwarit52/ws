import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import CourseList from "./CourseList";
import {Col, Container, Image, Row} from "react-bootstrap";
import web from '../../../../images/programming.png'
import {Link} from "react-router-dom";
import Axios from "axios";

class CoursePageComponent extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }

    componentDidMount() {
        let cthis=this;

        Axios.get('/courseCat')
            .then(function(respose){
                cthis.setState({datalist:respose.data})

            })
            .catch(function(error){
            });
    }


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>

                        {
                            this.state.datalist.map((d)=>

                        <Col lg={3} md={6} sm={12}>
                            <Link to={`/courselist/${d.course_cat_id}`}>
                                <div className="coursePageItem">
                                    <Image src={web}></Image>
                                    <h3>{d.title}</h3>
                                </div>
                            </Link>
                        </Col>

                            )
                        }

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CoursePageComponent;
