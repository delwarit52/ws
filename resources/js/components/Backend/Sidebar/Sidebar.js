import React, {Component,Fragment} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <Nav defaultActiveKey="/home" className="flex-column">

                        <Nav.Link ><Link  to="/dashboard">Dashboard</Link></Nav.Link>
                        <Nav.Link ><Link  to="/info">Information</Link></Nav.Link>
                        <Nav.Link ><Link  to="/slider">Slider</Link></Nav.Link>
                        <Nav.Link ><Link  to="/analytic">Analytic</Link></Nav.Link>
                        <Nav.Link ><Link  to="/adminAbout">About</Link></Nav.Link>
                        <Nav.Link ><Link  to="/adminService">Service</Link></Nav.Link>
                        <Nav.Link ><Link  to="/adminCourseCat">Course Cat</Link></Nav.Link>
                        <Nav.Link ><Link  to="/projectSummary">Project Summary</Link></Nav.Link>

                    </Nav>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;
