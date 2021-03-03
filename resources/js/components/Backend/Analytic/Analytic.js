import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class Analytic extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            editRedirect:false,
        }
        this.editItem=this.editItem.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/analytic')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                console.log(cthis.state.datalist);
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



    render() {

        let rid=this.state.rowid;

        const selectRow = {
            mode: 'radio',
            onSelect: (row, isSelect, rowIndex) => {
                this.setState({rowid:row['analytic_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'analytic_id',
                text: 'Analytic ID'
            },

            {
                dataField: 'title',
                text: 'Title'
            },

            {
                dataField: 'total',
                text: 'Total',

            },

            {
                dataField: 'img',
                text: 'Image',
                formatter: priceFormatter
            }

        ];

        function priceFormatter(cell,row){

            let im=`storage/uploads/analytic/${cell}`
            return (

                <img  className={"sliderImg"} src={im}/>
            );
        }


        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to={`/editAnalytic/${rid}`} />
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
                                    <Card.Header><h4>Analytic</h4></Card.Header>
                                    <Card.Body>
                                        <Button className="mr-10 editButton" onClick={this.editItem}>Edit</Button>
                                        <Link to="/addAnalytic" className={"btn btn-primary editButton"}>Add</Link>
                                        <BootstrapTable keyField='analytic_id' data={ data } columns={ columns } selectRow={ selectRow }>
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

export default Analytic;
