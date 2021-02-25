import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Axios from "axios";

class CourseList extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            catlist:[],

        }
    }

    componentDidMount() {
        let cthis=this;
        let cid=this.props.id;
        Axios.post('/courselist', {
            id: this.props.id,
        })
            .then(function (response) {
                cthis.setState({datalist:response.data})
            })
            .catch(function (error) {
                console.log(error);
            });


        Axios.get('/courseCat')
            .then(function(respose){
                cthis.setState({catlist:respose.data})

            })
            .catch(function(error){
            });

    }

    deleteRow(catId){

        let cthis=this;

        Axios.post('/courselist', {
            id: catId,
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
                <Container >
                    <Row className="coursePageRow">
                        <Col lg={3} md={3}>
                          <div className="courseSidebar">
                              <Nav defaultActiveKey="/home" className="flex-column">
                                  {
                                      this.state.catlist.map((d)=>
                                      <Button className="mb-2" onClick={this.deleteRow.bind(this,`${d.course_cat_id}`)}>{d.title}</Button>
                                      )
                                  }

                              </Nav>
                          </div>
                        </Col>
                        <Col lg={9} md={9}>


                            <Row>
                                {
                                    this.state.datalist.map((d)=>

                                <Col lg={6} md={6} sm={12}>
                                    <div className="courseListItem">
                                        <h3>{d.title}</h3>
                                        <p>Topics: {d.topic}</p>
                                        <h4><span className="courseDuration">Duration: 4 Month</span> <span className="courseAmount">Amount: 6000 TK</span></h4>
                                        <Link to={`/courseDetail/${d.course_list_id}`} className="btn btn-primary"> See More </Link>
                                    </div>
                                </Col>

                                    )
                                }

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseList;
