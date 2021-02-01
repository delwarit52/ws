import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import graphics from "../../../../images/design.png";

class RecentProject extends Component {
    constructor() {
        super();
        this.state={
            proOverlay:'beforeMouse'
        }
        this.onMouseProject=this.onMouseProject.bind(this)
        this.onMouseOutProject=this.onMouseOutProject.bind(this)
    }

    onMouseProject(){
       this.setState({proOverlay:'afterMouse'})
    }
    onMouseOutProject(){
        this.setState({proOverlay:'beforeMouse'})
    }
    render() {
        return (
            <Fragment>
                <section className="sectionMarginPadding">
                    <Container className={"containerMargin"}>
                        <Row>
                            <Col>
                                <div className={"headingTitle text-center"}>
                                    <h2>Recent Project</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className={"recentProjectRow"}>
                            <Col lg={4} md={6} sm={12}>

                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="recentProject text-center"  onMouseOver={this.onMouseProject}>
                                    <div className="recentProjectImg">
                                        <img src={graphics}/>
                                    </div>

                                    <div className={'recentProjectContent ' +this.state.proOverlay} onMouseOut={this.onMouseOutProject}>
                                        <h3>Graphics</h3>
                                        <Button className="btn btn-primary">Visit Website</Button>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>

                            </Col>

                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default RecentProject;
