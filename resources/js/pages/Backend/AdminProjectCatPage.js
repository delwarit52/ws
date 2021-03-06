import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import ProjectCat from "../../components/Backend/ProjectCat/ProjectCat";

class AdminProjectCatPage extends Component {
    render() {
        return (
            <Fragment>
                 <TopMenu/>
                 <ProjectCat/>
            </Fragment>
        );
    }
}

export default AdminProjectCatPage;
