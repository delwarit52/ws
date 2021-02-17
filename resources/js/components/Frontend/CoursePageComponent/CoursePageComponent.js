import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";
import CourseList from "./CourseList";

class CoursePageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Course"}/>
                <CourseList/>
            </Fragment>
        );
    }
}

export default CoursePageComponent;
