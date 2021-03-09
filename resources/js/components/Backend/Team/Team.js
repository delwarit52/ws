import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import {Redirect} from "react-router";

class Team extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            editRedirect:false,
        }
        this.editItem=this.editItem.bind(this);
        this.deleteTeam=this.deleteTeam.bind(this);

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




    deleteTeam(){

        let cthis=this;

        Axios.post('/teamDelete', {
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
                this.setState({rowid:row['team_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'team_id',
                text: 'Slider ID'
            },

            {
                dataField: 'name',
                text: 'Name'
            },

            {
                dataField: 'facebook',
                text: 'Link',

            },
            {
                dataField: 'title',
                text: 'Title',

            },
            {
                dataField: 'twitter',
                text: 'Link',

            },
            {
                dataField: 'linkdin',
                text: 'Link',

            },
            {
                dataField: 'email',
                text: 'Link',

            },

            {
                dataField: 'image',
                text: 'Image',
                formatter: priceFormatter
            }

        ];

        function priceFormatter(cell,row){

            let im=`storage/uploads/team/${cell}`
            return (

                <img  className={"sliderImg"} src={im}/>
            );
        }


        let rthis=this;
        if(rthis.state.editRedirect){
            return <Redirect to={`/editTeam/${rid}`} />
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
                                <Card.Header><h4>Team</h4></Card.Header>
                                <Card.Body>

                                    <Button className="mr-10 editButton" onClick={this.editItem}>Edit</Button>

                                    <Button onClick={this.deleteTeam} className={"btn btn-primary mr-10 editButton"} >Delete</Button>

                                    <Link to="/addTeam" className={"btn btn-primary editButton"}>Add</Link>

                                    <BootstrapTable keyField='team_id' data={ data } columns={ columns } selectRow={ selectRow }>

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

export default Team;
