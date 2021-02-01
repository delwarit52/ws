import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from '../../../../images/logo.png'
import TopBar from "./TopBar";

class TopMenu extends Component {
    constructor() {
        super();
        this.state={
            topMenuClass:'topMenu',
            topMenuLink:'topMenuLink'
        }
        this.onScroll=this.onScroll.bind(this)
    }

    onScroll(){
        if(window.scrollY>100){
           this.setState({topMenuClass:'topMenuScroll'})
            this.setState({topMenuLink:'topMenuLinkScroll'})
        }else if(window.scrollY<100){
            this.setState({topMenuClass:'topMenu'})
            this.setState({topMenuLink:'topMenuLink'})
        }

    }


    render() {

        window.addEventListener("scroll", this.onScroll)

        return (
            <Fragment>
                <TopBar/>
                <Navbar className={this.state.topMenuClass} collapseOnSelect  expand="lg"  variant="dark">
                    <Navbar.Brand href="#home"><img src={Logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">home</Nav.Link>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">about</Nav.Link>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">service</Nav.Link>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">course</Nav.Link>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">portfolio</Nav.Link>
                            <Nav.Link className={this.state.topMenuLink} href="#deets">contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopMenu;
