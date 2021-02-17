import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import AboutPageContent from "./AboutPageContent";

class AboutPageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"About Us"}/>
                <AboutPageContent/>


            </Fragment>
        );
    }
}

export default AboutPageComponent;
