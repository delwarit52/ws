import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import {Col, Container, Row, Image, Button, Nav} from "react-bootstrap";
import service from '../../../../images/banner.jpg';
import {Link} from "react-router-dom";
import web from "../../../../images/slider2.jpg";
import web2 from "../../../../images/web2.jpg";
import Axios from "axios";

class PortfolioPageComponent extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            catlist:[],
        }
    }


    componentDidMount() {
        let cthis=this;


        Axios.get('/projectCat')
            .then(function(respose){
                cthis.setState({catlist:respose.data})

            })
            .catch(function(error){
            });


        Axios.get('/projectlist')
            .then(function(respose){
                cthis.setState({datalist:respose.data})

            })
            .catch(function(error){
            });

    }

    projectCat(proCatId){
        let cthis=this;

        Axios.post('/catProject', {
            id: proCatId,
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
                <Container className="portfolioPageContainer mt-5">
                    <Row>
                        <Col lg={3}>
                            <div className="portfolioItemSidebar">
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    {
                                        this.state.catlist.map((d)=>
                                            <Button className="mb-2" onClick={this.projectCat.bind(this,`${d.project_cat_id}`)}>{d.title}</Button>
                                        )
                                    }
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <Row>


                                {
                                    this.state.datalist.map((d)=>


                                <Col lg={6} md={6} sm={12}>
                                    <a href={"#"}>
                                        <div className="portfoliItem">
                                            <div className="portfoliItemImg">
                                                <img src={web2}/>
                                            </div>
                                            <div className={'portfoliItemContent'}>
                                                <h3>{d.title}</h3>
                                                <p>{d.detail}</p>
                                                <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank"><Button>Detail Show</Button></a>
                                            </div>
                                        </div>
                                    </a>
                                    <h4>{d.title}</h4>
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

export default PortfolioPageComponent;
