import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import PortfolioPageComponent from "../../components/Frontend/PortfolioPageComponent/PortfolioPageComponent";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";


class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
               <TopMenu/>
               <AllPageTopBanner/>
               <PortfolioPageComponent/>
            </Fragment>
        );
    }
}

export default PortfolioPage;
