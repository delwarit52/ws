import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import ServicePageList from "./ServicePageList";

class ServicepageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Service"}/>
                <ServicePageList/>
            </Fragment>
        );
    }
}

export default ServicepageComponent;
