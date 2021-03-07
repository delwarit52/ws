import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import {Redirect} from "react-router";

class ProjectCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            editRedirect:false,
        }

        this.deleteProjectCat=this.deleteProjectCat.bind(this);
        this.editItem=this.editItem.bind(this);

    }


    componentDidMount() {

        let cthis=this;
        Axios.get('/adminProjectCat')
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




    deleteProjectCat(){

        let cthis=this;

        Axios.post('/projectCatDelete', {
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
                this.setState({rowid:row['project_cat_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'project_cat_id',
                text: 'Course Cat ID'
            },

            {
                dataField: 'title',
                text: 'Title'
            },


        ];


        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to={`/editProjectCat/${rid}`} />
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

                                    <Button onClick={this.deleteProjectCat} className={"btn btn-primary mr-10 editButton"} >Delete</Button>

                                    <Link to="/addProjectCat" className={"btn btn-primary editButton"}>Add</Link>

                                    <BootstrapTable keyField='project_cat_id' data={ data } columns={ columns } selectRow={ selectRow }>

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

export default ProjectCat;
