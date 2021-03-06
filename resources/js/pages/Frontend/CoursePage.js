import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import CoursePageComponent from "../../components/Frontend/CoursePageComponent/CoursePageComponent";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
              <TopMenu/>
                <AllPageTopBanner name={"Course"}/>
                <CoursePageComponent/>
            </Fragment>
        );
    }
}

export default CoursePage;
