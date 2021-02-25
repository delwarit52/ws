import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import CourseDetail from "../../components/Frontend/CoursePageComponent/courseDetail";

class CourseDetailPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner/>
                <CourseDetail id={this.props.match.params.id}/>
            </Fragment>
        );
    }
}

export default CourseDetailPage;
