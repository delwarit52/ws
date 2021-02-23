import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import Footer from "../../components/Frontend/Footer/Footer";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import ServicePageList from "../../components/Frontend/ServicePageComponent/ServicePageList";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Service"}/>
                <ServicePageList/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;
