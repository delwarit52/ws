import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import TeamPageComponent from "../../components/Frontend/TeamPageComponent/TeamPageComponent";
import Footer from "../../components/Frontend/Footer/Footer";

class TeamPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner/>
                <TeamPageComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TeamPage;
