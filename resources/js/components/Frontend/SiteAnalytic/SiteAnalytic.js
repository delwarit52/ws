import React, {Component,Fragment} from 'react';
import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import user from '../../../../images/priest.png'
import Axios from "axios";

class SiteAnalytic extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
        }
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/home_analytic')

            .then(function (response) {
                cthis.setState({datalist:response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

        let dthis=this;
        let datas=dthis.state.datalist;


        const listItems = datas.map((d) =>
            <Col className={"siteAnalyticCol p-0"}>
                <div className="text-center siteAnalyticItem">
                    <img src={user}/>
                    <h3>{d.total}+</h3>
                    <h4>{d.title}</h4>
                </div>
            </Col>

            // <li key={d.title}>{d.title}</li>


        );


        return (
            <Fragment>
                <section className={"siteAnalytic"}>
                    <Container>

                        <Row className="justify-content-md-center">
                            {listItems}
                        </Row>
                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default SiteAnalytic;
