import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Dashboard from "../../components/Backend/Dashboard/Dashboard";

class DashboardPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Dashboard/>
            </Fragment>
        );
    }
}

export default DashboardPage;
