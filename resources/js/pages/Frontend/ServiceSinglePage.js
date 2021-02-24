import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import ServiceDetail from "../../components/Frontend/ServicePageComponent/ServiceDetail";
import {useParams} from "react-router";

class ServiceSinglePage extends Component {



    render() {


        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Service Details"}/>
                <ServiceDetail id={this.props.match.params.id}/>

            </Fragment>
        );
    }
}

export default ServiceSinglePage;
