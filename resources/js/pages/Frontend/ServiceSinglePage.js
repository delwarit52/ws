import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import ServiceDetail from "../../components/Frontend/ServicePageComponent/ServiceDetail";

class ServiceSinglePage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Service Details"}/>
                <ServiceDetail/>
            </Fragment>
        );
    }
}

export default ServiceSinglePage;
