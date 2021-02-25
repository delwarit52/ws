import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import BootstrapTable from 'react-bootstrap-table-next';
import Axios from "axios";
import {Link} from "react-router-dom";




class Slider extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
        }

        this.deleteSlider=this.deleteSlider.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/slider')
            .then(function (response) {
                cthis.setState({datalist:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    deleteSlider(){

        let cthis=this;

        Axios.post('/sliderDelete', {
            id: this.state.rowid,
        })
            .then(function (response) {
                if(response.status==200){
                    cthis.componentDidMount();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }





    render() {

        let rid=this.state.rowid;
        console.log(rid);


        const selectRow = {
            mode: 'radio',
            onSelect: (row, isSelect, rowIndex) => {
                this.setState({rowid:row['slider_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [{
            dataField: 'slider_id',
            text: 'Slider ID'
        }, {
            dataField: 'title',
            text: 'Title'
        }, {
            dataField: 'link',
            text: 'Link'
        }];



        return (
            <Fragment>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Slider</h4></Card.Header>
                                <Card.Body>
                                    <Button onClick={this.deleteSlider} className={"btn btn-primary"} >Delete</Button> <span>Add</span>
                                    <BootstrapTable keyField='slider_id' data={ data } columns={ columns } selectRow={ selectRow }/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Slider;
