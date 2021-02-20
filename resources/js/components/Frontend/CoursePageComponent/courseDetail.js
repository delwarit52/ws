import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TopMenu from "../TopMenu/TopMenu";

class CourseDetail extends Component {
    render() {
        return (
            <Fragment>
                <Container className="courseDetailContainer mt-lg-5">
                    <Row>
                        <Col>
                            <div className="courseDetail">
                                <h2>Web Design and Frontend Developer</h2>
                                <p>
                                    <b>Course Description</b>

                                    Building on the principles and skills learned in Basic Web Design, this course delves deeper into web design concepts and techniques. Students will gain advanced knowledge in the evolving web practices to prepare them for professional entry into the web design industry.

                                    This course introduces students to more advanced skills in web design and gives students real-life experience in web development. This course will expand the basic coding concept of XHTML, CSS and JAVASCRIPT learned in Basic Web Design.

                                    This course equips students with the essentials for each and every stage of the complete web design process – from the visual aspects to the invisible components of web design. Finally, using industry standard application and design frameworks, students will be able to create effective, attractive websites and have complete knowledge of each step required.

                                    Prerequisite

                                    The applicants for Professional Web Design must have a firm working knowledge of HTML, CSS and JAVASCRIPT as well as the knowledge required to creating web pages. You are recommended to register for our Basic Web Design course if you lack these skills.



                                    <b>Course Features</b>

                                    Industry professionals as Trainers – No Academic trainers
                                    Well researched advanced course content created by Industry professionals
                                    100+ Advanced Web Design videos worth more than BDT 15,000
                                    Free access to innumerable online resources (tutorials in screencasts, pdfs, projects etc)
                                    Live web design project
                                    Industry recognized Certificate
                                    Course Objective

                                    Design w3c valid and cross-browser web pages using HTML and CSS
                                    Apply JavaScript, HTML5, and CSS3 effectively to create interactive and dynamic websites
                                    Have a good understanding of popular web design frameworks
                                    Get skilled in designing responsive web templates for personal and corporate companies from diverse interests
                                    Practical understanding of visual design like typography, color, layout etc.
                                    Course Goals

                                    By the end of this course, the student should be able to design w3c valid websites and apply the acquired knowledge and establish themselves in the vast arena of  Web Design Industry.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetail;
