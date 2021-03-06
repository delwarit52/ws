import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import ProjectSummary from "../../components/Backend/ProjectSummary/ProjectSummary";

class ProjectSummaryPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <ProjectSummary/>
            </Fragment>
        );
    }
}

export default ProjectSummaryPage;
