import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import CourseCat from "../../components/Backend/CourseCat/CourseCat";

class AdminCourseCatPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <CourseCat/>
            </Fragment>
        );
    }
}

export default AdminCourseCatPage;
