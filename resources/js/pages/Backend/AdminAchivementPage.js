import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Achivement from "../../components/Backend/Achivement/Achivement";

class AdminAchivementPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Achivement/>
            </Fragment>
        );
    }
}

export default AdminAchivementPage;
