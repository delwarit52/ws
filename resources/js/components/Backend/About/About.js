import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import {Redirect} from "react-router";

class About extends Component {
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
        Axios.get('/adminAbout')
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
                this.setState({rowid:row['about_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'about_id',
                text: 'About ID'
            },

            {
                dataField: 'title',
                text: 'Title'
            },

            {
                dataField: 'detail',
                text: 'Detail',

            },

            {
                dataField: 'img',
                text: 'Image',
                formatter: priceFormatter
            }

        ];

        function priceFormatter(cell,row){

            let im=`storage/uploads/about/${cell}`
            return (
                <img  className={"sliderImg"} src={im}/>
            );
        }


        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to={`/editAdminAbout/${rid}`} />
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
                                    <BootstrapTable keyField='about_id' data={ data } columns={ columns } selectRow={ selectRow }>
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

export default About;
