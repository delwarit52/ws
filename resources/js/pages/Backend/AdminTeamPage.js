import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Team from "../../components/Backend/Team/Team";

class AdminTeamPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Team/>
            </Fragment>
        );
    }
}

export default AdminTeamPage;
