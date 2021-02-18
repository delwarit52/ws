import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import ServicepageComponent from "../../components/Frontend/ServicePageComponent/ServicepageComponent";
import Footer from "../../components/Frontend/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <ServicepageComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;
