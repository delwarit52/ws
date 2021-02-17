import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";

class PortfolioPageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Portfolio"}/>
            </Fragment>
        );
    }
}

export default PortfolioPageComponent;
