import React, {Component,Fragment} from 'react';
import {Button, Card, CardGroup, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import design from '../../../../images/design.png'
import Slider from "react-slick";
import student1 from "../../../../images/arnob.jpg";
import {Link} from "react-router-dom";
import Axios from "axios";
import graphics from "../../../../images/design.png";

class Course extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            courselist:[],

        }
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/home_course_cat')

            .then(function (response) {
                cthis.setState({datalist:response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })



        Axios.get('/home_course_list')

            .then(function (response) {
                cthis.setState({courselist:response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }



    render() {

        let dthis=this;
        let datali=dthis.state.datalist;

        let listData=datali.map((d)=>
            <Col lg={6} md={6} sm={12} className="courseItemListCol p-0">
                <Link to="/courselist">
                    <div className={"courseItemList text-center"}>
                        <Image src={design}></Image>
                        <h3> {d.title}</h3>
                    </div>
                </Link>
            </Col>

        );



        let courseli=dthis.state.courselist;

        let courseData=courseli.map((d)=>
            <div className={"courseListSlide text-left"}>
                <h2>{d.title}</h2>
                <h3><span>Duration: {d.duration} </span> <span>Amount:{d.amount}</span></h3>
                <p>{d.topic}</p>
                <Button className="btnGadiant">See More</Button>
            </div>

        );





        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <section className={"sectionMarginPadding"}>
                <Container>
                    <Row>
                        <Col>
                            <div className={"headingTitle text-center"}>
                                <h2>Our Course</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                {listData}
                            </Row>
                        </Col>
                        <Col>
                            <div className="courseSlider">
                                <Slider {...settings}>
                                    {courseData}
                                </Slider>
                            </div>
                        </Col>
                    </Row>

                </Container>
                </section>
            </Fragment>
        );
    }
}

export default Course;
