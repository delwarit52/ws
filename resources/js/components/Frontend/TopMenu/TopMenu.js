import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Logo from '../../../../images/logo.png'
import TopBar from "./TopBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Axios from "axios";

class TopMenu extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            logo:'',
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



    componentDidMount() {
        let cthis=this;
        Axios.get('/home_logo')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                cthis.setState({logo:cthis.state.datalist[0].image});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    render() {
        let im='storage/uploads/logo/';


        window.addEventListener("scroll", this.onScroll)

        return (
            <Fragment>
                <TopBar/>
                <Navbar className={this.state.topMenuClass} collapseOnSelect  expand="lg"  variant="dark">
                    <Navbar.Brand href="#home"><img src={im+this.state.logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/about">About</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/service">Service</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/course">Course</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/portfolio">Portfolio</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/team">Team</Link></Nav.Link>
                            <Nav.Link ><Link className={this.state.topMenuLink} to="/contact">Contact</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopMenu;
