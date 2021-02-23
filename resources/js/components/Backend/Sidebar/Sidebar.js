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
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;