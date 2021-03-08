import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import Axios from "axios";

class Team extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            editRedirect:false,
        }

    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/adminTeam')
            .then(function (response) {
                cthis.setState({datalist:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }






    render() {
        return (
            <Fragment>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Team</h4></Card.Header>
                                <Card.Body>

                                    <Button className="mr-10 editButton" onClick={this.editItem}>Edit</Button>

                                    <Button onClick={this.deleteSlider} className={"btn btn-primary mr-10 editButton"} >Delete</Button>

                                    <Link to="/addSlider" className={"btn btn-primary editButton"}>Add</Link>


                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Team;
