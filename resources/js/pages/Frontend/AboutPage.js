import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import Footer from "../../components/Frontend/Footer/Footer";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import AboutPageContent from "../../components/Frontend/AboutPageComponent/AboutPageContent";


class AboutPage extends Component {

    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"About Us"}/>
                <AboutPageContent/>
               <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;
