import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import {Redirect} from "react-router";

class CourseCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            editRedirect:false,
        }

        this.deleteCourseCat=this.deleteCourseCat.bind(this);
        this.editItem=this.editItem.bind(this);

    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/adminCourseCat')
            .then(function (response) {
                cthis.setState({datalist:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    editItem(event){

        let cthis=this;
        let rowid=cthis.state.rowid;

        if(rowid){
            cthis.setState({editRedirect:true})
        }
        else{
            event.preventDefault();
        }

    }


    deleteCourseCat(){

        let cthis=this;

        Axios.post('/courseCatDelete', {
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

        const selectRow = {
            mode: 'radio',
            onSelect: (row, isSelect, rowIndex) => {
                this.setState({rowid:row['course_cat_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'course_cat_id',
                text: 'Course Cat ID'
            },

            {
                dataField: 'title',
                text: 'Title'
            },

            {
                dataField: 'img',
                text: 'Image',
                formatter: priceFormatter
            }

        ];

        function priceFormatter(cell,row){

            let im=`storage/uploads/courseCat/${cell}`
            return (

                <img  className={"sliderImg"} src={im}/>
            );
        }


        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to={`/editCourseCat/${rid}`} />
        }


        return (
            <Fragment>
                <Container fluid={true} >
                    <Row>
                        <Col lg={2} className={"p-0"}>
                            <Sidebar/>
                        </Col>
                        <Col lg={10}>
                            <Card>
                                <Card.Header><h4>Course Category</h4></Card.Header>
                                <Card.Body>
                                    <Button className="mr-10 editButton" onClick={this.editItem}>Edit</Button>

                                    <Button onClick={this.deleteCourseCat} className={"btn btn-primary mr-10 editButton"} >Delete</Button>

                                    <Link to="/addCourseCat" className={"btn btn-primary editButton"}>Add</Link>

                                    <BootstrapTable keyField='course_cat_id' data={ data } columns={ columns } selectRow={ selectRow }>

                                    </BootstrapTable>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseCat;
