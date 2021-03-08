import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Course from "../../components/Backend/CourseList/Course";

class AdminCoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Course/>
            </Fragment>
        );
    }
}

export default AdminCoursePage;
