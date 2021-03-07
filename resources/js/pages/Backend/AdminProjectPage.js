import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Project from "../../components/Backend/Project/Project";

class AdminProjectPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Project/>
            </Fragment>
        );
    }
}

export default AdminProjectPage;
