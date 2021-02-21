import React, {Component,Fragment} from 'react';
import TopBar from "../../components/Frontend/TopMenu/TopBar";
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AboutPageComponent from "../../components/Frontend/AboutPageComponent/AboutPageComponent";
import Footer from "../../components/Frontend/Footer/Footer";

class AboutPage extends Component {

    render() {
        return (
            <Fragment>
               <AboutPageComponent name={this.props.title}/>
               <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;
